import { Component } from '@angular/core';
import { SearchService } from './services/search/search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private service: SearchService){ }

  title = 'github-search';

  //lista de usuários
  userList: any = [];

  //Verifica se já ocorreu a busca
  search = false;

  //realiza busca por usuários
  searchUser(query: string){
    //Atualizando o estado da busca
    this.search = true;
    
    //realizando busca
    this.service.searchUsers(query)
      .subscribe((users:any) => this.userList = users.items);
  }

  deleteUser(target: any){
    this.userList = this.userList.filter((user: any) => user !== target);
   }

}
