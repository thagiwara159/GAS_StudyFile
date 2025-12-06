/**
 * スプシを操作できる状態にする関数
 * スプシがない場合は作成する
 * スプシがある場合はそれを操作できる状態にする
 */ 
function GASおじと勉強(){
    try{
        // スプレッドシートの名前を設定・取得
        const name = 'GASおじと勉強_スプシ';
        // 保存するフォルダのID取得
        const foldreId = '1T65Y3_bvhSSKaR_AW3fGCRbIROPLC-uT'
        const foldre = DriveApp.getFolderById(foldreId);
        //　同じ名前のファイルがあるか確認するために変数格納
        const files = DriveApp.getFilesByName(name);
        let ss;
        //　同じ名前のファイルがあるか検索
        if (files.hasNext()){
            // 同じ名前のファイルがある場合はそれを操作できる状態にする
            ss = SpreadsheetApp.open(files.next());
        } else {
            // ない場合は作成して指定のフォルダに保存
            ss = SpreadsheetApp.create(name);
            foldre.addFile(DriveApp.getFileById(ss.getId()));
            /**
             * ファイルをフォルダに移動せてもマイドライブに
             * データが残ったままなのでデータを削除（ファイル自体は消えない）
             * この書き方は古い書き方でいづれ使えなくなる folder.addFile() / removeFile()
             * 新しい書き方はこちら、
             * const fileId = ss.getId();
             * 
             * Drive.Files.update(
             *  {
             *      addParents: folder.getId(),
             *      removeParents: DriveApp.getRootFolder().getId()
             *  },
             *  fileId
             * );
             */
            DriveApp.getRootFolder().removeFile(DriveApp.getFileById(ss.getId()));
        }
        // ss = 操作できる状態にしたスプレッドシートを返す
        return ss;

    }catch(e){'エラー' + e.message 
    }
}