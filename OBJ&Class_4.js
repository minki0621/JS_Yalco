class YalcoChicken {
  no = 0;
  menu = { '후라이드': 10000, '양념치킨': 12000 };

  constructor (name, no) {
    this.name = name;
    if (no) this.no = no;
  }
  introduce () {
    return `안녕하세요, ${this.no}호 ${this.name}점입니다!`;
  }
  order (name) {
    return `${this.menu[name]}원입니다.`
  }
}




class YalcoChickenAndCafe extends YalcoChicken {
  cafeMenu = { '아메리카노': 4000, '라떼': 4500 };
  cafeOrder (name) {
    return `${this.cafeMenu[name]}원입니다.`
  }
}

const chain1 = new YalcoChickenAndCafe('서면', 2)



console.log(chain1);

console.log(
  chain1.order('후라이드'),
  chain1.cafeOrder('라떼')
);

//---------------------------------------------------------------------------

//오버라이딩?

class Bird {
  wings = 2;
  canFly = true;
  travel () { console.log('비행중...') }
}
class Eagle extends Bird {
  claws = 2;
}
class Penguin extends Bird { 
  canFly = false; //부모 Bird의 canFly 프로퍼티 값을 바꿔봄
  travel () { console.log('수영중...') }
}

const eaglee = new Eagle();
const pengu = new Penguin();

console.log(eaglee);
eaglee.travel();

console.log(pengu);
pengu.travel();

//---------------------------------------------------------------------------

//super?
class YalcoChicken {
  no = 0;
  menu = { '후라이드': 10000, '양념치킨': 12000 };

  constructor (name, no) {
    this.name = name;
    if (no) this.no = no;
  }
  introduce () {
    return `안녕하세요, ${this.no}호 ${this.name}점입니다!`;
  }
  order (name) {
    return `${this.menu[name]}원입니다.`
  }
}




class ConceptYalcoChicken extends YalcoChicken {
  #word = '';
  constructor (name, no, word) {
    super(name, no); //부모 cunstructor의 name과 no 코드를 따라가겠다. 부모 클래스의 생성자를 참조하고 호출하는 데 사용
    this.#word = word;
  }
  introWithConcept () {
    return super.introduce() + ' ' + this.#word;
  }
  order (name) {
    return super.order(name) + ' ' + this.#word;
  }
}

const pikaChain = new ConceptYalcoChicken('도봉', 50, '피카피카~');

console.log(pikaChain);
console.log(pikaChain.introWithConcept());
console.log(pikaChain.order('후라이드'));