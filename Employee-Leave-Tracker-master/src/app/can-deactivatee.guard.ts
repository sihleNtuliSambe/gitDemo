import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { ApplyLeaveComponent } from './apply-leave/apply-leave.component';

@Injectable({
  providedIn: 'root'
})
export class CanDeactivateeGuard implements CanDeactivate<ApplyLeaveComponent> {
  canDeactivate():boolean{

    return window.confirm("Are you sure?");
  }
 
  
}
