function askName() {
    var name = prompt("enter your name")
    return name
}

function greeting(a) {
    alert(`Welcome back, ${a}.`)
    
}

greeting(askName())
function cumpgame() {

    var computerNumber = 0;
    do{    
        var randomNumber = Math.floor(Math.random()* 10) + 1;
        computerNumber /* 8 */ = computerNumber /* 3 */ + randomNumber // 5
        //alert(computerNumber)      
        alert(`Computer picked up a ${randomNumber}, player total ${computerNumber}  `);
    } while  ( computerNumber < 16 );
    alert(`exit`)
    alert(`user's turn`)
   
}

function usgame() {

        var usersNumber = 0;
    do{
        var randomNumber = Math.floor(Math.random()* 10) + 1;
        usersNumber  = usersNumber  + randomNumber 
        //alert(usersNumber)
        alert(`Player picked up a ${randomNumber}, player total ${usersNumber}  `)
        if (usersNumber >= 20) {
            break
        }  
        var useresponds = prompt("do you want to keep playing?")

    } while  (( usersNumber < 21 ) && (useresponds == "y"))

}

function thegame() {

    if((computerNumber > usersNumber) && (computerNumber <= 20) && (usersNumber <=20)) {

    alert("The computer has won the game")

        }else if (usersNumber > computerNumber) {

    alert("user has won")
    }
    do{
        round++
        alert(`round ${round}`)
        var nextmatch = prompt("do you want to countine the game y or n")
        var round = (1)
     }while(nextmatch == "y");

}     

cumpgame()

usgame()

thegame(usgame(), cumpgame())


