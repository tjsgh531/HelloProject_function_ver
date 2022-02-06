import React, { useState, useRef, useEffect} from 'react';
import styled from 'styled-components';

const Styledcontent = styled.div`
    color:white;
    font-weight:550;
    font-size:28px;

    position: relative;
    top:${(props)=>props.stylecss.Styledcontent_top};
    transition: top 2s ease-in 0.5s, opacity 2s ease-in 1s;    

    opacity:${(props)=>props.stylecss.Styledcontent_opacity};

    div{
        margin-bottom:1rem;
        font-size: 2rem;
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

            transition: width 0.5s ease-in-out 3s;
        }
        span{
            position:relative;
            z-index:9999;
            font-weight:900;
            color:${(props)=>props.stylecss.spanword_color};

            transition: color 0.5s ease-in-out 3s;
        }
    }

`;

const Styledbutton = styled.div`
    margin:0 auto;
    margin-top:5rem;
    padding: 0 1rem;

    width: fit-content;

    background-color:black;
    border:1px solid white;

    ;
`;


function Contentsection(){
    const [_Styledcontentcss, setStyledcontentcss] = useState({
        Styledcontent_top:"150px",
        Styledcontent_opacity:0,
        spanbackground_width:0,
        spanword_color:'white',
    });

    
    useEffect(()=>{
        setStyledcontentcss({
            Styledcontent_top:0,
            Styledcontent_opacity:1,
            spanbackground_width:'100%',
            spanword_color:'black',
        });
    },[]);

    return(
        <Styledcontent stylecss={_Styledcontentcss}>
            <div>모두의 안녕을 위해 행동하는 생활밀착형 SOCIAL BRAND</div> 
            <div>우리는 
                <div className='span'>
                    <div className='spanbackground'/>
                    <span>HELLO PROJECT</span>
                </div>
                입니다.
            </div> 
            <Styledbutton>BRAND STORY &gt;</Styledbutton>
        </Styledcontent>
    )
}

export default Contentsection;