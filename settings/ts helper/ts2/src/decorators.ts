// #1 class decorator
function Log(constructor: Function): void {
	console.log(constructor);
}

// #2 decorator for entities
function Log2(target: any, propName: string | Symbol): void {
	console.log(target)
	console.log(propName)
}

// #3 methods decorator
function Log3(target: any, propName: string | Symbol, descriptor: PropertyDescriptor) {
	console.log(target, propName, descriptor);
}


// @Log
// class Component {
// 	@Log2
// 	name: string;

// 	constructor(name: string) {
// 		this.name = name;
// 	}

// 	@Log3
// 	logName(): void {
// 		console.log('Component name ' + this.name)
// 	}

// 	@Log3
// 	get componentName() {
// 		return this.name;
// 	}
// }

interface ComponentDecorator {
	selector: string,
	template: string,
}


function Component(config: ComponentDecorator): Function {
	return function <T extends { new(...args : any[]): object }>
	(Constructor: T) {
		return class extends Constructor {
			constructor(...args: any[]) {
				super(...args);

				const el = document.querySelector(config.selector)!;
				el.innerHTML = config.template;
			}
		}
	}
}


function Bind(_: any, _2: any, descriptor: PropertyDescriptor): PropertyDescriptor {
	const original = descriptor.value;
	return {
		configurable: true,
		enumerable: false,
		get() {
			return original.bind(this);
		}
	}
}


@Component({
	selector: '#card',
	template: `
		<div class="card">
			<div class="card-content">
				<span class="card-title">Card component</span>
			</div>
		</div>
	`
})
class CardComponent {

	constructor(public name: string) {}

	@Bind
	logName(): void {
		console.log('Component name ' + this.name)
	}
}


const card = new CardComponent('My Card Component'),
			btn = document.querySelector('#btn')!;

// btn.addEventListener('click', _ => card.logName());
// or with decorators
btn.addEventListener('click', card.logName);







// #4
type ValidatorType = 'required' | 'email';

interface ValidatorConfig {
	[prop: string]: {
		[validateProp: string]: ValidatorType
	}
}

const validators: ValidatorConfig = {};

function Required(target: any, propName: string) {
	validators[target.constructor.name] = {
		...validators[target.constructor.name],
		[propName]: 'required'
	}
}

function validate(obj: any): boolean {
	const objConfig = validators[obj.constructor.name];
	console.log(objConfig, obj.constructor, obj.constructor.name);
	let isValid = true;

	if(!objConfig) return isValid;

	
	Object.keys(objConfig).forEach( (key: string) => {
		if(objConfig[key] ==='required') {
			isValid = isValid && !!obj[key];
		}
	});
	return isValid;
}

class Form {
	@Required
	public email: string | null | void;

	constructor(email?: string) {
		this.email = email || null;
	}
}

const form = new Form('lal@example.com');

if(validate(form)) {
	console.log('valid: ', form);
} else {
	console.log('Validation error: ', form);
}

// Описание декоратора - как функции обертки, который добавляет в обьект некую новую функциональность, не зависящую напрямую от самого обьекта. 
// Т.е. в форму нам нужно поместить емейл, но сама форма не отвечает за валидацию емейла, а получить нужно уже верный эмейл - декоратор создается для валидации значения перед помещением его в форму.