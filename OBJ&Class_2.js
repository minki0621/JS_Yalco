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
const raphaelRes3 = {
  name : '후져보영',
  place : '강원도',
  introduce: function () {
    return `안녕하세요. 라파엘 레스토랑 분점 ${this.name}입니다.
    가게 위치는 ${this.place}입니다.`
  }
    
}

console.log(raphaelRes3, raphaelRes3.introduce());