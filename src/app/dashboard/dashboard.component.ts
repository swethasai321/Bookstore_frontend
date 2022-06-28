import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Service } from 'src/services/bookstore.service';
import { bookmodule } from './Model/book.module';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  totalBooks: number = 0;
   sort: any;
 bookName!: string;
  cartLength: number=0


  constructor(private service:Service,private route:ActivatedRoute) { }

  book:bookmodule = new bookmodule("","","","",0,0)

  ngOnInit(): void {
  }
  sortAscPrice(){
    this.service.sortAscByBookPrice().subscribe((data:any)=>{
      console.log("sorted in ascending order of price");
      this.book=data.data;
      console.log("data asc",data);
    })
};
sortDscPrice(){
  this.service. sortDscByBookPrice().subscribe((data:any)=>{
    console.log("sorted in descending order of price");
    this.book=data.data;
    console.log("data desc",data);
  })
};
searchByName(){
  this.service.getBookByName(this.bookName).subscribe((data:any)=>{
    console.log("sorted");
    this.book=data.data;
    console.log("data sorted",this.bookName);
  })
};
}
