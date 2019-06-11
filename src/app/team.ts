import { Player } from './player';
import { Game } from './game';

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
}
