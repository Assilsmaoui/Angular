import { Component, OnInit } from '@angular/core';
import { MemberService } from 'src/Services/member.service';

@Component({
  selector: 'app-member',//selector appel de membreComponent 
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {
  dataSource :any[]=[]
  //injection de dependance :mecanisme qui permet d'appeler (injection) le service dans le composant
  constructor(private MS:MemberService){}
  ngOnInit(): void {//fonction lance automatiquement 
    this.MS.GetAllMembers().subscribe((data)=>{
      //action
      this.dataSource=data
    })//entre view et service 
  }
  delete(id: string):void {//passage 1 et 4
    this.MS.deleteMember(id).subscribe((data) => {
      this.MS.GetAllMembers().subscribe((data)=>{
        //action
        this.dataSource=data
      })
    })
  }
  displayedColumns: string[] = ['ID', 'CIN', 'Name', 'Type','createdate','icon'];
}
