import { connect } from 'react-redux';
import Contentsection from '../components/FirstpageComponent/Contentsection';

function mapStateToProps(state){
    return{
        currentPosY : state.scrollPos,
        isActive : state.isContentActive
    }
}

function mapDispatchToProps(dispatch){
    return{
        setContentActivePosY :function(contentPosY){
            dispatch({type:"SETCONTENTACTIVEPOSY", setcontentactivePosY: contentPosY})
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Contentsection);