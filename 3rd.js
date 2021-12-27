var player_score = localStorage.getItem('player-score');

document.getElementById('third-scores').innerHTML = 'Score: ' + player_score;

const time_out = localStorage.getItem('time-out');


if (time_out === "true"){
    document.getElementById('time_is_out').innerHTML = 'You ran out of time'
}

if (time_out === "false"){
    document.getElementById('time_is_out').innerHTML = ''
}

// Error: Local storage stores a variable's values as a string and thus the conditionals only work when compairing a string with another string
