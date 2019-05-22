import { Injectable } from '@angular/core';
import { Player } from './player';

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

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor() { }

  GenRandTeam(): Player[] {
    return PLAYER_NAMES.map(x => new Player(x));
  }
}
