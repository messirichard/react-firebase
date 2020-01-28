import firebase from '../../firebase';

// export const actionUserName = () => (dispatch) => {
//     setTimeout(() =>{
//         return dispatch ({type:'CHANGE_USER', value: 'Ibnu'})
//     },2000)
// }

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

export const loginUserAPI = (data) => (dispatch) =>{
    return new Promise((resolve,reject) => {

        dispatch({type: 'CHANGE_LOADING', value:true})
        return(
            firebase.auth().signInWithEmailAndPassword(data.email, data.password).then(res=>{
                // console.log(data.email)
                const dataUser  = {
                    email:res.user.email,
                    uid:res.user.uid,
                    emailVerified:res.user.emailVerified,
                    refreshToken:res.user.refreshToken
                }
                dispatch({type: 'CHANGE_LOADING', value:false})
                dispatch({type: 'CHANGE_ISLOGIN', value:true})
                dispatch({type: 'CHANGE_USER', value:res.user})
                resolve(true)
            }).catch(function(error) {
                dispatch({type: 'CHANGE_LOADING', value:false})
                dispatch({type: 'CHANGE_ISLOGIN', value:false})
                reject(false)

            })
        )   
    })
}