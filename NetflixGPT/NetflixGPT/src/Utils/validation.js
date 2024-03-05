//validation function asks for two arguments email and password for it to validate
export const validation=(email,password,name=null)=>{

    //emailIsCorrect will've either true or false depending on whether regex test passes or not
    const emailIsCorrect= /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const passwordIsCorrect=/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(password);
    const nameIsCorrect=/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/.test(name)

    if(!emailIsCorrect) return "Sorry, we can't find an account with this email address. Please try again";
    if(!nameIsCorrect) return 'Name is not valid'
    if(!passwordIsCorrect)  return 'Incorrect password. Please try again';
    

    //If both of the email and password are correct than we would return null
    return null;

}