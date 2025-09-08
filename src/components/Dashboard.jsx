import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { ADD_FEED } from "./slices/UserFeedSlice";

const DashBoard = () => {
    const userFeeds = useSelector((state) => state.feed);
    console.log("feed : ",userFeeds)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const getFeeds = async () => {
        try {
            const res = await axios.get("http://localhost:3000/request/feed",{withCredentials:true});
            dispatch(ADD_FEED(res?.data?.data));
        } catch (err) {
            console.log(err.message);
            navigate("/error",{message:err.message})
        }
    }


    useEffect(() => {
        getFeeds()
    },[]);

    return <div className="mb-8" style={{position:"relative",left:"50%", top:"15%", transform:"translate(-50%,5%)",width:"50vw",height:"auto"}}>
            {
                userFeeds && userFeeds.feeds && userFeeds.feeds.map((it) => {
                    return <div className="m-2 p-2 flex" style={{border:"1px solid black", height:"100px", borderRadius:"20px"}}>
                        <div style={{flex:"0 1 15%"}}>
                            <img className="w-full h-full" src={it.photoUrl} />
                        </div>
                        <div className="p-4" style={{flex:"0 2 55%"}}>
                            <p>{it.firstName} - {it.lastName}</p>
                            <p>{it.about} </p>
                        </div>
                        <div style={{flex:"0 1 25%"}}>
                            <button className="bg-primary text-white p-2 m-2" style={{borderRadius:"10px",cursor:"pointer"}}>Ignore</button>
                            <button className="bg-secondary text-white p-2 m-2" style={{borderRadius:"10px",cursor:"pointer"}}>Interested</button>
                        </div>
                        
                    </div>
                })
            }
    </div>
}

export default DashBoard;