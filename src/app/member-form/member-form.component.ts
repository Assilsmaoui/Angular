import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MemberService } from 'src/Services/member.service';

@Component({
  selector: 'app-member-form',
  templateUrl: './member-form.component.html',
  styleUrls: ['./member-form.component.css']
})
export class MemberFormComponent {
  //injection de dependance
  constructor(private MS:MemberService,private router :Router)
  {}
  
form !:FormGroup;
//intialiser les valeur par defaut null
ngOnInit(){
  this.form=new FormGroup({
cin:new FormControl(null),
name:new FormControl(null),
type:new FormControl(null),
createdate:new FormControl(null),
  })
}
sub(){
  console.log(this.form.value)//passage 1 et 4 
  this.MS.addMember(this.form.value).subscribe(()=>{
    this.router.navigate([''])
})
}}
