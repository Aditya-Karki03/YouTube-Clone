import { useRouteError } from "react-router-dom"


export default function Error(){
    const err=useRouteError();
    console.log(err);
    return(
        <div>
            <h1>{err.status}</h1>
            <h2>{err.statusText}</h2>
        </div>

    )
}