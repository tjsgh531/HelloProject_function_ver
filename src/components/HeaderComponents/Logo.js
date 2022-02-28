import styled from 'styled-components';

const Logodiv = styled.div`
    position: relative;
    
    width:6rem;

    margin-left:3rem;

    display: flex;
    flex-direction: column;

    cursor: pointer;
`;

const Hellodiv = styled.div`
    font-weight:900;
    color:white;
    font-size:1.5rem;
`;

const Projectdiv = styled.div`
    width: 100%;
    background-color:white;
    
    padding:3px 0;

    font-size:1rem;
    font-weight:550;
    text-align:center;
`;

const Spotdiv = styled.div`
    width : 1rem;
    height: 1rem;
    border-radius: 50%;
    background-color:white;
    margin-top:5px;
`

function Logo(){
    return(
        <Logodiv>
            <Hellodiv>HELLO</Hellodiv>
            <Projectdiv>PROJECT</Projectdiv>
            <Spotdiv/>
        </Logodiv>
    )
}

export default Logo;