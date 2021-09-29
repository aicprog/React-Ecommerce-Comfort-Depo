import React from 'react'
import { useFilterContext } from '../context/filter_context'
import GridView from './GridView'
import ListView from './ListView'
import styled from "styled-components";

const ProductList = () => {
  const {filtered_products: products, grid_view} = useFilterContext();

  if(products.length < 1){
    return <Heading>Sorry, no products matched your search...</Heading>
  }

  if(grid_view === false){
    return <ListView products={products} />;
  }

  return (
    <GridView products={products}>
    
    </GridView>
  )
}

export default ProductList

export const Heading = styled.h5`
  text-transform: none;
  padding-top: 5%
`
