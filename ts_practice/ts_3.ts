function printMultiplicationTable(): void {
    // 外層迴圈控制乘數
    const rows = 9;
    const width = 12;
    for (let i = 1; i <= 9; i++) {
      // 內層迴圈控制被乘數
      let line = "";
      for (let j = 1; j <= 9; j++) {
        // 印出當前的乘法表運算結果        
        line += `${j} x ${i} = ${j * i}`.padEnd(width);
      }
      console.log(line);
    }
  }
  
  // 呼叫函數來列印九九乘法表
  printMultiplicationTable();