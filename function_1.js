function allArithemics2 (i, j) {
  return (`${i} + ${j} = ${i + j}`);
} //return만 할 뿐 출력하지 않음에 주의.

//let c = 5, d = 4;
//let z = allArithemics2(c, d);
//굳이 변수를 더 만들어? 메모리 차지하게? 안좋은 방법이야.
let z = allArithemics2 (c, d);// 더 보기 깔끔하다
console.log(z);


function allArithemics2 (i, j) {
  return (`${i} + ${j} = ${i + j}`);
} //return만 할 뿐 출력하지 않음에 주의.
console.log(allArithemics2(5, 4));

//- 위 예시에서 변수z에 함수 return값을 넣는 방법은 함수의 반환값을 저장하고 나중에 재사용하기 위함이고
//console.log()로 바로 확인 하는 방법은 디버깅 목적으로 사용됩니다. 재사용 불가.

const subt = function (x, y) {
  return x - y;
}
console.log(subt(7, 2));
//변수에 바로 함수를 대입하는 방법도 있어요.



// 한 줄 안에 값만 반환시
const mult = (x, y) => x * y;
// = (인자값1, 인자값2) => 반복작업내
console.log(mult(2, 7));
//화살표 함수에는 return문이 필요없다요.