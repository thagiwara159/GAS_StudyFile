/**
 * 書き込みたい値をシート上の指定した複数のセルから配列として
 * 取得して指定したセルに配列を書き込む関数
 */ 
function myfunction4(){
    // スプシを操作できる状態にする関数
    const ss = GASおじと勉強();
    // スプシのシートを名前で探して取得
    const sh = ss.getSheetByName('sheet4');
    /**
     * セルの値を .getValues で2次元配列として取得
     * セルの値を配列で取得したい場合は
     * .getValues になるので注意
     */ 
    const values = sh.getRange(1,1,3,5).getValues();
    // 取得した値を .length を使って柔軟に書き込む
    sh.getRange(9,1,values.length,values[0].length).setValues(values);
    // おまけ
    console.log(values);
}