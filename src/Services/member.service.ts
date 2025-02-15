import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Member } from 'src/Models/Member';

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  constructor(private http:HttpClient){}
//fonction qui envoi une requete get dans le back 
GetAllMembers():Observable<Member[]>{
 return this.http.get<Member[]>('http://localhost:3000/membres')
 }
 addMember(member:Member):Observable<void>//3
 {
  return this.http.post<void>('http://localhost:3000/membres',member)//2
 }
}
