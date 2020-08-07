class student{
    constructor(sId,sName){
        this.id = sId;
        this.name = sName;
        this.school = 'kolimunnesa school';

    }

}
const student1 = new student (12, 'shuvo');
const student2 = new student (11, 'fahim');
const student3 = new student (14,'bappi')
console.log(student1.name,student2.name,student3);