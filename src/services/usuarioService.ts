// para injetar esse serviço em qualquer construtor
import {Injectable} from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import * as firebase from 'firebase/app';
@Injectable ()

export class UsuarioService{

    constructor(public afDB: AngularFireDatabase, public afAuth: AngularFireAuth){}


    public cadUsuario(usuario){
        this.afAuth.auth.createUserWithEmailAndPassword(usuario.email , usuario.senha).then(
        function(firebaseUser){
            this.afDB.ref('usuarios/'+ firebaseUser.uid).set(usuario);
            console.log(firebaseUser.uid);

        }, function(error){
            console.log(error);
        });
    }
}