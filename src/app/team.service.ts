import { Injectable } from '@angular/core';
import { Player } from './player';
import { Team } from './team';
import { Game } from './game';
import * as moment from 'moment';

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

function MakeGame(home: string, away: string, date: moment.Moment) {
  const game = new Game();
  game.HomeTeam = home;
  game.AwayTeam = away;
  game.EventDate = date;
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
  return TEAM_NAMES.map(t => new Team(t.Name, t.City, MakePlayers()));
}

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor() { }

  GenRandTeam(): Player[] {
    return PLAYER_NAMES.map(x => new Player(x));
  }

  GetTeams(): Team[] {
    return MakeTeams();
  }

  GetSchedule(): Game[] {
    const team = 'Circles';
    return TEAM_NAMES.map(x => x.Name)
                     .filter(x => x !== team)
                     .map((x, i) => MakeGame(team, x, moment()));
  }
}
