import axios from 'axios'
import React, { useContext, useEffect, useReducer } from 'react'
import reducer from '../reducers/products_reducer'
import { products_url as url } from '../utils/constants'
import {
  // SIDEBAR_OPEN,
  // SIDEBAR_CLOSE,
  TOGGLE_SIDEBAR,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
} from '../actions'

const initialState = {
  isSidebarOpen: false, 
  products_loading: false, 
  products_error: false, 
  products: [], 
  featured_products: [], 
  single_product_loading: false, 
  single_product_error: false, 
  single_product: {}
}

const ProductsContext = React.createContext()

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetchProducts(url)
  }, [])




  const toggleSidebar = () =>{
    dispatch({type: TOGGLE_SIDEBAR})
  }

  //fetching products
  const fetchProducts = async (url) =>{
    dispatch({type: GET_PRODUCTS_BEGIN})
    
    try{
      const response = await axios.get(url)
      const products = response.data
      dispatch({type: GET_PRODUCTS_SUCCESS, payload: products })
      // console.log(products)


    }catch(error){
      dispatch({type: GET_PRODUCTS_ERROR})
    }
  }
  //fetch single product 
  const fetchSingleProduct = async(url) =>{
    dispatch({type: GET_SINGLE_PRODUCT_BEGIN})
    try {
			const response = await axios.get(url);
			const product = response.data;
      console.log(product)
			dispatch({ type: GET_SINGLE_PRODUCT_SUCCESS, payload: product });

		} catch (error) {
			dispatch({ type: GET_SINGLE_PRODUCT_ERROR });
		}
  }


  return (
		<ProductsContext.Provider value={{ ...state, toggleSidebar, fetchSingleProduct}}>
			{children}
		</ProductsContext.Provider>
	);
}
// make sure use
export const useProductsContext = () => {
  return useContext(ProductsContext)
}
