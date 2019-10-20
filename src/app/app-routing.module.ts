import { NgModule } from '@angular/core';
import {Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './core/home/home.component';
import {TimestampComponent} from './timestamp/timestamp.component';
import { SudokuComponent } from './sudoku/sudoku.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'timestamp', component: TimestampComponent},
  { path: 'sudoku', component: SudokuComponent},
  { path: '*', redirectTo: ''}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
