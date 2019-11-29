//생성자의 역할 : 객체를 만든다. 객체의 초기 상태를 세팅한다.
function Person(name, first, second){
    this.name=name;
    this.first=first;
    this.second=second;
}

Person.prototype.sum = function(){
    return 'prototype : ' +(this.first + this.second);
}

const kim = new Person('kim', 10, 20);
kim.sum=function(){
    return 'this: ' +(this.first+this.second);
}
const lee = new Person('lee', 10, 10);

console.log('kim.sum()', kim.sum());
console.log('lee.sum()', lee.sum());
