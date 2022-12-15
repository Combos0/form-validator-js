import './style.css';
import initialLoader from './loader';

initialLoader();
checksFormValidation();
//subscribe form stuff
function checksFormValidation() {
    //form
    const form = document.getElementById('subscribe-form');
    //all form input fields
    const nameField = document.getElementById('name');
    const emailField = document.getElementById('email');
    const countryField = document.getElementById('country');
    const zipField = document.getElementById('zip-code');
    const submitButton = document.getElementById('form-submit');

    emailField.addEventListener('input', (event) => {
        if (emailField.validity.typeMismatch) {
            emailField.setCustomValidity('A valid email address is required.');
            emailField.reportValidity();
        } else {
            emailField.setCustomValidity('');
        };
    });

    
}