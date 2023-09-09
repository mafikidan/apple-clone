import React from 'react'
import Toppart2 from '../Components/Section/Toppart2'
import Middle from '../Components/Section/Middle'
import PageComp from '../Components/PageComponent/PageComp'
const style = {
  textAlign: 'center'
}
const Tv = () => {
  return (
    <div>
        <br /><br /><br /><br />
      <h1 style={style}>Tv</h1>
      
      <Toppart2 
            bgcontainer='third-hightlight-wrapper2'
            news=''
            title='iPhone 11 Pro'
            description='Pro cameras. Pro display. Pro performance.'
            pricedesc='From $24.95/mo. or $599 with trade‑in.'
            firstlink='Learn more'
            secondlink='Buy'
            caption1=''
            caption2=''  
            linkwraper='links-wrapper'
            titleclassname='title-wraper bold white'
            descclassname='description-wrapper white'
            priceclassname='price-wrapper white'
      />
      <PageComp
            middleclassname='fourth-heghlight-wrapper2'
            logo =''
            title='Profound sound.'
            description='Just the right amount of everything.'
        pricedesciption='$299'
        priceclassname='white'
            linkwraper='links-wrapper'
            firstlink='Learn more'
            secondlink='Apply now'
            logobot=''
            caption=''
            playlink=''
            titleclassname='title-wraper white'
            descriptionclassname='description-wraper white'

            title1='Surprising sound for its size.'
            logo1=''
            description1=''
            pricedesciption1='$99'
            linkwraper1='links-wrapper'
            firstlink1='Learn more'
            secondlink1='Apply now'
            titleclassname1='title-wraper'
            logobot1=''
            caption1=''

      />
      <PageComp
            middleclassname='fourth-heghlight-wrapper3'
            logo =''
            title='Profound sound.'
            description='Just the right amount of everything.'
        pricedesciption='$299'
        priceclassname=''
            linkwraper='links-wrapper'
            firstlink='Learn more'
            secondlink='Apply now'
            logobot=''
            caption=''
            playlink=''
            titleclassname='title-wraper'
            descriptionclassname='description-wraper'

            title1='The foundation for a smarter home.'
            logo1=''
            description1=''
            pricedesciption1=''
            linkwraper1='links-wrapper'
            firstlink1='Learn more'
            secondlink1='Apply now'
            titleclassname1='title-wraper'
            logobot1=''
            caption1=''

        />
        
        </div>
  )
}

export default Tv