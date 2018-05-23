import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import { ProductComponent } from "./products.component";
import { ProductUpperPipe } from "./product-upper.pipe";
import { ProductFilter } from "./product-filter.pipe";
import { ProductService } from "./product.service";
import { ProductDetail } from "./product-detail.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
    imports:[
        SharedModule,
        RouterModule.forChild([
            {path:'products', component:ProductComponent},
            {path:'products/:id',component:ProductDetail}
        ])
    ],
    declarations:[
        ProductComponent,
        ProductUpperPipe,
        ProductFilter,
        ProductDetail
    ],

    providers:[
        ProductService
    ]
})

export class ProductModule{

}