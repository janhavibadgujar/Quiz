import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TestComponent} from '../app/test/test.component';
import { HomeComponent } from './home/home.component';
import { ScoreComponent } from './score/score.component';


const routes: Routes = [
  {path: '',component: HomeComponent},
  {path: 'test', component: TestComponent},
  {path: 'score',component: ScoreComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
