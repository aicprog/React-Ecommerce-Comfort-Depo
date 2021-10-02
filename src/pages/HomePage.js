import React from 'react'
import { FeaturedProducts, Hero, Services, Contact } from '../components'
import { useUserContext } from '../context/user_context';
const HomePage = () => {


  return (
		<main>
			<Hero />
			<FeaturedProducts />
      <Services/>
      <Contact/>
		</main>
	);
}

export default HomePage
