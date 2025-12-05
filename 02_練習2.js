function myFunction2(){
    const ss = GASおじと勉強();
    const sheet = ss.getSheetByName('Sheet2');
    const values = [
    ['あ','い','う','え','お'],
    ['か','き','く','け','こ'],
    ['さ','し','す','せ','そ'],
    ];
    sheet.getRange(1, 1, values.length, values[0].length).setValues(values);
    sheet.getRange(5, 1, values.length, values[0].length).setValues(values);
    sheet.getRange(9, 2, values.length, values[0].length).setValues(values);
    sheet.getRange(13, 2, values.length, values[0].length).setValues(values);
}