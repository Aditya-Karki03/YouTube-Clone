import HeaderAndBg from "./HeaderAndBg"
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function Browse(){
    const navigate=useNavigate();
    function handleSignOut(){
        
 

        const auth = getAuth();
        signOut(auth).then(() => {
        // Sign-out successful.
        }).catch((error) => {
            console.log(error);
        });
        navigate('/')
    }
    return(
        <div className=" flex items-center pr-2 justify-between shadow-[inset_5px_10px_20px_rgba(0,0,0,0.4)]">
            <HeaderAndBg/>
            <div className="flex gap-2">
                <img className="h-[50px] " src="https://occ-0-4995-2164.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229" alt=""></img>
                <button onClick={handleSignOut}>(Sign Out)</button>
            </div>
        </div>
    )
}