var num1 = document.createElement('input');
var num2 = document.createElement('input');
var sel = document.createElement('select');
var btn = document.createElement('button');
var result = document.createElement('span');
num1.type = 'number';
num2.type = 'number';

num1.placeholder = 'первое число';
num2.placeholder = 'второе число';
btn.innerHTML = ' = ';

document.body.appendChild(num1);
document.body.appendChild(sel);
document.body.appendChild(num2);
document.body.appendChild(btn);
document.body.appendChild(result);

for (var i = 0; i < operation.length; i++) {
	var opt = document.createElement('option');
	sel.appendChild(opt);
	opt.value = operation[i];
	opt.innerHTML = operation[i];
}

btn.onclick = function(event) {
	if (sel.value === '-' && num2.value < 0) {
		sel.value = '+';
		num2.value = Math.abs(num2.value);
	}
	result.innerHTML = eval(num1.value + sel.value + num2.value);
};
