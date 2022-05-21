import {DecoyDuck, ModelDuck, RealDuck} from "./module/Ducks";
import {FlyNoWay} from "./behavior/FlightBehaviors";
import {MuteQuack} from "./behavior/QuackBehaviors";

export default class StrategyPattern {
  constructor() {
  }

  runTest() {
    let flySpeed = 30;
    let quackVolume = 10;
    const yellowDuck = new RealDuck(flySpeed, quackVolume);
    yellowDuck.display();
    yellowDuck.performFly();
    yellowDuck.performQuack();
    yellowDuck.performSwim();
    yellowDuck.changeFlySpeed(20);
    yellowDuck.changeQuackVolume(3);
    yellowDuck.performFly();
    yellowDuck.performQuack();
    yellowDuck.setFlyBehavior(new FlyNoWay());
    yellowDuck.setQuackBehavior(new MuteQuack());
    yellowDuck.performFly();
    yellowDuck.performQuack();

    const decoyDuck = new DecoyDuck(flySpeed, quackVolume);
    decoyDuck.display();
    decoyDuck.performFly();
    decoyDuck.performQuack()
    decoyDuck.performSwim();

    const modelDuck = new ModelDuck(flySpeed, quackVolume);
    modelDuck.display();
    modelDuck.performFly();
    modelDuck.performQuack();
    modelDuck.performSwim();
  }
}
