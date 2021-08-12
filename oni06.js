/*
function whisperLove(){
  document.write('愛してるよ。');
}
setInterval(whisperLove, 100);
*/
//setInterval(実行したい処理をまとめた関数名, 実行毎の秒数をミリ秒で指定);

setInterval(function(){
  document.write('愛してるよ。');
},100);