const initialState = {
    categories: [
        { name: 'Food', displayName: 'Food', description: 'Food description', url: 'https://images.squarespace-cdn.com/content/v1/5c5c3833840b161566b02a76/1573133725500-Y5PCN0V04I86HDAT8AT0/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/WBC_7095.jpg?format=2500w' },

        { name: 'Electronics', displayName: 'Electronics', description: 'Electronics description' , url: 'https://mycarthouse.com/wp-content/uploads/2020/07/247-2474633_transparent-electronics-items-png-png-download.jpg'},
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