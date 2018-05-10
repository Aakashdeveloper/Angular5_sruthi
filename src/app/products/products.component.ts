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
    imageWidth=50;
    filterProduct;
    errorMessage;
    products:IProduct[]

    constructor(private _productService:ProductService){}

    toggleImage():void{
       this.showImage = !this.showImage
    }

    ngOnInit():void{
        this._productService.getProducts()
            .subscribe((data) => this.products = data,
                        (err)=> this.errorMessage = err)
    }

    onDataRecive(message:string){
        this.title="*******Product List********"+message
    }
}


/*
MEAN
string = """
number = 1
boolean = true/false

One way binding
--Data Binding==> {{}}
--Event Binding==> ()
--Property Binding==> []
Two wy binding==> [()]
*/