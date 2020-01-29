export  const loadAction = (data) => (dispatch) => {
    dispatch({
        type: 'load',
        payload: {
            data:data,
        }
    })
}