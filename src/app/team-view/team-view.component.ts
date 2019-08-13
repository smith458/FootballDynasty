import { Component, OnInit } from '@angular/core';
import { TeamService } from '../team.service';
import { Player } from '../storageClasses/player';
import { Team } from '../storageClasses/team';
import { League } from '../storageClasses/league';

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
    return this.teams.find(t => t.FullName === this.selectedTeam).Players;
  }

  teamFullNames: string[];
  selectedTeam: string;
  league: League;
  teams: Team[];

  ngOnInit() {
    this.teamFullNames = this.teamService.GetTeamFullNames();
    this.league = this.teamService.GetLeague();
    this.teams = this.league.Teams;
    this.selectedTeam = this.league.TeamName;
  }
}
