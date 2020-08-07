const person={name:'jack william', age:17,job:'facebooker',gfname:'ema watson',address:'kochukhet',phone:01718456788,friends:['tom hanks','tom younks','tom cruise']}
// const gfname=person.gfname;
const complexobj={
    name:'abul',
    info: {
        address:'kolabagna',
        leader:'tiger'
    }
}
const {leader}= complexobj.info;
const {phone,gfname,job,address} = person;
console.log(leader);
console.log(gfname,phone,job,address);
console.log(gfname,phone,job,address);

const friends=['sakib khan','arman khan','salman khan','sahruk khan','amir khan'];
const [chotofriend,nextfriend,...restfriends]=friends;
console.log(chotofriend,nextfriend);
console.log(restfriends);
