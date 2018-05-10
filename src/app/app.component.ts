import {Component} from '@angular/core';

@Component({
    selector:'app-comp',
    template:`<div>
                <nav class="navbar navbar-inverse">
                  <div class="container-fluid">
                    <a class="navbar-brand">Angular5</a>
                    <ul class="nav navbar-nav">
                      <li><a>Home</a></li>
                      <li><a>Order</a></li>
                      <li><a>Product</a></li>
                    </ul>
                  </div>
                </nav>
                <div>
                  <router-outlet></router-outlet>
                </div>
              </div>`
})

export class AppComponent{

}