import {Component,OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {IProduct} from './product.model'

@Component({
    templateUrl:'./product-detail.component.html'
})

export class ProductDetail implements OnInit{
    title:"Product Detail"
    id;
    name;
    descrip;
    image;

    constructor(private _route:ActivatedRoute,
                private _router:Router){}

    ngOnInit():void{
        let outPut = +this._route.snapshot.params['id']
        this.id = `Product id: ${outPut}`

        this._route
            .queryParams
            .subscribe ((params)=>{
                this.name = params['name'];
                this.descrip = params['desc'];
                this.image = params['img']
            })
    }

    onBack():void{
        this._router.navigate(['/products'])
    }
}

/*
var a = 10
var b = "my age is "+a

var b =`my age is ${id}`
*/