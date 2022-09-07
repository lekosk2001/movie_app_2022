import {useEffect} from 'react'
import { useNavigate,useLocation } from "react-router-dom";


type Props = {
    location:string
    navigate:string
}

export default function Detail (props: Props) {

    const location = useLocation();
    const state = location.state;
    
    const navigate = useNavigate();
    
    useEffect(() => {
        const {location,navigate} = props;
        console.log(navigate)
    }, [])
    
    
    console.log(state)
    return (
        <div>Detail</div>
    )
}
