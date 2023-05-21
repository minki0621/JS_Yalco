function add(a = 2, b = 4) {
  console.log(`${a} + ${b}`);
  return a + b;
}

console.log(
  add(),
  add(1),
  add(1, 3)
);
//매개 변수 a와 b에 기본값 2 ,4를 넣어서, 인자값이 없는 변수는 기본값을 넣어주고 있다.



function add(a, b) {
  console.log('1.', arguments); //[Arguments] { '0': 1, '1': 3, '2': 5, '3': 7 }
  console.log('2.', arguments[0]); //1
  console.log('3.', typeof arguments); //객체이다
  return a + b; //뒤에 5, 7은 무시
}

console.log(
  '4.', add(1, 3, 5, 7) // 1+3, 그리고 뒤의 5, 7은 무시. 결과는 4
);



function getAverage() {
  let result = 0;
  for (const num of arguments) {
    result += num;
  }
  return result / arguments.length;
}

console.log(
  getAverage(1, 4, 7)
);
//getAverage 인자값 3개를 더해서 인자 갯수 3으로 나누는 식



//위 코드를 더 안전하게 타입을 확인하는 코드로 수정
// 💡 타입에 안전한 버전
function getAverage() {
  let result = 0, count = 0;
  for (const num of arguments) {
    if (typeof num !== 'number') continue;
    result += num;
    count++;
  }
  return result / count;
}

console.log(
  getAverage(2, '가', 8, true, 5)
);
//타입체크로 number가 아닌 것은 continue하는 코드를 추가하였고, count 를 사용하여 식이 계산되는 횟수를 정확히 겨냥하였다.