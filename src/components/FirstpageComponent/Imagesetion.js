import styled from 'styled-components';
import { useState } from 'react';

import img1 from '../../image/1.jpg';
import img2 from '../../image/2.jpg';
import img3 from '../../image/3.jpg';
import img4 from '../../image/4.jpg';

const Styledimagesection = styled.div`
    width: 40vw;
    height: 50vh;
    border:3px solid white;

    overflow:hidden;
`;

const Imgitem = styled.img`
    width:100%;
    height:100%;

    display:${(props) => props.ishidden ? none : auto}
`;

function Imagesetion(){

    return(
        <Styledimagesection>
            <Imgitem src={img1}></Imgitem>
        </Styledimagesection>
    );
}

function ImageItem(){
    let items =[];

}

export default Imagesetion;