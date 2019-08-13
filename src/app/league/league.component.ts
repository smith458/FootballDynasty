import { Component, OnInit } from '@angular/core';
import { TeamService } from '../team.service';
import { Team } from '../storageClasses/team';

@Component({
  selector: 'app-league',
  templateUrl: './league.component.html',
  styleUrls: ['./league.component.css']
})
export class LeagueComponent implements OnInit {

  constructor(private teamService: TeamService) { }

  displayedColumns: string[] = [
    'name',
    'city',
    'salary',
  ];

  dataSource: Team[];

  ngOnInit() {
    this.dataSource = this.teamService.GetLeague().Teams;
  }
}
