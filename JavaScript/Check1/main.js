//問1:isEven関数を実行して、以下の配列から偶数だけが出力されるように実装してください。
let numbers = [2, 5, 12, 13, 15, 18, 22];
//ここに答えを実装してください。↓↓↓
function isEven(num) {
  if (num % 2 === 0){
    console.log(num + 'は偶数です');
  }
}
let num = [2, 5, 12, 13, 15, 18, 22];
console.log(num.filter(isEven));


//問2:以下の要件を満たすように実装してください。
//インスタンス化した時にガソリンとナンバーがセットされるようなCarクラスを作成する
//「ガソリンは〇〇です。ナンバーは△△です」と出力される「getNumGas」という関数を作成する
class Car {

  //コンストラクタ
  constructor(gass, num) {
      this.gass = gass;
      this.num = num;
  }

  //メソッド（関数）作成
  getNumGas() {
      console.log(`ガソリンは${this.gass}です。ナンバーは${this.num}です`);
  }
}
let car = new Car('レギュラー', 1111);
car.getNumGas();