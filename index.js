const playBtn=document.querySelector(".play")
const cta=document.querySelector(".cta")
const playerImg=document.getElementById("player-img")
const botImg=document.getElementById("bot-img")
let bChoice

function choiceRender(){
    cta.innerHTML=`
    <p>Choose:</p>
    <button id="rock-btn" class="choice" type="button">Rock</button>
    <button id="paper-btn" class="choice" type="button">Paper</button>
    <button id="scissor-btn" class="choice" type="button">Scissor</button>
   `
}

playBtn.addEventListener("click",choiceRender)

function stage(event){
    if(event.target && event.target.id==="rock-btn"){
        playerImg.src="images/rock.jpg"
        botChoice()
        results(0)
        cta.innerHTML=`
            <button class="play-agn" onClick="window.location.reload();"> Play Again ⟲</button>
        `
    }
    else if(event.target && event.target.id==="paper-btn"){
        playerImg.src="images/paper.jpg"
        botChoice()
        results(1)
        cta.innerHTML=`
            <button class="play-agn" onClick="window.location.reload();"> Play Again ⟲</button>
        `
    }
    else if(event.target && event.target.id==="scissor-btn"){
        playerImg.src="images/scissor.jpg"
        botChoice()
        results(2)
        cta.innerHTML=`
            <button class="play-agn" onClick="window.location.reload();" > Play Again ⟲</button>
        `
    }
}

document.body.addEventListener('click',stage )

function botChoice(){
    bChoice=Math.floor((Math.random()*3))
    if(bChoice==0){
        botImg.src="images/bot-rock.png"
    }
    else if( bChoice==1){
        botImg.src="images/bot-paper.jpg"
    }
    else{
        botImg.src="images/bot-scissor.jpeg"
    }
}

function results(playerChoice){
    let win=document.createElement('p')
    win.className="result"
    if(playerChoice===0 && bChoice===2){
        
        win.textContent="You win  😏"
    }
    else if(playerChoice===1 && bChoice===0){
        
        win.textContent="You win  😏"
    }
    else if(playerChoice===2 && bChoice===1){
       
        win.textContent="You win  😏"
    }
    else if(playerChoice===bChoice){
    
        win.textContent="Draw 🤡"
    }
    else {
      
        win.textContent="You loose 😐"
    }
    cta.before(win)
}




