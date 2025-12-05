function myFunction1(){
    const ss = GASおじと勉強();
    const sheet = ss.getSheetByName('Sheet1');
    sheet.getRange('A1').setValue('こんにちは！');
    sheet.getRange('B1').setValue('Hello,World');
    sheet.getRange(1,1).setValue('おはよう！');
    sheet.getRange(2,1).setValue('こんばんは！')
}