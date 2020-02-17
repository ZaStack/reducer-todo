export const initialState = [{
    item: 'Learn about reducers',
    completed: false,
    id: Date.now(),
    itemArray: []
}];


export const Reducer = (state, action) => {
    
    switch (action.type){
        case "ADD-TODO":
            const todo = {
                item: action.payload,
                completed: false,
                id: Date.now()
            }
            return [...state, todo]


        default:
            throw state;
    }
    
    
}