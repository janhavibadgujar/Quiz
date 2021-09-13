import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { BackendService } from '../backend.service';


@Component
({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})

export class TestComponent implements OnInit {
  
  testdata: any;
  i: number=0;
  correctanswer:number=0;
  answermarked: Number[] = [];


  constructor(private router:Router, private backendService:BackendService,
    private activate:ActivatedRoute) {
  
    //console.log(this.activate.snapshot.data);
   }

  
  ngOnInit(): void {
    this.testdata= this.backendService.fetch.questions;
    console.log(this.testdata);
    
     console.log(this.testdata[this.i].correctOptionIndex);
  
}
  
 onnext()
 { //console.log(this.answermarked);
    //console.log(this.testdata[this.i].correctOptionIndex);

//  if(this.testdata[this.i].correctOptionIndex.length > 1)
//   {
//     if(JSON.stringify(this.testdata[this.i].correctOptionIndex.sort())==JSON.stringify(this.answermarked.sort()))
//         {
//           this.correctanswer++;
//         }
//     }

//     else
//     {
//       if(this.answermarked == this.testdata[this.i].correctOptionIndex)
//       {
//         this.correctanswer++;
//         console.log("this.correctanswer", this.correctanswer);
        
//       }
//     }

    this.i++;
    //console.log("this.i", this.i);
    
    
 
  }

  getStatus(markeddata:any){
    //this.answermarked=[];
    //this.answermarked.push(markeddata);
    if(markeddata == this.testdata[this.i].correctOptionIndex)
    {
      this.correctanswer++;
    }
   
  }

  sendData()
  {
    //  if(this.testdata[this.i].correctOptionIndex.length > 1)
    // {
    //   if(JSON.stringify(this.testdata[this.i].correctOptionIndex.sort())==JSON.stringify(this.answermarked.sort()))
    //     {
    //       this.correctanswer++;
    //     }
    // }
    
    // else
    // {
      // if(this.answermarked == this.testdata[this.i].correctOptionIndex)
      // {
      //   this.correctanswer++;
      //   console.log("this.correctanswer", this.correctanswer);
      // }
    //}
    this.backendService.result= this.correctanswer;
    this.backendService.totalquestion= this.testdata.length;
     }

}
