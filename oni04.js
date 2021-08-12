/*
var answer = null;
var rand = Math.floor(Math.random()*2);
if(rand===0) anser = "仕事に決まってるだろ！";
if(rand===1) anser = "仕事よりも君が大事さ。仕事はもう嫌で嫌で嫌で。。嫌で嫌で嫌で。。ほんと嫌なんだ。";
console.log('彼女：仕事と私どっちを取るのよ！');
console.log('自分：'+answer);
if(answer === "仕事に決まってるだろ！"){
  console.log('彼女：あたたたたたたたっーーー！！');
  console.log('自分：ひでぶっ！！');
}else if(anser === "仕事よりも君が大事さ。仕事はもう嫌で嫌で嫌で。。嫌で嫌で嫌で。。ほんと嫌なんだ。"){
  console.log('彼女：仕事してこいやーーーーーー！！');
  console.log('自分：ひでぶっ！！');
}
*/

var CHOICES = {
  YOUR: '仕事よりも君が大事さ。仕事はもう嫌で嫌で嫌で。。嫌で嫌で嫌で。。ほんと嫌なんだ。',
  WORK: '仕事に決まってるだろ！'
};
var answer = (Math.floor(Math.random()*2))? CHOICES.YOUR:CHOICES.WORK;
console.log('彼女：仕事と私どっちを取るのよ！');
console.log('自分：'+answer);
if(answer === CHOICES.WORK){
  console.log('彼女：あたたたたたたたっーーー！！');
} else if (answer === CHOICES.YOUR) {
  console.log('彼女：仕事してこいやーーーーーー！！');
}
console.log('自分：ひでぶっ！！');