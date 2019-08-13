import { Component, OnInit } from '@angular/core';
import { TeamService } from '../team.service';
import { League } from '../storageClasses/league';
import { LEAGUE_SCHEDULE } from '../league-constants';
import { Game } from '../storageClasses/game';
import * as _ from 'underscore';

function IsTeamInGame(teamName: string, game: Game) {
  return teamName === game.AwayTeam || teamName === game.HomeTeam;
}

function SortByWeek(a: Game, b: Game) {
  return a.Week > b.Week ? 1 : -1;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private teamService: TeamService) { }

  get week(): string {
    return LEAGUE_SCHEDULE[this.league.Week];
  }

  league: League;
  game: Game;

  ngOnInit() {
    this.league = this.teamService.GetLeague();
    const teamName = this.league.TeamName;
    const teamSchedule = _.flatten(this.league.Schedule)
                        .filter(g => IsTeamInGame(teamName, g))
                        .sort(SortByWeek);
    this.game = teamSchedule[this.league.Week];
  }
}
