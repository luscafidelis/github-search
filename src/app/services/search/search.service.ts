import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SearchService {
  private readonly API = 'https://api.github.com';
  constructor(private http: HttpClient) { }

  searchUsers(query:string){
    return this.http.get(this.API+'/search/users?q='+query)
  }
}