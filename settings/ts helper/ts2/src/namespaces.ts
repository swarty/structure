// form-namespace.ts additional

/// <reference path="form-namespace.ts"/>

namespace nForm {
	class MyForm{
		private type: FormType = 'inline';
		private state: FormState = 'active';
	
		constructor(public email: string) {
	
		}
	
		getInfo(): FormInfo {
			return {
				type: this.type,
				state: this.state
			}
		}
	}
	
	
	const myForm = new MyForm('lol@example.com');
	console.log(myForm);
}
