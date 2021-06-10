var fib = [1, 1];
var prime = [2];

function sequence(){
	
	var max = document.getElementById("formInput").value;
	document.getElementById("title").innerHTML = Fib(max) + " and " + Prime(max);
	
}

function Fib(Max){
	for (var i = 2; i < Max; i++){
		fib[i] = fib[i - 1] + fib[i - 2];
	}
	return fib[fib.length-1];
}

function Prime(Max){
	var isPrime;

	for(n = 3; n <= Max; n++){
		isPrime = true;
		for(m of prime){
			if(n % m == 0){
				isPrime = false;
				continue;
			}
		}
		if(isPrime)prime.push(n);
	}
	return prime[prime.length-1];
}

//document.getElementById("box").elements[0].value