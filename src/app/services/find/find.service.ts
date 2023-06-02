import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class FindService {
  //API do github
  private readonly API = 'https://geocode.maps.co';

  //Limite de resultados
  private readonly LIMIT = '1';
  
  constructor(private http: HttpClient) { }

  findCoordinates(query:string){
    return this.http.get(this.API+'/search?q='+query+'&limit='+this.LIMIT)
  }
}