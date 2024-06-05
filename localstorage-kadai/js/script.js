/**
 * let ●●● = [];
 * $("●●●")
 * 
$("#●●●").on("click", function () {

});

for (let i = 0; i < ●●●; i++) {

}
 *
 *
 *
 *
 */

// ３つの商品を表示させてお気に入りぼたんを作る
// お気に入りボタンを押すとボタンの色が変わる
// お気に入りの数を表示される

// 商品①
//お気に入りボタンの要素を取得
var favoriteButton = document.getElementById("favoriteButton");

// ページが読み込まれたときにローカルストレージから状態を読み込む
window.addEventListener("load", function() {
    var isFavorite = localStorage.getItem("isFavorite");
    if (isFavorite === "true") {
        favoriteButton.classList.add("active");
    }
});

// クリックイベントを追加
favoriteButton.addEventListener("click", function() {
    // お気に入りボタンの状態を取得
    var isFavorite = favoriteButton.classList.contains("active");
    
    // お気に入りボタンの状態を切り替える
    if (isFavorite) {
        favoriteButton.classList.remove("active");
        localStorage.setItem("isFavorite", "false");
        // お気に入りから削除するなどの処理をここに追加する
    } else {
        favoriteButton.classList.add("active");
        localStorage.setItem("isFavorite", "true");
        // お気に入りに追加するなどの処理をここに追加する
    }
});

//商品②
// お気に入りボタンの要素を取得
var favoriteButton1 = document.getElementById("favoriteButton1");

// ページが読み込まれたときにローカルストレージから状態を読み込む
window.addEventListener("load", function() {
    var isFavorite1 = localStorage.getItem("isFavorite");
    if (isFavorite1 === "true") {
        favoriteButton1.classList.add("active");
    }
});

// クリックイベントを追加
favoriteButton1.addEventListener("click", function() {
    // お気に入りボタンの状態を取得
    var isFavorite1 = favoriteButton1.classList.contains("active");
    
    // お気に入りボタンの状態を切り替える
    if (isFavorite1) {
        favoriteButton1.classList.remove("active");
        localStorage.setItem("isFavorite1", "false");
        // お気に入りから削除するなどの処理をここに追加する
    } else {
        favoriteButton1.classList.add("active");
        localStorage.setItem("isFavorite1", "true");
        // お気に入りに追加するなどの処理をここに追加する
    }
});

//商品③
// お気に入りボタンの要素を取得
var favoriteButton2 = document.getElementById("favoriteButton2");

// ページが読み込まれたときにローカルストレージから状態を読み込む
window.addEventListener("load", function() {
    var isFavorite2 = localStorage.getItem("isFavorite");
    if (isFavorite2 === "true") {
        favoriteButton2.classList.add("active");
    }
});

// クリックイベントを追加
favoriteButton2.addEventListener("click", function() {
    // お気に入りボタンの状態を取得
    var isFavorite2 = favoriteButton2.classList.contains("active");
    
    // お気に入りボタンの状態を切り替える
    if (isFavorite2) {
        favoriteButton2.classList.remove("active");
        localStorage.setItem("isFavorite2", "false");
        // お気に入りから削除するなどの処理をここに追加する
    } else {
        favoriteButton2.classList.add("active");
        localStorage.setItem("isFavorite2", "true");
        // お気に入りに追加するなどの処理をここに追加する
    }
});


// ローカルストレージからデータを取得
const localStorageData = JSON.stringify("true");
console.log(localStorageData);
// trueの数をカウントする変数
let trueCount = 0;

if(localStorageData){
    trueCount++
}

var resultElement = document.getElementById('trueCount'); // 'result'というIDを持つ要素を取得
resultElement.textContent = 'お気に入りの数は' + trueCount + ' です。'; // 要素にテキストを設定
console.log('Trueの数:', trueCount);