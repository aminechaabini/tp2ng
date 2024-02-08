import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AutoCompleteService {
  private url = 'https://apilb.tridevs.net/api/personnes';
  constructor(
    private http: HttpClient
  ) { }
  getUsers(search : string){
    const options = search !="" ?
      { params: new HttpParams().set('filter', `{"where":{"name":{"like":"%${search}%"}}}`) } : {};
      return this.http.get<any>(this.url,options);
  }
}
