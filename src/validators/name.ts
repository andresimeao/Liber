import {FormControl} from '@angular/forms';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import * as firebase from 'firebase/app';

export class NameValidator{
    constructor(public afDB:AngularFireDatabase){
        
    }
    users: FirebaseListObservable<any>;
    
    public isValid(control:FormControl):any{

        this.users = this.afDB.list('/users');

        this.users.forEach(user => {

            if(user.name == control.value){
                return false;
            }

            return {"nada encontrado": true};
            
        });

    }
}