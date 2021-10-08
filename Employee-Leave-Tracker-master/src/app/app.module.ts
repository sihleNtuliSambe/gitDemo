import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularmaterialModule } from './angularmaterial/angularmaterial.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ApplyLeaveComponent } from './apply-leave/apply-leave.component';
import { LeaveSummaryComponent } from './leave-summary/leave-summary.component';
import { LoginservService } from './loginserv.service';
import 'hammerjs';
import { CanDeactivateeGuard } from './can-deactivatee.guard';
import { LogoutComponent } from './logout/logout.component';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { UsersComponent } from './users/users.component';


const appRouts:Routes=[
  {path:"home",component:HomeComponent},
  {path:"login",component:LoginComponent},
  {path:"users",component:UsersComponent},
  {path:"signup",component:SignupComponent},
  {path:"applyleave",component:ApplyLeaveComponent,canDeactivate:[CanDeactivateeGuard]},
  {path:"summary",component:LeaveSummaryComponent},
  {path:"logout",component:LogoutComponent},
  {path:"",redirectTo:'/home',pathMatch:'full'},
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    ApplyLeaveComponent,
    LeaveSummaryComponent,
    LogoutComponent,
    UsersComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    AngularmaterialModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRouts),
    OwlDateTimeModule,
    OwlNativeDateTimeModule,




  ],
  providers: [LoginservService,CanDeactivateeGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
