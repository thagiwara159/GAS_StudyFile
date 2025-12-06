/**
 * 配列として取得した値を、別のスプシを取得して
 * 書き込む関数
 */
function myfunction5(){
    // スプシを操作できる状態にする関数
    const ss = GASおじと勉強();
    // スプシのシートを名前で探して取得
    const sh5 = ss.getSheetByName('Sheet5');
    // セルの値を配列として取得
    const values = sh5.getRange('A1:E3').getValues();
    /**
     * 上記とは違うスプシに値を書き込む
     * スプシのIDでスプシを取得（この書き方はスプシのIDを知っているのが前提）
     * .openById()で操作できる状態(スプシを開くではない)にする
     */
    const ss2 = SpreadsheetApp.openById('1vkf5Psw_sxGzfmHCOgUbJN24zeFcmT7qibqYItF3aY4');
    // 書き込むシートを指定
    const sh6 = ss2.getSheetByName('Sheet1');
    // r1,c1方式で値を書き込む
    sh6.getRange(1,1,values.length,values[0].length).setValues(values);

}