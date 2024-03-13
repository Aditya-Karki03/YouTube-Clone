import { useContext } from 'react'
import UserContext from '../Utils/Context';

export default function Cart(){
    const { cartItems } = useContext(UserContext);
    console.log(cartItems);
    
    return (
        <div className="mt-[130px]">
            {
                cartItems.map((item, index) => <h2 key={index}>{item}</h2>)
            }
        </div>
    );
}
