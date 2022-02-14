import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


//import * as destination  from './files/destination.json'; 
@Component({
  selector: 'app-search-form-page',
  templateUrl: './search-form-page.component.html',
  styleUrls: ['./search-form-page.component.css'],
  
})
export class SearchFormPageComponent implements OnInit {
  //public hotels:any[] = (destination as any).default;;
 destinationarr:any=[];
 hotels:any=[];
  selectedhotel:any;
 searchForm: FormGroup;
 submitted = false;
 duplicateElements:any;
 filteredarr:any;

  constructor( private httpclient:HttpClient,private formBuilder: FormBuilder) { }

  

  ngOnInit() {

    this.searchForm = this.formBuilder.group({
      destination: ['', Validators.required],
      checkin: ['', Validators.required],
      checkout: ['', Validators.required],
      adult: ['', Validators.required],
      child: ['', Validators.required],
     
  });


    this.httpclient.get("assets/files/destination.json").subscribe(data =>{
      this.destinationarr =  data;
    });
    this.httpclient.get("assets/files/splitty.json").subscribe(data =>{
      this.hotels =  data;
    })
   
   
  }
  get f() { return this.searchForm.controls; }

  onSubmit() {
    this.submitted = true;
   
    // stop here if form is invalid
    if (this.searchForm.invalid) {
        return ;
        
    }
    else{
      //this.selectedhotel = this.searchForm.controls.destination.value;
      alert("value stored for future use");
      this.selectedhotel = this.hotels;
      let getData = {
              "destination":this.searchForm.controls.destination.value,
              "checkin": this.searchForm.controls.adult.value,
               "checkout": this.searchForm.controls.child.value
      }
      localStorage.setItem("Searcdetal", JSON.stringify(getData ));
      

      //let filtereddata = arr => arr.filter((item, index) => arr.indexOf(item) != index)
       //console.log(filtereddata( this.hotels)); 
      

    }

   
   }
   

   //select hotel name and find related hotel
 
 
}
