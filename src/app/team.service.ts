import { Injectable } from '@angular/core';
import { Player } from './player';
import { Team } from './team';
import { Game } from './game';
import { League } from './league';

const PLAYER_NAMES: string[] = [
  'John Smith',
  'Jerry Matthews',
  'Donald Shirley',
  'Terry Hughes',
  'Danny Danger',
  'Sam Swaddle',
  'Dunsten Trance',
  'Tyler Finch',
  'Aaron Ripma',
  'Cory Damm',
  'Vince Hurst',
];

const TEAM_NAMES: {Name: string, City: string}[] = [
  { Name: 'Circles', City: 'Indianapolis' },
  { Name: 'Bubbles', City: 'Cincinnati' },
  { Name: 'Slugs', City: 'Louisville' },
  { Name: 'Tunes', City: 'Nashville' },
  { Name: 'Oldies', City: 'El Paso' },
  { Name: 'Lincolns', City: 'Springfield' },
  { Name: 'Eggs', City: 'Topeka' },
  { Name: 'Highlanders', City: 'Boise' },
  { Name: 'Roulettes', City: 'Reno' },
  { Name: 'Colonels', City: 'Ithaca' },
  { Name: 'Boarders', City: 'Long Beach' },
];

function MakeGame(home: string, away: string, week: number) {
  const game = new Game();
  game.HomeTeam = home;
  game.AwayTeam = away;
  game.Week = week;
  return game;
}

function MakePlayers(): Player[] {
  const players = new Array();
    for (let i = 0; i < 11; i++) {
      players[i] = new Player(PLAYER_NAMES[i]);
    }
  return players;
}

function MakeTeams(): Team[] {
  return TEAM_NAMES.map(t => new Team(t.Name, t.City, MakePlayers(), MakeSchedule(`${t.City} ${t.Name}`)));
}

function MakeSchedule(teamName: string): Game[] {
  return TEAM_NAMES.map(t => `${t.City} ${t.Name}`)
                   .filter(t => t !== teamName)
                   .map((t, i) => MakeGame(teamName, t, i + 1));
}

function MakeLeague(): League {
  const league = new League();
  league.Name = 'New League';
  league.Team = 'Indianapolis Circles';
  league.Teams = MakeTeams();
  league.Week = 1;
  league. Year = 0;
  return league;
}

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor() { }

  GetLeague(): League {
    return MakeLeague();
  }

  GetTeamFullNames(): string[] {
    return TEAM_NAMES.map(t => `${t.City} ${t.Name}`).sort();
  }
}
