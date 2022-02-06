import { useState, useEffect } from 'react';
import styled from 'styled-components';

import Imagesec from './FirstpageComponent/Imagesetion';
import Contentsection from './FirstpageComponent/Contentsection';

const Firstpagediv = styled.div`
    position:relative;

    display:grid;
    grid-template-rows: repeat(2, 1fr);
    justify-items: center;
    align-items:center ;    
    align-content:center;
    
    width:100vw;
    height:250vh;
    box-sizing:border-box;

    background-color: black;
`;

function Firstpage(){
    useEffect(()=>{

    },[]);
    return(
        <Firstpagediv>
            <Imagesec/>
            <Contentsection/>
        </Firstpagediv>
    );   
}

export default Firstpage;