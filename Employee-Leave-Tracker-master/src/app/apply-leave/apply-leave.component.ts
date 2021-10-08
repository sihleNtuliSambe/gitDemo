import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormControlName } from '@angular/forms'; 
import { LoginservService } from '../loginserv.service';
import * as moment from 'moment';
 
@Component({
  selector: 'app-apply-leave',
  templateUrl: './apply-leave.component.html',
  styleUrls: ['./apply-leave.component.css']
})
export class ApplyLeaveComponent implements OnInit {


  formatted_date:any;
  todate:any;
  dt:any;
  reasonss:any;
model:any={};
leaveform:FormGroup;
e:any[]=[];
employee:any[]=[];
model2:any={};
username:any;
selectedReason:any;
status='Not Approved';
isEdit=false;
isupdate=true;
model4:any={};
model5:any={};
fromdate:Date;
current_date=new Date();
userid:any;
reason:any[]=[
  {res:'Select Reason'},
  {res:'Cultural'},
  {res:'Disability'},
  {res:'Maternity'},
  {res:'Medical'},
  {res:'Parental'},
  {res:'Sabbatical'},
]


  constructor(private m:LoginservService) { 
     this.model2=this.m.getData();
     this.username=this.model2.username;
     this.userid=this.model2.userid;
  }

  ngOnInit() {
    let current_datetime = new Date()
    this.formatted_date = (current_datetime.getFullYear() ) + "-" + ("0" + (current_datetime.getMonth() + 1)).slice(-2) + "-" + ("0" + (current_datetime.getDate() + 0)).slice(-2)
    console.log(this.formatted_date);
    this.e=JSON.parse(localStorage.getItem("applayData"));
    //this.fromdate= new Date(2020,5,27);
    

    this.leaveform=new FormGroup({
      fromdate:new FormControl(['',Validators.required]),
      todate:new FormControl(['',Validators.required]),
    
    });
    if(this.e!=null)
    {
      let j=0;
      for(let i=0;i<this.e.length;i++)
      {
        if(this.e[i].username==this.username)
        {
          this.employee[j]=this.e[i];
          j++;
        }
        if(this.e[i].status!="Not Approved")
        {
          this.isEdit=true;
        }
        else
        {
          this.isEdit=false;
        }
      }
    }
    
  }
   
  onFromDatechange(){   
    //this.todate = ;
    this.fromdate = new Date(this.dt);
    this.todate = (this.fromdate.getFullYear() ) + "-" + ("0" + (this.fromdate.getMonth() + 1)).slice(-2) + "-" + ("0" + (this.fromdate.getDate() + 1)).slice(-2)
    console.log("Date : "+this.todate);
  }
  
 
 //document.addEventListener('load', onLoad, false);
 onChangeReason(e){
  this.selectedReason = e.target.value;
  console.log("Onchange : "+e.target.value);
}

  addData()
  {
      this.model=this.leaveform.value;
      this.model.username=this.username;
      this.model.userid=this.userid; 
      this.model.status=this.status;
      this.model.selectedReason = this.selectedReason;
      console.log("add : "+this.selectedReason);
 
      let emp=JSON.parse(localStorage.getItem("applayData"));
      if(emp==null)
      {
        emp=[];
      }
      emp.push(this.model);
      localStorage.setItem("applayData",JSON.stringify(emp));
      this.e=JSON.parse(localStorage.getItem("applayData"));
      let j=0;
      for(let i=0;i<this.e.length;i++)
      {
        if(this.e[i].username==this.username && this.e[i].userid==this.userid)
        {
          this.employee[j]=this.e[i];
          j++;
        }
        if(this.e[i].status!="Not Approved")
        {
          this.isEdit=true;
        }
        else{
          this.isEdit=false;
        }
      }


  }
  deleteLeave(i)
  {
    this.e.splice(i,1);
    localStorage.setItem("applayData",JSON.stringify(this.e));
    this.e=JSON.parse(localStorage.getItem("applayData"));
    this.employee=this.e;
  }
model3:any={};
myvalue;
  editLeave(i)
  {
    this.isupdate=false;
     this.model3.fromdate=this.e[i].fromdate;
    this.model3.todate=this.e[i].todate;
    this.myvalue=i;
  }
  updateLeave()
  {
    //this.isEdit=false;
     let k=this.myvalue;
     this.model4=this.leaveform.value;
     this.model5.fromdate=this.model4.fromdate;
     this.model5.todate=this.model4.todate;
     this.model5.username=this.username;
     this.model5.userid=this.userid;
     this.model5.status=this.status;
     this.model5.selectedReason=this.selectedReason;
     for(let i=0;i<this.e.length;i++)
     { 
       if(i==k)
       {
         this.e[i]=this.model5;
         localStorage.setItem("applayData",JSON.stringify(this.e));
         this.e=JSON.parse(localStorage.getItem("applayData"));
         this.employee=this.e;
       }
       if(this.e[i].status!="Not Approved")
       {
         this.isEdit=true;
       }
       else{
         this.isEdit=false;
       }
     }
    }
  }

