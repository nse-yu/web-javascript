window.onload = () => {
    console.log("onload");

    document.querySelector("input[type='submit']").classList.toggle("form-btn");
    document.querySelectorAll("input[type='text']").forEach((node) => {node.classList.toggle("form-text");});
    document.getElementsByTagName("form")[0].addEventListener("submit",evt => evt.preventDefault());
    document.querySelector(".header__previous").addEventListener("click",() => {location = "index.html";});

    //TODO:[付箋]マップ
    const map = new Map();

    /**Ajaxリクエストのためのインスタンスを生成 */
    function createXmlHttpRequest(){
        let req = null;
        if(window.XMLHttpRequest){
            req = new XMLHttpRequest();
        }
        return req;
    }
    
    /**onClickイベントで呼び出され、テキストフォーム内の値をGETリクエストで送信する。 */
    function sendData(){
        confirm("送信しますか？");
        
        let req = createXmlHttpRequest();
        req.onreadystatechange = () => {
            if(req.readyState === 4 && req.status === 200){
                let data = document.createElement("p");
                data.append(document.createTextNode(req.responseText));
                document.querySelector(".msg-canvas").append(data);
                document.getElementById("status").innerHTML = "<b style='color:green'>completed!!</b>"
            }else{
                document.getElementById("status").innerHTML = "<b style='color:red'>waiting...</b>";
            }
        }
        
        if(req){
            req.open("GET","http://localhost:8080/submit?param="+encodeURI(document.querySelector("input[type='text']").value),true);
            req.send(null);
            document.querySelector("input[type='text']").value = "";
        }
        return false;
    }

    //TODO:対象選択が適当すぎ
    document.getElementsByTagName("form")[0].onsubmit = sendData;

    /**指定されたノードの下位ノードをすべて削除する。
     * @parent 上位ノードのクラス名
     */
    function delAllChild(parent){
        let dom = document.querySelector("."+parent);
            dom.childNodes.forEach(n => {
                dom.removeChild(n);
            })
    }

    /**マウスカーソルが要素の上に乗ったときに、その要素の詳細を別パネルに表示する。 */
    function displayDetail(evt){
        //サイズ確認
        console.log("map-size:",map.size);
        //キー一致処理
        for(key of map.keys())
        {
            if(key === evt.target.innerHTML){
                let {user_id,pass,mail,name,age} = map.get(key);
                let iter = [user_id,pass,mail,name,age].values();
                document.querySelectorAll(".slide-canvas td").forEach(td => {
                    td.innerHTML = iter.next().value;
                });
                break;
            }
        }
        //非公開 to 公開
        document.querySelector(".z-hidden").classList.replace("z-hidden","z-display");
    }
    
    /**マウスイベントの登録を行う。（対象はハードコードされている） */
    function addMouseEvent(){
        const children = document.querySelectorAll(".incremental-canvas p");
        children.forEach(child => {
            //詳細表示
            child.addEventListener("mouseover",displayDetail);
            //詳細非表示
            child.addEventListener("mouseout",() => {
                document.querySelector(".z-display").classList.replace("z-display","z-hidden");
            });
        })
    }

    /**レスポンスオブジェクトをすべてmapへ格納 */
    function setResponseMap(res){
        res.forEach(entry => {
            map.set(entry["user_id"],entry);
        });
    }

    /**サーバーに文字列を送信し、受け取ったJSONのデータをp要素に埋め込み、イベント登録する。 
     * <初期化するもの>
     * １．表示リスト
     * ２．map
     * 
    */
    function sendCharacters(evt){

        let req = createXmlHttpRequest();
        req.onreadystatechange = () => {
            //初期化系
            delAllChild("incremental-canvas");
            map.clear();

            if(req.readyState === 4 && req.status === 200){
                let res = JSON.parse(req.response);
                console.log(res);

                for(let i = 0;i < res.length;i++)
                {
                    //データ取得---p要素生成---親配下に配置---全pにマウスイベント
                    let data = document.createElement("p");
                    data.append(document.createTextNode(res[i]["user_id"]));
                    document.querySelector(".incremental-canvas").append(data);
                    addMouseEvent();
                }
                //map格納
                setResponseMap(res);
            }else if(req.status === 204){ //該当する結果が得られなかったとき
                console.log(204);
            }else{
                //FIXME:レスポンスに対する別の処理
            }
        }
        console.log(evt);

        if(req){
            let text = document.getElementsByName("search-bar")[0];
            req.open("GET","http://localhost:8080/incremental?c="+encodeURI(text.value));
            req.send(null);
        }
        return false;
    }
    document.getElementsByName("search-bar")[0].oninput = sendCharacters;
}
