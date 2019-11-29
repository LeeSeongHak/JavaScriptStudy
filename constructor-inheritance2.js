// 부모로 사용할 생성자 함수를 정의한다(이곳에 중복되는 코드를 담는다)
function ParentConstructor() {
    this.num01 = 10;
}
ParentConstructor.prototype.func01 = function () {
    console.log('this.num01 = ' + this.num01);
};

// firstConstructor 
function FirstConstructor() {

}

// 상속 
FirstConstructor.prototype = new ParentConstructor();
FirstConstructor.prototype.func02 = function () {
    console.log('func02 는 ConstructorA 에서만 정의한 메소드');
};

// SecondConstructor 
function SecondConstructor() {

}

// 상속 
SecondConstructor.prototype = new ParentConstructor();
SecondConstructor.prototype.func02 = function () {
    console.log('이 기능은 MyClassB 에 있는 고유 기능입니다');
};

// 인스턴스 생성 
var firstConst = new FirstConstructor();

// 프로퍼티와 메서드 접근 
firstConst.func01(); // this.num01 = 10 
firstConst.func02(); // func02 는 ConstructorA 에서만 정의한 메소드 

// 인스턴스 생성 
var SecondConst = new SecondConstructor();

// 프로퍼티와 메서드 접근 
SecondConst.func01(); // this.num01 = 10 
SecondConst.func02(); // func02 는 ConstructorB 에서만 정의한 메소드

console.log(SecondConstructor.prototype);