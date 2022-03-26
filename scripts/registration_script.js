function setListener(element, event, callback) {
    if(typeof element === 'object') {
        element.addEventListener(event, callback);
        return;
    }

    document.getElementById(element).addEventListener(event, callback);
}


function showErrorMessage(message) {
   const messageElement = document.getElementById('registration-form-error-info');  

   messageElement.innerText = message;
   messageElement.classList.remove('registration-form_error-info_invisible');
}

function hideErrorMessage() {
    document.getElementById('registration-form-error-info').classList.add('registration-form_error-info_invisible');
}


function setFormSubmitListener(formElement) {
    setListener(formElement, 'submit', (evt) => {
        evt.preventDefault();
        
        let checkFillField = true;
        for(let element of evt.srcElement) {
            if(element.type === 'submit') continue;

            if(element.value === '') {
                checkFillField = false;
                element.classList.add('registration-form__input_error');
            }
        }

        if(!checkFillField) showErrorMessage('Заполните поля!');
    });
}

function setFormListeners() {
    const formElement = document.getElementById('registration-form');
    setFormSubmitListener(formElement);
}


function setInputsClick() {
    const collectionInputs = document.getElementsByClassName('registration-form__input');

    for(let i = 0; i < collectionInputs.length; i++) {
        setListener(collectionInputs[i], 'focus', (evt) => {
            evt.srcElement.classList.remove('registration-form__input_error');
            hideErrorMessage();
        });
    }
}


function setListeners() {
    setFormListeners();
    setInputsClick();
}   


setListeners();