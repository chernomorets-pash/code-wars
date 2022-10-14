// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.
// If the function is passed a valid PIN string, return true, else return false.

function validatePIN (pin) {
    return typeof (pin) === 'number' && (pin.length = 6) && (pin.length = 4)  ? console.log('Trus') : console.log('False!');
}


validatePIN(123456);
validatePIN(123);
validatePIN(1234);
validatePIN(0000000000);
validatePIN("scneoic");
validatePIN(undefined);
