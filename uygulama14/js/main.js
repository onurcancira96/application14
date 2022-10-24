const grid = document.querySelector('.grid');
const hucre = document.querySelectorAll('.snake');
const baitjs = document.querySelectorAll('.bait');
const yenijs= document.querySelector('.yeni');
var baitStart =[300,300]
var tail= []
var ustusteDizi=[];
var duzen='';
var sayacSinif='';
var rnd1,rnd2;
var score=0;
function currentPosition(a,b){
    this.yatay=a;
    this.dikey=b;
}
var blocks =[new currentPosition(50,100)] // ilk konum ve blocklar dizisi
function  tailf(){
    tail.unshift(new currentPosition(blocks[0].yatay,blocks[0].dikey))
    for (let i = 0; i < blocks.length; i++){
        blocks[i]=tail[i]
    }
}
function dogrulama(){
    if(blocks[0].yatay==baitStart[0] && blocks[0].dikey==baitStart[1])
    {
    blocks.unshift(new currentPosition(blocks[0].yatay,blocks[0].dikey))
        const snake = document.createElement('div')
        grid.appendChild(snake);
        snake.classList.add('snake');
        snake.style.left = blocks[1].yatay + 'px';
        snake.style.top = blocks[1].dikey + 'px';
        ustusteDizi=[];
        rnd1= (Math.floor(Math.random()*9))*50
        rnd2= (Math.floor(Math.random()*9))*50
            for (let i = 0; i < blocks.length; i++) {
            duzen =rnd1+" "+rnd2
            ustusteDizi.push(blocks[i].yatay+" "+blocks[i].dikey)
        }
        if (ustusteDizi.includes(duzen)==true) {
            for (let i = 0; i < Infinity; i++) {
              var  rnd1 = (Math.floor(Math.random()*9))*50
              var  rnd2 = (Math.floor(Math.random()*9))*50
                duzen =rnd1+" "+rnd2
                if(ustusteDizi.includes(duzen)==false){
                    score++;
                    document.querySelector('.score').textContent=`Score: ${score}`;
                    baitStart=[rnd1,rnd2];
                    drawBait();
                    return;
                }
            }
        }
        else{
            score++;
            document.querySelector('.score').textContent=`Score: ${score}`;
            baitStart=[rnd1,rnd2];
            drawBait();
        }
    }    
}
//--------------------------------------------------ADD
// add user                
const snake = document.createElement('div')
grid.appendChild(snake);
snake.classList.add('snake');
snake.style.left = blocks[0].yatay + 'px';
snake.style.top = blocks[0].dikey + 'px';  
        function drawSnake(){
            for (let i = 0; i < blocks.length; i++) {
             var hucre = document.querySelectorAll('.snake');
               hucre[i].style.left=blocks[i].yatay + 'px'
                hucre[i].style.top=blocks[i].dikey + 'px'
            }
            for (let i = 1; i < blocks.length; i++) {
                if(blocks[0].yatay==blocks[i].yatay && blocks[0].dikey==blocks[i].dikey){
                    blocks =[]
                    tail= []
                }
            }
        }
// draw user

// add bait
var bait = document.createElement('div');
bait.classList.add('bait');
grid.appendChild(bait);
// draw bait
function drawBait(){
    bait.style.left = baitStart[0] + 'px';
    bait.style.top = baitStart[1] + 'px';
    }
drawBait();
// keybord group
function moveUser(e){
    switch(e.key){
        
        case 'ArrowRight':  
        if(sayacSinif!='sol'){
            sayacSinif='sag';
        }
            break;
        case 'ArrowLeft':
            if(sayacSinif!='sag'){
            sayacSinif='sol';
            }
            break;
        case 'ArrowUp':
            if(sayacSinif!='asagi'){
            sayacSinif='yukari';
            }
            break;
        case 'ArrowDown':
            if(sayacSinif!='yukari'){
            sayacSinif='asagi';
            }

            break;
    }
}
document.addEventListener('keydown',moveUser);
function yon (){
    setInterval(() => {
    if (sayacSinif=='sag'){
            if(blocks[0].yatay==450)  
            {blocks[0].yatay= -50}
            blocks[0].yatay+=50;
            drawSnake();dogrulama();tailf();
    }
    if (sayacSinif=='sol'){
            if(blocks[0].yatay==0)
            {blocks[0].yatay=500}
            blocks[0].yatay-=50;
            drawSnake();dogrulama();tailf();
        }


        if (sayacSinif=='yukari'){
            if(blocks[0].dikey==0)
            {blocks[0].dikey=500}
                blocks[0].dikey-=50;
                drawSnake();dogrulama();tailf();
            }


            if (sayacSinif=='asagi'){
                if(blocks[0].dikey==450)
                {blocks[0].dikey=-50}
                    blocks[0].dikey+=50;
                    drawSnake();dogrulama();tailf();
                }
            }, 100);

}
yon();

yenijs.addEventListener('click', ()=>{
const hucre = document.querySelectorAll('.snake');
const baitjs = document.querySelectorAll('.bait');
tail= []
ustusteDizi=[];
duzen='';
sayacSinif='';
score=0;
document.querySelector('.score').textContent=`Score: ${score}`;
for (let i = 0; i < baitjs.length; i++) {
    baitjs[i].remove();
    }
for (let i = 0; i < hucre.length; i++) {
        hucre[i].remove();
        }
        //add snake
    blocks =[new currentPosition(50,100)] 
    const snake = document.createElement('div')
    grid.appendChild(snake);
    snake.classList.add('snake');

    snake.style.left = blocks[0].yatay + 'px';
    snake.style.top = blocks[0].dikey + 'px'; 
    baitStart =[300,300]
    bait = document.createElement('div');
    grid.appendChild(bait);
    bait.classList.add('bait');
    drawBait();
})