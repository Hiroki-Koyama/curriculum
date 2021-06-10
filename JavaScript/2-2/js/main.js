// main.js
// 「myfunc」という関数を用意。
function myfunc() {

  // idが「target」の要素を取得して、変数changeに代入
  let change = document.getElementById('target');

  // textContentを使って「こんにちは」で書き変える
  change.textContent = 'こんにちは!';
}

let elems = document.getElementsByTagName('h1');
//HTMLを上から順番に探した時に、最初に見つかったh1タグが0番目の要素として取得できます。
console.log(elems[0]);
console.log(elems[1]);



let boxs = document.getElementsByClassName('box');
//for文を使っても良いのですが、ここでは単純に一つずつ出力しています。
console.log(boxs[0]);
console.log(boxs[1]);
console.log(boxs[2]);