import { Component, OnInit } from '@angular/core';
import { Game } from '../game';
import { TeamService } from '../team.service';
import { Team } from '../team';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  constructor(private teamService: TeamService) { }

  displayedColumns: string[] = [
    'homeTeam',
    'awayTeam',
    'date',
  ];

  get dataSource(): Game[] {
    return this.teams.find(t => t.City === this.selectedCity).Schedule;
  }

  teamCities: string[];
  selectedCity: string;
  teams: Team[];
  ngOnInit() {
    this.teamCities = this.teamService.GetTeamCities();
    this.teams = this.teamService.GetTeams();
    this.selectedCity = this.teamCities[0];
  }
}
