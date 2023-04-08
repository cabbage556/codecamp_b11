// // // public, private, protected, readonly

// class Monster2 {
//   // power;                   => public, private, protected, readonly 중 하나라도 있으면 생략 가능

//   // 생성자
//   constructor(public power) {
//     // 클래스 내부에서 접근, 수정 가능 / 자식 클래스 내부에서 접근, 수정 가능
//     // this.power = power;    => public, private, protected, readonly 중 하나라도 있으면 생략 가능
//   }

//   attack1 = () => {
//     console.log("공격하자~");
//     console.log("내 공격력은 " + this.power + "!!"); // 클래스 내부에서 접근 가능
//     this.power = 30; // 클래스 내부에서 수정 가능
//   };
// }

// class 공중몬스터2 extends Monster2 {
//   attack2 = () => {
//     console.log("공격하자~");
//     // console.log("내 공격력은 " + this.power + "!!"); // 자식 클래스 내부에서 접근 가능
//     // this.power = 30; // 자식 클래스 내부에서 수정 가능
//   };
// }

// // 상속 => 몸통이 아예 다르다.
// const myMonster22 = new 공중몬스터2(20);
// myMonster22.attack1();
// myMonster22.attack2();

// // 클래스 밖에서 접근, 수정 가능
// console.log(myMonster22.power);
// myMonster22.power = 10;
// console.log(myMonster22.power);
