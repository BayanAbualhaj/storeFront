const initialState = {
    products: [
      { name: 'Air Fryer', category: 'Electronics', price: 200, count: 15, image :'https://www.crosscraft.com.mt/wp-content/uploads/2018/02/Severin-Air-Fryer-2430-b.png'},

      { name: 'Fridge', category: 'Electronics', price: 1000, count: 7 , image: 'https://static.wixstatic.com/media/2cd43b_3c1c1d30b99343acb96ba81a81021ed8~mv2.png/v1/fill/w_320,h_371,q_90/2cd43b_3c1c1d30b99343acb96ba81a81021ed8~mv2.png'},

      { name: 'Microwave', category: 'Electronics', price: 200, count: 30, image : 'https://www.pngkit.com/png/full/29-294535_samsung-microwave-oven-png-high-quality-image-30.png'},

      { name: 'Pasta', category: 'Food', price: 20, count: "on order", image:'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2009/8/13/4/FNM100109MarathonMeals013_s4x3.jpg.rend.hgtvcom.616.462.suffix/1383173429026.jpeg'},

      { name: 'Burger', category: 'Food', price: 15, count:"on oreder", image : 'https://www.pngarts.com/files/3/KFC-Burger-PNG-Image-With-Transparent-Background.png'},

      { name: 'Desert', category: 'Food', price: 7, count: 16, image : 'https://lh3.googleusercontent.com/proxy/E7TUr7iQlyXT66cmvMKPVsijds51JwwV01Hiwq3CqOIanZxiTIi5sejSiMUa0P6eaWqGqPJQRUl1y3GMm1BF1O5KeZ5x7f2TMPWehF4kyU9aUhYkb-M5yx9YNMY'},

      
    ]
  }
  
  
  // eslint-disable-next-line import/no-anonymous-default-export
  const productsReducer = (state = initialState, action) => {
     let { type, payload } = action;
  switch (type) {
    case 'ACTIVE':
      let product = state.products.filter((product) =>
        product.category === payload ? product.category : null
      );
      return { ...state, product: product };
    default:
      return state;
  }
};
  
  export default productsReducer;