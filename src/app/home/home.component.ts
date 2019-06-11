import { Component, OnInit } from '@angular/core';
import { TeamService } from '../team.service';
import { League } from '../league';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private teamService: TeamService) { }

  league: League;

  ngOnInit() {
    this.league = this.teamService.GetLeague();
  }

}
