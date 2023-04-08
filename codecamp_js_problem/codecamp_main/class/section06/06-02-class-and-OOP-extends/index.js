// class Date {
//   qqq = 3;

//   getFullYear() {}

//   getMonth() {}
// }

const date = new Date();
console.log(date.getFullYear());
console.log(date.getMonth() + 1);

class Monster {
  power = 10;

  // 생성자
  constructor(power) {
    this.power = power;
  }

  attack = () => {
    console.log("공격하자~");
    console.log("내 공격력은 " + this.power + "!!");
  };

  run = () => {
    console.log("도망가자~~");
  };
}

class 공중몬스터 extends Monster {
  constructor(aaa) {
    // 부모 클래스 생성자 호출 super()
    super(aaa + 1);
  }

  // 오버라이딩(부모의 run 메서드 덮어쓰기)
  run = () => {
    console.log("날아서 도망가자");
  };
}

class 지상몬스터 extends Monster {
  constructor(bbb) {
    // 부모 클래스 생성자 호출 super()
    super(bbb);
  }

  // 오버라이딩(부모의 run 메서드 덮어쓰기)
  run = () => {
    console.log("뛰어서 도망가자");
  };
}

// 상속 => 몸통이 아예 다르다.
const myMonster1 = new 공중몬스터(20);
myMonster1.attack();
myMonster1.run();

const myMonster2 = new 지상몬스터(50);
myMonster2.attack();
myMonster2.run();
