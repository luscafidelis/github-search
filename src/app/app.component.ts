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

  //Verifica se já ocorreu a busca
  search = false;

  searchUser(query: string){
    //Atualizando o estado da busca
    this.search = true;
    
    //realizando busca
    this.service.searchUsers(query)
      .subscribe((users:any) => this.userList = users.items);
  }

  //lista de usuários encontrados
  userList: any = [];

  deleteUser(target: any){
    this.userList = this.userList.filter((user: any) => user !== target);
   }

}
