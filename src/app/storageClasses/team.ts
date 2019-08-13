import { Player } from './player';

export class Team {

  constructor(name: string, city: string, players: Player[]) {
    this.Name = name;
    this.City = city;
    this.Players = players;
    this.FullName = `${this.City} ${this.Name}`;
  }

  Name: string;
  City: string;
  Players: Player[];
  Wins: number;
  Losses: number;
  FullName: string;

  get TotalSalary(): number {
    return this.Players.map(p => p.Salary)
                       .reduce((x, y) => x + y, 0);
  }

  public static FromString(teamString: string): Team {
    const team: Team = JSON.parse(teamString);
    const players: Player[] = team.Players.map(p => Player.FromString(JSON.stringify(p)));
    return new Team(
      team.Name,
      team.City,
      players,
    )
  }
}
