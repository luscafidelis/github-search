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
      'login': 'luscafidelis',
      'photo': 'https://avatars.githubusercontent.com/u/52222260?v=4'
    }
  ];

  deleteUser(target: any){
    this.userList = this.userList.filter(user => user !== target);
   }

}
