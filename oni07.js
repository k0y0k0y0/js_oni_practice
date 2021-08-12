/*
var CHOICES={
  YOUR: "仕事よりも君が大事さ。",
  WORK: "仕事に決まってるだろ！"
}

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
*/
/*
var CHOICES = {
  YOUR: '仕事よりも君が大事さ。',
  WORK: '仕事に決まってるだろ！'
};
var answer = (Math.floor(Math.random()*2)) ? CHOICES.YOUR : CHOICES.WORK;

//関数部分
//命名法->
function sayWords(words, actorFlg){
  var actorName = '';

  switch (actorFlg){
    case 0: // 彼女の場合
      actorName = '彼女：';
      break;
    case 1: // 自分の場合
      actorName = '自分：';
      break;
    default:
  }
  document.write(actorName + words);
}

sayWords('仕事と私どっちを取るのよ！<br>', 0);
sayWords(answer + '<br>', 1);

if(answer === CHOICES.WORK){
  sayWords('あたたたたたたたっーーー！！<br>', 0);
} else if (answer === CHOICES.YOUR) {
  for(var i = 0; i < 100; i++){
    sayWords('愛してるよ。<br>', 1);
  }
  sayWords('ひぃやぁぁぁーーーーーー！！<br>', 0);
}
sayWords('ひでぶっ！！', 1);
*/

var WORDS = {
  YOUR: '仕事よりも君が大事さ。',
  WORK: '仕事に決まってるだろ！',
  CHOICE: '仕事と私どっちを取るのよ！',
  ATTACK: 'あたたたたたたたっーーー！！',
  SCREAM: 'ひぃやぁぁぁーーーーーー！！',
  LOVE: '愛してるよ。',
  DEAD: 'ひでぶっ！！'
}
var ACTORES = {
  HE: '自分',
  SHE: '彼女'
};
var answer = (Math.floor(Math.random()*2)) ? WORDS.YOUR : WORDS.WORK;
 
function sayWords(words, actorFlg){
  var actorName = '';
  var SYMBOL = '：';
 
  switch (actorFlg){
    case ACTORES.SHE: // 彼女の場合
      actorName = ACTORES.SHE + SYMBOL;
      break;
    case ACTORES.HE: // 自分の場合
      actorName = ACTORES.HE + SYMBOL;
  }
  document.write(actorName + words + '<br>');
}
 
sayWords(WORDS.CHOICE, ACTORES.SHE);
sayWords(answer, ACTORES.HE);
 
if(answer === WORDS.WORK){
  sayWords(WORDS.ATTACK, ACTORES.SHE);
} else if (answer === WORDS.YOUR) {
  for(var i = 0; i < 100; i++){
    sayWords(WORDS.LOVE, ACTORES.HE);
  }
  sayWords(WORDS.SCREAM, ACTORES.SHE);
}
sayWords(WORDS.DEAD, ACTORES.HE);