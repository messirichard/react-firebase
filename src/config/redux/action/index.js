
export const actionUserName = () => (dispatch) => {
    setTimeout(() =>{
        return dispatch ({type:'CHANGE_USER', value: 'Ibnu'})
    },2000)
}

