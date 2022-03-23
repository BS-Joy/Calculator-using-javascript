function show(val){
     document.getElementById('display').value += val;
}

function allClear(){
    document.getElementById('display').value = '';
}

function del(){
    var getDisplay = document.getElementById('display').value;
    var displayString = getDisplay.toString();
    var newValue = displayString.slice(0, displayString.length - 1);
    document.getElementById('display').value = newValue;
}

function solve(){
    var getValue = document.getElementById('display').value;
    if(getValue == '' || getValue == '/ * - +'){
        document.getElementById('display').value = '';
    }
    else{
        var evalValue = eval(getValue);
        document.getElementById('display').value = evalValue;
    }
    
}