export const reducer = (state, action) =>{
    switch (action.type) {
        case 'UPDATE TOURS LIST':
            return {...state, ...action.payload };
        
        case 'RELOAD TOURS':
            return {...state, ...action.payload };
    
        case 'NO ITEMS':
            return {...state, ...action.payload };

        default:
            return {...state};
    }
};