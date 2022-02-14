import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
//import * as hotelslist  from './_files/splitty.json';
@Component({
  selector: 'app-product-list-page',
  templateUrl: './product-list-page.component.html',
  styleUrls: ['./product-list-page.component.css']
})
export class ProductListPageComponent implements OnInit {

  toggleClass: boolean = true;
  toggleClass2: boolean = true; 
  hotels: any = [];
  hotelsearch:[] = [];
  //public hotelsarray:any[] = (hotelslist as any).default;
  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.httpClient.get("assets/files/splitty.json").subscribe(data =>{
      console.log(data);
      this.hotels = data; 
    })

  }

 
  

}
