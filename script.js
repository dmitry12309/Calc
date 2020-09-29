let lastOperand = 0;
let operation = null;
let btnUnary = document.getElementById('btn_unar');



const inputWindow = document.getElementById('inputWindow');






document.getElementById('btn_1').addEventListener('click', function () {
    inputWindow.value += '1'; //Число 1
})

document.getElementById('btn_2').addEventListener('click', function () {
    inputWindow.value += '2'; //Число 2
})

document.getElementById('btn_3').addEventListener('click', function () {
    inputWindow.value += '3'; //Число 3
})

document.getElementById('btn_4').addEventListener('click', function () {
    inputWindow.value += '4'; //Число 4
})

document.getElementById('btn_5').addEventListener('click', function () {
    inputWindow.value += '5'; //Число 5
})

document.getElementById('btn_6').addEventListener('click', function () {
    inputWindow.value += '6'; //Число 6
})

document.getElementById('btn_7').addEventListener('click', function () {
    inputWindow.value += '7'; //Число 7
})

document.getElementById('btn_8').addEventListener('click', function () {
    inputWindow.value += '8'; //Число 8
})

document.getElementById('btn_0').addEventListener('click', function () {
    inputWindow.value += '0'; //Число 0
})

document.getElementById('btn_9').addEventListener('click', function () {
    inputWindow.value += '9'; //Число 9
})

document.getElementById('btn_clr').addEventListener('click', function () {
    lastOperand = 0;
	operation = null;
	inputWindow.value = '0';
	outputWindow.value += '; ';

    
})


document.getElementById('btn_sum').addEventListener('click', function () {
    lastOperand = parseInt(inputWindow.value); //sum
    operation ='sum';
    inputWindow.value ='';

    
})


document.getElementById('btn_def').addEventListener('click', function () {
    lastOperand = parseInt(inputWindow.value); //def
    operation ='def';
    inputWindow.value ='';

})
document.getElementById('btn_multiply').addEventListener('click', function () {
    lastOperand = parseInt(inputWindow.value); //multiply
    operation ='multiply';
    inputWindow.value ='';
})


document.getElementById('btn_divide').addEventListener('click', function () {
    lastOperand = parseInt(inputWindow.value); //divide
    operation ='divide';
    inputWindow.value ='';
})

document.getElementById('btn_sqrt').addEventListener('click', function () {
    lastOperand = parseInt(inputWindow.value); //sqrt
    operation ='sqrt';
    inputWindow.value ='';
})







document.getElementById('btn_calc').addEventListener('click', function () {
    if (operation ==="def"){
        const result = lastOperand -parseInt(inputWindow.value);
        operation=null;
        lastOperand = 0;
        inputWindow.value = result;
    }
    if (operation ==="sum"){
        const result = lastOperand +parseInt(inputWindow.value);
        operation=null;
        lastOperand = 0;
        inputWindow.value = result;
    }
    if(operation==="divide"){
        const result = lastOperand /parseInt(inputWindow.value);
        operation=null;
        lastOperand = 0;
        inputWindow.value = result;
    }
    if(operation==="multiply"){
        const result = lastOperand * parseInt(inputWindow.value);
        operation=null;
        lastOperand = 0;
        inputWindow.value = result;

    }

    if(operation==="sqrt"){
        const result = Math.sqrt (parseInt(inputWindow.value));
        operation=null;
        lastOperand = 0;
        inputWindow.value = result;

    }

    
    

    
})





btnUnary.addEventListener('click', function () {
    inputWindow.value = inputWindow.value * (-1);
})





// Доделать корень,умножение ,деление 


