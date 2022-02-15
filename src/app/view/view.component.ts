import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MyserviceService } from '../service/myservice.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  Customer_Id:any;
  result:any;
  constructor(private myservice:MyserviceService,private router:Router,private ar:ActivatedRoute) { }

  ngOnInit(): void {
    this.Customer_Id=this.ar.snapshot.params['Customer_Id'];
      this.myservice.viewcustomerServicebyId(this.Customer_Id).subscribe(r=>{this.result=r;});
    }
  
    backtoView()
    {
      this.router.navigate(['/homepage']);
    }

}
