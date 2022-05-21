import Duck from "./Duck";
import {FlyNoWay, FlyWithWings} from "../behavior/FlightBehaviors";
import {FakeQuack, MuteQuack, Quack} from "../behavior/QuackBehaviors";
import FlyBehavior from "../interface/FlyBehavior";
import QuackBehavior from "../interface/QuackBehavior";

export class DecoyDuck extends Duck {
    constructor(flySpeed: number, quackVolume: number) {
        super(new FlyNoWay(), new MuteQuack(), flySpeed, quackVolume);
    }

    display(): void {
        console.log("I'm a duck decoy!")
    }
}

export class ModelDuck extends Duck {
    constructor(flySpeed: number, quackVolume: number) {
        super(new FlyNoWay(), new FakeQuack(), flySpeed, quackVolume);
    }

    display(): void {
        console.log("I'm a model duck!")
    }
}

export class RealDuck extends Duck {
    constructor(flySpeed: number, quackVolume: number) {
        super(new FlyWithWings(), new Quack(), flySpeed, quackVolume);
    }

    display(): void {
        console.log("I'm a real duck!")
    }
}
