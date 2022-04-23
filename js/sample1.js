window.onload = () => {
    /**１．デフォルト値を論理演算子で表現 */
    //let n = prompt("名前を入力してください") || "未入力";
    //console.log(n);

    /**２．||演算子では、左辺がfalsy（falseに変換できるもの）の場合に右辺が実行される??演算子では、falsyではなくnullもしくはundefinedのときのみ、右辺を実行*/
    let promptInt = (msg) => parseInt(prompt(msg));
    //let n2 = promptInt("整数を入力してください") ?? -9999;
    //console.log(n2);

    /**３．厳密・抽象的な等価演算子*/
    console.log(1 === '1'); //false
    console.log(1 == '1'); //true

    console.log(null === undefined); //false
    console.log(null == undefined); //true
    //=> 「==」は判定が甘い

    /**４．テンプレートリテラル「``」は、出力する文字列に空白や改行も含める */

    /**５．スプレッド構文 */
    const a1 = [3,5,2];
    const a2 = [4,9,...a1];
    console.log(a2);
    console.log([..."my name is yu nagase."])

    /**６．分割代入｛配列｝ */
    const a3 = [4,5,8];
    [low,mid,high] = a3;
    console.log(low+"-"+mid+"-"+high);

    /**7．デフォルト値 */
    [a=1,b=2,c=3] = [43,undefined,null]; //要素無し or undefinedでデフォルト値（nullはそのまま）
    console.log(a+"-"+b+"-"+c);

    /**８．変数値の入れ替え */
    //普通はtmpに一時保存するが、、、
    let x = 9; let y = 88;
    [y,x] = [x,y];
    console.log(x+"-"+y);

    /**９．オフジェクトプロパティの取得とオプショナルチェーン演算子「?.」 */
    let obj = {id:111,name:"John",other:undefined};
    console.log(obj.id + "-" + obj["name"]);
    console.log(obj?.other); //プロパティがundefinedかをチェックしつつ、よければアクセスする。

    /**１０．分割代入｛オブジェクト｝ */
    //形式：{キー：キーと異なる変数名} or {キーと同じ変数名}
    ({id:ID,name:NAME} = obj); //{}から始めると、ブロックだと見なされて変になる。
    console.log(ID+"="+NAME);

    /**１１．オブジェクトのプロパティ設定 ：配列のアクセス方法と同じ（9の2行目）*/

    /**１２．プロパティの有無 */
    console.log("id" in obj); //文字列で！！

    /**１３．プロパティの削除 */
    delete obj.other;

    /**１４．配列・オブジェクトは、参照型だ！ */

    /**１５．覚えとけ！「式」は値を返すぞ！ */
    console.log(z = 33);

    /**１６．ブロックによるローカルスコープ */
    const pi = 3.14;
    {
        const pi = 33; //ブロック内の変数は、ブロック内でのみ有効
        console.log(pi); 
    }
    console.log(pi);

    /**１７．カンマ演算子「,」による式の連結 */
    console.log(x=2,y=55,z=x*y); //一応全部出力される

    /**１８．break先の指定 */
    outer:for(let i = 0;i < 10;i++){
        inner:for(let j = 0;j < 3;j++){
            if(i === 2 && j === 2) break outer; //for文にラベルを付ければ、入れ子構造のfor文でも一気に抜け出せる
        }
    }

    /**１９．for-of：配列要素への処理 */
    for(const num of [1,2,3,4]){
        console.log(num);
    }

    /**２０．for-in：オブジェクトへの処理 */
    for(const key in obj){
        console.log(key);
    }

    /**２１．関数：残余引数 */
    function avg(...num){ //...は必ず引数の最後に！！
        let sum = 0;
        for(let n of num){
            sum += n;
        }
        return sum/num.length;
    }
    console.log(avg(3,4,2,3,4,2));

    /**２２．タグ関数：テンプレート文字列の出力 */
    //第一：引数テンプレート文字列の文字列部分, 第二：引数テンプレート文字列の変数部分
    let bold = (ary,...values) => {
        let ret = ary[0];
        for(let i = 1;i < 3;i++){
            ret += `<b>${values[i-1]}</b>${ary[i]}`;
        }
        return ret;
    }
    console.log(bold`The ${"world"} is ${"mine"}`);

    /**２３．クラス */
    class User{
        static type = "USER";
        static hoge(){
            //なんか処理
        }
        constructor(id,name,old){
            this.id = id;
            this.name = name;
            this.old = old;
        }
        whatOld(){
            return this.old;
        }
        get getName(){
            return this.name;
        }
        set setName(new_name){
            this.name = new_name;
        }
    }

    /**２４．クラスみたいなオブジェクト */
    let obj2 = {
        val:73,
        process(){ //オブジェクト内のプロパティとして関数を定義する場合、このような形式でも定義可能
            console.log(`my value is ${this.val}`);
        }
    }
    obj2.process();

    /**２５．プリミティブからObject型への自動変換「ボックス化」 */

    //プリミティブに対してtoStringを呼び出せるけど、これってObject型の関数だよね。
    //なんでプリミティブから呼び出せるんだろう。。。
    //=> プリミティブが内部で対応するオブジェクトに変換されているからだよ。

    console.log(new Object(true)); //これは、明示的にオブジェクト（Boolean）に変換している
    console.log(new Object(43).valueOf()) //primitive -> Number -> primitive

    /**２６．Numberオブジェクト */
    //parseFloat()：文字列 to 浮動小数点数
    //parseInt()：文字列 to 整数
    //実際には、文字列以外のオブジェクトを受け取っても、文字列に変換してから数値に変換できる。

    console.log(Number.parseFloat("   13ゴルゴ")); //不要な文字列があっても問題なし
    console.log(Number.parseInt("111",2)); //基数を指定できる（2～36進数）//0xで始まるときのみ、16進とみなされる。

    //toString()：数値 to 文字列
    console.log((45).toString()); //()で囲わないと、関数呼び出しのドットが小数点と間違えられてエラー
    console.log(45..toString()); //()で囲う以外には、ドットをつける（45 -> 45.）
    console.log((8).toString(2)); //基数の指定

    /**２７．Stringオブジェクト */
    /**その前に、ちょいと勉強。
     * コンピュータは、内部的には数値しか扱うことができず、では、文字を表現しようとしたとき、
     * 当然として「文字と数値を対応させる」ということが必要となる。この対応を決めているのが「文字コード」である。
     * そして、文字コードにも様々な種類があるが、JavaScriptが採用しているのは「Unicode」という文字コードである。
     * 「Unicode」は、世界中での使用を目標として、扱うことができる文字が非常に多く、現在では＜14万種＞近い文字に対応可能。
     * 文字と対応づけられる数値は「符号位置」と呼ばれ、16進数での0～10FFFF（21bit）の範囲内で表現される。
     * しかし、通常のコンピュータであれば、数値は8bitで扱われるため、21bitでは使用できない。
     * そのため、符号位置をコンピュータで扱える数値に変換するために「文字符号化方式」という手法を用いる。
     * いわゆる「UTF-〇」というもので、UTF-32であれば4×8bit、UTF-16であれば2×8bitに数値を変換する。
     * これは、オクテット×8bitという意味で、あるオクテット数を8bitとして扱うということである。
     * JavaScriptではUTF-16を採用し、一般的な文字（BMP）であれば単一の符号、それ以外の珍しい文字であれば２つの符号で表現する。
     * ちなみに、２符号単位のことを「サロゲートペア」というらしい。
     * 
     * まとめ：
     *  JavaScriptの文字列は、内部的には16bitの数値配列で表現され、符号位置によって「単一の要素が１文字」に対応する場合と
     *  「２つの要素が１文字」に対応する場合がある。
     */
    //slice()：指定範囲の部分文字列を返す
    console.log("nagase".slice(0,3)); //start~end-1

    //startsWith()：指定された文字列で開始しているか <=> endsWith()
    //icludes()：指定部分文字列が含まれているか
    //indexOf()：指定部分文字列が最初に登場するindex <=> lastIndexOf()
    //replace()：文字列の置換
    //trim()：文字列の空白を除去して返す
    //padStart()：文字列の前に空白を挿入して、指定した文字列長にして返す <=> padEnd()
    //repeat()：指定回数だけ文字列を繰り返す
    //toUpperCase()：アルファベットを大文字にする <=> toLowerCase()

    //Unicodeを直接扱うことも可能
    //手法１：\u{}
    console.log("\u{6b6f}"); //符号位置を直接埋め込む
    //手法２
    //String.fromCodePoint()：符号位置を指定して文字列を返す
    //String.fromCharCode()：符号単位を指定して文字列を返す
    //String.codePointAt()：指定位置の符号位置を取得
    //String.charCodeAt()：指定位置の符号単位を取得

    /**２８．リテラル */
    //リテラルは、値として変数に代入したり、評価したりできるデータのこと。文字列や真偽値などのプリミティブが該当する。
    //プリミティブの中には「Symbol」オブジェクトというものがあるが、これにはリテラルがない。
    //Symbolは、等価演算子において、真となる値を作り出すことができないプリミティブである。（一意の値を持つということ）
    //ただ、リテラルではないため、実際にソースコード上でシンボルという実体を見ることはなく、Symbol()関数を使用して作成する。
    //※引数として渡す文字列は、あくまでシンボルを説明する文字列（キー）である。

    //これは、例えば一意のキーを持つオブジェクトに役立つ
    //つまり、オブジェクトのあるプロパティを参照できるキー（変数）が１つだけということになる。

    /**２９．シンボル */
    /**シンボルは、その特性上、どこかに保存しておかないと見失ってしまう可能性がある。（数ある変数から唯一のものを見つけるのは大変だ）
     * これを実現するのが、「グローバルシンボルレジストリ」である。（レジストリは登録簿という意味がある。）
     * 文字通り、任意の場所からシンボルを登録、取得することが可能である。アクセスには「Symbol.for()」を用いる。
     * 引数には、登録したシンボルのキーを渡し、登録済みならばそれを返す。そうでないならば、そのキーを説明として登録する。
     * ほかにも、Symbol.keyFor()で、登録した時のキーを調べることができる。
     */

    /**３０．Functionオブジェクト */
    //apply()：functionに対して、引数を渡して実行。第一引数には、関数内でthisとして使用するオブジェクト。
    //call()：同上。
    //bind()：thisや引数を固定したfunctionオブジェクトを返す。
    function add(x,y){return this+x+y};
    console.log(add.apply(1,[4,5]));
    console.log(add.call(1,4,5)); //第二引数の指定方法が違うだけ

    f1 = add.bind(2); //thisの固定
    console.log(f1.call(5,4,5)); //thisを5にしても変わらない

    /**３１．globalThisオブジェクト */
    /**JavaScriptのどこからでも利用可能なプロパティの集合。プロパティのアクセスには、ドットを使用してもよいし、
     * プロパティの直接指定でも呼び出せる。定数やundefinedもこいつのプロパティに含まれる。
     * また、webページにおいて、このオブジェクトは「Windowオブジェクト」である。 
     */

    /**３２．＜非同期処理＞ */
    /**JavaScriptはシングルスレッドで動作する言語のため、Web上のすべてのイベントループを単一の処理でこなす必要がある。
     * そのため、処理１をしている間に処理２を同時にこなしていかないと、ユーザはいろいろ待たされることになってしまう。
     * そのために、非同期処理はJavaScriptで非常に重要なテーマである。
     * 非同期処理を実現するための手段として、
     * １．コールバック関数
     * ２．Promise
     * の２つがある。
     * 
     * １．コールバック関数
     *  電話におけるコールバックのように、あとからかけなおす、つまり、都合のいいタイミングで関数があとから呼び出されるのである。
     *  その呼び出される関数が「コールバック関数」である。
     *  都合がいいタイミングとは、Webページにおける「ボタンクリックイベント」などが代表的である。
     *  これは、ButtonオブジェクトのaddEventListener()にコールバック関数を渡すことで、ボタンクリック時にコールバック関数が
     *  呼び出されるという仕組みである。（文の評価段階で、引数として渡されてはいるが、実行はされないということ。）
     * コールバック関数は、別称として「イベントハンドラ」や「イベントリスナー」ともいわれる。
     */
    let my_callback = () => {alert("コールバック！！")};
    document.querySelector(".btn").addEventListener("click",my_callback);

    let my_callback2 = () => {alert("10秒経過:callback")};
    setTimeout(my_callback2,10000);
    
    //上のsetTimeoutでは、10秒後にコールバック関数を呼び出す。それにより、他の処理をブロックしないで済む。
    //コールバック関数は、来たイベントをさっと拾って処理するのにいい。

    /**２．Promise
     *  これは、Promiseオブジェクトとして、まだ完了していない結果を表す。
     *  つまり、このオブジェクトが生成された時点では、なにもせずに値を返し、完了後にthen()メソッドによって
     *  完了後の処理を与えることができる。また、このthen()メソッドはチェーンのように処理をつなげることができ、
     *  コールバック関数において発生しうるチェーンの入れ子構造の心配がなくなる。
     *  
     *  Promiseオブジェクトは、基本的には非同期メソッドをラップするために、そのコンストラクタを用いる。
     *  例えば、waitFor関数は、setTimeout()を実行するPromiseオブジェクトを返している。
     */
    function waitFor(msec){
        return new Promise(resolve => {
            setTimeout(resolve,msec); //handler , msec
        });
    }
    p = waitFor(5000).then(() => alert("5秒経過:Promise"));
    console.log(p);
    /**上のconsole.logにおいて、Promiseオブジェクトの状態が示される。
     * 取りうる状態として、
     * １．保留中　　：pending 　　処理が成功も失敗もしてない
     * ２．履行済み　：fullfilled　処理が成功した
     * ３．棄却済み　：rejected　　処理が失敗した
     * ４．完了済み　：settled　　処理が成功または失敗した
    */

    /**Promiseを作成し、コールバックをラップする。
     * オブジェクトの引数resolve,rejectは、それぞれ成功、失敗時に呼び出すべき関数として実装する。
     * どちらに渡した引数も、後にthenやcatchで引数として受け取ることができる。
     * ※thenが引数を受け取ることを「Promiseが解決される」という。
     */
    function waitForAMoment(msec){
        return new Promise((resolve,reject) => {
            if(msec < 2000)
            {
                setTimeout(() => resolve(msec),msec);
            }
            else{
                setTimeout(() => reject(new Error("timeout")),2000);
            }
        })
    }
    //2秒以下なら、その時間分待ってから成功。2秒より長ければ、2秒後にエラーはいて失敗。
    waitForAMoment(1000).then(value => console.log(`成功： ${value}`))
                        .catch(error => console.log(`失敗： ${error}`));
    
    //コンストラクタから生成する以外にも、Promise.resolve()やPromise.reject()を使うことにより、Promiseオブジェクトを生成できる。
    console.log(Promise.resolve(42)); //Promise {<fulfilled>: 42}
    console.log(Promise.reject(new Error("エラー"))); //{<rejected>: Error: エラー at window ....}

    //どちらもPromiseを返していることがわかる。
    //ただし、コンストラクタから生成する場合には、状態にpendingを経由するが、この場合には直接settledになる。

    //静的メソッドからの生成は、Promiseではないオブジェクト（さっきの例での42やエラー）をPromiseとして出力するために使用する。

    //Promiseの完了時（resolveやrejectのあと）には、then,catch,finallyで後処理をすることができる。
    //ちなみにthen()には、成功時のコールバックだけではなく、失敗時のコールバックを渡すことができる。
    //どちらのコールバックにしても、戻り値はPromiseに変換され、出力される。
    Promise.resolve(42).then(value => {console.log(value)} , error => error);
    Promise.reject(new Error("エラー")).then(value => {console.log(value)} , error => error);

    Promise.reject(new Error("err")).catch(err => console.log(err));

    Promise.resolve(22).finally(() => console.log("完了"));

    //これら３つの後処理は、単独ではなくチェーンすることが最大の効果を発揮する。
    Promise.resolve(100)
        .then(() => console.log("後処理１"))
        .then(() => {console.log("後処理２"); return Promise.reject()})
        .then(() => console.log("後処理３"))
        .catch(() => console.log("エラー処理"))
        .finally(() => console.log("終了処理"));
    /**上の例で確認しておくべきなのは、
     * １．thenでは第二引数で失敗時の処理を記述しない
     * ２．catchで処理２での失敗を捕捉する
     * これにより、処理１～３でのエラーを、catchで捕捉することが可能
    */

    /**<複数の非同期処理の結果> */
    /**非同期処理を複数同時に実行した場合、その結果を集約するのは大変である。
     * （配列に各処理からの結果を格納していくなど）
     * これを実現するために、Promiseの静的メソッドを使用する。
     * Promise.all()：iterableなPromiseを受け取り、全部成功なら成功Promise,どれか失敗なら失敗Promiseを返す
     * Promise.allSettled()：iterableなPromiseを受け取り、全部完了したら成功Promiseを返す
     * Promise.race()：iterableなPromiseを受け取り、１つでも完了したらそのPromiseを返す。結果はその１つに依存する。
     */
    //指定秒数後に成功Promiseを返す
    function lagResolve(msec){
        return new Promise(resolve => {
            setTimeout(() => resolve(`成功：${msec}`),msec);
        });
    }
    Promise.all([lagResolve(1000),lagResolve(2000),lagResolve(3000)]).then(res => console.log(res));

    /**ここまでやっといてなんだが、複雑な非同期処理をしようとすると、この方法だと見た目がカオスになる可能性がある。
     * ＝＞修飾子「async」と「await」を使って見やすくしよう
     */

    //asyncは、戻り値をPromiseに変換する
    async function answer(){
        return 42;
    }
    console.log(answer());
    /**
     * 成功Promise：return文
     * 失敗Promise：throw文
     */

    //与えられたミリ秒待ってから成功Promiseを返す（値はミリ秒to秒）
    function wait(msec,turn){
        return new Promise(resolve => {
            setTimeout(() => resolve(turn),msec);
        });
    }
    //waitから解決ずみPromiseが返るまでawaitで待つ。
    async function counter(){
        i = 1;
        while(1==1){
            const sec = await wait(1000,i); //本来ならthenによるチェーンで待つ必要があったのが、awaitにより同期処理のような記述方法で非同期処理を実装できる。
            const c = document.querySelector(".counter");
            c.textContent = sec + "秒";
            i++;
        }
    }
    counter();

    /**<非同期イテレータ> */
    /**大量かつ連続してデータを処理する場合、非同期でデータを処理する必要があり、連続的に処理するには、
     * 基本的に非同期イテレータを使用する。これは、イテレータのようにnext()メソッドを持ち、Promiseを返す。
     */

    /**３３．メタプログラミング */
    /**メタプログラミングの主要な目的の１つとして、「既存の機能を拡張する」というものがある。
     * １．Proxy
     *  ：処理を行うオブジェクトの中継と、その処理の前後に他の処理を追加することで、オブジェクトの機能を拡張。
     *  　必要なのは、プロキシ対象のオブジェクトと追加処理（ハンドラオブジェクト）である。
     *    ※追加処理が必要ないときでも、空のハンドラオブジェクト{}を渡す必要がある。
     * 
     * 追加処理は「トラップ」と呼ばれ、それぞれ決められた処理の中継に割り込む。
     * １．get()　プロパティ値の取得に割り込む
     * ２．set()　プロパティ値の設定に割り込む
     * ３．has()　in演算子を使用したプロパティ存在確認に割り込む
     * ４．ownKeys()　プロパティ一覧取得に割り込む
     * ５．apply()　関数やメソッドの呼び出しに割り込む
     * ６．construct()　コンストラクタに割り込む
     */
    array = [1.2,2.6,3.8];
    arrayProxy = new Proxy(array,{
        get(target,prop){
            return Math.round(target[prop]);
        },
        set(target,prop,value){
            if(!Number.isInteger(value)){
                throw new Error("not integer");
            }
            target[prop] = value;
        },
        has(target,prop){
            return prop < 2;
        },
        ownKeys(target){
            return ["0","1","length"];
        }
    }); 
    console.log("proxy:",arrayProxy[1]);
    //arrayProxy[2] = 9.22; //コンソールにエラー
    console.log(Object.getOwnPropertyNames(arrayProxy));

    
    //重要なのは、proxyで変更したプロパティは、元のオブジェクトにも反映されるということだ。
    arrayProxy[1] = 22;
    console.log(arrayProxy);
    console.log(array);

    //他はめんどいので、やらん！！

    /**３４．Web */
    /**globalThisは、ブラウザにおいてwindowと等しく、
     * [globalThis === window]
     * が成り立つ。このglobalThis（またはwindow）オブジェクトは、documentプロパティの他にも、console,location,navigator
     * など、F12キーで確認できる情報が多く含まれている。
     * 
     * <console>
     * log,info,warn,error
     * <location>
     * href,protocol,hostname,port,pathname,search,hash
     * <naivgator>
     * appName,appVersion,language,connection,onLine
     * 
     * ブラウザに表示されているHTMLの内容をJavaScriptから操作するには、実行時にHTMLがメモリ上でどのように保持されているか
     * という情報が必要であり、メモリ上の保持方法は、環境に依存してしまう。
     * この情報を取得するために「DOM（document object model）」が存在する。
     * HTMLやXMLは、文書として木構造を持ち、それによってDOMも木構造を持つようになっている。
     * 各ノードの親にあたる「parentNode」とその子にあたる「childNode」プロパティがある。
     * 
     * DOMの木構造を走査するためには、ルートノードとして文書のルートノード「document」が必要である。
     * 
     * <document>
     * ・HTMLDocument型のインスタンス
     * (DOCTYPE宣言)
     * ・DocumentType型のインスタンス
     * (htmlタグ)
     * ・HTMLHtmlElement型のインスタンス
     * (bodyタグ)
     * ・HTMLBodyElement型のインスタンス
     * (それ以下)
     * ・HTMLElement型のインスタンス
     * 
     * <Nodeオブジェクトのプロパティ>
     * getRootNode()：ルートノード取得
     * parentNode：親ノード
     * parentElement：親要素
     * childNodes：子ノードの一覧
     * firstChild：最初の子ノード
     * lastChild：最後の子ノード
     * previousSibiling：前の兄弟ノード
     * nextSibling：次の兄弟ノード
     * 
     * <Elementオブジェクトのプロパティ>
     * children：子要素の一覧
     * firstElementChild：最初の子要素
     * lastElementChild：最後の子要素
     * previousElementSibling：前の兄弟要素
     * nextElementSibling：次の兄弟要素
     * 
     * ※プロパティから取得できる値のうち、childNodesとNodeListとHTMLCollectionオブジェクトは、「なんちゃって配列」なので、
     * 　必要に応じて「Array.from()」で配列に変換する必要がある。
     * 
     * <要素を検索する>
     * getElementsByTagName()：指定されたタグ名の要素をすべて取得
     * getElementById()：指定されたIDの要素を取得
     * getElementsByClassName()：指定されたクラス名の要素をすべて取得
     * querySelector()：指定された条件に合う要素を取得
     * querySelectorAll()：指定された条件に合う要素をすべて取得
     * 
     * <要素の情報を調べる>
     * nodeType：ノードのタイプ（ELEMENT_NODE,TEXT_NODE,COMMENT_NODE,DOCUMENT_NODE,DOCUMENT_TYPE_NODE）を調べる。
     * nodeName：ELEMENT_NODE（HTML要素）のタグ名を調べる。
     * tagName ：〃
     * 
     * <要素の属性を操作する> <要素 属性名=値>
     * classList：複数のクラスを「なんちゃって配列」で取得
     * attributes：ある要素のすべての属性を取得
     * getAttributeNames()：attributesの属性名のみ取得
     * hasAttribute(属性名)：属性の存在を確認
     * getAttribute(属性名)：属性を取得する
     * setAttribute(属性名,値)：属性を設定する
     * removeAttribute(属性名)：属性を削除する
     * 
     * <要素のコンテンツを操作する>
     * textContent：ノード内のテキストコンテンツ
     * innerText：ノード内の表示されているテキストコンテンツ
     * 
     * <要素を削除する>
     * removeChild(node)：指定した子ノードを削除
     * 
     * <要素を追加する>
     * createElement()：指定したタグ名でHTML要素を作成
     * createTextNode()：指定した内容のテキストノードを作成
     * 
     * appendChild()：子ノードリストの最後にノードを追加
     * insertBefore()：基準ノードと新ノードを引数にとり、子ノードリストの基準ノードの前に追加
     * prepend()：子ノードリストの最初に任意個数のノードを追加
     * append()：子ノードリストの最後に任意個数のノードを追加
     * 
     * ※関連する複数のノードを一気に追加する場合には、DocumentFragmentオブジェクトを利用すると、
     * 　パフォーマンスの劣化を防げる。
     */
    let fragment = new DocumentFragment();
    fragment.appendChild(document.createElement("hr"));
    fragment.appendChild(document.createElement("hr"));
    fragment.appendChild(document.createElement("hr"));
    fragment.appendChild(document.createElement("hr"));
    document.body.appendChild(fragment);
    
    /**
     * <要素を入れ替える>
     * replaceChild()：第二引数の子ノードを第一引数の新規ノードで置き換える
     * 
     * <おもしろい機能>
     * contentEditable：画面上のHTMLの内容を編集できるようにする
     * designMode：〃（documentに対して適用）
     * execCommand()：編集可能な場合、指定の動作を実行（ex. cut,undo）
     */
    document.querySelector(".main").contentEditable = true; 

    /**<<イベントを処理する>> 
     * ある要素でイベントを処理するには、イベント発生源となる要素のaddEventListener()を使用することが必要。
     * これは、NodeオブジェクトがEventTargetオブジェクトを継承しており、このEventTargetオブジェクトで定義されている
     * addEventListener()を使用している。
     * １．addEventListener()　　　イベントの追加
     * ２．removeEventListener()　イベントの削除
     * ３．dispatchEvent()　　　　イベントを直接発火
     * 
     * １，２はどちらも、第一引数にイベント名、第二引数に対象となるイベントを渡す。
     * ただし、removeするときには、１で設定したイベントを渡す必要があるので、無名関数では定義しないほうがいい。
     * ３にはEventオブジェクトを渡す。例えば、dispatchEvent(new Event("click"))を実行すれば、クリックイベントが発生する。
     * 
     * <キーボードイベント>
     *  keydown：キーが押されたとき
     *  keyup：キーが解放されたとき
     * [受け取れるプロパティ]
     * ・key：キーの値
     * ・code：キーを表す識別子
     * ・altKey：altが押されたか
     * ・ctrlKey：ctrlが押されたか
     * ・metaKey：metaが押されたか
     * ・shiftKey：shiftが押されたか
    */
   let keyLogger = e => {
       console.log(`
       type:${e.type}
       type:${e.code}
       type:${e.key}
       type:${e.shiftKey}
       `)
   }
   document.addEventListener("keydown",keyLogger);

   /**
    * <マウスイベント>
    *   click：マウスボタンクリック時
    *   dblclick：ダブルクリック時
    *   mousedown：マウスボタンが押されたとき
    *   mouseup：マウスボタン解放時
    *   mousemove：マウスカーソルが動いたとき
    * [受け取れるプロパティ]
    * ・clientX：イベント対象要素からのカーソルx座標
    * ・clientY：イベント対象要素からのカーソルy座標
    * ・altKey：〃
    * ・ctrlKey：〃
    * ・metaKey：〃
    * ・shiftKey：〃
    * 
    * /========イベント裏話=========/
    * ある親子関係の要素１（親）と要素２（子）があるとする。親には、クリックイベントが設定され、
    * 親がクリックされたときにコンソールにログを出力する。
    * そして、試しに子要素をクリックしてみると、なんとイベントが発生し、親のクリックで出力されるはずの
    * ログが出力された。
    * これはつまり、子要素のイベントを、親要素のイベントリスナが捕捉したということになる。
    * これは事実であり、html構造上の親子関係において適用される仕組みである。
    * 注意すべきは、この仕組みは表示上の包含関係とは一切関係ないということ。
    * 
    * では、親子どちらにもイベントが設定されていた場合、どっちが先に実行されるのか？
    * これは、「イベントハンドラの設定による」というのが答えだ。
    * 実は、イベントハンドラの探索には、親ー＞子と子ー＞親という両方向からの探索が存在する。
    * 前者を「キャプチャリング」、後者を「バブリング」という。
    * デフォルトでは、バブリングによる探索、つまり発生源のイベントを初めに実行し、あとで親のイベントが
    * 発生するようになっている。
    * どちらの探索フェーズで実行するかは、addEventListenerの第三引数で設定することができる。
    * 例えば、第三引数をtrueにすると、キャプチャリングが設定され、親要素のイベントが優先されるようになる。
    * 
    * <イベントの伝播を止める>
    * あるイベントが失敗し、それが他のイベントに影響しないようにするために、イベントの発生を止める
    * 方法があり、「stopPropagation()」により、失敗イベントから次のイベントへの伝播を阻止できる。
    * 
    * <デフォルトのイベントを止める>
    * デフォルトのイベントというのは、例えば、チェックボックスにチェックが入ったり、aタグのリンクを踏むと、
    * リンク先に行ったりするなどのことである。
    * このイベントは、キャプチャリングやバブリングとは独立した実行がなされるため、stopPropagation()で止めることができない。
    * これを止めるには、Eventオブジェクトの「preventDefault()」メソッドを使用する。
    */
   document.querySelector(".sub").addEventListener("click",() => {
       console.log("sub parent event fire!");
   })

   let as = document.getElementsByTagName("a");
   for(let i = 0;i < as.length;i++){
       if(!(as[i].classList.contains("except"))) as[i].addEventListener("click",evt => evt.preventDefault());
   }

   /**３５．マルチメディアタグ */
   /**<imgタグ>：コンストラクタがある
    * imgタグでは、src属性が設定されたときに、リソースのロードが始まるので、
    * 巨大なリソースを表示する際、タグに直接属性を指定するよりも、jsで下記のようにプリロードする
    * ほうが、ユーザ体験がよくなる。
    * 現在では、<link rel="preload">が使用できるため、この方法は用いることはないだろう。
    */
   let img = new Image(1000,200);
   img.src = "src/img/koji.png";
   document.body.append(img);
   //ロード完了時にサイズ確認
   img.addEventListener("load",evt => {
       console.log(img.width,img.height);
       console.log(img.naturalWidth,img.naturalHeight); //実際のサイズ
   })

   /**<videoタグ>
    * play()：動画の再生
    * pause()：動画の一時停止
    * currentTime：現在の再生位置
    * paused：一時停止中かどうか
    * volume：現在の音量
    * 
    * (イベント)
    * play,pause,ended
    */
   video = document.getElementsByTagName("video")[0];
   btn = document.querySelector(".video__btn");
   
   btn.addEventListener("click",() => {
       if(video.paused){
           video.play();
       }else{
           video.pause();
       }
   })
   video.style.transition = "10.1s";
   video.style.transform = "rotate(90deg)";

   /**<audioタグ>：コンストラクタがある
    * コンストラクタの有無以外はvideoタグと同じ
    */

   /**３６．センサ */
   /**JavaScriptがモバイルデバイス上で、様々なセンサ類にアクセスするためのAPIは増加している。
    * 具体的にアクセス可能なセンサには、
    * 磁気センサ
    * 方位センサ
    * 照度センサ
    * 加速度センサ
    * 角加速度センサ
    * 近接センサ
    * 
    * 他にも、バイブレーション機能などのスマホ特有の機能にもアクセス可能。
    */
   
   
   /**お絵描き */
   document.styleSheets[0].insertRule(`
    .dot{
        position:absolute;
        width:5px;
        height:5px;
        border-radius:5px;
        }
   `);

   function getRandomColor(){
       let color = {r:0,g:0,b:0};
       for(let c in color){
           color[c] = Math.floor(Math.random() * 256); //256以下の実数を、正の整数に丸めて格納
       }
       let a = Math.random() * 1.0;
       return `rgba(${color.r},${color.g},${color.b},${a})`;
   }

   //ボタン押下
   let clicking = document.body.addEventListener("mousedown",() => clicking = true);
   //ボタン解放
   document.body.addEventListener("mouseup",() => clicking = false);

   document.body.addEventListener("mousemove",evt => {
       console.log("move");
       //どちらかでも満たさないなら、やめる
       if(!(clicking && evt.shiftKey)) return;
       
       //マウス動いたときに、ボタン押下中かつShiftキー押されていた場合の処理
       const dot = document.createElement("div");
       dot.className = "dot";
       dot.style.left = `${evt.clientX}px`; //イベント発生地点の座標をabsolute xで取得
       dot.style.top = `${evt.clientY}px`; //イベント発生地点の座標をabsolute yで取得
       dot.style.backgroundColor = getRandomColor();
       document.body.append(dot); //イベント発生地点の座標に、absoluteでdotクラスを持つdiv要素を追加する
   });

   /**３７．配列 */
   //生成方法１：Array.of()
   ary1 = Array.of(1,true,"4",5);
   
   //生成方法２：Array.from()
   ary2 = Array.from(ary1);
   console.log("ary1 === ary2:",ary1 === ary2);

   //生成方法2.1：Array.from(ary,func)
   ary3 = Array.from([5,4,3,2],n => n**2);
   console.log(ary3);
   
   //生成方法2.2：Array.from(ary,func,this)
   ary4 = Array.from([5,4,3,2],function(n){ return this + n},"No.");
   
   /**１．isArray()：引数のオブジェクトが配列化を調べる
    * ２．includes()：指定の要素が入っているか。第二引数で開始インデックスを指定可能
    * ３．some()：引数の関数式を評価し、or評価で真偽値を返す
    * ４．every()：some()のand評価版
    * ５．findIndex()：指定した条件式に合う要素の最も小さいindexを返す
    * ６．find()：指定した条件式に合う最初の要素を返す
    * ７．filter()：指定した条件式に合う要素をすべて返す。
    * ８．reverse()：順序反転
    * ９．sort()：辞書番号による昇順ソート
    * １０．forEach()：要素を順番に処理するコールバックを指定。第一：各要素、第二：index、第三：全部
    * １１．entries()：for-ofで使用すると、第一：index、第二：各要素を受け取れる。
    * １２．key()：各要素のindexだけを受け取る。values()は各要素だけを受け取る
    * １３．fill()：第一：新しい値、第二：開始index、第三：終了indexで複数の要素を新値更新
    * １４．splice()：index範囲指定のpopといった感じ。戻り値がpopしたもの
    * １５．map()：引数の関数を各要素に適用した新要素をもつ配列を返す
    * １６．slice()：pythonのスライスと同じ
    * １７．flat()：ネスト構造の配列を平坦化して返す
    * １８．flatMap()：map()してからflat()で返す
    * １９．reduce()：第一：コールバック、第二：初期値（コールバックの引数は、第一：reduceの第二or前回コールバックの結果、第二：各要素、第三：index、第四：全部）
    * ２０．concat()：配列を結合して返す
    * ２１．join()：引数で指定したセパレータで配列を文字列へ結合
    * ２２．pop()：配列の最後の要素を返して削除
    * ２３．push()：最後尾に要素を追加（複数指定可能）
    * ２４．shift()：配列の最初の要素を返して削除
    */
   //sumの初期値を第二：0とし、各要素をcallback第二：nで受け取り、sumの値を更新
   //第二：0を省略した場合、配列の１番目が初期値となる。（この場合、callbackの呼び出しは配列の２つ目の要素からになる）
   s = [1,2,3,4,5].reduce((sum,n) => sum += n,0);
   console.log("reduce:",s);

   /**３８．Mapオブジェクト */
   /**任意のオブジェクトをキーとして、値を保持することができる。
    * 通常のオブジェクトであれば、キーは文字列かシンボルのみ。
    * 
    * 生成方法１：set()
    * 生成方法２：コンストラクタ
    * 
    * １．size：エントリ数の確認
    * ２．set()：エントリの追加（チェーン可能）。第一：キー、第二：値
    * ３．get()：指定キーから値を取得
    * ４．has()：指定キーが存在するかどうか
    * ５．delete()：エントリを指定キーで削除。成功true、失敗false返す
    * ６．clear()：全エントリ削除
    * ７．forEach()：コールバックの引数第一：value、第二：key（for-ofは逆に渡される）
    */
   //arg:[ [key1,val1],[key2,val2],... ]
   map = new Map([[1,"tom"],[2,"john"]]);
   //子要素の要素数が3以上の場合：3以上は無視
   //子要素の要素数が1の場合：keyだけ登録、valはundefined
   //子要素の要素数が0の場合：keyもvalもundefined


   /**３９．WeakMap
    * 一般的に行う「(強)参照」に対して、WeakMapが行う参照は「弱参照」である。
    * これは、メモリ掃除のための「ガベージコレクション」に関することであるが、通常、ガベージコレクションの
    * 対象となるリソースは、「参照カウント」方式によって判断される。
    * これは、参照中のリソースには、そのカウントをインクリメントし、逆に参照が外れた場合、デクリメントするというものである。
    * このカウントが0になったとき、そのリソースは使われていないと判断され、領域が解放される。
    * 
    * そして、この方式において弱参照というのは、「参照がカウントされない」という特徴がある。
    * つまり、弱参照をしてもカウントが増加せず、ガベージコレクションの対象となり続けるということだ。（通常の参照を行えば対象外になる）
    * 
    * WeakMapは、通常のMapのようにキーと値を保持するが、キーには参照値（オブジェクト）を用いる必要がある。
    * すると、WeakMapオブジェクトは、そのキーを弱参照する。
    * したがって、そのキーと値がガベージコレクトされ、突然使用不可になることもある。
    * これは不便なようでもあるが、リソースの開放を自分で行う必要のあるMapとは違い、メモリリークの危険性を軽減できる。
    * 
    * ※関数の内容はMapと同じなので、説明省略
    * １．get
    * ２．set
    * ３．has
    * ４．delete
    */

   /**４０．JSON（JavaScript Object Notation） 
    * JavaScriptのオブジェクトリテラルを参考として作られたテキスト形式のデータ変換用フォーマット。
    * 
    * <オブジェクトリテラルとの違い>
    * １．undefined存在しない。有効値[true,false,null,数値,文字列,配列,オブジェクト]
    * ２．「.5」のような整数部の省略が不可能
    * ３．文字列には、ダブルクォーテーションのみ
    * ４．保持できるのは、キーと値のみ
    * ５．キーは文字列
    * ６．配列、オブジェクト末尾の要素の後ろには「,」を置けない
    * 
    * <用語説明>
    * シリアライズ　：オブジェクトを復元可能な形で文字列やバイト列に変換すること
    * デシリアライズ：逆
    * 
    * １．JSON.parse()：JSON to オブジェクト（第二：reviver関数、つまりコールバックを渡すことで、キーと値を受け取り、それを変換する目的で使用）
    * ２．JSON.strinify()：オブジェクト to JSON（オブジェクトのプロパティに「toJSON()」が定義されていれば、その戻り値がJSONになる。）
    * 　　                 第二：コールバック（変換用）を指定し、JSON変換前にオブジェクト内容を変換できる。
    * 　　                 第二：配列を指定し、[key1,key2,..]で変換対象のプロパティを絞ることができる。
    * 　　                 第三：インデント数（よくわからん、どうせ使わん）
    * 
    * <ディープコピー方法>
    * 新obj = JSON.parse(JSON.stringify(旧obj))
   */




}