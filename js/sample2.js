/**========JQueryの主な機能==========
 * １．セレクターを用いたDOM操作
 * ２．要素や属性の操作
 * ３．イベント処理
 * ４．アニメーション
 * ５．Ajax
 * 
 * <基本形>
 * セレクター関数.jQueryメソッド
 * 
 * セレクター関数$()：要素取得
 *  引数で指定されたセレクターに一致する要素を返す
 * 
 * １．ページ読み込み後に実行
 * window.onload = () => {}
 * $(function() {})
 * 
 * ２．取得した要素すべてに適用
 * documeng.querySelectorAll(hoge).forEach(node => {node.css)})
 * $(hoge).css
 * 
 * [豆知識： $はjQueryのエイリアス。つまり、どっちも使える]
 * 
 * ３．複数の要素を対象とする
 * document.querySelector('.hoge').hhgg; document.querySelector('#hoge2').hhgg;
 * $('.hoge,#hoge2').hhgg;
 * 
 * ４．ある要素xの直下の要素yすべてを検索対象とする
 * $('.x > .y').hoge
 * 
 * ５．ある要素xの次の要素yを取り出す
 * $('.x + .y').hoge
 * 
 * ６．ある要素xの次の要素yに一致するすべてを取り出す
 * $('.x ~ y')
 * 
 * /==============要素フィルター===============/
 * ７．ある要素xの直下の要素yの最初の要素
 * $('.x > y:first')
 * 
 * ８．ある要素xの直下の要素yの最初の要素
 * $('.x > y:last')
 * 
 * ９．ある要素xの直下の要素yのうち奇数/偶数番目
 * $('.x > y:odd')　（evenで偶数）
 * 
 * １０．ある要素xの直下の要素yのn番目
 * $('.x > y:eq(n))  (eq = equal)
 * 
 * １１．ある要素xの直下の要素yのn番目よりも前
 * $('.x > y:lt(n)  (lt = less than)
 * 
 * １２．ある要素xの直下の要素yのn番目よりも後ろ
 * $('.x > y:gt(n))  (gt = greater than)
 * 
 * １３．ある要素xのうち、あるテキストノードを含んでいる要素
 * $('.x:contains("hoge")') 
 * 
 * １４．ある要素xのうち、テキストノードを持たない要素
 * $('.x:empty')  (テキストノードをもつ場合は :parent)
 * 
 * １５．ある要素xのうち、指定した要素yを含む要素
 * $('.x:has(y)')
 * 
 * １６．ある要素xの子要素yのうちの最初/最後（xが複数のとき、それぞれのxの子要素が対象）
 * $('.x .y:first-child')  (最後の子要素は、 last-child)
 * 
 * １７．ある要素xの子要素yのうちの最初/最後（xが複数のとき、xの子要素全体が対象）
 * $('.x .y:first')  (最後の子要素は、 last)
 * 
 * １８．ある要素xの子要素yから3個ごとに取り出す（注意：indexではなく順番指定）
 * $('.x .y:nth-child(3n)')  (他にも、固定値,3n+1,2,.. やodd, evenも可能)
 * 
 * １９．ある要素xの子要素yが唯一の子要素であった場合に取り出す
 * $('.x .y:only-child')  （テキストノードは対象外）
 * 
 * /===============属性フィルター===============/
 * ２０．ある属性を持つ要素x
 * $('.x[hoge]')
 * 
 * ２１．ある属性のある値を持つ要素x
 * $('.x[hoge="piyo"]')　(!=も可能) (前方一致^= 後方一致$= 部分一致*=も可能)
 * 
 * ２２．連続フィルター
 * $('.x[hoge][piyo]')
 * 
 * ２３．見出しh1,h2,...のみ取り出す
 * $(':header')
 * 
 * ２４．指定セレクターに一致しない要素（20の逆）
 * $('.x:not([hoge])')
 * 
 * ２５．その他フィルター
 * 「:enabled」「:disabled」「:checked」「:selected」「:hidden」「:visible」「:animated」
 * 
 * /===============ページレイアウト操作（jQuery関数）=============/
 * 注意：参照系は一致した要素の最初の１つを対象とする
 * 
 * ２６．css()
 * name,value：プロパティに値を設定
 * name：プロパティ値を参照
 * （name:valueのオブジェクトを指定可能。この場合、ハイフンを使用せず、-の次の単語を大文字にする）
 * 
 * ２７．addClass()
 * name,...：既存のクラスを追加（複数可）
 * 
 * ２８．toggleClass()
 * name：適用・除外
 * 
 * ２９．attr()
 * name,value：属性と値を追加
 * name：属性値を参照
 * （オブジェクト指定も可能）
 * 
 * ３０．removeAttr()
 * name：属性を削除
 * 
 * ３１．height/width()
 * none:値の参照
 * value：値を設定
 * （その他、innerHeight/Width(),outerHeight/Width(),outerHeight/Width(true)などがある
 * 　これの違いはそれぞれ、padding,border-width,marginを加味するかどうか）
 * 
 * ３２．scrollTop/Left()
 * none：値の参照
 * value：値の設定
 * （windowに適用する場合は、$(window).scroll～とすること）
 * 
 * ３３．text/html()
 * none：テキストノードを取得
 * value：テキストノードを設定
 * （設定の場合、text()はhtmlタグが文字列として認識されてしまう）
 * （取得の場合、html()はhtmlタグが文字列として認識される）
 * （取得の場合、text()は一致する要素のテキストすべてを結合して返す）
 * 
 * ３４．val()
 * none：値の参照
 * value：値の設定
 * 
 * /================要素の挿入===============/
 * 注意：jsとは違い、挿入する要素に対して呼び出す。
 * （before,after,prepend,appendならば、従来の順番で可能）
 * jq1：挿入したいやつ.insertBefore('挿入先セレクター')
 * jq2：挿入先セレクター.before(挿入したいやつ)
 * 
 * <挿入の種類>
 * １．新規挿入
 *  挿入する要素は、$('<div>あ</div>')のように文字列で指定
 * ２．既存要素の移動
 *  挿入する要素は、$('#sample')のようにセレクターで指定
 * 
 * ３５．insertBefore()
 * element：ある要素をelementの直前に追加
 * 
 * ３６．insertAfter()
 * element：ある要素をelementの後ろに追加
 * 
 * ３７．prependTo()
 * element：ある要素をelementの子要素として最初に追加
 * 
 * ３８．appendTo()
 * element：ある要素をelementの子要素として最後尾に追加
 * 
 * ★JQueryのメソッドは、戻り値に自分自身を返すものが多く、それを利用することで
 * 　「メソッドチェーン」をすることができる。
 * $('#sample').before('<p></p>').after('<div></div>').append('<img>')......
 * 
 * ３９．wrap()
 * element：ある要素をelementで囲う（一致要素それぞれ）
 * 
 * ４０．wrapAll()
 * element：ある要素をelementで囲う（一致要素全体）
 * 
 * ４１．wrapInner()
 * element：ある要素のテキストノードをelementで囲う（一致要素それぞれ）
 * 
 * ４２．replaceWith()
 * element：ある要素をelementで置き換える（replaceAll()は呼び出し対象が逆になるだけ）
 * 
 * ４３．remove()
 * none：ある要素を削除する
 * 
 * ４４．empty()
 * none：ある要素のテキストノードを削除する
 * 
 * ４５．unwrap()
 * none：ある要素を囲んでいる要素を削除する（一致要素それぞれ）
 * 
 * /=================トラバーシング（横断）==================/
 * ★トラバーシングの目的は、ある要素を起点として、その前後・上位・下位を行き来することである。
 * 
 * ４６．prev()
 * none：ある要素の直前の要素を取得
 * 
 * ４７．end()
 * none：ある要素の起点を取得（例えば、トラバーシングがチェーンして、最初の呼び出し元に戻したいとき）
 * 
 * ４８．addBack()
 * ※実際にコードを見たほうがわかりやすい
 * 
 * 
 * /====================イベント=======================/
 * <基本形>
 * $(セレクター).イベント名(obj,function(e){ 処理 });
 * obj：{param: value}で指定し、処理部にて「e.data.param」で参照（objは省略可）
 * 
 * ４９．ready()
 * callback：ある要素のページ表示の準備が完了したとき
 * 
 * ★$(function(){})の省略形である。
 * 
 * ★イベント発生元の要素の取得には、$(this)を使用する。
 *   この「this」はあくまでjsのオブジェクトであり、それを$()でjQuery用に変換しているだけである。
 * 
 * ★functionの仮引数eは「イベントオブジェクト」と呼ばれ、イベント発生時のステータス情報を含んでいる。
 * 　例：マウスイベント時の「マウス位置」や「発生源」、「マウスがどうしたのか」など
 * 
 * =========<使用可能なイベント名>=========
 * 　１．click      　　クリック
 * 　２．dblclick   　　ダブルクリック
 * 　３．mousedown  　　ボタン押下時
 * 　４．mouseenter 　　焦点当たった　（設定要素のみ発生）
 * 　５．mouseleave 　　焦点離れた　　（設定要素のみ発生）
 * 　６．mousemove  　　焦点移動した
 * 　７．mouseout   　　焦点離れた　　（設定要素および配下で発生）
 * 　８．mouseover  　　焦点当たった　（設定要素および配下で発生）
 * 　９．mouseup    　　ボタン押下時
 * １０．keydown    　　キー押下
 * １１．keypress   　　キー押下中
 * １２．keyup      　　キー離れた
 * １３．blur       　　焦点離れた
 * １４．change     　　値変更した
 * １５．focus      　　焦点移った
 * １６．select     　　テキストボックス/エリアのテキストを選択した
 * １７．submit     　　フォーム送信した
 * １８．resize     　　ウインドウのサイズを変更した
 * １９．scroll     　　スクロールした
 * ２０．contextmenu    コンテキストメニューを表示する前
 * 
 * 
 * /================エラー処理===================/
 * <基本形>
 * $(セレクター).on(イベント名,function(){ 処理 })
 * 
 * ５０．on()
 * event,callback：イベント基本形の書き換え
 * event,child-selector,callback：ある要素のchild-selectorに一致する要素が、指定eventに該当したときにcallbackを呼び出す
 *                                子要素のイベントを親要素で管理できるというのがメリット。
 * 
 * ★１つ目と２つ目の違いは、１つ目が「一致する子要素すべてにイベントを登録」するのに対し、
 * 　２つ目が「親要素に対してイベントを登録」することにある。
 * 　これにより、イベント登録の負荷を軽減できる。
 * 
 * ５１．off()
 * event：ある要素に関する、あるeventを無効にする
 * none：ある要素に関するすべてのイベントを無効にする
 * 
 * ５２．hover()
 * mouseenter,mouseleave：ある要素に対して、mouseenterとmouseleaveのイベントコールバックを設定する
 * 
 * ５３．one()
 * event,callback：ある要素のeventに対して、一度だけcallbackを呼び出す
 * 
 * 
 * ★特定の要素に依存しないメソッド呼び出しの際には、セレクターを与えず、
 * 　「$.メソッド()」の形式で呼び出すことができる。
 */

$(function() {
    //TODO:===============addBack説明===============//

    /**流れ１：#list取得 -> 子要素取得 -> 子要素すべて背景変更
    *         -> #listに戻る(#list取得) -> #list全体に枠線  
    */
    $('#list')
        .children().css("background-color","blue")
        .end().css("border","1px solid black");
    
    /**流れ２：#list2取得 -> 子要素取得 -> 子要素すべて背景変更
    *         -> #list2も取得 -> 子要素および#list2に枠線  
    */
    $('#list2')
        .children().css("background-color","blue")
        .addBack().css("border","1px solid black");

    /**何が起きているか...
     * パソコンのキー操作に例えると、、、
     * 流れ１：#listキーを押す -> 離す -> 子要素キーを押す -> 変更 -> 離す -> #listキーを押す -> 変更
     * 流れ２：#list2キーを押す -> 離す -> 子要素キーを押す -> 変更 -> ctrl+ -> #list2キーを押す -> 変更
     * 
     * 流れ２では、子要素と#list2キーの同時選択(ctrl+)が起こっている。
     * 
     */



    //TODO:===============コンテキストメニュ================//
    $(document)
    .mousedown(function(e) {
        if(e.which === 3){
            $('.context-menu').css({display: "block",top:e.pageY,left:e.pageX});
        }
    })
    .click(function(e) {
        if(e.which === 1){
            $('.context-menu').css('display','none');
            $('.context-menu2').css('display','none');
        }
    })
    .contextmenu(function(e) {
        e.preventDefault();
    });
    /**whichプロパティ
     * １．左ボタン
     * ２．ホイールボタン(中央)
     * ３．右ボタン
     */


    //TODO:====================preventDefault=================//
    $('.validate-form')
    .keypress(function(e) { //入力を数値かハイフンのみとする
        let k = e.which;

        if(!((k >= 48 && k <= 57) || k === 45 || k === 8 || k === 0)){
            e.preventDefault();
        }
    })
    .submit(function(e) { //送信前の最終確認
        if(!confirm("送信してもよろしいですか？")) e.preventDefault();
    });



    //TODO:==================stopPropagation==================//
    $('.tb').mousedown(function(e) { //テーブル上でのクリックでは、別のコンテキストメニューを表示
        if(e.which === 3){
            $('.context-menu2').css({display:"block",top:e.pageY,left:e.pageX});
            e.stopPropagation();
        }
    });
    //table上でのイベントが、上層のdocumentイベントまで伝播（反応）してしまうのを防ぐ。




    //TODO:====================入力チェックフォーム====================//
    let msgs = [];
    let setErr = function(el,msg){
        msgs.push(`<li>${msg}</li>`); //エラーメッセージを表すli要素を挿入
        $(el)
            .addClass('err-list__field')
            .after('<span class="err-list__mark">*</span>')
    };

    $('.myform').submit(function(e) { //送信時
        //とりあえず、エラー表示系を初期化
        $('.err-list__mark').remove();
        msgs = [];

        $('.validate',this) //取得したinputたち, valid対象のinput
            .removeClass('err-list__field')
            .filter('.required') //必須入力項目
            .each(function() { 
                if($(this).val() === '')
                {
                    setErr(this,$(this).prev('label').text() + 'は必須入力です。');
                }
            })
            .end()
            .filter('.length') //入力項目長
            .each(function() {
                if($(this).val().length > $(this).data('length'))
                {
                    setErr(this,$(this).prev('label').text()+'は'+$(this).data('length')+'文字以内！！');
                }
            })
            .end()
            .filter('.range') //入力項目範囲
            .each(function() {
                let v = parseFloat($(this).val());
                if(v < $(this).data('min') || v > $(this).data('max'))
                {
                    let msg = `${$(this).prev('label').text()}は${$(this).data('min')}~${$(this).data('max')}までの範囲で入力してください。`;
                    setErr(this,msg);
                }
            })
            .end()
            .filter('.inarray') //候補値検証
            .each(function() {
                let opts = $(this).data('option').split(' '); //空白区切り文字列を配列へ
                if($.inArray($(this).val(),opts) === -1) //ある値が配列に含まれているか
                {
                    setErr(this,
                        `${$(this).prev('label').text()}は${opts.toString()}のいずれかで入力してください。`);
                }
            });

        if(msgs.length === 0){
            $('.err-list').css('display','none');
        }else{
            $('.err-list')
                .css('display','block')
                .html(msgs.join(''));
            e.preventDefault();
        }
    })
})