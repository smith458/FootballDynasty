import { Component, OnInit } from '@angular/core';
import { TeamService } from '../team.service';
import { Player } from '../player';

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

  ngOnInit() {
    this.dataSource = this.teamService.GenRandTeam();
  }

}
