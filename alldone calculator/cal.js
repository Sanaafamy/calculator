function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    try {
        const result = eval(document.getElementById('display').value);
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}
function percentage (){
   
    var b=eval (document.getElementById('display').value);
    document.getElementById('display').value=b/100;
}
function doublezero(){
    document.getElementById('display').value.value+=value;
}


