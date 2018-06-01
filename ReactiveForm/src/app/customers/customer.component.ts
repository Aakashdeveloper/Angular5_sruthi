import { Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, FormBuilder,
        Validators} from '@angular/forms'

import { Customer } from './customer';



@Component({
    selector: 'my-signup',
    templateUrl: './customer.component.html'
})
export class CustomerComponent implements OnInit  {
    customerForm: FormGroup;
    customer: Customer= new Customer();


    constructor(private fb:FormBuilder){}

    ngOnInit():void{
        this.customerForm = this.fb.group({
            firstName:['',[Validators.required,Validators.minLength(5)]],
            lastName:['',[Validators.required,Validators.maxLength(5)]],
            email:['',[Validators.required,Validators.pattern('[a-z0-9._+-]+@[a-z0-9.-]+')]],
            phone:'',
            notification:''
        })
    }

    populateData():void{
        this.customerForm.patchValue({
            email:'a@a.com'
        })
        
    }
   
    /*populateData():void{
        this.customerForm.setValue({
            firstName:'john',
            lastName:'mehtwe',
            email:'a@a.com'
        })
        
    }*/
    
    save() {
        console.log(this.customerForm);
        console.log('Saved: ' + JSON.stringify(this.customerForm.value));
    }

    setNotifaction(notifyVia:string):void{
        const phoneControl = this.customerForm.get('phone');
        if(notifyVia === "text"){
            phoneControl.setValidators(Validators.requiredTrue)
        }else{
            phoneControl.clearValidators()
        }
        phoneControl.updateValueAndValidity()
    }

 }
