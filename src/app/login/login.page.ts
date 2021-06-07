import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
email:string="";
password:string="";
  
  constructor(public navcql:NavController,public auth:AngularFireAuth) { }

  ngOnInit() {
  }

  shoplink(){
    if(this.email==="" && this.password===""){
    alert(
      'username or password is empty')
    }
    else{
      try{
      this.auth.signInWithEmailAndPassword(this.email,this.password).then(result=>{
        if(result){
          
          this.navcql.navigateRoot(['tabs/shoppage'])
        }
        
      })
     }
      catch(err){
        console.log(err)
        alert(err)
        // if(err.code === "auth/user-not-found"){
        //   alert('Email Not Registered');
        //   console.log("User not found")
        // }
        // else if(err.code === "auth/invalid-email")
        // {
        //   alert('Invalid Email Format');
        // }
        // else if(err.code === 'auth/wrong-password')
        // {
        //   alert(' Wrong Password Try-again');
        // }
      }
      
     
    }

  }

}
