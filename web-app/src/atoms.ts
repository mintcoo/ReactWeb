import { atom } from "recoil";

// recoil 기본 설명 https://recoiljs.org/ko/docs/introduction/getting-started 공식사이트
// Atom은 상태(state)의 일부를 나타낸다. Atoms는 어떤 컴포넌트에서나 읽고 쓸 수 있다.
// atom의 값을 읽는 컴포넌트들은 암묵적으로 atom을 구독한다. 그래서 atom에 어떤 변화가 있으면
// 그 atom을 구독하는 모든 컴포넌트가 재 렌더링 되는 결과가 발생

export const recoilPractice = atom({
  key: "uniqueKey",
  // 고유한 키 필요
  default: true,
  // 디폴트 기본값도 필요
});
