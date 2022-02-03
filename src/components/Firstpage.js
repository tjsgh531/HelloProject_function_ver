import styled from 'styled-components';

import Imagesec from './FirstpageComponent/Imagesetion';

const Firstpagediv = styled.div`
    position:relative;

    display:grid;
    grid-template-rows: repeat(2, 1fr);
    justify-items: center;
    align-items:center ;    
    align-content:center;
    
    width:100vw;
    height:210vh;
    box-sizing:border-box;

    background-color: black;


`;

function Firstpage(){
    return(
        <Firstpagediv>
            <Imagesec/>
        </Firstpagediv>
    );   
}

export default Firstpage;