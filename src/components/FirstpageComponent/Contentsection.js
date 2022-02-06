import React, { useState, useRef, useEffect} from 'react';
import styled from 'styled-components';

const Styledcontent = styled.div`
    color:white;
    font-weight:550;
    font-size:28px;

    position: relative;
    top:150px;
    transition: top 2s ease-in 0.5s, opacity 2s ease-in 1s;    

    opacity:0;

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
    
            width:0px;
            height:100%;

            transition: width 0.5s ease-in-out 3s;
        }
        span{
            position:relative;
            z-index:9999;
            font-weight:900;
            color:white;

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
    useEffect(()=>{
        const styledcontent = document.querySelector('.styledcontent');
        styledcontent.style.top =0;
        styledcontent.style.opacity =1;
  
        const spanbackground = document.querySelector('.spanbackground');
        spanbackground.style.width ='100%';

        const spanword = document.querySelector('.span span');
        spanword.style.color= 'black';
    },[]);

    return(
        <Styledcontent className='styledcontent'>
            <div>모두의 안녕을 위해 행동하는 생활밀착형 SOCIAL BRAND</div> 
            <div>우리는 
                <div className='span'>
                    <div className='spanbackground'/>
                    <span>HELLO PROJECT</span>
                </div>
                입니다.
            </div> 
            <Styledbutton>BRAND STORY ></Styledbutton>
        </Styledcontent>
    )
}

export default Contentsection;