function Person(name, first, second){
    this.name=name;
    this.first=first;
    this.second=second;
    this.sum=function(){
        return this.first + this.second;
    }
}

const kim = new Person('kim', 10, 20);
const lee = new Person('lee', 10, 10);

const d1 = new Date('2019-4-10');
console.log(d1.getFullYear());



console.log('Person()', Person());
//Constructor
console.log('new Person()', new Person());

