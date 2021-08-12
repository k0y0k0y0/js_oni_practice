var CHOICES = {
  YOUR: '仕事よりも君が大事さ。',
  WORK: '仕事に決まってるだろ！'
};
var answer = (Math.floor(Math.random()*2))? CHOICES.YOUR:CHOICES.WORK;
document.write('彼女：仕事と私どっちを取るのよ！<br>');
document.write('自分：'+answer+'<br>');
if(answer === CHOICES.WORK){
  document.write('彼女：あたたたたたたたっーーー！！<br>');
} else if (answer === CHOICES.YOUR) {
  for(i=0; i<100; i++){
    document.write('自分：愛してるよ。<br>');
  }
  document.write('彼女：ひぃやぁぁぁーーーーーー！<br>');
}
document.write('自分：ひでぶっ！！<br>');