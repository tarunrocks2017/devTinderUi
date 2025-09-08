import { useLocation } from "react-router-dom";

const Error = () => {
    const location = useLocation()
    return <p style={{position:"absolute",top:"50%", left:"50%", transform: "translate(-50%,-50%)"}}>you are getting this error : {location.state?.message} </p>
}

export default Error;