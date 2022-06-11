import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { DetailsComponent } from './components/details/details.component';
import { CreateComponent } from './components/create/create.component';

const routes: Routes = [
  {path:'',redirectTo:'books',pathMatch:'full'},
  {path:'books',component:ListComponent},
  {path:'books/:id',component:DetailsComponent},
  {path:'add',component:CreateComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
