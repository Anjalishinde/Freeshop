import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
export interface MyCart{
  productName:string,
  price:any,
  prodcutImage:string,
  quantity:number
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  
quantity:number
id:any
totalprice:any
minusbutton:boolean=false
  private productCollection: AngularFirestoreCollection<MyCart>
  list:Observable<MyCart[]>


  constructor(public database:AngularFirestore,public auth:AngularFireAuth) { 
// calling and the added data of product from firestore
this.auth.authState.subscribe(user=>{
  this.productCollection= this.database.collection("users").doc(user.uid).collection<MyCart>("cart");
  this.list=this.productCollection.valueChanges()
   this.id=user.uid
   
})
   
    
  }
   
  ngOnInit() {
   this.quantity=1
   
  }
    
  async qunt(cal,i){

    if(cal==='plus'){
      this.productCollection.doc(i.productName).update({quantity:i.quantity +1})
      this.totalprice=i.price*i.quantity
    }
    else{
      if(i.quantity>1)
      this.productCollection.doc(i.productName).update({quantity:i.quantity - 1})
      else{
        this.minusbutton=true
      }
      this.totalprice=i.price*i.quantity
    }

  }
 remove(item){
   this.database.collection('users').doc(this.id).collection('cart').doc(item.productName).delete()
 }
}
