console.log("Hello There")

let music=new Audio("music.mp3");
let audioTurn=new Audio("ting.mp3");
let gameoverMusic=new Audio("Magic In The Air.mp3");

let gameOver=false;
let turn="X";
 
let gameOn=new Audio("music.mp3");
gameOn.play()
const changeTurn=()=>
{
    return turn==="X"?"O":"X";
}

//function to check for a win
const checkWin=()=>{
    let boxtexts=document.getElementsByClassName('boxtext');
    let wins=[
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135],
    ]

    wins.forEach((e)=>{
        if((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[2]].innerText === boxtexts[e[1]].innerText) && !(boxtexts[e[0]].innerText===""))
        {
            document.querySelector('.info').innerText=boxtexts[e[0]].innerText+ " Won...Party Time!";
            gameOver=true;
            
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="158px";
            document.querySelector('.pointer').getElementsByTagName('img')[0].style.width="45px";
            document.querySelector('.pointer').getElementsByTagName('img')[0].style.height="50px";
            document.querySelector('.victory').style.width="500px";
            gameOn.pause()
            gameoverMusic.play();
            // document.getElementsByClassName('.container')[0].style.pointer-events="none";
            // element.removeEventListener('click',func);
            

            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
            document.querySelector(".line").style.width = "20vw";
            // document.querySelector(".line").style.height = "30vh";
        }
        

    })
}
console.log(gameOver)

//Game Logic Starts Here   
// music.play(); 
let boxes=document.getElementsByClassName("box")         //because this will return a HTML collection, in the next line we are using Array.from and passing boxes so that it can catch all those boxes
// let func=function(){
//     if(boxtext.innerText==='')
//     {                 //if it is empty
//         boxtext.innerText=turn;
//         turn=changeTurn();              //since we are returning changeTurn(), we need to get it in some variable.
//         audioTurn.play();
//         checkWin();

//         if(gameOver===false)            //obviously, game over hua hai tabhi turn change krenge otherwise ni
//         {
//             document.getElementsByClassName("info")[0].innerText="Turn : "+ turn+"!";
//         }
//     }
// }
Array.from(boxes).forEach(element=>{  
    let boxtext=element.querySelector('.boxtext');
    let func=function(){
        if(boxtext.innerText==='')
        {                 //if it is empty
            boxtext.innerText=turn;
            turn=changeTurn();              //since we are returning changeTurn(), we need to get it in some variable.
            audioTurn.play();
            // gameOn.play()

            checkWin();
    
            if(gameOver===false)            //obviously, game over hua hai tabhi turn change krenge otherwise ni
            {
                document.getElementsByClassName("info")[0].innerText="Turn : "+ turn+"!";
            }
        }
    }            //element is the div whose class is box..just to iterate over them, we have used element we can write box too
                //uss box k andar ka boxtext chahiye jispe we clicked so we need to select that particular box boxtext, and "this paricular" is handled by element 
    // console.log(boxtext)
    element.addEventListener('click',func)
    // if(gameOver===true)
    // {
    //     element.removeEventListener('click',func);
    // }
})

//Reset On Click (can use any out of these, wrote for my reference)
/*
// let rst=document.getElementsByClassName('reset')      this can also be used alternatively, remember t
rst[0].addEventListener('click',()=>{
    let boxtexts=document.querySelectorAll('.boxtext'); 
    Array.from(boxtexts).forEach(element=>{
        element.innerText="";
    })
})
*/

/*
// let rst=document.querySelector('.reset')
rst.addEventListener('click',()=>{
    let boxtexts=document.querySelectorAll('.boxtext'); 
    Array.from(boxtexts).forEach(element=>{
        element.innerText="";
    })
})
*/
let rst=document.getElementsByTagName('button')
rst[0].addEventListener('click',()=>{
    let boxtexts=document.querySelectorAll('.boxtext'); 
    Array.from(boxtexts).forEach(element=>{
        element.innerText="";
    })


    turn="X";
    gameOver=false;           //obviously, if the game is reset toh gameOver toh false hi ho jyega na
    document.getElementsByClassName("info")[0].innerText="Turn : "+ turn+"!";
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="0px";
    document.querySelector('.pointer').getElementsByTagName('img')[0].style.width="0px";
    document.querySelector('.victory').style.width="0px";
    gameoverMusic.pause()
    gameOn.play()


    // document.getElementsByClassName('.container')[0].style.pointer-events="none";

    document.querySelector(".line").style.width = "0";            //line ki width wapas zero after the reset is encountered

})
