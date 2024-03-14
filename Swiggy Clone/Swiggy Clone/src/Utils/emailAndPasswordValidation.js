export default function emailAndPasswordFormatValidation(phoneNo=null,name=null,email=null){
    const NameRegex=/^[a-zA-Z ]{2,30}$/.test(name)
    const PhoneRegex=/^[6-9]\d{9}$/.test(phoneNo);
    const EmailRegex=/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    
    if(name!==null && !NameRegex)   return 'InValid Name please try again'
    if(phoneNo!==null && !PhoneRegex) return 'InValid Phone Number Please try again'
    if(email!==null && !EmailRegex) return  "Sorry, we can't find an account with this email address. Please try again";
    return null;
}