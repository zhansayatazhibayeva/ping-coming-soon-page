document.querySelector('button[type="submit"]').addEventListener('click',function(event){
    event.preventDefault();

    let emailInput = document.querySelector('input[type="email"]');
    let emailValue = emailInput.value;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const wrongEmailMsg = document.querySelector('.wrong-email');

    if(!emailPattern.test(emailValue)){
        wrongEmailMsg.style.display = 'block';
        emailInput.style.border = 'solid red';

    }
    else{
        emailInput.value = "";
        wrongEmailMsg.style.display = 'none';
        emailInput.style.border = '1px solid hsl(223, 87%, 63%)';
    }


});