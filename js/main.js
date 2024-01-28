function callJavaApp(title, context) {
  console.log("***Start function callApp***");

  // *
  // DBを使用しない場合 
  // *

  // 入力値を取得する（オブジェクト）
  var inTextTitle = document.getElementById('textTitle');
  var inTextAreaContext = document.getElementById('textAreaContext');

  // 出力値を定義する（オブジェクト）
  var outTextTitle = document.getElementById('outTextTitle');
  var outTextContext = document.getElementById('outTextContext');
  
  

  // 出力値を設定する（値）
  outTextTitle.value = inTextTitle.value;
  outTextContext.value = inTextAreaContext.value;
  console.log("outTextTitle.value: " + outTextTitle.value);
  console.log("outTextContext.value: " + outTextContext.value);

  console.log("***End function callApp***");
  
  // 出力値を返却する
  return outTextTitle.value, outTextContext.value;
  
  // *
  // DBを使用する場合
  // *

  // Javaプログラムを呼び出す
  

  console.log("***End function callApp***");  
  
  
}

// callJavaApp関数を呼び出す
console.log("textTitle: " + textTitle);
console.log("textAreaContext: " + textAreaContext);
document.getElementById('callApp').onclick = callJavaApp;