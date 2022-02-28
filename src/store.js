import { createStore } from 'redux';

export default createStore(function(state, action){
    if(state == undefined){
        return {
            scrollPos : 0,
            contentActivePosY : 9999,
            isContentActive :false,
        }
    }

    //-------------스크롤 하면 scrollPos값 달라지게--------------
    if(action.type =="WHEELEVENT"){
        if(state.contentActivePosY < action.scrollPos){
            return {...state, scrollPos : action.scrollPos, isContentActive: true}
        }

        return {...state, scrollPos : action.scrollPos}
    }

    //-------------contentActivePosY 세팅--------------
    if(action.type == "SETCONTENTACTIVEPOSY"){
        return{...state, contentActivePosY: action.setcontentactivePosY}
    }
    return state;
});