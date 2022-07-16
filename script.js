//constants
const squares=document.querySelectorAll("td");
const blueturn=document.querySelectorAll(".Blue-turn");
const redturn=document.querySelectorAll(".Red-turn");
let redgoti=document.querySelectorAll(".redt");
let bluegoti=document.querySelectorAll(".bluet");

//other lets
let turn=true;
let rscore=0;
let bscore=0;
let r1=0;
let r2;
let r3;
let r4;
let b1=0;
let b2;
let b3;
let b4;

let roll;
document.getElementById('random').onclick = function dice()
{
roll=(Math.floor(Math.random()*6)+1);
let rollval = `images/dice${roll}.png`;
rollval.width = '30px';
document.getElementById("roll").setAttribute('src',rollval);
checkpos();
}

function checkpos()
{
  if(turn)
  {
    rchk();
  }
  else
  {
    bchk();  
  }
}

function changePlayer() {
  if (turn) {
      turn = false;
      for (let i = 0; i < redturn.length; i++) {
          redturn[i].style.color = "lightGrey";
          blueturn[i].style.color = "Blue";
      }
  } 
  else 
  {
      turn = true;
      for (let i = 0; i < blueturn.length; i++) {
          blueturn[i].style.color = "lightGrey";
          redturn[i].style.color = "Red";
      }
  }
}

function bchk()
{
  if(b1==0)
  {
    b1=bopen();
    
  }
  else
  {
    movebt();
    changePlayer();
  }
}

function rchk()
{
  if(r1==0)
  {
    r1=ropen();
  }
  else
  {
  movert();
  changePlayer();
  }
}


//bluepart
function bopen()
{
if(roll==6)
{
  document.getElementById(`${1}`).classList.toggle("bluet");
  document.getElementById(`${0}`).classList.toggle("bluet"); 
  b1++;
}
else
{
  changePlayer();
}
return b1;
}

function movebt()
{
  if(b1+roll<=64)
  {
document.getElementById(`${b1+roll}`).classList.toggle("bluet");
document.getElementById(`${b1}`).classList.toggle("bluet");
b1+=roll;
  }
  console.log(b1);
 scorechkb(b1); 
 if(document.getElementById(`${b1}`).classList.contains("redt"))
 {
  document.getElementById(`${b1}`).classList.toggle("redt");
  document.querySelector(`.r${0}`).classList.toggle("redt");
  r1=0;
 }
}

function scorechkb(x)
{
  if(x==64)
  {
    bscore++;
    document.getElementById(`${x}`).classList.remove("bluet");
    x++;
    console.log(bscore);
  }
}

//red part
function ropen()
{
if(roll==6)
{
  document.querySelector(`.r${1}`).classList.toggle("redt");
  document.querySelector(`.r${0}`).classList.toggle("redt");
  r1++;
}
else{
  changePlayer();
}
return r1;
}

function movert()
{
  if(r1+roll<=64)
  {
document.querySelector(`.r${r1+roll}`).classList.toggle("redt");
document.querySelector(`.r${r1}`).classList.toggle("redt");
r1+=roll;
  }
  console.log(r1);
 scorechkr(r1);
 if(document.querySelector(`.r${r1}`).classList.contains("bluet"))
 {
  document.querySelector(`.r${r1}`).classList.toggle("bluet"); 
  document.getElementById(`${0}`).classList.toggle("bluet"); 
  b1=0;
 } 
}
function scorechkr(x)
{
  if(x==64)
  {
    bscore++;
    document.querySelector(`.r${x}`).classList.remove("redt");
    x++;
    console.log(bscore);
  }
}

//reset
function reset()
{
  document.getElementById(`${0}`).classList.toggle("bluet");  
  document.getElementById(`${b1}`).classList.toggle("bluet");
  document.querySelector(`.r${0}`).classList.toggle("redt");
  document.querySelector(`.r${r1}`).classList.toggle("redt");  
rscore=0;
bscore=0;
r1=0;
b1=0;
document.getElementById("roll").setAttribute('src',`images/dice.png`);
}
