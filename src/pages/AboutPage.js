import React from 'react'
import styled from 'styled-components'
import { PageHero } from '../components'
import aboutImg from '../assets/about-bcg.jpg'

const AboutPage = () => {
  return (
		<main>
			<PageHero title="about"/>
			<Wrapper className="page section section-center">
				<img src={aboutImg} alt="nice table" />
				<article>
					<div className="title">
						<h2>our story</h2>
						<div className="underline"></div>
						<p>
							The finest quality furniture with a commitment to the environment and our customer. We pride ourselves on our world renowed furniture and quality of service. 
              <br/><br/>
              Our story began in our own home over 50 years ago. Our family has always believed, and continues to believe, that furniture carries with it the emotion of joy and can breathe life into one's home and reshape the way you interact in your space. 

              <br/><br/>
              From quick fixes such as adding greenery or switching up the
							lighting, to slightly bigger tasks, such as painting a dresser or
							creating a statement wall, there are plenty of easy ways to
							refresh your home. Let us help you make your house into a home.
						</p>
					</div>
				</article>
			</Wrapper>
		</main>
	);
}

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 600px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`
export default AboutPage
