//스프레드 그리고 디스트럭쳐링
const class1 = {
  x: 1, y: 'A', z: true
};

const class2 = { ...class1 };

// 아래의 참조복사 코드와 다름!
// const class2 = class1;

console.log(class2);

//--------------------------------------------------------------------------

//특정 객체의 프로퍼티를 재사용함에 유용해요
const class1 = {
  a: 1, b: 'A', c: true
};
const class2 = {
  d: { x: 10, y: 100 }, e: [1, 2, 3]
};
const class3 = {
  ...class1, z: 0
}
const class4 = {
  ...class2, ...class3, ...class2.d
}

console.log(class4);