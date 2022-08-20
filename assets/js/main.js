
let screenDisplay = (val) => { return document.getElementById('resultt').value+= val}

let result = () => {
let x = document.getElementById('resultt').value;
let y = eval(x);
return document.getElementById('resultt').value = y;
}
