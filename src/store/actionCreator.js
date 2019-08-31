export default {
    markItem(id) {
        return (dispatch) => {
            dispatch({
                type: 'START'
            })
            setTimeout(() => {
                dispatch({
                    type: 'ITEM_READ',
                    id
                })
                dispatch({
                    type: 'END'
                })
            }, 300)
        }
    },
    markAll() {
        return (dispatch) => {
            dispatch({
                type: 'START'
            })
            setTimeout(() => {
                dispatch({
                    type: 'ALL_READ'
                })
                dispatch({
                    type: 'END'
                })
            }, 500)
        }
    }
}