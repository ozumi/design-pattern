import Subject from "../interface/Subject";
import Observer from "../interface/Observer";

export class WeatherData implements Subject {
  private observers: Observer[];
  private temperature: number;
  private humidity: number;
  private pressure: number;

  constructor() {
    this.observers = new Array<Observer>();
    this.temperature = -1;
    this.humidity = -1;
    this.pressure = -1;
  }

  registerObserver(o: Observer) {
    this.observers.push(o);
  }

  // 어떻게 지우려고 하는 observer를 정확하게 지울 것인가? => ID 부여?
  removeObserver(o: Observer) {
    //this.observers.pop(o);
    this.observers.splice(this.observers.findIndex(e => e.name === "tc_001"),1);

  }

  notifyObservers() {
    for(const observer in this.observers) {
      observer.update(this.temperature, this.humidity, this.pressure);
    }
  }

  measurementsChanged(): void {
    this.notifyObservers();
  }

  setMeasurements(temperature: number, humidity: number, pressure: number): void {
    this.temperature = temperature;
    this.humidity = humidity;
    this.pressure = pressure;
    this.measurementsChanged();
  }

  getTemperature(): number {
    return this.temperature;
  }

  getHumidity(): number {
    return this.humidity;
  }

  getPresure(): number {
    return this.pressure;
  }
}
