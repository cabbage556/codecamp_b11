class 공중부품 {
  run = () => {
    console.log("날아서 도망가즈아");
  };
}

class 지상부품 {
  run = () => {
    console.log("뛰어서 도망가즈아");
  };
}

class Monster {
  power = 10;
  부품;

  // 생성자
  constructor(외부부품) {
    this.부품 = 외부부품;
  }

  attack = () => {
    console.log("공격하자~");
    console.log("내 공격력은 " + this.power + "!!");
  };

  run = () => {
    this.부품.run();
  };
}

// 전략 패턴 => 몸통은 같고, 부품만 다르게 구성 => 유지보수가 쉽다. (상속 개념과 다르다)
const myMonster1 = new Monster(new 공중부품());
myMonster1.attack();
myMonster1.run();

// 전략 패턴 => 몸통은 같고, 부품만 다르게 구성 => 유지보수가 쉽다. (상속 개념과 다르다)
const myMonster2 = new Monster(new 지상부품());
myMonster2.attack();
myMonster2.run();
