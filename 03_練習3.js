function myFunction3(){
    const ss = GASおじと勉強();
    const sheet =  ss.getSheetByName('Sheet3');
    const value = sheet.getRange('A1').getValue();
    console.log(value);
}