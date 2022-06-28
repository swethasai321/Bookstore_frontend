import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})


export class Service {
  

  constructor(private http:HttpClient) { }

  
  getAddress(){
    return this.http.get("http://localhost:8082/book/get-all");
  }
  getBookByName(bookName:string){
    return this.http.get("http://localhost:8082/book/get-book/"+bookName);
  }
  sortAscByBookName(){
    return this.http.get("http://localhost:8082/book/sort");
  }
  sortAscByBookPrice(){
    return this.http.get("http://localhost:8082/book/sortAsc");
  }
  sortDscByBookPrice(){
    return this.http.get("http://localhost:8082/book/sortdsc")
  }
}