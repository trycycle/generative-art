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
    // キャンバスの背景色を設定
    // setup関数内に書くと，デフォルト背景色を設定することになる
    // draw関数内に書くと，frameRate毎にキャンバスの描画内容をクリアすることになる
    background(mouseY / 2, 100, 100);


    // ellipse: 円を描く関数
    // mouseX, mouseYはマウスカーソルの位置を取得するp5.jsの予約語
    ellipse(mouseX, mouseY, 40, 40);

    ellipse(50, 50, 80, 80);
    point(60, 150); // 点
    fill(128); // オブジェクトの塗りつぶす色を設定
    strokeWeight(1); // 線の太さを指定
    rect(50, 250, 40, 20) // 四角形

    shape.drawStar(10, 40);
    //
    shape.drawStar(130, 80);

    translate(windowWidth / 2, windowHeight / 2); // 座標軸の原点を移動
    fill(windowHeight - mouseY / 2, 100, 100);
    rect(0, 0, mouseY / 3, mouseY / 3);
}
