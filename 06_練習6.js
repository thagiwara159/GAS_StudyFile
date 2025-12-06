// 別々のシートから値を取得して1枚のシートに集計する関数 
function myfunction6(){
    // スプシを操作できる状態にする関数
    const ss = GASおじと勉強();
    // それぞれ必要なシートを取得する
    const sh = ss.getSheetByName('集計');
    const shA = ss.getSheetByName('A社');
    const shB = ss.getSheetByName('B社');
    const shC = ss.getSheetByName('C社');
    // それぞれのシートから値を指定したセルから取得する
    const amountA = shA.getRange('B5').getValue();
    const amountB = shB.getRange('B7').getValue();
    const amountC = shC.getRange('B12').getValue();
    // ログで取得した値を確認
    console.log(amountA,amountB,amountC);
    // それぞれのシートから取得した値を集計シートの書き込む
    sh.getRange('B2').setValue(amountA);
    sh.getRange('B3').setValue(amountB);
    sh.getRange('B4').setValue(amountC);
}

// 別々のシートから取得した値を配列にして書き込む関数
function myfunction6_v1(){
    // スプシを操作できる状態にする関数
    const ss = GASおじと勉強();
    // それぞれ必要なシートを取得する
    const sh = ss.getSheetByName('集計');
    const shA = ss.getSheetByName('A社');
    const shB = ss.getSheetByName('B社');
    const shC = ss.getSheetByName('C社');
    // それぞれのシートの指定したセルから値を取得する
    const amountA = shA.getRange('B5').getValue();
    const amountB = shB.getRange('B7').getValue();
    const amountC = shC.getRange('B12').getValue();
    // 取得した値をログで確認
    console.log(amountA,amountB,amountC);
    // それぞれ取得した値を配列に変える
    const values = [
        [amountA],
        [amountB],
        [amountC],
    ]
    // 配列にした値を .length を使って集計シートに書き込む
    sh.getRange(2,2,values.length,values[0].length).setValues(values);
    }

// .getlastRow を使ってデータの最後のセルから値を取得する関数    
function myfunction6_v2(){
    // スプシを操作できる状態にする関数
    const ss = GASおじと勉強();
    // シートを取得する
    const shA = ss.getSheetByName('A社');
    // データの最終行を取得する
    const lastRowA = shA.getLastRow();
    // データの最終行の２列目の値を取得する
    const amountA = shA.getRange(lastRowA,2).getValue();
    // 上記と同じ
    const shB = ss.getSheetByName('B社');
    const lastRowB = shB.getLastRow();
    const amountB = shB.getRange(lastRowB,2).getValue();
    // 上記と同じ
    const shC = ss.getSheetByName('C社');
    const lastRowC = shC.getLastRow();
    const amountC = shC.getRange(lastRowC,2).getValue();
    // 集計するシートを取得
    const sh = ss.getSheetByName('集計');
    // 取得した値をログで確認
    console.log(amountA,amountB,amountC);
    // 取得した値を配列にして代入
    const values = [
        [amountA],
        [amountB],
        [amountC],
    ]
    // 配列を取得して柔軟にセルに書き込み
    sh.getRange(2,2,values.length,values[0].length).setValues(values);
    }

// 引数の扱い方を学ぼう
function myFunction6_v3() {
    // addition関数に1,2,3を引き渡す
    addition(1, 2, 3);
    // addition関数に4,5,6を引き渡す
    addition(4, 5, 6);
}
// 上記の関数に呼ばれる関数
function addition(a, b, c) {
    /**
     * 上記の関数に呼ばれ、まずは1,2,3を引き渡される
     * 引き渡された1,2,3をそれぞれa,b,cに代入して
     * 計算してログを表示する（ログ：６） 次に上記の関数に
     * 4,5,6を引き渡される、渡された4,5,6をa,b,cに代入して計算
     * ログを表示する（ログ：１５）
     * 上記の使い方が 引数を引き渡すやり方
     */
    const result = a + b + c;
    console.log(result);
}

// 戻り値を学ぼう
function myFunction6_v4() {
    // １、下記の関数に引き渡す値1,2,3
    // ３、下記の関数から返された値を変数に代入
    const result1 = addition_v1(1, 2, 3);
    const result2 = addition_v1(4, 5, 6);
    // ４、返された値を代入した変数を使ってログを出力（ログ：６）
    console.log(result1);
    // （ログ：１５）
    console.log(result2);
}
/**
 * 上記の関数から呼ばれる関数
 * ２、まず1,2,3を引き渡される、引数をa,b,cに代入して計算
 * 計算結果を変数に代入して return で戻り値として呼び出した
 * 関数に返す　上記で次に呼ばれたら4,5,6を計算して結果を返す
 */
function addition_v1(a, b, c) {
    const result = a + b + c;
    return result;
}
/**
 * ⭐️ 呼び出す関数に戻り値（return）がない
 * 場合は単純にその関数を実行するだけ（シートの作成など）
 * 呼び出した関数に戻り値がある場合（returnで計算結果を返すなど）
 * 呼び出した関数は戻り値（値やTrue/False）になる
 */

// 引数でシート名を渡してセルに書き込む関数
function setTotalSales(){
    // スプシを操作できる状態にする関数
    const ss = GASおじと勉強();
    // 集計するシートを取得する
    const sh = ss.getSheetByName('集計')
    // 関数を呼び出し、引数としてシート名を渡して戻り値を配列化する
    const values = [
        [getTotalSales('A社')],
        [getTotalSales('B社')],
        [getTotalSales('C社')],
    ];
    // 配列をセルに書き込む
    sh.getRange(2,2,values.length,values[0].length).setValues(values);
}
// 渡された引数（シート名）を使ってデータを取得する関数
function getTotalSales(sheetName){
    // スプシを操作できる状態にする関数
    const ss = GASおじと勉強();
    // 各シートを引数として受け取りシートとして代入する
    const sh = ss.getSheetByName(sheetName);
    // シートのデータの最終行を取得する
    const lastRow = sh.getLastRow();
    // 戻り値としてシートの最終行のデータの２列目の値を取得して返す
    return sh.getRange(lastRow,2).getValue();
}
// ⭐️ 引数と戻り値をうまく使うことによってコードを簡素化して可読性をよくできる