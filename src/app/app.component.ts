import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'github-search';

  userList = [
    {
      'name': 'Lucas Fidelis',
      'email': 'fidelis.lucas@gmail.com',
      'location': 'São Carlos - Brazil',
      'photo': 'https://avatars.githubusercontent.com/u/52222260?v=4'
    }
  ];

}
