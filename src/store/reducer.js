var initState = {
    loading: false,
    list: [
        {
            id: 1,
            title: 'Ant Design Title 1',
            read: false
        },
        {
            id: 2,
            title: 'Ant Design Title 2',
            read: false
        },
        {
            id: 3,
            title: 'Ant Design Title 3',
            read: false
        },
        {
            id: 4,
            title: 'Ant Design Title 4',
            read: false
        }
    ]
}

 export const reducer = (state = initState, action) => {
    var newState = { ...state }
    switch (action.type) {
        case 'ALL_READ':
            newState.list.forEach(item => {
                item.read = true
            })
            return newState
        case 'ITEM_READ':
            newState.list.forEach(item => {
                if(item.id === action.id) {
                    console.log(item)
                    item.read = true
                }
            })
            return newState
        case 'START':
            return { ...state, loading: true }
        case 'END':
            return { ...state, loading: false }
        default:
            return state
    }
}