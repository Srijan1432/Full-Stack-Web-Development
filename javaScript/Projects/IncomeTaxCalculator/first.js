const form = document.querySelector('form');
form.addEventListener('submit',(e)=>{

    e.preventDefault();
    
    const income = document.getElementById('income').value;

    const result = document.querySelector('h2');

    let total_tax = 0;
    if(income <= 1200000){
        total_tax = 0;
    }
    else if(income > 1200000 && income <= 1600000){
        total_tax = (income - 1200000) * 0.15;
    }
    else if(income > 1600000 && income <= 2000000){
        total_tax = (income - 1600000) * 0.20 + 60000;
    }
    else if(income <= 2400000){
        total_tax = (income - 2000000) * 0.25 + 80000 + 60000;
    }
    else{
        total_tax = (income - 2400000) * 0.30 + 100000 + 80000 + 60000;
    }
    result.textContent = `Total tax: ${total_tax}`;
    form.reset();
})