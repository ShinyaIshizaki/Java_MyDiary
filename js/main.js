function callJavaApp(title, context) {
  console.log("***Start function callApp***");

  // window.onload = function() {

    
    // *
    // DBを使用しない場合 
    // *

    // 入力値を取得する（オブジェクト）
    var inTextTitle = document.getElementById('textTitle');
    var inTextAreaContext = document.getElementById('textAreaContext');

    // リストを作成する
    var elementOfDiaryUnorderedList = document.getElementById("diaryUnorderedList");

    // Inputボックスの数を数える
    var inputCount = document.querySelectorAll('input').length;
    console.log("Number of input boxes: " + inputCount);
    
    // 出力用リストを定義する
    var listHtml = "<div>";

    // // データを元にli要素を生成し、ulに追加
    // for (var i = 0; i < inputCount; i++) {

    //   // タグ要素を定義する
    //   var ulElement = document.createElement("ul");
    //   var liElement = document.createElement("li");
    
    //   console.log("liElement.textContent: " + liElement.textContent);
    
    //   // リストに値を追加する
    //   // listHtml += ulElement + liElement + inTextTitle[i].values() + inTextAreaContext.values();
    //   const inputElement = document.querySelector('textTitle');
    //   const textareaElement = document.querySelector('textAreaContext');
    
    //   console.log("inputElement: " + inputElement);
    //   console.log("textareaElement: " + textareaElement);
    
    //   listHtml += inputElement.value + textareaElement.value;
    
    //   // elementOfDiaryUnorderedList.appendChild(liElement);
    //   // console.log("elementOfDiaryUnorderedList.childNodes[i].textContent: " + elementOfDiaryUnorderedList.childNodes[i].textContent);
    //   // console.log("elementOfDiaryUnorderedList.childNodes[i]: " + elementOfDiaryUnorderedList.childNodes[i]);
    //   // listHtml += elementOfDiaryUnorderedList.childNodes[i].textContent;
    //   // liElement = inTextAreaContext[i];
    
    //   listHtml += "</div>"; 
    // }
    
    // console.log("***End function callApp***");
    
    
    // データを元にli要素を生成し、ulに追加
    for (var i = 0; i < inputCount; i++) {
      // var inputElement = document.getElementById(`textTitle${i}`);
      // var textareaElement = document.getElementById(`textAreaContext${i}`);
      var inputElement = document.getElementById("textTitle");
      var textareaElement = document.getElementById("textAreaContext");
      
      listHtml += `<li>${inputElement["textTitle"]} / ${textareaElement["textAreaContext"]}</li>`;
    }
    
    
    // ページ内の特定の要素にHTMLを挿入
    // console.log("listHtml: " + listHtml['inputElement'] + " / " + listHtml['textareaElement']);
    // document.getElementById("diaryUnorderedList") = listHtml;
    elementOfDiaryUnorderedList.innerHTML = listHtml;
    
    // リストを返却する
    // return elementOfDiaryUnorderedList;
    
    // *
  // DBを使用する場合
  // *

  // Javaプログラムを呼び出す

  
  console.log("***End function callApp***");  
  
  
  // };
};

// callJavaApp関数を呼び出す
// console.log("textTitle: " + textTitle);
// console.log("textAreaContext: " + textAreaContext);

document.getElementById('callApp').onclick = callJavaApp;