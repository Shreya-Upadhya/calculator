let display = document.getElementById('screen');

const wipe = () => {
    display.value = '';
}
const clr = () => {
    const currentValue = display.value;
    if (currentValue.length > 0) {
        display.value = currentValue.slice(0, -1);
    }
}
   
const show = (n) => {
    display.value += n;
}
const calc = () => {
    try {
        display.value = eval(display.value);
    } catch (error) {
        // Handle any errors (e.g., invalid expressions)
        display.value = 'Error';
    }
}