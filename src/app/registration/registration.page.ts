import { Component, OnInit } from '@angular/core';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { NavController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { isEmptyExpression } from '@angular/compiler';
import { convertUpdateArguments } from '@angular/compiler/src/compiler_util/expression_converter';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {
 email:string='';
 password:string='';
 firstname:string='';
 lastname:string='';
  constructor(public navcql:NavController,public auth:AngularFireAuth,public database:AngularFirestore) { }

  ngOnInit() {
  }
 async submit(){
    if(this.email==="" && this.password==="" && this.firstname==="" && this.lastname==="" ){
      alert(
        'username or password is empty'
      )
      }
      else{
        try{
          let result = await this.auth.createUserWithEmailAndPassword(this.email,this.password)
         if (result){
      
          //  console.log(result.user.uid)
           this.update(result.user.uid)
            
         }
      
        }
        catch(error)
        {
          if(error.code ==="auth/invalid-email"){
          alert(error.message)
        }
        else if(error.code==='auth/weak-password'){
          alert(error.message)
        }
        else if(error.code==='auth/email-already-in-use'){
          alert(error.message)
        }
          console.log(error.code)
        } 
      }

  }
  jumplogin(){
    this.navcql.navigateRoot(['login'])
  }

  update(uid){
   
    this.database.collection('users').doc(uid).set({name:this.firstname+this.lastname,uid:uid,email:this.email}).then(resp=>{
      console.log(resp);
      alert("succsefully updated");
      
        this.navcql.navigateRoot(['tabs/shoppage'])  
      
    }).catch(error=>{
      console.log("error" + error)
    })
  }

}
