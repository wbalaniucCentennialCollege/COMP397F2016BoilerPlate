console.log("Game is starting");

class Person {
    protected _name : string;

    constructor(name:string) {
        this._name = name;
    }

    public speak() : void {
        console.log(this._name + " says super hello");
    }
}

class Student extends Person {
    private _studentNum : number;

    constructor(name:string, studentNum:number){
        super(name);
        this._studentNum = studentNum;
    }

    public studies() : void {
        console.log(this._name + " is studying");
    }
}

var person : Person = new Person("Wallace");
person.speak();



var student : Student = new Student("Jason", 123456789);
student.speak();
student.studies();