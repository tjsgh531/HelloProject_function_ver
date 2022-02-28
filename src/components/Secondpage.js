import styled from 'styled-components';

import BackgroundWord from './SecondpageComponent/BackgroundWord';

const StyledSecondpage = styled.div`
    height:100vh;

    backgorund-color:#d9d4d0;
`;

function Secondpage(){
    return(
        <StyledSecondpage>
            <BackgroundWord/>
        </StyledSecondpage>
    )
}

export default Secondpage;