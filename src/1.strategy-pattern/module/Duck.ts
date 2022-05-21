import FlyBehavior from "../interface/FlyBehavior";
import QuackBehavior from "../interface/QuackBehavior";

export default class Duck {
    protected flyBehavior: FlyBehavior;
    protected quackBehavior: QuackBehavior;
    protected flySpeed: number;
    protected quackVolume: number;

    constructor(flyBehavior: FlyBehavior, quackBehavior: QuackBehavior, flySpeed: number, quackVolume: number) {
        this.flyBehavior = flyBehavior;
        this.quackBehavior = quackBehavior;
        this.flySpeed = flySpeed;
        this.quackVolume = quackVolume;
    }

    setFlyBehavior(fb: FlyBehavior): void {
        console.log("나는 속성을 변경합니다.")
        this.flyBehavior = fb;
    }

    setQuackBehavior(qb: QuackBehavior): void {
        console.log("꽥 속성을 변경합니다.")
        this.quackBehavior = qb;
    }

    changeFlySpeed(speed: number): void {
        this.flySpeed = speed;
    }

    changeQuackVolume(volume: number): void {
        this.quackVolume = volume;
    }

    performFly(): void {
        this.flyBehavior.fly(this.flySpeed);
    }

    performQuack(): void {
        this.quackBehavior.quack(this.quackVolume);
    }

    performSwim(): void {
        console.log("수영 할 수 있어요!")
    }

}
