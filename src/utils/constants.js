import React from 'react'
import { GiCompass, GiDiamondHard, GiStabbedNote } from 'react-icons/gi'
export const links = [
  {
    id: 1,
    text: 'home',
    url: '/',
  },
  {
    id: 2,
    text: 'about',
    url: '/about',
  },
  {
    id: 3,
    text: 'products',
    url: '/products',
  },
]

export const services = [
	{
		id: 1,
		icon: <GiCompass />,
		title: "mission",
		text: "We do not stop improving. Our goal is to make your house a home, one where you design and can feel at ease and comfortable",
	},
	{
		id: 2,
		icon: <GiDiamondHard />,
		title: "vision",
		text: "The furniture market is crowded with designs. We make it a priority to stand out from that crowd and deliver pieces that inspire you.",
	},
	{
		id: 3,
		icon: <GiStabbedNote />,
		title: "utility",
		text: "Whether it’s reinforced support structures or hidden support legs for futons, our designers try to push the functionality of our products.",
	},
];

export const products_url = 'https://course-api.com/react-store-products'

export const single_product_url = `https://course-api.com/react-store-single-product?id=`
