import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
data:any;

  constructor(private backendService:BackendService, private router:Router) {
    
    this.backendService.getData().subscribe(data =>{
      console.log(data);
      this.data=data;
      this.data=this.data.tests;
    })
   }
  
   gotoTest(datas:any)
  {
  //console.log(datas);
  this.backendService.startTest(datas);
  //this.backendService.getTest.next(datas)
    this.router.navigate(['/test']);
   }


  ngOnInit(): void {
  }

}
