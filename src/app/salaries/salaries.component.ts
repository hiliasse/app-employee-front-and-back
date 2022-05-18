import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { filter, map, Observable } from 'rxjs';
import { Salaries } from '../model/salaries.model';
import { SalariesService } from '../services/salaries.service';
 

@Component({
  selector: 'app-salaries',
  templateUrl: './salaries.component.html',
  styleUrls: ['./salaries.component.css']
})
export class SalariesComponent implements OnInit {
  Collaborateur : any;
 
  public salar!: Salaries[];
  userid!: number; 
  

  constructor(private salarserv : SalariesService, private router:Router) {
   }

  ngOnInit(): void {
  }

  onGetAllSalaries(){
    console.log("Salaries : ");
      this.salarserv.getAllSalaries().subscribe( 
      (data : Salaries[])=>{ 
        this.salar = data;
        console.log(data);
      })
    ;
  }

  public onAddEmloyee(addForm: NgForm ): void {
   
    this.salarserv.addSalaries(addForm.value ).subscribe(
      (response: Salaries) => {
        console.log(response);
        // this.getEmployees();
        addForm.reset();
      }
    );
  }

  onGetSalariesBySearch():Salaries[]{
    console.log("Salaries by name: ");
    this.Collaborateur = this.Collaborateur.toLocaleLowerCase();
    console.log("this.Collaborateur lower case first name : " , this.Collaborateur);
 
      this.salarserv.getAllSalaries().forEach( 
      data =>{ 
              console.log("data : ", data);             
              this.salar = data.filter((x : Salaries)=> 
                  //  (x.firstname||'').toLocaleUpperCase().indexOf(this.Collaborateur)!=-1 || (x.lastname||'').toLocaleUpperCase().indexOf(this.Collaborateur)!=-1
                     x.firstName.toLocaleLowerCase().indexOf(this.Collaborateur)!=-1 || x.lastName.toLocaleLowerCase().indexOf(this.Collaborateur)!=-1
                  //  console.log("test", x.firstname.toLocaleLowerCase())
                  //  console.log("test", x.email)
                //  this.userid = x.id;
                //  console.log("id", this.userid)
              );
             }
      )
      console.log("salar : ", this.salar);   
      return this.salar ;
  }

  public get salarInfos (){
    return this.salar;
  }


  detail(){
    console.log("test click ");
    console.log("salar : ", this.salar);
    this.salar.map(data => this.userid = data.id) ;
    console.log("id", this.userid);
    this.router.navigate(["/salariesdetail",this.userid]);
  }

    Test(){

      console.log("salar : ", this.salar);
      var myFav   = "javascript";
      var theList = "VB.NET, C#, PHP, Python, JavaScript, and Ruby";
      console.log("the list",  theList.indexOf( myFav ) );
      console.log("my fav",theList.toLowerCase().indexOf( myFav.toLowerCase() ) );
     
    }

}
