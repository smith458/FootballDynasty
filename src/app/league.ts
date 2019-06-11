import { Team } from './team';
import { Game } from './game';

export class League {
    Name: string;
    Year: number;
    Week: number;
    Team: string;
    Teams: Team[];
    Schedule: Game[][];
}
