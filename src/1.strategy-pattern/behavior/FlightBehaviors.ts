import FlyBehavior from "../interface/FlyBehavior";

export class FlyWithWings implements FlyBehavior {
    fly(speed: number) {
        console.log(`${speed} 속도로 날개로 날고 있어요`);
    }
}

export class FlyNoWay implements FlyBehavior {
    fly(speed: number) {
        console.log(`저는 날 수 없어요`);
    }
}
