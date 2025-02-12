(function () {
    let form = document.querySelector('#contact-form');
    let inputName = document.querySelector('#user-name');
    let inputEmail = document.querySelector('#user-email');
    let inputText = document.querySelector('#contact-message');
    let button = document.querySelector('#submit-button');
    let letters = /^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/;

    function showErrorMessage(input, message) {
        let container = input.parentElement;
        let error = container.querySelector('.error-message');
        // Check if an error message exists

        if (error) {
            container.removeChild(error);
        }

        if (message) {
            let error = document.createElement('div');
            error.classList.add('error-message');
            error.innerText = message;
            container.appendChild(error);
        }
    }

    function validateName() {
        if (!inputName.value) {
            showErrorMessage(inputName, 'Name is a required field!');
            return false;
        }

        // Validate only letters and spaces
        if (!inputName.value.match(letters)) {
            showErrorMessage(inputName, 'Names can only have letters!');
            return false;
        }

        showErrorMessage(inputName, null);
        return true;
    }

    function validateEmail() {
        if (!inputEmail.value) {
            showErrorMessage(inputEmail, 'Email is a required field!');
            return false;
        }

        // Validate only emails with @ and a dot
        if (
            inputEmail.value.indexOf('@') === -1 ||
            inputEmail.value.indexOf('.') === -1
        ) {
            showErrorMessage(inputEmail, 'No valid email address!');
            return false;
        }

        showErrorMessage(inputEmail, null);
        return true;
    }

    // Validate containing message
    function validateMessage() {
        if (!inputText.value) {
            showErrorMessage(inputText, 'Your message is a required field!');
            return false;
        }

        showErrorMessage(inputText, null);

        return true;
    }

    // Validate form inputs
    function validateForm() {
        let isValidName = validateName();
        let isValidEmail = validateEmail();
        let isValidMessage = validateMessage();

        return isValidName && isValidEmail && isValidMessage;
    }

    inputName.addEventListener('input', validateName);
    inputEmail.addEventListener('input', validateEmail);
    inputText.addEventListener('input', validateMessage);

    // Prevent submit when 1 field is not valid
    form.addEventListener('submit', (e) => {
        if (!validateForm()) {
            e.preventDefault();
            showErrorMessage(button, 'Not all fields have valid content!');
            return false;
        }
        showErrorMessage(button, null);
        return true;
    });
})();
