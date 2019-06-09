import { Component, OnInit } from '@angular/core';
import { TeamService } from '../team.service';
import { Player } from '../player';
import { Team } from '../team';

@Component({
  selector: 'app-team-view',
  templateUrl: './team-view.component.html',
  styleUrls: ['./team-view.component.css']
})
export class TeamViewComponent implements OnInit {

  constructor(private teamService: TeamService) { }

  displayedColumns: string[] = [ 'name',
                                 'age',
                                 'weight',
                                 'awareness',
                                 'blocking',
                                 'speed',
                                 'catching',
                                 'passing',
                                ];

   get dataSource(): Player[] {
    return this.teams.find(t => t.City === this.selectedCity).Players;
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
