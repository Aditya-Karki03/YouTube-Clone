import { NetflixLogo } from "../Utils/constants"

export default function HeaderAndBg(){
    return(
        
            <div className="shadow-[inset_0px_17px_24px_17px_rgba(25,24,24,1)] w-screen h-screen bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_medium.jpg')] bg-cover bg-center ">
                <img src={NetflixLogo} alt="Netflix logo" className="w-[150px] absolute " />
            </div>
    
    )
}