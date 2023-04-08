interface IProfile {
  name: string;
  age: number;
  school: string;
  hobby?: string;
}

// 1. Partial 타입 => 전부 옵셔널 키로 만들기
type aaa = Partial<IProfile>;

// 2. Required 타입 => 전부 필수 키로 만들기
type bbb = Required<IProfile>;

// 3. Pick 타입 => 원하는 키만 고르기
type ccc = Pick<IProfile, "name" | "age">;

// 4. Omit 타입 => 특정 키만 제거하기
type ddd = Omit<IProfile, "school">;

// 5. Record 타입
type eee = "철수" | "영희" | "훈이"; // UNION 타입
let child1: eee = "철수"; // 철수, 영희, 훈이만 할당 가능 (union 타입 eee => string 타입보다 제한적이므로 안전함)
let child2: string = "맹구"; // 모든 문자열 할당 가능 (string 타입)

// Record 타입
type fff = Record<eee, number>; // 레코드마다 number 타입을 설정한다.
type ggg = Record<eee, IProfile>; // 레코드마다 IProfile 타입을 설정한다.

// 6. 객체의 key들로 union 타입 만들기
type hhh = keyof IProfile; // 인터페이스를 union 타입으로 만들기 => "name" | "age" | "school" | "hobby"
let myProfile: hhh = "school";

// 7. type vs. interface 차이
// interface는 선언병합 가능
interface IProfile {
  candy: number; // 선언병합으로 추가됨
}

// Partial 적용으로 옵셔널로 만들기
let myProfile2: Partial<IProfile> = {
  candy: 10,
};
