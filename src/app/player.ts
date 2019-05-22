export class Player {
  Name: string;
  Age: number;
  Weight: number;
  Blocking: number;
  Speed: number;
  Catching: number;
  Passing: number;

  constructor(name: string) {
    this.Name = name;
    this.Age = this.GenRandNum(20, 32);
    this.Weight = this.GenRandNum(150, 400);
    this.Blocking = this.GenRandStat();
    this.Speed = this.GenRandStat();
    this.Catching = this.GenRandStat();
    this.Passing = this.GenRandStat();
  }

  GenRandNum(min: number, max: number): number {
    let u = 0;
    let v = 0;
    while (u === 0) { u = Math.random(); }
    while (v === 0) { v = Math.random(); }
    const rand: number =  (Math.sqrt( -2.0 * Math.log( u) ) * Math.cos( 2.0 * Math.PI * v )) / 10 + .5;
    return rand * (max - min) + min;
  }

  GenRandStat = (): number => this.GenRandNum(0, 100);
}
