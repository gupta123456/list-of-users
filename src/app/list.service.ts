import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(private http:HttpClient) { }

  getList(page){
    return this.http.get('https://reqres.in/api/users?page=' + page);
  }
}
