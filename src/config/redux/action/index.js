import firebase from '../../firebase';

export const actionUserName = () => (dispatch) => {
    setTimeout(() =>{
        return dispatch ({type:'CHANGE_USER', value: 'Ibnu'})
    },2000)
}

export const registerUserAPI = (data) => (dispatch) =>{
    dispatch({type: 'CHANGE_LOADING', value:true})
    return(
        firebase.auth().createUserWithEmailAndPassword(data.email, data.password).then(res=>{
            dispatch({type: 'CHANGE_LOADING', value:false})
        }).catch(function(error) {
            dispatch({type: 'CHANGE_LOADING', value:false})
        })
    )   
}