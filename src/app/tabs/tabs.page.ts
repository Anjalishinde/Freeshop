import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(public router:NavController) {}
filter(items){
  // clicked function is created for dropdown item and taht item  passed to the shoppage to filter 
  this.router.navigateRoot(['tabs/shoppage',{item:items,skipLocationChange: true}])
}
}
