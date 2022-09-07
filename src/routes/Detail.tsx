import {useEffect} from 'react'
import { useNavigate,useLocation } from "react-router-dom";
import './Detail.css';

type Props = {
}

interface RouteState {
    state: {
        year:number;
        title:string;
        summary:string;
        poster:string;
        genres:Array<string>;
    };
}

export default function Detail (props: Props) {

    const location = useLocation() as RouteState; // 유즈로케이션은 따로 로케이션 타입을 지정해주어야함.
    const state = location.state;

    const navigate = useNavigate();
    
    useEffect(() => {
        if(state===null){
            navigate("/")
        }
    }, [navigate,state]); // 유즈 이펙트 안에 함수 등을 넣을 경우, 배열안에 해당 개체를 넣어주어야함.
    
    if(state){   
        return (
            <div className='detail_wrapper'>
                <h4>{state.title}</h4>
                <p>{state.summary}</p>
            </div>
        )
    }

    else{
        return null; // 디테일 컴포넌트는 렌더->유즈이펙트 순서로 함수를 실행하므로, 스테이트가 없을경우에 아무것도 반환하지않고 리다이렉트.
    }

}
