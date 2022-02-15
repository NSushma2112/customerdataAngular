import { DeclarationListEmitMode } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MyserviceService } from '../service/myservice.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  addcustomer: any;
  message: any;
  data: any;
 Customer_Id!: string | null;
 
  responseData:  resultData | undefined;
  result: any;

  constructor(private myservice:MyserviceService,  private router:Router,private aR:ActivatedRoute) { }

  ngOnInit(): void {
    this.addcustomer= new FormGroup(
      {
        FirstName:new FormControl(),
       LastName:new FormControl(),
        Cuntry:new FormControl(),
        CreateDate:new FormControl()
      }
    );

    this.Customer_Id=this.aR.snapshot.paramMap.get("Customer_Id");
    this.myservice.getrecordonID(this.Customer_Id).subscribe((r:any)=>{
      this.responseData = r;
      this.addcustomer.controls['FirstName'].setValue(this.responseData?.firstName);
        this.addcustomer.controls['LastName'].setValue(this.responseData?.lastName);
        this.addcustomer.controls['Cuntry'].setValue(this.responseData?.cuntry);
    
    });
  }
  get FirstName()
  {
    return this.addcustomer.get('FirstName');
  }
  get LastName()
  {
    return this.addcustomer.get('LastName');
  }
  
  get Cuntry()
  {
    return this.addcustomer.get('Cuntry');
  }
  get CreateDate()
  {
    return this.addcustomer.get('CreateDate');
  }
  
  
  onSubmit()
  {
    
    this.data=this.addcustomer.value;

    this.data.Customer_Id=Number(this.Customer_Id);
      this.myservice.updatecustomer(this.data).subscribe(res=>{this.result=res;});
        
        this.router.navigate(['/homepage']);
   
      }
    }
  
  interface resultData{
    firstName:string;
    lastName:string;
    cuntry:string;
    Customer_Id: number;
  }