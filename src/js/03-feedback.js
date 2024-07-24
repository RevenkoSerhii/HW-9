import throttle from "lodash.throttle";

const form = document.querySelector(".feedback-form");
const getedItem = localStorage.getItem("feedback-form-state");
if (getedItem) {
    const { email, message } = JSON.parse(getedItem);
    form.elements.email.value = email || '';
    form.elements.message.value = message || '';
}


form.addEventListener("input",throttle(onInput, 500) );
function onInput(){
    const email = form.elements.email.value;
    const message = form.elements.message.value;
    const formValues = {email, message};
    
    localStorage.setItem("feedback-form-state", JSON.stringify(formValues)); 
}


form.addEventListener("submit", (evt) => {
    evt.preventDefault();
    const email = form.elements.email.value;
    const message = form.elements.message.value;
    const formValues = { email, message };
    
    console.log(formValues);

    localStorage.removeItem("feedback-form-state");
    form.reset();
  });