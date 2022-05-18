import { Injectable, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Salaries } from '../model/salaries.model';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({providedIn:"root"})
export class SalariesService {
  
  private host = environment.apiBaseUrl;

  constructor(private http:HttpClient) {}

  getAllSalaries():Observable<Salaries[]>{
    return this.http.get<Salaries[]>(this.host + "/all");
  }

  addSalaries(sal:Salaries):Observable<Salaries>{
    return this.http.post<Salaries>(this.host+"/add/",sal);
  }

  // updateSalaries(id : number, sal:Salaries):Observable<Salaries>{
  //   // return this.http.put<Salaries>(this.host+"/salaries/"+id,sal);
  //   return this.http.put<Salaries>(this.host+"/update/"+id,sal);
  // }

  updateSalaries(sal:Salaries):Observable<Salaries>{
    return this.http.put<Salaries>(this.host+"/update",sal);
  }

  deleteSalaries(salarieId:number):Observable<void>{
    return this.http.delete<void>(this.host+"/delete/"+salarieId);
  }

  getSalarieById(id: number): Observable<Salaries> {

    return this.http.get<Salaries>(this.host+"/"+id);
  }



 }
