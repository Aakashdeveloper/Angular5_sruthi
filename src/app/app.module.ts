import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser'

import {AppComponent} from './app.component'

@NgModule({
    //We decl modules here
    imports:[
        BrowserModule
    ],
    //We will decl component & pipe
    declarations:[
        AppComponent
    ],
    //Conation only main component
    bootstrap:[
        AppComponent
    ]
})

export class AppModule{

}