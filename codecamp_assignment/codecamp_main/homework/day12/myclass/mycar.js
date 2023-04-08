class MyCar {
  type;
  name;
  horsePower;
  color;

  constructor(type, name, horsePower, color) {
    this.type = type;
    this.name = name;
    this.horsePower = horsePower;
    this.color = color;
  }

  startUp = () => {
    console.log("브레이크를 밟고 시동을 겁니다.");
  };

  stop = () => {
    console.log("차를 완전히 정지합니다.");
  };

  getHorsePower = () => {
    console.log(`이 차의 마력은 ${this.horsePower}입니다.`);
    return this.horsePower;
  };

  getType = () => {
    console.log(`이 차의 종류는 ${this.type}입니다.`);
    return this.type;
  };

  getName = () => {
    console.log(`이 차의 이름은 ${this.name}입니다.`);
    return this.name;
  };

  getColor = () => {
    console.log(`이 차의 색깔은 ${this.color}입니다.`);
    return this.color;
  };
}

const myCar = new MyCar("트럭", "포터", 200, "용달블루");
myCar.startUp();
myCar.stop();
myCar.getHorsePower();
myCar.getType();
myCar.getName();
myCar.getColor();
