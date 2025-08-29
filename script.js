function heartCountIncrease(id){
    document.getElementById(id).addEventListener("click",function(){
    let heartCountContainer = parseInt(document.getElementById("heart-count").innerText)
    heartCountContainer+=1;
    document.getElementById("heart-count").innerText= heartCountContainer
})
}

heartCountIncrease("heart-btn1");
heartCountIncrease("heart-btn2");
heartCountIncrease("heart-btn3");
heartCountIncrease("heart-btn4");
heartCountIncrease("heart-btn5");
heartCountIncrease("heart-btn6");

function callandCoinSpend(btn,name,number){
    document.getElementById(btn).addEventListener("click",function(){
    let coinCountContainer =parseInt(document.getElementById("coin-count").innerText)
    if(coinCountContainer<20){
        alert("You do not have sufficient coin to make a call")
        return
    }
    else{
        const serviceName= document.getElementById(name).innerText
        const serviceNumber= document.getElementById(number).innerText
        const alertShow= serviceName + " : " + serviceNumber
        alert(alertShow)
        coinCountContainer -=20;
        document.getElementById("coin-count").innerText= coinCountContainer

        const callHistoryName= document.createElement('h3')
        callHistoryName.innerText=serviceName
        callHistoryName.classList.add('linkHistoryName')
        const callHistoryNumber= document.createElement('p')
        callHistoryNumber.innerText= serviceNumber
        callHistoryNumber.classList.add('linkHistoryNumber')

        const callHistoryContainer =document.getElementById("history-container")
        callHistoryContainer.appendChild(callHistoryName)
        callHistoryContainer.append(callHistoryNumber)
    }
})
}
callandCoinSpend("call-btn","service-name","service-number")
callandCoinSpend("call-btn2","service-name2","service-number2")
callandCoinSpend("call-btn3","service-name3","service-number3")
callandCoinSpend("call-btn4","service-name4","service-number4")
callandCoinSpend("call-btn5","service-name5","service-number5")
callandCoinSpend("call-btn6","service-name6","service-number6")
