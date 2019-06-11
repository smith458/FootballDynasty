import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FootballDynasty';

  navLinks = [
    { path: 'league-creation', label: 'League Creation' },
    { path: 'home', label: 'Home' },
    { path: 'team', label: 'Team' },
    { path: 'schedule', label: 'Schedule' },
    { path: 'finance', label: 'Finance' },
    { path: 'league', label: 'League' },
  ];
}
