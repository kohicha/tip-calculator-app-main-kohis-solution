var billInput = document.querySelector('.bill-input');

var customAmount = document.querySelector('.custom-amount');

var numPeople = document.querySelector('.num-people');

var selectTip = document.getElementsByName('select'); 

var totalTip = document.querySelector('.total-tip');

var totalAmount = document.querySelector('.total-amt');


let bill;

let people = 0;

let custom;

let totaltip;

let totalamount;

numPeople.addEventListener('keydown', function(){
    setInterval(() => {
        people = parseInt(this.value);
    }, 300);
    
})


numPeople.addEventListener('keydown', function(){
    setInterval(() => {
        people = parseInt(this.value);
    }, 300);
    
})

billInput.addEventListener('keydown', function(){
    setInterval(() => {
        bill = parseFloat(this.value)
    }, 300);
});

customAmount.addEventListener('keydown', function(){
    setInterval(() => {
        tip = parseFloat(this.value/100).toFixed(2)
    }, 300);
})


for (let i = 0; i < selectTip.length; i++){

    customAmount.addEventListener('focus', () => {
        selectTip.forEach(el => {
            el.checked = false;
        })
    })

    
    selectTip[i].addEventListener('click', function(){    
        customAmount.value = ""
        tip = parseFloat(this.value/100).toFixed(2);
    })
}

function calculateTipPerson(){
    setInterval(() => {
        totaltip = (bill * tip) / people;
        totalTip.innerHTML = totaltip.toFixed(2).toString();
    }, 300);
    
}

function calculateTotalPerson(){
    setInterval(() => {
        totalamount = (bill + totaltip) / people;
        totalAmount.innerHTML = totalamount.toFixed(2).toString();
    }, 300);
    
}

numPeople.addEventListener('keydown', function(){
    error = document.querySelector('.error')
    if (numPeople.value == 0){
        error.classList.remove('hidden')
    }else{
        calculateTipPerson()
        calculateTotalPerson()
        error.classList.add('hidden')
        reset.disabled = false;
        reset.classList.remove('opacity-30')
        reset.classList.add('hover:bg-LightGrayishCyan')
    }
    
})

const reset = document.querySelector('.reset');
reset.disabled = true;
reset.addEventListener('click', function(){
    billInput.value = ""
    selectTip.forEach(el => {
        el.checked = false;
    })
    customAmount.value = ""
    numPeople.value = ""
    reset.disabled = true;
    reset.classList.add('opacity-30')
    reset.classList.remove('hover:bg-LightGrayishCyan')
})
