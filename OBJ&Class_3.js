class Family {
  constructor (name, guanxi, married) { //name과 guanxi 매개변수를 받아 객체의 속성을 초기화
    this.name = name;
    this.guanxi = guanxi;
    this.married = married;
  }
  introduce () {
    return `이름은 ${this.name}이고 ${this.guanxi}역학을 맡고 있습니다.
    현재 ${this.merried ? '기혼' : '미혼'}입니다.`;
  }
}

const father = new Family('신동석', '아버지', true);
const son = new Family('신민기' ,'아들', false);
console.log(father.introduce());
console.log(son.introduce());