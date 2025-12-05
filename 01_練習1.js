function myFunction(){
    const ss = GASおじと勉強();
    const sheet = ss.getSheetByName('シート1');
    sheet.getRange('A1').setValue('こんにちは！');
}