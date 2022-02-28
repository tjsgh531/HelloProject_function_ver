import React , {useState, useEffect, useRef} from 'react';

import styled, {keyframes} from 'styled-components';

const StyledBackgroundWord = styled.div`
    position:relative;
    left:50%;
    transform:translateX(-50%);

    width:150vw;
` 
const moveword = keyframes`{
    0%{
        left:100%;
    }
    100%{
        left:0;
    }
}`
const Styledword = styled.div`
    position: absolute;
    margin: 0 0.5rem;    

    font-size:2.5rem;
    font-weight:900;
    white-space: nowrap;

    animation:${moveword} 16s infinite linear;
    animation-delay:${(props)=> `${props.animationdelay}s`};
`

function BackgroundWord(){
  
    return(
        <StyledBackgroundWord>
            <Styledword animationdelay={0}>HELLO PROJECT</Styledword>
            <Styledword animationdelay={4}>HELLO PROJECT</Styledword>
            <Styledword animationdelay={8}>HELLO PROJECT</Styledword>
            <Styledword animationdelay={12}>HELLO PROJECT</Styledword>
        </StyledBackgroundWord>
    )
}

export default BackgroundWord;