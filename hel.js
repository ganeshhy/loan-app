// // function circla(){
// //     return{
// //         name:"ganesh",
// //         age:20,
// //         cre:function(){
// //             console.log("hello ${this.name}")

// //         }
// //     }
// // }
// // console.log(circla())
// // const person={
// //     name:"ganesh",
// //         age:25,
// //         getbirthday:function(){
// //         return  2005-this.age
// //     },
// //     hobbeis:["eat","sleep","code"],
// //     gethobbies:function(){
// //         this.hobbeis.forEach(function(hobby){
// // console.log(this.name,hobby)
// //         },this)
// //     }
// // }
// // person.gethobbies()
// // function Customer(name,age,phone){
// //     person.call(this,name,age)
// // }
// // function Person(firstname,lastname){
// //     this.firstname=firstname;
// //     this.lastname=lastname;
// // }
// // const p1=new Person("ganesh","hy")
// // console.log(p1)
// // function person2(firstname,lastname,age){
// //     Person.call(this,firstname,lastname)
// //     this.age=age
// // }
// // const p2=new person2("gane","h",23)
// // console.log(p2)
// const prot={
//      getFullname:function(){
//         return `${this.firstname} ${this.lastname}`
//      },
//      getChangeName:function(Lastnamed){
//         this.lastname=Lastnamed

//     }
// }
// const Mani=Object.create(prot)
// Mani.firstname="ganesh";
// Mani.lastname="hy";
// console.log(Mani)
// Mani.getChangeName("hello");
// console.log(Mani.getFullname())
// const kaluva=Object.create(prot,{
//     firstname:{
//         value:"kal"
//     },
//     lastname:{
    
//         value:"chandru"
//     }
//     })
// console.log(kaluva)
// console.log(kaluva.getFullname())
class person{
    constructor(firstname,lastname){
        this.firstname=firstname;
        this.lastname=lastname;
    }
    getFullname(){
        return `${this.firstname}${this.lastname}`
    }
}
const p1=new person("ganei","hy");
console.log(p1)
class person2 extends person{
    constructor(firstname,lastname,age,phone){
        super(firstname,lastname)
        this.age=age;
        this.phone=phone;
    }
    static addn(a,b){
        return a+b
    }
}
const p2=new person2("gani","hy",23,232435);
console.log(p2.getFullname())
console.log(person2.addn(2,3))