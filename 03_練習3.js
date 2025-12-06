/**
 * 書き込みたい値をシート上の指定したセルから習得して
 * 指定したセルに書き込む関数
 */
function myFunction3(){
    // スプシを操作できる状態にする関数
    const ss = GASおじと勉強();
    // スプシのシートを名前で探して取得
    const sheet =  ss.getSheetByName('Sheet3');
    /**
     * いままではエディタ上で書き込む値を決めていたが
     * 今回は直接シートから書き込みたい値を取得して
     * セルを指定して書き込む
     * .getValue()で値を取得している
     */
    const value = sheet.getRange(2,1).getValue();
    // 書き込みたいセルを指定して取得した値を書き込む
    sheet.getRange(2,3).setValue(value);
    // おまけ
    console.log(value);
}