import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Subject } from 'rxjs';


@Injectable()

export class BackendService {
fetch:any;
fetchindex:any;
result: number =0;
totalquestion: number =0;
 //getTest=new Subject<any>()
  constructor(private http:HttpClient) { }

  getData(){
    return this.http.get("http://interviewapi.stgbuild.com/getQuizData");
  }

  startTest(datas:any){
    this.fetch= datas;
  
    
   // console.log(this.fetch);
  }
  
}
