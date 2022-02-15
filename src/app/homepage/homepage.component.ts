import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyserviceService } from '../service/myservice.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  result: any;
  newId: any;

  constructor(private myservice:MyserviceService, private router:Router) { }

  ngOnInit(): void {
    this.myservice.displaycustomer()
    .subscribe(r=>
      {
        this.result=r;
      });
  }
deletecus(Customer_Id :any)
{
  this.myservice.deletecustomer(Customer_Id)
  .subscribe((r:any)=>
    {
      this.result=r;
      window.location.reload();
    });
}

updatecus(Customer_Id :any)
{
  this.newId=Customer_Id;
  this.router.navigate(['/update',Customer_Id]);
}

addcus()
{
  this.router.navigate(['/addcustomer']);
}
viewcus(Customer_Id :any)
{
  this.newId=Customer_Id;
  this.router.navigate(['/View',Customer_Id]);
}

}
