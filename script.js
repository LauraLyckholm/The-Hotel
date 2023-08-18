
let startInput = document.getElementById('checkin-date');
let endInput = document.getElementById('checkout-date');
let messageDiv = document.getElementById('message');
let submitButton = document.getElementById('submit');

let compare = () => {
    let startValue = (new Date(startInput.value)).getTime();
    let endValue = (new Date(endInput.value)).getTime();

    if (endValue < startValue) {
        messageDiv.innerHTML = 'Start date must be before end date!';
        submitButton.disabled = true;
    } else {
        messageDiv.innerHTML = '';
        submitButton.disabled = false;
    }
};

startInput.addEventListener('change', compare);
endInput.addEventListener('change', compare);