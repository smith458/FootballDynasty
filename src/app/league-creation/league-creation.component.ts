import { Component, OnInit } from '@angular/core';
import { Game } from '../game';
import { Team } from '../team';
import { League } from '../league';
import { Player } from '../player';
import { TeamService } from '../team.service';
import { TEAM_NAMES, FIRST_NAMES, LAST_NAMES } from '../name-constants';
import * as _ from 'underscore';

function GetRandomNum(min: number, max: number): number {
  return Math.round(Math.random() * (max - min) + min);
}

function MakeTeams(): Team[] {
  return TEAM_NAMES.map(t => new Team(t.Name, t.City, MakePlayers()));
}

function MakePlayers(): Player[] {
  const players = new Array();
    for (let i = 0; i < 11; i++) {
      const firstName = FIRST_NAMES[GetRandomNum(0, FIRST_NAMES.length - 1)];
      const lastName = LAST_NAMES[GetRandomNum(0, LAST_NAMES.length - 1)];
      players[i] = new Player(`${firstName} ${lastName}`);
    }
  return players;
}

function MakeWeekSchedule(teams: Team[], week: number): Game[] {
  const games: Game[] = new Array<Game>();
  const teamsFullName: string[] = _.shuffle(teams.map(x => x.FullName));
  for (let i = 0; i < teams.length / 2; i++){
    const homeTeam = teamsFullName.pop();
    const awayTeam = teamsFullName.pop();
    games.push(new Game(homeTeam, awayTeam, week));
  }
  return games;
}

function MakeSchedule(teams: Team[]): Game[][] {
  const schedule: Game[][] = new Array<Array<Game>>();
  for (let i = 0; i < 11; i++){
    const week = i + 1;
    const weekSchedule = MakeWeekSchedule(teams, week);
    schedule.push(weekSchedule);
  }
  return schedule;
}

function MakeLeague(leagueName: string, teamName: string): League {
  const league = new League();
  league.Name = leagueName;
  league.Team = teamName;
  league.Teams = MakeTeams();
  league.Week = 1;
  league.Year = 0;
  league.Schedule = MakeSchedule(league.Teams);
  return league;
}

@Component({
  selector: 'app-league-creation',
  templateUrl: './league-creation.component.html',
  styleUrls: ['./league-creation.component.css']
})
export class LeagueCreationComponent implements OnInit {

  get leagueNames(): string[]{
    return this.teamService.GetLeagueNames();
  }

  typedLeagueName: string;
  selectedTeam: string;
  teamFullNames: string[];

  errorText: string;
  constructor(private teamService: TeamService) { }

  ngOnInit() {
    this.teamFullNames = this.teamService.GetTeamFullNames();
    this.selectedTeam = this.teamFullNames[0];
  }

  AssignName(name: string) {
    this.errorText = '';
    this.typedLeagueName = name;
  }

  GenerateLeague() {
    if (this.leagueNames.includes(this.typedLeagueName)){
      this.errorText = 'The league name already exists';
      return;
    }
    const league: League = MakeLeague(this.typedLeagueName, this.selectedTeam);
    this.teamService.SaveLeague(this.typedLeagueName, league);
  }

  LoadLeague(leagueName: string) {
    this.teamService.SetActiveLeague(leagueName);
  }

  DeleteLeague(leagueName: string) {
    this.teamService.DeleteLeague(leagueName);
  }
}
