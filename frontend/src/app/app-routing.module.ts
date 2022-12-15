import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFormComponent } from './pages/add-form/add-form.component';
import { HomeComponent } from './pages/home/home.component';
import { EditFormComponent } from './pages/edit-form/edit-form.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'add',component:AddFormComponent},
  {path:'edit/:id',component:EditFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
