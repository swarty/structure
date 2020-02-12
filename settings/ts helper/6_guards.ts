// helpful constructions that can help for us with types


// #1
function strip(x: string | number) {
	if(typeof x === 'number') return x.toFixed(2);
	return x.trim();
}


// #2
class MyResponce {
	header = 'response header';
	result = 'response result';
}

class MyError {
	header = 'error header';
	message = 'error message';
}

function handle(responce: MyResponce | MyError) {
	if(responce instanceof MyResponce) return {info: responce.header + responce.result};
	return {info: responce.header + responce.message};
}


// #3
type AlertType = 'success' | 'danger' | 'warning';

function setAlertType(type: AlertType) {
	// ....
}

setAlertType('success');
// setAlertType('default'); // error
