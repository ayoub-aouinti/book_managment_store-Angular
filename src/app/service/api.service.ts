import { bookmodel } from './../bookmodel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient,private Router:Router) { }

  //buying book
  buybook(data:bookmodel){
    return this.http.post<bookmodel>("https://localhost:3000/posts",data);
  }

  //viewing book
  viewbook(data:bookmodel){
    return this.http.get<bookmodel>("https://localhost:3000/posts");
  }

  //delete book
  delete(id:number){
    return this.http.get<bookmodel>("https://localhost:3000/posts/"+id);
  }

  //fetch data
  fetchdata(id:number){
    return this.http.get<bookmodel>("https://localhost:3000/posts/"+id);
  }

  //update data
  update(data:bookmodel,id:number){
    return this.http.put<bookmodel>("https://localhost:3000/posts/"+id,data);
  }
}
