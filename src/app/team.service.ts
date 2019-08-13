import { Injectable } from '@angular/core';
import { League } from './storageClasses/league';
import { TEAM_NAMES } from './name-constants';

const ACTIVE_LEAGUE = 'ActiveLeague';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor() { }

  // The different leagues are stored with the name as the key and data
  // as the value. The active league name is stored also. This is
  // filtering out the active league name.
  GetLeagueNames(): string[] {
    return Object.keys(localStorage).filter(x => x !== ACTIVE_LEAGUE);
  }

  GetLeague(): League {
    const leagueName: string = localStorage.getItem(ACTIVE_LEAGUE);
    return League.FromString(localStorage.getItem(leagueName));
  }

  SaveLeague(leagueName: string, league: League) {
    this.SetActiveLeague(leagueName);
    localStorage.setItem(leagueName, JSON.stringify(league));
  }

  SetActiveLeague(leagueName: string) {
    localStorage.setItem(ACTIVE_LEAGUE, leagueName);
  }

  GetActiveLeagueName(): string {
    return localStorage.getItem(ACTIVE_LEAGUE);
  }

  GetTeamFullNames(): string[] {
    return TEAM_NAMES.map(x => `${x.City} ${x.Name}`);
  }

  DeleteLeague(leagueName: string) {
    localStorage.removeItem(leagueName);
  }
}
