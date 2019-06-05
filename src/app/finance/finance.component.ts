import { Component, OnInit } from '@angular/core';
import { TeamService } from '../team.service';
import { Player } from '../player';
import { Team } from '../team';

@Component({
  selector: 'app-finance',
  templateUrl: './finance.component.html',
  styleUrls: ['./finance.component.css']
})
export class FinanceComponent implements OnInit {

  constructor(public teamService: TeamService) { }

  displayedColumns: string[] = [
    'name',
    'salary',
  ];

  dataSource: Player[];
  teamCities: string[];
  teams: Team[];

  ngOnInit() {
    this.teams = this.teamService.GetTeams();
    this.teamCities = this.teamService.GetTeamCities();
  }

}
