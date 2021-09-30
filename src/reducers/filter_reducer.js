import {
  LOAD_PRODUCTS,
  SET_LISTVIEW,
  SET_GRIDVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from '../actions'
import products_reducer from './products_reducer';

const filter_reducer = (state, action) => {

  switch (action.type) {
		case LOAD_PRODUCTS:
			//get max price
			let maxPrice = action.payload.map((item) => item.price);
			maxPrice = Math.max(...maxPrice);

			return {
				...state,
				all_products: [...action.payload],
				filtered_products: [...action.payload],
				filters: { ...state.filters, max_price: maxPrice, price: maxPrice },
			};
		case SET_GRIDVIEW:
			return {
				...state,
				grid_view: true,
			};
		case SET_LISTVIEW:
			return {
				...state,
				grid_view: false,
			};
		case UPDATE_SORT:
			return {
				...state,
				sort: action.payload,
			};
		case SORT_PRODUCTS:
			const { sort, filtered_products } = state;

			let tempProducts = [...filtered_products];

			if (sort === "price-lowest") {
				tempProducts = tempProducts.sort((a, b) => a.price - b.price);
			} else if (sort === "price-highest") {
				tempProducts = tempProducts.sort((a, b) => b.price - a.price);
			} else if (sort === "name-a") {
				tempProducts = tempProducts.sort((a, b) => {
					return a.name.localeCompare(b.name);
				});
			} else if (sort === "name-z") {
				tempProducts = tempProducts.sort((a, b) => {
					return b.name.localeCompare(a.name);
				});
			}

			return {
				...state,
				filtered_products: tempProducts,
			};

		case UPDATE_FILTERS:
      const {name, value} = action.payload
      console.log(value)
			return {
				...state, filters: {...state.filters, [name]: value}
			};

		case CLEAR_FILTERS:
			return {
				...state,
				filters: {
          ...state.filters,
					text: "",
					company: "all",
					category: "all",
					color: "all",
					price: state.filters.max_price,
					shipping: false,
				},
			};

		case FILTER_PRODUCTS:
      const {all_products} = state
      let temporaryProducts = [...all_products]
      const {text, category, company, color, price, shipping} = state.filters

      //text
      if(text){
        console.log("text")
        temporaryProducts = temporaryProducts.filter((product) => {
					//return product.name.toLowerCase().startsWith(text);
          return product.name.toLowerCase().includes(text)
				});
      }
      //category
      if(category !== 'all'){
  
        temporaryProducts = temporaryProducts.filter(product => product.category === category)
      }
      //company
      if(company !== 'all'){
        temporaryProducts = temporaryProducts.filter(product => product.company === company)
      }
      //price 
      temporaryProducts = temporaryProducts.filter((product) => product.price <= price);

      //color
      if(color !== 'all'){
        temporaryProducts = temporaryProducts.filter(product => {
          return product.colors.find((c) => c===color)
        })
      }

      //shipping
      if(shipping){
        temporaryProducts = temporaryProducts.filter(product => product.shipping)
      }

			return {
				...state,
				filtered_products: temporaryProducts
			};

		default:
			throw new Error(`No Matching "${action.type}" - action type`);
	}
  
}

export default filter_reducer
