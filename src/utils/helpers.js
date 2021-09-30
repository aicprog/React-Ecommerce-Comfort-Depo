export const formatPrice = (number) => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency', 
        currency: 'USD'
    }).format(number / 100)

}

export const getUniqueValues = (products, type) => {
    //get all possible types
    let unique = products.map((item) => item[type])
    //return unique type

    if(type === 'colors'){
        unique = unique.flat()
    }
    return ['all', ...new Set(unique)]

}
