function GASおじと勉強(){
    try{
        const name = 'GASおじと勉強_スプシ';
        const foldreId = '1T65Y3_bvhSSKaR_AW3fGCRbIROPLC-uT'
        const foldre = DriveApp.getFolderById(foldreId);
        const files = DriveApp.getFilesByName(name);
        let ss;

        if (files.hasNext()){
            ss = SpreadsheetApp.open(files.next());
        } else {
            ss = SpreadsheetApp.create(name);

            foldre.addFile(DriveApp.getFileById(ss.getId()));

            DriveApp.getRootFolder().removeFile(DriveApp.getFileById(ss.getId()));
        }

        return ss;

    }catch(e){'エラー' + e.message}
}