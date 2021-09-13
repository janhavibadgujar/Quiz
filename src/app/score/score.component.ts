import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {

  score: number=0;
  totalquest: number =0;

  constructor(private router:Router, private backendService:BackendService,
    private activate:ActivatedRoute) 
    {
  
    this.score= this.backendService.result;
    this.totalquest =this.backendService.totalquestion;


   }

  ngOnInit(): void {
  }

}
