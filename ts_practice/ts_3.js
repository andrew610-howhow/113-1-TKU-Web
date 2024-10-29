function printMultiplicationTable() {
    // 外層迴圈控制乘數
    var rows = 9;
    var width = 12;
    for (var i = 1; i <= 9; i++) {
        // 內層迴圈控制被乘數
        var line = "";
        for (var j = 1; j <= 9; j++) {
            // 印出當前的乘法表運算結果        
            line += "".concat(j, " x ").concat(i, " = ").concat(j * i).padEnd(width);
        }
        console.log(line);
    }
}
// 呼叫函數來列印九九乘法表
printMultiplicationTable();
