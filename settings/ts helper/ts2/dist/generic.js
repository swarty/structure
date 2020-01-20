"use strict";
const cars = ['ford', 'audi'];
const cars2 = ['mistake'];
const promise = new Promise((resolve) => {
    setTimeout(function () {
        resolve('promise resolved');
    }, 1000);
});
promise.then(data => {
    console.log(data.toLocaleLowerCase());
});
function mergeObjects(a, b) {
    return Object.assign({}, a, b);
}
const merged = mergeObjects({ name: 'Dmytro' }, { age: 24 });
console.log(merged, merged.name, merged.age);
function withCount(value) {
    return {
        value,
        count: 'In this object ' + value.length + ' synbols'
    };
}
console.log(withCount('Hello TypeScript'));
console.log({ length: 20 });
function getObjectValue(obj, key) {
    return obj[key];
}
const person = {
    name: 'Dmytro',
    age: '24',
    job: 'scatman'
};
console.log(person, 'name');
console.log(person, 'age');
console.log(person, 'job');
class Collection {
    constructor(item) {
        this._items = [];
        this._items = item;
    }
    add(item) {
        this._items.push(item);
    }
    remove(item) {
        this._items = this._items.filter(i => i !== item);
    }
    get items() {
        return this._items;
    }
}
const strings = new Collection(['i', 'am', 'strings']);
console.log(strings);
strings.add('!');
strings.remove('am');
console.log(strings.items);
const numbers = new Collection([1, 2, 3, 4]);
numbers.add(2);
numbers.remove(1);
console.log(numbers);
function createAndValidateCar(model, year) {
    const car = {};
    if (model.length > 3) {
        car.model = model;
    }
    if (year > 2000) {
        car.year = year;
    }
    return car;
}
const cars3 = ['lal', 'Audi'];
const ford = {
    model: 'Ford',
    year: 2020
};
//# sourceMappingURL=generic.js.map