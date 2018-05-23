import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name:"myPipe"
})

export class ProductUpperPipe implements PipeTransform{
    transform(value:string,type:string){
        if(type=="upper"){
             value=value.toUpperCase();
        }else{
             value=value.toLowerCase();
        }
        return value
    }
}


/*
indexOf
var a = [1,2,3,4,5,7]
a.indexOf(1)

filterBy

function add(a,b){
    return a+b
}

var add = (a,b) => {return a+b}

*/