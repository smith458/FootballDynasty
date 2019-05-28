import { Component, OnInit } from '@angular/core';
import { Game } from '../game';
import { TeamService } from '../team.service';

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

  dataSource: Game[];

  ngOnInit() {
    this.dataSource = this.teamService.GetSchedule();
  }
}
