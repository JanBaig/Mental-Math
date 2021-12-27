/*
document.getElementById('answer-write').innerHTML = Answer

document.getElementById('answer-write').innerHTML = 'Answer: ' + Answer
*/

var selected = localStorage.getItem('selected');
console.log(typeof(selected)) // returns a string

var score = 0;
var remaining_q = 1;
var total_q = 10;
var variable = 0;

/* Integers*/
let value1 = Math.floor(Math.random()*20+1)
let value2 = Math.floor(Math.random()*20+1)
const int_array = []

for (let i = 0; i < total_q+1; i++){
    value1 = Math.floor(Math.random()*20+1)
    value2 = Math.floor(Math.random()*20+1)
    int_array.push([value1, value2])
}

document.getElementById('first-num').innerHTML = int_array[0][0]
document.getElementById('second-num').innerHTML = int_array[0][1]

Answer = int_array[0][0] + int_array[0][1]

document.getElementById('remaining').innerHTML = 'Remaining: ' + remaining_q + "/" + total_q


document.getElementById('submit').addEventListener('click', function(){

    var user_int = document.getElementById("user-submit").value

    if (user_int == Answer){
        score += 1
    }

    remaining_q += 1

    document.getElementById('remaining').innerHTML = 'Remaining: ' + remaining_q + "/" + total_q

    if (remaining_q == total_q+1){
        window.location.href = "http://127.0.0.1:5500/3rd.html"
    }

    document.getElementById('the-scores').innerHTML = 'Scores: '+ score
    localStorage.setItem('player-score', score)

    /*Array ---------------------------*/
    variable += 1;

    document.getElementById('first-num').innerHTML = int_array[variable][0]

    document.getElementById('second-num').innerHTML = int_array[variable][1]

    Answer = int_array[variable][0] + int_array[variable][1]

    document.getElementById('q-num').innerHTML = 'Question ' + remaining_q

})

// Levels and Time manipulation ----------------------------

if (selected == "easy"){
    var start_minutes = 10
    document.getElementById('level-display').innerHTML = 'Easy'
    document.getElementById('time').style.color = 'darkgreen'
    document.getElementById('level-display').style.color = 'darkgreen'


}
else if (selected == "medium"){
    var start_minutes = 5
    document.getElementById('level-display').innerHTML = 'Medium'
    document.getElementById('time').style.color = 'brown'
    document.getElementById('level-display').style.color = 'brown'
}
else if (selected == "hard"){
    var start_minutes = 2
    document.getElementById('level-display').innerHTML = 'Hard'
    document.getElementById('time').style.color = 'darkred'
    document.getElementById('level-display').style.color = 'darkred'
    
}

let time = start_minutes * 60 // To get the seconds
time_out = false;

function stopWatch(){
    const minutes = Math.floor(time/60);
    
    let seconds = time % 60
    
    document.getElementById('time').innerHTML = 'Time Remaining:  '+ minutes + ':' + seconds

    time --;

    if (time == 0){
        window.location.href = 'http://127.0.0.1:5500/3rd.html'
        time_out = true;
    }
    
    localStorage.setItem('time-out', time_out)
}

window.setInterval(stopWatch, 1000)  














