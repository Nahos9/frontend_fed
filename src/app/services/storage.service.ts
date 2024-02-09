import { Injectable } from '@angular/core';

const TOKEN = "token"
const USER: string = "user" 

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  static saveToken(token:string):void{
    window.localStorage.removeItem(TOKEN)
    window.localStorage.setItem(TOKEN,token)
  }

  static saveUser(user:any):void{
    window.localStorage.removeItem(USER)
    window.localStorage.setItem(USER,JSON.stringify(user))
  }

  static getToken():any{
    let s = localStorage.getItem(TOKEN)
    return s;
  }

  static getUser(): any {
    let user = JSON.stringify(localStorage.getItem(USER))
    return JSON.parse(user)
  }
  static getUserRole():string{
    let user = this.getUser()
    if(user.role == null){return ''}
    return user.user_role;
  }
  static isRespoLoggedIn():boolean{
    let role :string = this.getUserRole()
    if(role === null ) {return false}

    return role == "EMPLOYE";
  }
  static isEmployeLoggedIn():boolean{
    let role :string = this.getUserRole()
    if(role === null ) {return false}

    return role == "RESPONSABLE";
  }

  static logout():void{
    window.localStorage.removeItem(TOKEN)
    window.localStorage.removeItem(USER)
  }
}
