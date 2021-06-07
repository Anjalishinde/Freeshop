import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { element } from 'protractor';
import { EMPTY, Observable } from 'rxjs';
export interface Mydata{
  productName:string,
  price:string,
  prodcutImage:string,
  category:string
}
@Component({
  selector: 'app-shoppage',
  templateUrl: './shoppage.page.html',
  styleUrls: ['./shoppage.page.scss'],
})
export class ShoppagePage implements OnInit {
 
 catPara:any;
 
 uid:any;

  list:Observable<Mydata[]>
 public list1:any[]
  private productCollection: AngularFirestoreCollection<Mydata>

  constructor(public database:AngularFirestore,private route: ActivatedRoute, private router: Router, public auth:AngularFireAuth) { 

    this.productCollection= this.database.collection<Mydata>("Products");
      //  fetch all product details in list by angularfirestore 
    this.list=this.productCollection.valueChanges()
    this.auth.authState.subscribe(user=>{
      this.uid= user.uid;
      // console.log(user.uid)
    })
  }

  async ngOnInit() {
    // list fetch list1 and pushed the list1 into html page  
    this.list.forEach(element=>{
      this.list1=element
    })
    
    // item is catched from the tabs.ts by routing params and fetched to catpara for filtertion
   this.route.params.subscribe(params => {
      this.catPara = params['item']

  });

  // fliter
        let result
        if(this.catPara){
          // filter the list data and updated in list1
           this.list.forEach(async elem => {
             result = await elem.filter(value => value.category == this.catPara)
              this.list1=result
  })
 
}
   }

 // taking the useruid for seting the cart and there details in that particular user uid
   addCart(item){
   
    
      this.database.collection('users').doc(this.uid).collection('cart').doc(item.productName).set({productName:item.productName,price:item.price,productImage:item.productImage,quantity:1}).then(resp=>{alert("added")})
      
    
   }
  }
