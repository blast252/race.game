const comboDOM = document.getElementById("combo");
const ball1DOM = document.getElementById("ball1");
const ball2DOM = document.getElementById("ball2");
const ball3DOM = document.getElementById("ball3");
const ball4DOM = document.getElementById("ball4");



const startClickHandler = () => {
    const selecctValue = comboDOM.value;

    if (selecctValue === "") {
        return alert("공을 선택해주세요.");
    }

    setInterval(() => {
        let ran1 = Math.random() * 30 + 1;
        ran1 = Math.floor(ran1);
        let ran2 = Math.random() * 30 + 1;
        ran2 = Math.floor(ran2); 
        let ran3 = Math.random() * 30 + 1;
        ran3 = Math.floor(ran3);  
        let ran4 = Math.random() * 30 + 1;
        ran4 = Math.floor(ran4); 

        if(ball1DOM.style.marginLeft === "") {
            ball1DOM.style.marginLeft = ran1 + "px";
        } else {
            let currentValue1 = ball1DOM.style.marginLeft;
            currentValue1 = currentValue1.split("p");
            currentValue1 = parseInt(currentValue1) + ran1;
            currentValue1 = currentValue1 + "px"
            ball1DOM.style.marginLeft = currentValue1;}
        if(ball2DOM.style.marginLeft === "") {
            ball2DOM.style.marginLeft = ran2 + "px";
        } else {
            let currentValue2 = ball2DOM.style.marginLeft;
            currentValue2 = currentValue2.split("p");
            currentValue2 = parseInt(currentValue2) + ran2;
            currentValue2 = currentValue2 + "px"
            ball2DOM.style.marginLeft = currentValue2;}
        if(ball3DOM.style.marginLeft === "") {
            ball3DOM.style.marginLeft = ran3 + "px";
        } else {
            let currentValue3 = ball3DOM.style.marginLeft;
            currentValue3 = currentValue3.split("p");
            currentValue3 = parseInt(currentValue3) + ran3;
            currentValue3 = currentValue3 + "px"
            ball3DOM.style.marginLeft = currentValue3;}
        if(ball4DOM.style.marginLeft === "") {
            ball4DOM.style.marginLeft = ran4 + "px";
        } else {
            let currentValue4 = ball4DOM.style.marginLeft;
            currentValue4 = currentValue4.split("p");
            currentValue4 = parseInt(currentValue4) + ran4;
            currentValue4 = currentValue4 + "px"
            ball4DOM.style.marginLeft = currentValue4;}
                
    }, 70);

}

// 끝에 닿으면 멈추고 누가 우승을 했고 누가 패배를 했는지 밑에 표시되게 하기