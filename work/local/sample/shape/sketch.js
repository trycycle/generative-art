const windowWidth = 640;
const windowHeight = 480;


// setup関数は起動時に1回のみ読み込まれる関数
function setup() {
    let canvas = createCanvas(windowWidth, windowHeight); // キャンバスサイズを設定
    noFill(); // オブジェクトを塗りつぶさないようにする
    //noStroke(); // オブジェクトの縁線を無しにする
    noCursor(); // カーソルを非表示にする
    colorMode(HSB, windowHeight, 100, 100); // カラーモードの変更（デフォルトはグレースケール）
    rectMode(CENTER); // 四角形の描画時に重心からの距離をもって辺を書く


    canvas.parent('canvas'); // 設定したキャンバスをHTMLに埋め込む
    console.log('Hello, world.')
    console.log(frameCount); // 現在のフレームレートを取得

    frameRate(60); // フレームレートの設定（デフォルトは60）
}

// preload関数は起動時に1回読み込まれ，draw関数が実行される前に必ず処理が終わる
function preload() {

}

// draw関数はsetup関数を実行後frameRate毎に読み込まれる関数
function draw() {
    background(255);
    translate(windowWidth / 2, windowHeight / 2); // 座標軸の原点を移動

    let circleResolution = map(mouseX, 0, windowHeight, 2, 80);
    let radius = mouseX - windowWidth / 2 + 0.5;
    let angle = TWO_PI / circleResolution;

    strokeWeight(mouseY / 20);

    //beginShape();
    for (let i=0; i<circleResolution; i++) {
        let x = cos(angle * i) * radius;
        let y = sin(angle * i) * radius;
        line(0, 0, x, y);
        //vertex(x, y);
    }
    //endShape(CLOSE);


}
