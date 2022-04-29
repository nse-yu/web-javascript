/**
 * １．load()
 * url：リソースを提供するurlを指定し、ある要素に対してテキストノードとして読み込む。
 * url,obj：オブジェクトデータを付与
 * 
 * ２．get()
 * url：送信するurlを指定し、getリクエストを送信
 * url,obj：オブジェクトデータを付与
 * url,obj,datatype：送信データタイプを指定
 * 
 * ★getJSON()ならば、レスポンスデータをjson形式に変換して返す
 * 
 * ３．ajax()
 * url：送信するurlを指定し、デフォルトでGETリクエストを送信
 * settings：リクエストに必要な情報をオブジェクトで指定し、送信
 * 
 * ★結果として返される「jqXHR（jquery XMLHttpRequest）」は、XMLHttpRequestの強化版。
 * 　これをローカルイベントのdone(),fail(),always()などでチェーンする。
 * 
 * 
 * <settings指定可能な値>
 * 　１．accepts        希望レスポンスの種類
 * 　２．async          非同期かどうか
 * 　３．beforeSend     送信前にヘッダー情報などの変更が可能
 * 　４．cache          ページキャッシュをするかどうか（dataType=script|jsonpならfalse）
 * 　５．contents       コンテンツタイプ毎にレスポンスの処理方法を決定する
 * 　６．contentType    デフォルトでは、application/x-www-form-urlencoded; charset=UTF-8
 * 　７．context        DOMを指定することで、コールバック内でのthisを固定
 * 　８．converters     デフォルトでは、{"* text": window.String, "text html": true, "text json": jQuery.parseJSON, "text xml": jQuery.parseXML})
 * 　９．crossDomain    クロスドメインリクエストかどうか
 * １０．data           送信データ（オブジェクト or String）
 * １１．dataFilter     レスポンスデータをコールバックでフィルタして返す（String data,String type => Object）
 * １２．dataType       希望レスポンスのデータ型。文字列で指定。（デフォルトでは、JQueryがレスポンスから推測）
 * １４．global         このリクエストがdocumentのAjaxハンドラをトリガーするかどうか（デフォルトではtrue）
 * １５．headers        HTTPリクエストのヘッダー
 * １６．ifModified     レスポンスの状態が前回と異なる場合のみ成功とするかどうか（デフォルトではfalse）
 * １７．isLocal        ???
 * １８．jsonp          ???
 * １９．jsonpCallback  JSONPのコールバック関数名を指定。（通常はJQueryの自動生成に任せ、この値は指定しないほうがいい）
 * ２０．mimeType       XHRのMIME Typeを上書き
 * ２１．password       HTTPアクセスの認証が必要な際のパスワード
 * ２２．processData    dataオプションがcontentTypeに依存したデータか（デフォルトではtrue）
 * ２３．scriptCharset  script通信で使う
 * ２４．statusCode     ステータスコードとそれに伴うコールバック関数のペア
 * ２５．timeout        リクエストのタイムアウトをミリ秒で指定
 * ２６．traditional    パラメータのシリアル化をするかどうか
 * ２７．type           リクエストのタイプを指定（デフォルトではGET）
 * ２８．url            リクエストを送信するURL
 * ２９．username       HTTPアクセスの認証が必要な際のユーザ名
 * ３０．xhr            XMLHttpRequest生成時のコールバック
 * ３１．chrFields      XHR（XMLHttpRequest）に設定するフィールド名/値のペア
 * 
 * ★何らかの要素に対して呼び出すものではないため、セレクターの指定は省略可能。
 * 
 * ３．done()
 * callback：getやpostに対して、通信の成功時に呼び出されるコールバックを指定
 * 
 * ★doneの引数であるコールバック関数の仮引数として、get()の結果を渡すことができる。
 * 
 * ★doneはgetやpostに対して、メソッドチェーンで呼び出す。
 * 
 * ★成功時：done(), 失敗時：fail(), 完了時：always()
 * 
 * 
 * 
 * <Ajaxイベント>（トリガー順）
 * 　１．ajaxStart()        開始時（global）
 * 　３．ajaxSend()         実行前（global）
 * 　４．done()             成功時（local）
 * 　５．ajaxSuccess()      成功時（global）
 * 　６．fail()             失敗時（local）
 * 　７．ajaxError()        失敗時（global）
 * 　８．always()           完了時（local）
 * 　９．ajaxComplete()     完了時（global）
 * １０．ajaxStop()         Ajaxリクエストがないとき（global）
 * 
 * <イベントで受取可能な引数>
 * １．e        イベントオブジェクト
 * ２．xhr      jqXHRオブジェクト（JQuery機能を追加したXMLHttpRequest）
 * ３．opts     オプション情報
 * ４．err      エラー情報
 * 
 * ★すべてのコールバックでのthis参照は、settingsのcontextオプションであるが、未指定ならば
 * 　thisはAjaxのsettingsへの参照となる。
 * 
 * ※globalとlocalの違いは、
 * 　「globalはdocumentに対して登録する」のに対し、
 * 　「localは個々のリクエストに対して登録する」ところである。
 */

$(function() {
    let tabs = $('.container');
    const link = 'http://localhost:8080/';

    //==========================タブ処理===================================//
    //丸角
    $('> ul li:first',tabs).css('border-radius','5px 0 0 5px');
    $('> ul li:last',tabs).css('border-radius','0 5px 5px 0');
    //デフォルト選択中
    $('> ul li:first a',tabs).addClass('tab--selected');

    //Ajax: load()
    $('.textbox').load(link+$('> ul li:first a',tabs).attr('href'));
    
    //タブクリック時の共通処理
    $('> ul li a',tabs).click(function(e){
        if(!($(this).hasClass('tab--selected')))
        {
            //現在選択中解除
            $('> ul li .tab--selected',tabs).removeClass('tab--selected');
            //新選択中
            $(this).addClass('tab--selected');
            //Ajax: load()
            $('.textbox').load(link+$(this).attr('href'));
        }
        e.preventDefault();
    })

    //==========================その他処理============================//
    $('.btn').click(function() {
        $.get(link+'sample')
         .done(function(res){
             $('.canvas').text(res);
         })
    })

    $('.btn2').click(function(){
        $.get(link+'sample2',{a:'A',b:'B'})
        .done(function(res){
            $('.canvas').text(res);
        })
    })
})