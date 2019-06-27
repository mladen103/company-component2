import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http : HttpClient) { }

  public getComments(){
    return this.http.get("http://localhost:4200/assets/json/comments.json");
  }

}
