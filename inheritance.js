class Parent{
    constructor(){
        this.fatherName = "schwerzniger";
    }
}
class Child extends Parent{
    constructor(name){
        super();
        this.name=name;

    }
    getfull(){
        return this.name + ' ' + this.fatherName;
    }
}
const baby= new Child('arnold');
const baby2= new Child('abul');
console.log(baby.getfull());