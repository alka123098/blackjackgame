let player_Object = {
    name:"Kiran",
    cash:"150"
}
let sum = 0
let cardArray = []
let hasBlackjack= false
let isAlive=false
let message_El=document.getElementById("message-id")
let sum_El=document.getElementById("sum-id")
let card_El=document.getElementById("card-id")
let player_El = document.getElementById("player-el") 
player_El.textContent=player_Object.name+" "+"$"+ player_Object.cash
function startgame(){
    let firstCard=getRandomCard()
    let SecondCard =getRandomCard()
    sum = firstCard +SecondCard
    cardArray.push(firstCard)
    cardArray.push(SecondCard)
    isAlive=true
    rendergame()
}
function rendergame(){
    sum_El.textContent="Sum is : " + sum
    card_El.textContent="Cards:"
    for(let i=0;i<cardArray.length;i+=1){
        card_El.textContent+=" "+cardArray[i]
    }
    
    if (sum<21){
        message_El.textContent="Do you want to draw a new card"
    }   else if(sum===21){
        message_El.textContent="YOO HOO blackjack"
       hasBlackjack=true
    }   else if(sum > 21){
        message_El.textContent="you lost hehe"
        isAlive=false
    }
}
function newcard(){
    if(isAlive===true && hasBlackjack===false){
        let newcard_Jl=getRandomCard()
        sum+=newcard_Jl
        cardArray.push(newcard_Jl)
        rendergame()
    }
}
function getRandomCard(){
    let Random_card=Math.floor(Math.random()*13) + 1
    if(Random_card===1){
        Random_card=11
    } else if(Random_card>10){
        Random_card=10
    }
    return(Random_card)
}


