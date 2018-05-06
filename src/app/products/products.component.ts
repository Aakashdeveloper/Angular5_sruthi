import {Component} from '@angular/core';
import {IProduct} from './product.model'

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
    products:IProduct[]=[
         {
            "productId": 1,
            "productName": "Leaf Rake",
            "productCode": "GDN-0011",
            "releaseDate": "March 19, 2016",
            "description": "Leaf rake with 48-inch wooden handle.",
            "price": 19.95,
            "starRating": 3.5,
            "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
        },
        {
            "productId": 2,
            "productName": "Garden Cart",
            "productCode": "GDN-0023",
            "releaseDate": "March 18, 2016",
            "description": "15 gallon capacity rolling garden cart",
            "price": 32.99,
            "starRating": 4.7,
            "imageUrl": "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
        },{
            "productId": 1,
            "productName": "Leaf Rake",
            "productCode": "GDN-0011",
            "releaseDate": "March 19, 2016",
            "description": "Leaf rake with 48-inch wooden handle.",
            "price": 19.95,
            "starRating": 3.2,
            "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
        }
        
    ]

    toggleImage():void{
       this.showImage = !this.showImage
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