import styled from 'styled-components';
import { useState, useEffect, useRef } from 'react';

import img1 from '../../image/1.jpg';
import img2 from '../../image/2.jpg';
import img3 from '../../image/3.jpg';
import img4 from '../../image/4.jpg';

const Styledimagesection = styled.div`
    width: 30vw; min-width:640px;
    height: 30vh;  min-height:360px;

    overflow:hidden;
`;

const Imgitem = styled.img`
    width:100%;
    height:100%;

    ${({ isactive }) => {
        return isactive ? `display: auto`: `display:none`;
    }}
`;

function Imagesetion(){
    const [_selected_id, setSelectedId] = useState(1);
    const [_imgcontents, setImgContents] = useState([
        {id:1, src: img1},
        {id:2, src: img2},
        {id:3, src: img3},
        {id:4, src: img4},
    ]);
    const [_imgcomponents, setImgComponents] = useState([
        <Imgitem key={1} src={img1} isactive={true}/>,
        <Imgitem key={2} src={img2} isactive={false}/>,
        <Imgitem key={3} src={img3} isactive={false}/>,
        <Imgitem key={4} src={img4} isactive={false}/>,
    ]);

    useEffect(function(){
        const changeImgInterval = setInterval(()=>{
            setSelectedId(_selected_id + 1);

            //모든 Imgitem의 isactive를 false로 바꾼후 current_id의 Imgitem만 true
            let _newimgcontents = [];
            _imgcontents.forEach(ele => {
                if(ele.id === (_selected_id % 4) +1){
                    _newimgcontents.push(
                        <Imgitem key={ele.id} src={ele.src} isactive={true}/>
                    );
                }
                else{
                    _newimgcontents.push(
                        <Imgitem key={ele.id} id={ele.id} src={ele.src} isactive={false}/>
                    );
                }
            });
            setImgComponents(_newimgcontents);
        },1500);
        return () => clearInterval(changeImgInterval);
    });

    return(
        <Styledimagesection>
            {_imgcomponents}
        </Styledimagesection>
    );
}

export default Imagesetion;