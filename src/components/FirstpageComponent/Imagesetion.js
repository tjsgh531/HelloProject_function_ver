import styled from 'styled-components';
import { useState, useEffect } from 'react';

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
`;

function Imagesetion(){
    const img_maxsize = 4;
    let [_selected_id, setSelectedId] = useState(1);
    
    useEffect(function(){
        const imgchangeInterval = setInterval(()=>{
            let temp = (++_selected_id % 4) +1;
            console.log(temp);
            setSelectedId(temp);
        },5000);     
        return(function(){
           clearInterval(imgchangeInterval);
        })
    },[]);

    return(
        <Styledimagesection>
            { _selected_id == 1 ? <Imgitem src={img1}></Imgitem> : null}
            { _selected_id == 2 ? <Imgitem src={img2}></Imgitem> : null}
            { _selected_id == 3 ? <Imgitem src={img3}></Imgitem> : null}
            { _selected_id == 4 ? <Imgitem src={img4}></Imgitem> : null}  
        </Styledimagesection>
    );
}

export default Imagesetion;