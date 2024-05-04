import React from 'react'
import MainCarousel from '../../components/HomeCarousel/MainCarousel'
import HomeSectionCrousel from '../../components/HomeSectionCarousel/HomeSectionCrousel'
import { mens_kurta } from '../../../Data/mens_kurta'

function HomePage() {
  return (
    <div>
        <MainCarousel/>
        <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
            <HomeSectionCrousel data={mens_kurta} sectionName={"Men's Kurta"}/>   
            <HomeSectionCrousel data={mens_kurta} sectionName={"Men's Shoes"}/>         
            <HomeSectionCrousel data={mens_kurta} sectionName={"Men's Shirt"}/>
            <HomeSectionCrousel data={mens_kurta} sectionName={"Men's Sarees"}/>
            <HomeSectionCrousel data={mens_kurta} sectionName={"Men's Dress"}/>
        </div>
    </div>
  )
}

export default HomePage