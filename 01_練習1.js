// 指定いたセルに値を書き込む関数
function myFunction1(){
    // スプシを操作できる状態にする関数
    const ss = GASおじと勉強();
    // スプシのシートを名前で探して取得
    const sheet = ss.getSheetByName('Sheet1');
    // .getRange()でセルの場所指定('A1指定方式')、.setValue()で値を書き込む
    sheet.getRange('A1').setValue('こんにちは！');
    sheet.getRange('B1').setValue('Hello,World');
    // (1,1)や(2,1)はセルの場所を行、列の数字で指定(r1,c1指定方式)して書き込む
    sheet.getRange(1,1).setValue('おはよう！');
    sheet.getRange(2,1).setValue('こんばんは！')
}