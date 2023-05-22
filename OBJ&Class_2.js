//생성자 함수
function RaphaelRes (name, place, no) {
  this.name = name;
  this.place = place;
  this.introduce = function () {
    return `안녕하세요. 라파엘 레스토랑 분점 ${this.name}입니다.
    가게 위치는 ${this.place}입니다.`;
  }
}
const chain1 = new RaphaelRes('먹어볼래', '서울');

console.log(chain1, chain1.introduce());



//객체를 반환하는 함수
function raphaelRes2 (name, place){
  return {
    name, place,
    introduce() { 
      return `안녕하세요. 라파엘 레스토랑 분점  ${this.name}입니다.
      가게 위치는 ${this.place}입니다.`;
    }
  }
}
const chain2 = raphaelRes2('멋져', '경기도');
console.log(chain2, chain2.introduce());



//객체 리터럴
const chain3 = {
  name : '후져보영',
  place : '강원도',
  introduce: function () {
    return `안녕하세요. 라파엘 레스토랑 분점 ${this.name}입니다.
    가게 위치는 ${this.place}입니다.`
  }
    
}
console.log(chain3, chain3.introduce());

console.log(chain1, chain1 instanceof RaphaelRes); //true
console.log(chain2, chain2 instanceof RaphaelRes); //false
console.log(chain3, chain3 instanceof RaphaelRes); //fasle




// 생성자 함수 자체의 프로퍼티와 함수 기능
function RaphaelRes (name, place) {
  this.name = name,
  this.place = place, 
  this.intro = function () {
    return `라파엘 레스토랑 분점 ${this.name}입니다. 
    위치는 ${this.place}입니다`
  }
}
const chain1 = new RaphaelRes('딜리셔스샵', 'NewZeland');



//본사의 정보와 업무를 추가해보자. == 생성자 함수 자체의 프로퍼티와 함수
RaphaelRes.openYear = '1900';
RaphaelRes.contact = function () {
  return `라파엘 본점의 역사는 ${this.openYear}년에 시작되었습니다.`
};

console.log(chain1);
console.log(chain1.intro());
console.log(RaphaelRes.openYear);
console.log(RaphaelRes.contact());
// console.log(chain1.contact()); //분점에서는 호출이 안된다.
