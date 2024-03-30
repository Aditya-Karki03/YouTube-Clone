import { conf } from "../conf/conf";

import { Client, Account, ID } from "appwrite";

export class AuthenticationService{
    client = new Client();
    account;
    //Using constructor because whenever object is created I want to 
    //initialize client with the endpoints and project id
    constructor(){
        this.client.setEndpoint(conf.AppWriteURL);
        this.client.setProject(conf.projectId);
        this.account=new Account(this.client);
    }
    //argument shall be passed as an object
    async createAccount({email,password,name}){
        //since createAccount may fail hence we will wrap it inside the try catch
        try{
            const userAccount=await this.account.create(ID.unique(),email,password,name)
            //if userAccount exist than we'll directly get him logged in no need to go to login page 
            //else we shall return the userAccount itself
            this.logIn(email,password);

        } catch(error){
            console.log(error);
        }
    }
    async logIn({email,password}){
        try{
            return await this.account.createEmailSession(email,password)
        }
        catch(error){
            console.log(error);
        }
    }
    async getCurrentUser(){
        try{
           return await this.account.get();
        }catch(error){
            console.log(error);
        }
        //In case if there is no account and there is no error as well
        return null;
    }
    async logOut(){
        try{
            return await this.account.deleteSessions();
        } catch(error){
            console.log(error);
        }
    }
}

const authService=new AuthenticationService;
export default authService;