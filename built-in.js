console.log("Math.PI", Math.PI);
console.log("Math.random()", Math.random());    //function이 객체에 소속되어 있으면 Method
console.log("Math.floor(3.9)", Math.floor(3.9));

const MyMath = {
    PI: Math.PI,
    random: () => {
        return Math.random();
    },
    floor: (val) => {
        return Math.floor(val);
    }
}

console.log("MyMath.PI", MyMath.PI);
console.log("MyMath.floor", MyMath.floor(3.5));

