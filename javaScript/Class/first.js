class person{
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sayHi(){
        console.log(`Hi ${this.name}`);
    }

}

const obj = new person("Srijan", 20);
console.log(obj.name);
console.log(obj.age);
obj.sayHi();

class customer extends person{
    constructor(name, age, account, balance){
        super(name, age);
        this.account = account;
        this.balance = balance;
    }

    checkBalance(){
        console.log(`Your balance is ${this.balance}`);
    }
}

const obj1 = new customer("Sri", 20, 12324494, 1000);
console.log(obj1);
obj1.sayHi();
obj1.checkBalance();
obj1.sayHi();
