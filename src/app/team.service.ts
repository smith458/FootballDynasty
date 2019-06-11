import { Injectable } from '@angular/core';
import { League } from './league';
import { TEAM_NAMES } from './name-constants';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor() { }

  GetLeague(): League {
    return JSON.parse(localStorage.getItem('league'));
  }

  GetTeamFullNames(): string[] {
    return TEAM_NAMES.map(x => `${x.City} ${x.Name}`);
  }
}
