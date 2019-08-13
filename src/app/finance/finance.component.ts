import { Component, OnInit } from '@angular/core';
import { TeamService } from '../team.service';
import { Player } from '../storageClasses/player';
import { Team } from '../storageClasses/team';
import { League } from '../storageClasses/league';

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

  get dataSource(): Player[] {
    return this.teams.find(t => t.FullName === this.selectedTeam).Players;
  }

  teamFullNames: string[];
  selectedTeam: string;
  league: League;
  teams: Team[];

  ngOnInit() {
    this.teamFullNames = this.teamService.GetTeamFullNames();
    this.league = this.teamService.GetLeague();
    this.teams =  this.league.Teams;
    this.selectedTeam = this.league.TeamName;
  }

}
