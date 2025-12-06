// 値を配列化して .length を使って書き込む関数
function myFunction2(){
    // スプシを操作できる状態にする関数
    const ss = GASおじと勉強();
    // スプシのシートを名前で探して取得
    const sheet = ss.getSheetByName('Sheet2');
    // 変数valuesに2次元配列の形で格納
    const values = [
    ['あ','い','う','え','お'],
    ['か','き','く','け','こ'],
    ['さ','し','す','せ','そ'],
    ];
    /**
     * values.length, values[0].length で2次元配列の
     * 要素を書き込むようにすれば要素数を気にせずに
     * 柔軟に書き込める
     */
    sheet.getRange(1, 1, values.length, values[0].length).setValues(values);
    sheet.getRange(5, 1, values.length, values[0].length).setValues(values);
    sheet.getRange(9, 2, values.length, values[0].length).setValues(values);
    sheet.getRange(13, 2, values.length, values[0].length).setValues(values);
}