import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisterComponent } from './register/register.component';
import { SnapComponent } from './snap/snap.component';

const routes: Routes = [{
  path:"login",
  component:LoginComponent
},
{
path:"logout",
component:LogoutComponent
},
{
  path:"dashboard",
  component:DashboardComponent
},
{
  path:"register",
  component:RegisterComponent
},
{
  path:"snap",
  component:SnapComponent
},
{
  path:"",
  redirectTo:"dashboard",
  pathMatch:"full"
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
