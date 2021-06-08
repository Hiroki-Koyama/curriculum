//問1：以下の要件を満たすように「たい焼きクラス」を作成してください。
class Taiyaki {

  //コンストラクタ
  constructor(name) {
      this.name = name;
  }

  //メソッド（関数）作成
  takiyaki() {
      console.log(`中身は${this.name}です`);
  }
}
//「山田」オブジェクト作成
let anko = new Taiyaki('あんこ');
let kurimu = new Taiyaki('クリーム');
let tizu = new Taiyaki('チーズ');
anko.takiyaki();
kurimu.takiyaki();
tizu.takiyaki();
