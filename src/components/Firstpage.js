import styled from 'styled-components';

import Imagesec from './FirstpageComponent/Imagesetion';
import Contentsec from '../containers/Contentsection';

const Firstpagediv = styled.div`
    position:relative;

    display:grid;
    grid-template-rows: repeat(2, 1fr);
    justify-items: center;
    align-items:end;    
    align-content:center;
    
    width:100vw;
    height:200vh;
    box-sizing:border-box;

    background-color: black;
`;

function Firstpage(){
    return(
        <Firstpagediv>
            <Imagesec/>
            <Contentsec/>
        </Firstpagediv>
    );   
}

export default Firstpage;