import styled from 'styled-components';

const Logodiv = styled.div`
    position: relative;
    
    width:8rem;

    margin-left:30px;

    display: flex;
    flex-direction: column;

    cursor: pointer;
`;

const Hellodiv = styled.div`
    font-weight:900;
    color:white;
    font-size:32px;
`;

const Projectdiv = styled.div`
    width: 100%;
    background-color:white;
    
    padding:3px 0;

    font-size:20px;
    font-weight:550;
    color:black;
    text-align:center;
`;

const Spotdiv = styled.div`
    width : 18px;
    height: 18px;
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