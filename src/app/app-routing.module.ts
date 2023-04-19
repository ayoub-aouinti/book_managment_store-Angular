import { BuybookComponent } from './buybook/buybook.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewbookComponent } from './viewbook/viewbook.component';

const routes: Routes = [
  {path:"", component:BuybookComponent},
  {path:"viewbook", component:ViewbookComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
