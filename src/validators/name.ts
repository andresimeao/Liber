
import {FormControl} from '@angular/forms';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import * as firebase from 'firebase/app';

export class NameValidator{
    users: FirebaseListObservable<any>


    constructor(public afDB:AngularFireDatabase){
        
    }

    
    public isValid(control:FormControl):any{
        

        this.users = this.afDB.list('/users');

        this.users.forEach(user => {

            if(user.name == control.value){
                return{"Nome ja existe": false};
            }

            return {"Nome liberado": true};
            
        });

    }
    
    }


    // static CheckUserName(control: FormControl): any{
    //     return new Promise(resolve =>{
           
            
            
    //     });
    
