export class Player {
  constructor(
    public Name: string,
    public Age: number,
    public Weight: number,
    public Stats: Statistics,
    public Salary: number,
  ) {}

  static MakeRandomPlayer(name: string): Player {
    return new Player(
    name,
    Player.GenRandNum(20, 32),
    Player.GenRandNum(150, 400),
    Player.GenRandStats(),
    Player.GenRandNum(5, 50),
    );
  }

  static GenRandNum(min: number, max: number): number {
    let u = 0;
    let v = 0;
    while (u === 0) { u = Math.random(); }
    while (v === 0) { v = Math.random(); }
    const rand: number =  (Math.sqrt( -2.0 * Math.log( u) ) * Math.cos( 2.0 * Math.PI * v )) / 10 + .5;
    return rand * (max - min) + min;
  }

  static GenRandStat = (): number => Player.GenRandNum(10, 90);
  static GenRandStats = (): Statistics => {
    return {
      Awareness: Player.GenRandStat(),
      Blocking: Player.GenRandStat(),
      Speed: Player.GenRandStat(),
      Catching: Player.GenRandStat(),
      Passing: Player.GenRandStat(),
    };
  }

  static FromString(playerString: string): Player {
    const player = JSON.parse(playerString);
    return new Player(
      player.Name,
      player.Age,
      player.Weight,
      player.Stats,
      player.Salary,
    );
  }
}

export interface Statistics {
  Awareness: number;
  Blocking: number;
  Speed: number;
  Catching: number;
  Passing: number;
}
