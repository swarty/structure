// #1
interface Person{
	name: string,
	age: number
}

type PersonKeys = keyof Person // 'name' | 'age'

let key: PersonKeys = 'name';
key = 'age';
// key = 'lal'; // lal not exist in interface Person


// #2

type User = {
	_id: number,
	name: string,
	email: string,
	createdAt: Date
}

// #first
type UserKeysNoMeta1 = Exclude<keyof User, '_id' | 'createdAt'>; // 'name' | 'email'
type UserKeysNoMeta2 = Pick<User, 'name' | 'email'>;

let u1: UserKeysNoMeta1 = 'name';
// u1 = 'age';