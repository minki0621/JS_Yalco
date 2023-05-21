//재귀함수
function upto5 (x) {
  console.log(x);
  if (x < 5) {
    upto5(x + 1);
  } else {
    console.log('- - -');
  };
}

upto5(1);
upto5(3);
upto5(7);
//- (x+1)이었으면 결과값 한번 출력하고 끝나지만
//- 자기 자신을 한번 더 불러와서 if문에 대조하여 **끝날때까지** 호출.



function fact(x) {
  return x === 0 ? 1 : x * fact(x - 1);
}

console.log(
  fact(3)
)
//x에 3을 집어넣었지만 fact(2) 값을 모름. 그럼 또 2를 넣어봐. 몰라. 그럼 또 1을 넣어봐. 그리고 0을 넣었다. 그랬더니 1이 나오네. 좋아 fact(0) 은 1이야. 그럼 1*1이고, 2*1 이고, 3*2 가 되어서 결과는 6



let x = 1;
let y = {
  name: '홍길동',
  age: 15
}
let z = [1, 2, 3];

function changeValue (a, b, c) {
  a++; //원시
  b.name = '전우치'; //참조
  b.age++; //참조
  c[0]++; //참조

  console.log(a, b, c);
}

changeValue(x, y, z); //2 { name: '전우치', age: 16 } [ 2, 2, 3 ]

console.log(x, y, z); //1 { name: '전우치', age: 16 } [ 2, 2, 3 ]
//a는 원시값이어서 chageValue함수 내에서 쓰일 때, 복사된 값이기 때문에
//함수 밖에서는 원래값으로 복귀

// - 원시 타입: 인자로 들어간 함수 내에서의 변경에 영향 없음
//     - 실제 값이 아니라 복사된 값이 들어갔기 때문에.
// - 참조 타입: 인자로 들어간 함수 내에서 요소가 변하면 실제로도 변함
//     - 복사된 값도 같은 각체나 배열을 가리키기 때문에.