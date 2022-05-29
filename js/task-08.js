const form = document.querySelector(".login-form");

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    
    console.log(formData);
    
    const {
        elements: { email, password }
        } = event.currentTarget;
    
    if (email.value === "" || password.value === "") {
        return alert("Please fill in all the fields!");
    }
    
    const elements = {
        email: email.value,
        password: password.value,
    }
    
    console.log(elements);
    event.currentTarget.reset();

}
