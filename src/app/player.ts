export class Player {
  Name: string;
  Age: number;
  Weight: number;
  Stats: Stats;
  Salary: number;

  constructor(name: string) {
    this.Name = name;
    this.Age = this.GenRandNum(20, 32);
    this.Weight = this.GenRandNum(150, 400);
    this.Salary = this.GenRandNum(5, 50);
    this.Stats = this.GenRandStats();
  }

  GenRandNum(min: number, max: number): number {
    let u = 0;
    let v = 0;
    while (u === 0) { u = Math.random(); }
    while (v === 0) { v = Math.random(); }
    const rand: number =  (Math.sqrt( -2.0 * Math.log( u) ) * Math.cos( 2.0 * Math.PI * v )) / 10 + .5;
    return rand * (max - min) + min;
  }

  GenRandStat = (): number => this.GenRandNum(10, 90);
  GenRandStats = (): Stats => {
    return {
      Awareness: this.GenRandStat(),
      Blocking: this.GenRandStat(),
      Speed: this.GenRandStat(),
      Catching: this.GenRandStat(),
      Passing: this.GenRandStat(),
    };
  }
}

export interface Stats {
  Awareness: number;
  Blocking: number;
  Speed: number;
  Catching: number;
  Passing: number;
}
