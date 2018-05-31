import {Component} from '@angular/core';
import {Employee} from '../models/employee.model';
import {FormPoster} from '../services/form-poster.service';
import {NgForm} from '@angular/forms';

@Component({
  selector:'app-form',
  templateUrl:'./app.component.html'
})

export class AppComponent{
 
  langugages = ["NodeJs","AngulaeJs","ReactJs"]

  model = new Employee('John','methew','a@a.com',true,'male','NodeJs')

  constructor(private formPoster:FormPoster){}

    firstToUpper(value:string):void{
      if(value.length>0){
        this.model.firstName = value.charAt(0).toUpperCase()+value.slice(1)
      }else{
        this.model.firstName = value
      }
    }

      submitForm(form:NgForm){
        this.formPoster.postEmployeeForm(this.model)
          .subscribe(
            (data)=> console.log('success',data),
            (err) => console.log('error',err)
          )
      }
  }




  /*
  ng-pristine ng-untouched  ng-invalid
  ng-dirty    ng-touched    ng-valid
  */