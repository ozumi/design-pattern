# 1. Strategy Pattern

## 구현 내용
**오리 시뮬레이션 게임만들기**\
오리 객체는 꽥꽥, 수영하기, 날기 등의 행동 메소드를 가진다. 현재는 2가지 오리 유형만 있지만 앞으로 여러 종류의 오리가 추가될 수 있다.\
어떤 오리는 날 수 없고, 어떤 오리는 꽥꽥 소리를 낼 수 없는 등 각각의 오리는 서로 다른 행동을 할 수 있다.

## 디자인 원칙
1. 소프트웨어 개발 불변의 진리는 "변화"이다. 아무리 디자인을 잘한 애플리케이션이라도 시간이 지남에 변화하고 성장해야 한다.\
애플리케이션에서 달라지는 부분을 찾아내어 달라지지 않는 부분과 분리하라. 그리고 바뀌는 부분은 따로 뽑아서 '캡슐화'한다.\

1. 구현보다는 인터페이스에 맞춰서 프로그래밍한다. "인터페이스에 맞춰서 프로그래밍한다" = "상위 형식에 맞춰서 프로그래밍한다".\
즉, '다형성'을 활용한다는 뜻이다. 인터페이스를 사용하면 상속을 쓸 때 떠안는 부담 (기존 함수 오버라이딩 발생) 없이 재사용의 장점을 누릴 수 있다.

1. 코드 실행 중에 동적으로 Duck의 행동을 바꾸고 싶으면 Setter method를 호출할 수 있다. 오리의 행동 (꽥꽥, 수영, 날기)을 캡슐화하고 Duck객체가 이 행동을 부여받도록 한다.\
 "이는 "A에는 B가 있다" 관계이다 (Duck 객체에는 FlyBehavior가 있다). 이런 식으로 두 클래스를 합치는 것을 '구성(Composition)'이라고 하며 상속보다는 구성을 활용하는 것이 유지보수나 확장에 좋다.

## 전략 패턴
알고리즘군(행동 메서드)을 정의하고 캡슐화해서 각각의 알고리즘군을 수정해서 쓸 수 있게 해준다. 전략 패턴을 사용하면 클라이언트로부터 알고리즘을 분리해서 독립적으로 변경할 수 있다.

![image](https://user-images.githubusercontent.com/8486747/169724119-513dc184-5d32-4d9e-afe5-dfbb0f35cd01.png)

