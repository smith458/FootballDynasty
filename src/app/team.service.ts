import { Injectable } from '@angular/core';
import { League } from './league';
import { TEAM_NAMES } from './name-constants';

const ACTIVE_LEAGUE = 'ActiveLeague';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor() { }

  GetLeagueNames(): string[] {
    return Object.keys(localStorage).filter(x => x !== ACTIVE_LEAGUE);
  }

  GetLeague(): League {
    const leagueName: string = localStorage.getItem(ACTIVE_LEAGUE);
    return JSON.parse(localStorage.getItem(leagueName));
  }

  SaveLeague(leagueName: string, league: League) {
    this.SetActiveLeague(leagueName);
    localStorage.setItem(leagueName, JSON.stringify(league));
  }

  SetActiveLeague(leagueName: string) {
    localStorage.setItem(ACTIVE_LEAGUE, leagueName);
  }

  GetTeamFullNames(): string[] {
    return TEAM_NAMES.map(x => `${x.City} ${x.Name}`);
  }

  DeleteLeague(leagueName: string) {
    localStorage.removeItem(leagueName);
  }
}
