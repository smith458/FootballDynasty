import { Component, OnInit } from '@angular/core';
import { TeamService } from '../team.service';
import { Player } from '../player';

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
                                 'blocking',
                                 'speed',
                                 'catching',
                                 'passing',
                                ];
  dataSource: Player[];

  ngOnInit() {
    this.dataSource = this.teamService.GenRandTeam();
  }

}
