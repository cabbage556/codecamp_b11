// 1. string, number, boolean => primitive type
// 매개변수는 타입 추론이 안됀다. => 어떤 타입의 값을 인수로 사용해서 함수를 호출할 지 알 수 없기 때문이다.
const getPrimitive = (arg1: string, arg2: number, arg3: boolean): [boolean, number, string] => {
  return [arg3, arg2, arg1];
};
const result = getPrimitive("철수", 123, true);

//

// 2. any 타입
// any 타입은 자바스크립트와 같다.
const getAny = (arg1: any, arg2: any, arg3: any): [any, any, any] => {
  console.log(arg1 + 100); // any는 아무거나 다 됨!😡
  return [arg3, arg2, arg1];
};

const result2 = getAny("철수", 123, true);

//

// 3. unknown 타입
// unknown 타입은 알 수 없는 타입이다.
const getUnknown = (arg1: unknown, arg2: unknown, arg3: unknown): [unknown, unknown, unknown] => {
  if (typeof arg1 === "number")
    // any 타입보다 안전한 코딩이 가능하다. arg1의 값이 어떤 타입인지 먼저 확인해야 한다.
    console.log(arg1 + 100);
  return [arg3, arg2, arg1];
};

const result3 = getAny("철수", 123, true);

//
//

// 4. generic 타입
const getGeneric = <MyType1, MyType2, MyType3>(arg1: MyType1, arg2: MyType2, arg3: MyType3): [MyType3, MyType2, MyType1] => {
  return [arg3, arg2, arg1];
};

// 아규먼트의 타입에 따라 결과 타입이 바뀐다.
const result4 = getGeneric("철수", 123, true); // [boolean, number, string]

// <>안에 넣은 타입으로 타입이 대치된다.
// MyType1 => string, MyType2 => number, MyType3 => boolean
const result5 = getGeneric<string, number, boolean>("철수", 123, true);

// 4. generic 타입 - 2
const getGeneric2 = <T1, T2, T3>(arg1: T1, arg2: T2, arg3: T3): [T3, T2, T1] => {
  return [arg3, arg2, arg1];
};

const result6 = getGeneric2("철수", 123, true);

// 4. generic 타입 - 3
const getGeneric3 = <T, U, V>(arg1: T, arg2: U, arg3: V): [V, U, T] => {
  return [arg3, arg2, arg1];
};

const result7 = getGeneric3("철수", 123, true);

// 라이브러리 제공자 입장에서 사용자가 어떤 타입을 넣어 사용할지 알 수 없기 때문에 제네릭 타입으로 타입을 설정한다.
// any 타입을 사용하지 않는 이유는 어떤 타입이라도 사용할 수 있기 때문에 자바스크립트와 다를바 없기 때문이다.
