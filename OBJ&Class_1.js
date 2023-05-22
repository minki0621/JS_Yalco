//프로퍼티 추가와 삭제 방법
const raphael = {
  age : 32,
  quedian : 'meiyou',
  handsome : true
}
console.log(raphael);

delete raphael['quedian'];
delete raphael.handsome;
raphael.hobby = 'programming'

console.log(raphael);





//식별자 명명 규칙에 어긋나는 이름을 키로 사용한다면? == 대괄호를 쓰자
const raphael = {
  2 : 'two',
  'a-c' : 'abc', //여기
  's p a c e' : 'space' //여기
}

console.log(raphael);

// raphael.2 = 'three';
// raphael.'a-c' = 'abcd';
// raphael.'s p a c e' = 'spacesssssss'
// 마침표 프로퍼티 접근 연산자로는 이런 키에는 접근할 수 없다. 는 규칙

raphael[2] = 'three';
raphael['a-c'] = 'abcd';
raphael['s p a c e'] = 'spacesssssss';
console.log(raphael);





//표현식으로 키 값을 정의할 수도 있다. 대신 대괄호 [] 를 써라
let idx = 1;
const  obj = {
  ['key-' + ++idx]: `value-${idx}`,
  [idx ** idx]: 'POWER'
}
console.log(obj);






//키의 동적사용이 뭐요?
const raphael = {
  name : '신민기',
  age : 32,
  hobby : 'programming',
  girlfriend : false
}

function addProperty (obj, key, value) {
  obj[key] = value;
  // obj.key = value; ⚠️ 의도와 다른 작업 수행
}

function deleteProperty (obj, key) {
  delete obj[key];
  // delete obj.key; ⚠️ 의도와 다른 작업 수행
}

addProperty (raphael, 'gender', 'male');
deleteProperty (raphael, 'age');
console.log(raphael);
//마침표  .key 의미는 key라는 이름을 가진 프로퍼티를 찾는 것이구
// 대괄호 [key] 의미는 key에 해당하는 위치의 프로퍼티 찾능 것이에요.
// 마침표는 정적인 수법이고, 대괄호는 동적인 수법으로 좀더 유연하죠.