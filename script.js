var billInput = document.querySelector('.bill-input');

var customAmount = document.querySelector('.custom-amount');

var numPeopleAmount = document.querySelector('.num-people');

var selectTip = document.getElementsByName('select'); 

var totalTip = document.querySelector('.total-tip');

var totalAmount = document.querySelector('.total-amt');

let bill;

let people = 0;

let custom;

let totaltip;

let totalamount;

numPeopleAmount.addEventListener('change', function(){

        people = parseInt(this.value);

    
})

billInput.addEventListener('change', function(){

        bill = parseFloat(this.value)

});

customAmount.addEventListener('change', function(){

        tip = parseFloat(this.value/100).toFixed(2)

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
        totaltip = (bill * tip) / people;
        totalTip.textContent = totaltip.toFixed(2).toString();
}

function calculateTotalPerson(){
        totalamount = (bill + totaltip) / people;
        totalAmount.textContent = totalamount.toFixed(2).toString();
    
}

numPeopleAmount.addEventListener('change', function(){
    error = document.querySelector('.error')
    if (numPeopleAmount.value == 0){
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
    numPeopleAmount.value = ""
    totalAmount.textContent = "0.00"
    totalTip.textContent = "0.00"
    reset.disabled = true;
    reset.classList.add('opacity-30')
    reset.classList.remove('hover:bg-LightGrayishCyan')
})
