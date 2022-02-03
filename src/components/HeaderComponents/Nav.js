import styled from 'styled-components';

const Stylednav = styled.nav`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
 
    column-gap: 2rem;
    margin-right:30px;

`;

const Stylednavitem = styled.div`
    width: fit-content;
    padding:3px 10px;

    background-color:white;

    color:black;
    font-weight:550;
    letter-spacing: 1.5px;
    text-align:center;

    cursor: pointer;
    
`

function Nav(){
    return(
        <Stylednav>
            <Stylednavitem>ABOUT</Stylednavitem>
            <Stylednavitem>CAMPAIGN</Stylednavitem>
            <Stylednavitem>PRODUCT</Stylednavitem>
        </Stylednav>
    );
}

export default Nav;
