function insert(num){
document.getElementById('read').value = 
document.getElementById('read').value + num;
}
function clean(){
	document.getElementById('read').value = '';
}
function back(){
	var exp = document.getElementById('read').value;
	var stroka = exp.slice(0,-1);
	document.getElementById('read').value = stroka;
}
function ravno(){
	var otvet = document.getElementById('read').value;
	if(otvet){
		document.getElementById('read').value = eval(otvet);
	}
}

function clean2(){
	input.value ='';
}
function back2(){
	var exp2 = document.getElementById('input').value;
	var stroka2 = exp2.slice(0,-1);
	document.getElementById('input').value = stroka2;
}
function insert2(nul){
document.getElementById('input').value = document.getElementById('input').value + nul;
}
function insert3(){
	input.value = document.getElementById('input').value + '(';
}
function insert4(){
	input.value = document.getElementById('input').value + ')';
}
function ravno2(){
	var otvet2 = document.getElementById('input').value;
	if(otvet2){
		document.getElementById('input').value = eval(otvet2);
	}
}