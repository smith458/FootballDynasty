import { Player } from './player';

export class Team {

  constructor(name: string, city: string, players: Player[]) {
    this.Name = name;
    this.City = city;
    this.Players = players;
  }

  Name: string;
  City: string;
  Players: Player[];
  Wins: number;
  Losses: number;

  get TotalSalary(): number {
    return this.Players.map(p => p.Salary)
                       .reduce((x, y) => x + y, 0);
  }
}
