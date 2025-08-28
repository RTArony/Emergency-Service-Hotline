function heartCountIncrease(id){
    document.getElementById(id).addEventListener("click",function(){
    let heartCountContainer = parseInt(document.getElementById("heart-count").innerText)
    heartCountContainer+=1;
    document.getElementById("heart-count").innerText= heartCountContainer
})
}

// const id = document.getElementById("heart-btn")
heartCountIncrease("heart-btn1");
heartCountIncrease("heart-btn2");
heartCountIncrease("heart-btn3");
heartCountIncrease("heart-btn4");
heartCountIncrease("heart-btn5");
heartCountIncrease("heart-btn6");