const initialState = {
    categories: [
        { name: 'Food', displayName: 'Food', description: 'Food description' },

        { name: 'Electronics', displayName: 'Electronics', description: 'Electronics description'},
    ],
    active: '',
}

const categoryReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case 'ACTIVE':
            const categories = state.categories;
            const active = payload;
            return { categories, active };
        default:
            return state;
    }
}

export const activeCategory = (name) => {
    return {
        type: 'ACTIVE',
        payload: name,
    }
}

export default categoryReducer;