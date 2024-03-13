export default function emailAndPasswordFormatValidation(email=null,pass=null){
    const EmailRegex=/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const PasswordRegex=/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(pass);
  
    if(!EmailRegex) return  "Sorry, we can't find an account with this email address. Please try again";
    else if(!PasswordRegex) return 'Incorrect password. Please try again'
}