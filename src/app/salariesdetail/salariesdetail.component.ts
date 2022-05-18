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
  constructor(private salarserv : SalariesService,private route: ActivatedRoute,private router:Router, ) { }

  ngOnInit(): void {

    const idT = Number(this.route.snapshot.paramMap.get('id'));
    console.log('idT:' ,idT);
    this.salarserv.getSalarieById(idT).subscribe((data) => {
      this.salarie = data ;
      console.log('user :', this.salarie);
    })
  }

  onUpdateSalarie(employe : Salaries) {

    console.log("salarie : ", employe);
    this.salarserv.updateSalaries(employe).subscribe(
      (data ) => {
        console.log("employee : ", data);
      }
    )
  }

  onDeleteSalarie() {
    console.log("employee : ", this.salarie.id);
    this.salarserv.deleteSalaries(this.salarie.id).subscribe(
      (data) => {
        console.log("employee : ", data);
      }
    )
  }

}
