import { Player } from './player';
import { Game } from './game';

export class Team {

  constructor(name: string, city: string, players: Player[], schedule: Game[]) {
    this.Name = name;
    this.City = city;
    this.Players = players;
    this.Schedule = schedule;
  }

  Name: string;
  City: string;
  Players: Player[];
  Wins: number;
  Losses: number;
  Schedule: Game[];

  get FullName(): string {
    return `${this.City} ${this.Name}`;
  }

  get TotalSalary(): number {
    return this.Players.map(p => p.Salary)
                       .reduce((x, y) => x + y, 0);
  }
}
