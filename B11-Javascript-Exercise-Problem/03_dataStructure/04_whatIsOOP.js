/* 

    객체 지향 프로그래밍 (OOP : Object Oriented Programming) 은
    데이터를 직접 관리하거나 관리하는 함수를 객체로 관리하는 형태를 가집니다.

    이때, 객체 안에서 설정되어 있는 함수를 메서드 (Method) 라고 하며,
    Array.push() 또는 Array.pop() 과 같이 . 을 이용해서 사용하는
    기능들 또한 메서드의 일부라고 볼 수가 있습니다.

    객체 지향 프로그래밍의 주 장점은 각각의 데이터를 관리하는 데에 있어
    부품화 하기가 매우 용이하며, 이러한 특징은 프로젝트가 커지면 커질수록
    확장성 또는 유지보수성에 매우 유리한 장점을 가집니다.

    자바스크립트에서 객체 지향 프로그래밍을 사용하기 위해서는
    생성자 역할을 하는 constuctor 가 필요하며,
    new 연산자를 이용해 인스턴스를 생성합니다.

    아래의 예시를 한번 볼까요?


    function OOP() {
      this.name = "철수"
    };
    
    const myName = new OOP();
    console.log( myName.name ) // 철수
    
    
    OOP 라는 함수가 객체 지향의 생성자 역할을 담당하게 되며,
    안쪽으로 this.name 의 변수에 "철수" 라는 데이터를 새로 선언/할당합니다.

    이때 this는, 기본적으로 window 를 지향하게 되는데
    함수가 어떻게 호출되느냐에 따라서 지향하게 되는 환경이 달라지게 됩니다.


    함수 밖으로 this.name 의 값에 "훈이" 를 할당하고
    this.name 을 console.log 로 출력해보면
    
    this.name = "훈이"
    console.log( this.name ) // 훈이

    와 같이 this.name 이 "훈이" 라는 데이터를 담고 있는 걸 확인할 수 있는데
    이는 this 가 기본적으로 window 를 가리키고 있기 때문에
    전역에서 사용할 수 있는 변수를 지정하는 것과 동일하게 작동됩니다.


    생성자 만큼 더 중요한 것은 함수를 호출하는 부분입니다.
    new 연산자는 새로운 객체 환경의 데이터로 생성할 수 있으며,
    객체 지향의 데이터를 호출하는데에 매우 중요한 역할을 합니다.

    이 new 생성자를 이용해 함수를 호출하면 
    this 는 window 가 아닌 호출된 함수의 환경을 지향합니다.
    
    그러면, 전역를 가리키고 있는 this 가 오직 함수 안에서의
    지역 환경을 띄우는 클로저 (closure) 의 특징을 가지게 됩니다.

    그래서, new 연산자를 사용해 함수를 새로운 객체로 선언한 후
    선언한 객체의 .name 값으로 this.name 에 접근이 가능해지는 것입니다.


    function OOP() {
      // 여기의 this 는 OOP 함수를 가리킵니다.
      this.name = "철수"
    };
    
    const myName = new OOP();
    console.log( myName.name ) // 철수

    // 여기의 this 는 window 를 가리킵니다.
    console.log( this.name ) // ""


    위의 예시를 들어보면 좀더 명확하게 this 의 선언환경에 대해서
    구분할 수 있습니다.

    
    이번에는 객체 지향에서 객체 안으로 메서드 (함수) 를 설정하고
    실행하는 방법입니다.

    function OOP() {
      // 여기의 this 는 OOP 함수를 가리킵니다.
      this.name = "철수"

      this.changeName = function(name) {
        this.name = name;
      }
    };

    this.name 의 값을 변경할 수 있는 메서드를 생성하고자 합니다.
    이때 역시 마찬가지로 this.changeName 의 이름으로 함수를 생성한 후
    name 이란 매개변수로 받아온 데이터를 this.name 에 할당합니다.


    function OOP() {
      this.name = "철수"

      this.changeName = function(name) {
        this.name = name;
      }
    };

    const myName = new OOP();
    console.log( myName.name ); // "철수"
    myName.changeName("훈이");
    console.log( myName.name ); // "훈이"

    
    처음에 할당된 myName 의 name 값을 출력했을 때 "철수" 라는 데이터가 출력이 되는데
    아래에 바로 changeName 함수를 호출하여 "훈이" 를 인자로 넘겨준 후
    다시 myName 의 name 값을 출력하면 "훈이" 가 출력되는 것을 확인할 수 있습니다.

    이처럼 객체 지향을 사용하면 각각의 환경에 따르는 데이터를 설정할 수 있고
    메서드를 통해 객체 환경의 데이터를 관리할 수 있습니다.

*/