import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Salaries } from '../model/salaries.model';
import { SalariesComponent } from '../salaries/salaries.component';
import { SalariesService } from '../services/salaries.service';


@Component({
  selector: 'app-salariesdetail',
  templateUrl: './salariesdetail.component.html',
  styleUrls: ['./salariesdetail.component.css']
})
export class SalariesdetailComponent implements OnInit {

  salarie!: Salaries;
  file : any
  constructor(private salarserv : SalariesService,private route: ActivatedRoute,private router:Router, private http:HttpClient) { }

  ngOnInit(): void {

    const idT = Number(this.route.snapshot.paramMap.get('id'));
    console.log('idT:' ,idT);
    this.salarserv.getSalarieById(idT).subscribe((data) => {
      this.salarie = data ;
      console.log('user :', this.salarie);
    })
  }

  // cors (req : any, res: any) {
  //   res.setHeader ('Access-Control-Allow-Origin','http://localhost:10300/api/v1/employee/upload/file');
  // }


  // app.use(function(req :any, res:any, next:any) {
  //   // update to match the domain you will make the request from
  //   res.header("Access-Control-Allow-Origin", "YOUR-DOMAIN.TLD");
  //   res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  //   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  //   next();
  //   });
  
  getfile (event :any){
 
    this.file =event.target.files[0];
    console.log('file :', this.file);
  

    let formData = new FormData();
    formData.set('file', this.file);
    this.http.post("http://localhost:10300/api/v1/employee/upload/file",formData).subscribe((response)=>{console.log('response upload:', response);
    console.log('file upload:', this.file);});

 }

  onUpdateSalarie(employe : Salaries) {

    console.log("employe entree : ", employe);
    console.log("employe entree id : ", employe.id);
    this.salarserv.updateSalaries(employe).subscribe(
      (data ) => {
        console.log("data sortie : ", data);
      }
    )
  }

  // onUpdateSalarie(employe : Salaries) {

  //   console.log("employe entree : ", employe);
  //   console.log("employe entree id : ", employe.id);
  //   this.salarserv.updateSalaries(employe.id, employe).subscribe(
  //     (data ) => {
  //       console.log("data sortie : ", data);
  //     }
  //   )
  // }

  onDeleteSalarie() {

    // console.log("salarie : ", employe);
    console.log("employee : ", this.salarie.id);
    this.salarserv.deleteSalaries(this.salarie.id).subscribe(
      (data) => {
        console.log("employee : ", data);
      }
    )
  }

}
