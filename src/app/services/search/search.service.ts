import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SearchService {
  //API do github
  private readonly API = 'https://api.github.com';

  //Limite de resultados
  private readonly LIMIT = '5';
  
  constructor(private http: HttpClient) { }

  searchUsers(query:string){
    return this.http.get(this.API+'/search/users?q='+query+'&per_page='+this.LIMIT)
  }
}