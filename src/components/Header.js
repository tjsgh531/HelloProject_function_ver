import styled from 'styled-components';

import Logo from './HeaderComponents/Logo';
import Nav from './HeaderComponents/Nav';

const Styledheader = styled.header`
    position: fixed;
    top:0; left:0;
    z-index: 9999;
    
    width:100vw;
    height:25vh;
    
    padding:15px;
    box-sizing: border-box;

    background-color:rgba(0,0,0,0);

    display:flex;
    flex-direction:row;
    justify-content: space-between;
    align-items: center;
`;

function Header(){
    return(
        <Styledheader>
            <Logo/>
            <Nav/>
        </Styledheader>
    );
}

export default Header;