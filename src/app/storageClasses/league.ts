import { Team } from './team';
import { Game } from './game';

export class League {
    constructor(
        public Name: string,
        public Year: number,
        public Week: number,
        public TeamName: string,
        public Teams: Team[],
        public Schedule: Game[][],
    ) {}

    public static FromString(leagueString: string): League {
        const league: League = JSON.parse(leagueString);
        const teams = league.Teams.map(t => Team.FromString(JSON.stringify(t)));
        return new League(
            league.Name,
            league.Year,
            league.Week,
            league.TeamName,
            teams,
            league.Schedule
        )
    }
}
