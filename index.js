document.getElementById('btn').addEventListener("click", function(){
    let btn_easy = document.getElementById('easy')
    let btn_medium = document.getElementById('medium')
    let btn_hard = document.getElementById('hard')

    var selected;

    if (btn_hard.checked == true){
        selected = btn_hard.value
    }
    else if (btn_medium.checked == true){
        selected = btn_medium.value
    }
    else if (btn_easy.checked == true){
        selected = btn_easy.value
    }

    localStorage.setItem('selected', selected)
 

})