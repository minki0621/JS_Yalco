let raphael = {
  name : '신석용',
  age : 32,
  goodLook : true,
  introduce : function () {
    return `my name is ${this.name}, my age is ${this.age},
    and I am ${this.goodLook ? 'handsome' : 'ugly'}..thankyou`;
  }
}

console.log(raphael.introduce());
//this를 붙이지 않으면 오류 발생.  또한 function 키워드의 함수와 화살표 함수의 this는 서로 다른 것을 가리킨다.





// calculate
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;

// evaluate
const isOdd = (number) => !!(number % 2);
const isPositive = (number) => number > 0;

function calcAndEval (calc, eval, x, y) {
  return eval(calc(x, y));
}

console.log(
  calcAndEval(add, isOdd, 5, 7),
  calcAndEval(subtract, isPositive, 5, 7),
  calcAndEval(multiply, isOdd, 5, 7)
);
//- 고차함수: 다른 함수를 인자로 받는, 함수를 다루는 함수
// - 위에서는 calcAndEval 함수
// - calcAndEval함수는 calc와 eval 두 개의 함수를 인자로 받고, 이를 활용하여 계산 수행.
// - 콜백함수: 다른 함수에게 인자로 전달되는 함수
// - 위에서는 isOdd와 isPositive 함수


function getIntroFunc (name, formal) {
  return formal 
  ? function () {
    console.log(`안녕하십니까, 신입개발자 ${name}이라고 합니다.`);
  } : function () {
    console.log(`안녕 난 잘생기고 착한 ${name}이라고 해. 반가워`);
    }
}

const aint = getIntroFunc ('신석용', true);
const bint = getIntroFunc ('신민기', false);

aint();
bint();
//formal로 true와 false를 구분하여 ?… : 연산자에 써먹을 수 있다는 것과
//함수를 넣은 상수에() 를 붙임으로써 호출 할 수 있다는 것에 주의하자




const add = (a, b) => a + b;
// const add = function (a,b) {
//   return a + b;
// }
const sub = (a, b) => a - b;
const mul = (a, b) => a * b;
const div = (a, b) => a / b;

function comb3ArmFuncs(armFunc1, armFunc2, armFunc3) {
  return (x, y) => armFunc3(armFunc2(armFunc1(x, y), y), y);
}
// function comb3ArmFuncs(armFunc1, armFunc2, armFunc3) {
//   return function(x, y) {
//     return armFunc3(armFunc2(armFunc1(x, y), y), y);
//   };
// }

const add_mul_sub = comb3ArmFuncs(add, mul, sub);
const mul_add_div = comb3ArmFuncs(mul, add, div);
const div_add_mul = comb3ArmFuncs(div, add, mul);

console.log(
  add_mul_sub(10, 4),
  mul_add_div(10, 4),
  div_add_mul(10, 4)
);
//어려운 함수 예시. 이해하면 너 최고

