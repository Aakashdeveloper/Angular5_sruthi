import {Component} from '@angular/core';
import {IProduct} from './product.model';
import {ProductService} from './product.service'

@Component({
    selector:'prod-comp',
    templateUrl:'./products.component.html',
    //styles:['thead{color:green}','h3{color:purple}']
    styleUrls:['./product.component.css']
})

export class ProductComponent{
    title:string="*******Product List********";
    showTable=true;
    showImage=false;
    filterProduct;
    products:IProduct[]

    constructor(private _productService:ProductService){}

    toggleImage():void{
       this.showImage = !this.showImage
    }

    ngOnInit():void{
        this.products = this._productService.getProducts()
    }

    onDataRecive(message:string){
        this.title="*******Product List********"+message
    }
}


/*

string = """
number = 1
boolean = true/false

One way binding
--Data Binding==> {{}}
--Event Binding==> ()
--Property Binding==> []
Two wy binding==> [()]
*/