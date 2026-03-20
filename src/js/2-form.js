const formData = {
    message : '',
    email: '',
}
const form = document.querySelector('.feedback-form');

if(localStorage.getItem("feedback-form-state")){
    const loadedData = JSON.parse(localStorage.getItem("feedback-form-state"));
    formData.email = loadedData.email;
    formData.message = loadedData.message;
    form.email.value = formData.email;
    form.message.value = formData.message;
}

form.addEventListener('submit',e=> {
    e.preventDefault();
    if (form.email.value && form.message.value){
        console.log(formData);
        formData.email = '';
        formData.message = '';
        localStorage.removeItem('feedback-form-state');
    }else{
        alert('Fill please all fields');
        return;
    }
    form.reset()
})

form.addEventListener('input',e=>{
    const fD = new FormData(form);
    formData.message = fD.get('message');
    formData.email = fD.get('email');
    localStorage.setItem("feedback-form-state",JSON.stringify(formData));
})
