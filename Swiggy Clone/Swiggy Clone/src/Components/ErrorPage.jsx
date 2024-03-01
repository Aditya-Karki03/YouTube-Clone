import { useRouteError } from "react-router-dom";

export default function ErrorPage(){
    const err=useRouteError();
    console.log(err);
    return(
        <h1>This is the error page</h1>
    )
}