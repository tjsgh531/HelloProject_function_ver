import React, { useState, useRef, useEffect} from 'react';
import styled from 'styled-components';

const Styledcontent = styled.div`
    color:white;
    font-weight:550;

    position: relative;
    top:${({stylecss})=>stylecss.Styledcontent_top};    

    opacity:${(props)=>props.stylecss.Styledcontent_opacity};

    transition: top 0.8s ease-in, opacity 0.8s ease-in 0.2s;

    div{
        margin-bottom:1rem;
        font-size: 1.5rem;
        font-family: "EliceDigitalBaeum_Regular";
        font-weight:600;
        text-align:center;
        letter-spacing:1.5px
    }
    
    .span{
        margin:0 10px;
        position:relative;
        
        display: inline-block;
        width: fit-content;
        padding: 0 5px;
 
        .spanbackground{
            position:absolute;
            top:0; left:0;

            display: inline-block;
            background-color:white;
            width:${(props)=>props.stylecss.spanbackground_width};
            height:100%;

            transition: width 0.5s ease-in-out 0.7s;
        }
        span{
            position:relative;
            z-index:9999;
            font-weight:900;
            color:${(props)=>props.stylecss.spanword_color};

            transition: color 0.5s ease-in-out 0.7s;
        }
    }
`;

const Styledbutton = styled.div`
    position:relative;    

    margin:0 auto;
    margin-top:5rem;
    padding: 0 1rem;

    width: fit-content;

    background-color:rgba(0,0,0,0);
    border:1px solid white;
    
    cursor: pointer;

    .btn_background{
        position:absolute;
        top:0; left:0; z-index:8888;
        background-color:orange;
        width:${(props) => props.active|| 0};
        height:100%;

        transition: width 0.6s ease-in-out;
    }

    span{
        position:relative;
        z-index:8889;
    }
`;

function Contentsection(props){
    const contentPosY = useRef();//contents 위치를 store에 저장하기 위해서

    const[_btn_active, setBtnActive] = useState(0);//버튼에 커서 올라가면 버튼background 오랜지 색으로 만들기 위해서

    const [_Styledcontentcss, setStyledcontentcss] = useState({
        Styledcontent_top:"0",
        Styledcontent_opacity:0,
        spanbackground_width:0,
        spanword_color:'white',
    });
    
    /*----------------------contents의 위치를 store에 저장----------------------*/
    useEffect(()=>{
        props.setContentActivePosY(contentPosY.current.offsetHeight);
    },[]);

    /*----------------------스크롤이 contents위치에 올 경우 활성화----------------------*/
    useEffect(()=>{
        if(props.isActive){
            setStyledcontentcss({
                Styledcontent_top:"-30vh",
                Styledcontent_opacity:1,
                spanbackground_width:'100%',
                spanword_color:'black',
            });
        }
    },[props.isActive]);
    
    /*------------------------------Html 코드-------------------------------*/
    return(
        <Styledcontent ref={contentPosY} stylecss={_Styledcontentcss}>
            <div>모두의 안녕을 위해 행동하는 생활밀착형 SOCIAL BRAND</div> 
            <div>우리는 
                <div className='span'>
                    <div className='spanbackground'/>
                    <span>HELLO PROJECT</span>
                </div>
                입니다.
            </div> 
            <Styledbutton 
                active={_btn_active} 
                onMouseOver={()=>{setBtnActive('100%')}}
                onMouseLeave={()=>{setBtnActive(0)}}    
            >
                <div className='btn_background'/>
                <span> BRAND STORY &gt;</span>
            </Styledbutton>
        </Styledcontent>
    )
}

export default Contentsection;