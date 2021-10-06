export class Dog {
    constructor(private _name: string) {

    }

    bark() {
        console.log(`${this._name} is barking.`);
    }

    get Name() {
        return this._name
    }

    set Name(value) {
        this._name = value;
    }
}