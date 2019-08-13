export class Game {
  constructor(
    public HomeTeam: string,
    public AwayTeam: string,
    public Week: number,
  ) {}

  public HomeScore: number;
  public AwayScore: number;
}
