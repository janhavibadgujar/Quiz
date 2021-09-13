import { Component } from '@angular/core';
import { any } from 'sequelize/types/lib/operators';
import { BackendService } from './backend.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data: any;
  constructor(private backendService:BackendService, private router:Router) {

  }
 
  
}


