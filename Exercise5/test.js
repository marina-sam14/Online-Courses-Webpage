var forms = document.querySelectorAll('.validate');
for (var i = 0; i < forms.length; i++) {
    forms[i].setAttribute('novalidate', true);
}

var hasError = function (field) {

    if(field.disabled || field.type === 'file' || field.type === 'reset' || field.type === 'submit' || field.type === 'button') return;

    var validity = field.validity;

    if (validity.valid) return;

    if (validity.valueMissing) return 'Please fill out this field.';
    
    if (validity.typeMismatch) {
        
        if (field.type === 'email') return 'Please enter an email address.';

        if (field.type === 'url') return 'Please enter a URL.';

    }

    if (validity.tooShort) return 'Please lengthen this text to ' + field.getAttribute('minLength') + ' characters or more. You are currently using ' + field.value.length + ' characters.';

    if (validity.tooLong) return 'Please short this text to no more than ' + field.getAttribute('maxLength') + ' characters. You are currenlty using ' + field.value.length + ' characters.';

    if (validity.badInput) return 'Please enter a number.';

    if (validity.stepMismatch) return 'Please select a valid value.';

    if (validity.rangeOverflow) return 'Please select a value that is no more than ' + field.getAttribute('max') + '.';

    if (validity.rangeUnderflow) return 'Please select a value that is no less than ' + field.getAttribute('min') + '.';

    if (validity.patternMismatch) {
        
        if (field.hasAttribute('title')) return field.getAttribute('title');
        
        return 'Please match the requested format.';

    }

    return 'The value you entered for this field is invalid.';

};

var showError = function (field, error) {

    field.classList.add('error');

    if (field.type === 'radio' && field.name) {
        var group = document.getElementsByName(field.name);
        if (group.length > 0) {
            for (var i = 0; i < group.length; i++) {
                if (group[i].form !== field.form) continue;
                group[i].classList.add('error');
            }
            field = group[group.length - 1];
        }
    }

    var id = field.id || field.name;
    if (!id) return;

    var message = field.form.querySelector('.error-message#error-for-' + id);
    if(!message) {
        message = document.createElement('div');
        message.className = 'error-message';
        message.id = 'error-for-' + id;
        field.parentNode.insertBefore( message, field.nextSibling);

        var label;
        if (field.type === 'radio' || field.type === 'checkbox') {
            label = field.form.querySelector('label[for="' + id + '"]') || field.parentNode;
            if (label) {
                label.parentNode.insertBefore( message, label.nextSibling);
            }
        }

        if (!label) {
            field.parentNode.insertBefore( message, field.nextSibling);
        }
    }

    field.setAttribute('aria-describedby', 'error-for-' + id);

    message.innerHTML = error;

    message.style.display = 'block';
    message.style.visibility = 'visible';

};

var removeError = function (field) {

    field.classList.remove('error');

    field.removeAttribute('aria-describedby');

    if (field.type === 'radio' && field.name) {
        var group = document.getElementsByName(field.name);
        if (group.length > 0) {
            for (var i = 0; i < group.length; i++) {
                if (group[i].form !== field.name) continue;
                group[i].classList.remove('error');
            }
            field = group[group.length - 1];
        }
    }

    var id = field.id || field.name;
    if (!id) return;

    var message = field.form.querySelector('.error-message#error-for-' + id + '');
    if (!message) return;

    message.innerHTML = '';
    message.style.display = 'none';
    message.style.visibility = 'hidden';

};

document.addEventListener('blur', function (event) {

    if (!event.target.form.classList.contains('validate')) return;

    var error = hasError(event.target);

    if (error) {
        showError(event.target, error);
        return;
    }

    removeError(event.target);

}, true);

document.addEventListener('submit', function (event) {

    if(!event.target.form.classList.contains('validate')) return;

    var fields = event.target.elements;

    var error, hasErrors;
    for (var i = 0; i <fields.length; i++) {
        error = hasError(fields[i]);
        if (error) {
            showError (fields[i], error);
            if (!hasErrors) {
                hasErrors = fields[i];
            }
        }
    }
    
    if (hasErrors) {
        event.preventDefault();
        hasErrors.focus();
    }

}, false);