import {
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
  TOGGLE_SIDEBAR,
} from '../actions'

const products_reducer = (state, action) => {
  switch (action.type) {
		case TOGGLE_SIDEBAR:
			return { ...state, isSidebarOpen: !state.isSidebarOpen };
		//products
		case GET_PRODUCTS_BEGIN:
			return { ...state, products_loading: true };
		case GET_PRODUCTS_SUCCESS:
			const featured_products = action.payload.filter(
				(product) => product.featured
			);
			return {
				...state,
				products: action.payload,
				featured_products,
				products_loading: false,
			};
		case GET_PRODUCTS_ERROR:
			return { ...state, products_loading: false, products_error: true };
		//single product
		case GET_SINGLE_PRODUCT_BEGIN:
			return { ...state, single_product_loading: true, single_product_error: false};
		case GET_SINGLE_PRODUCT_SUCCESS:
			//const product = action.payload.filter(product => product.id === action.id)
      		return { ...state, single_product_loading: false, single_product: action.payload };
		case GET_SINGLE_PRODUCT_ERROR:
			
			return {
				...state,
				single_product_loading: false,
				single_product_error: true,
			};
		default:
			break;
	}
  return state
  throw new Error(`No Matching "${action.type}" - action type`)
}

export default products_reducer
