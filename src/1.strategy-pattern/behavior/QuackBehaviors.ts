import QuackBehavior from "../interface/QuackBehavior";

export class Quack implements QuackBehavior {
    quack(volume: number) {
        console.log(`${volume} 크기로 꽥!`);
    }
}

export class MuteQuack implements QuackBehavior {
    quack(volume: number) {
        console.log(`저는 울지 않아요`)
    }
}

export class FakeQuack implements QuackBehavior {
    quack(volume: number) {
        console.log(`${volume} 크기로 삑!`)
    }
}
