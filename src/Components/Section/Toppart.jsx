import React from 'react'
import { Link } from 'react-router-dom'

const Toppart = (props) => {
  return (
    <>
    <section className={props.bgcontainer}>
		<div className="container">

			<div className="new-alert">
				{props.news}
			</div>

			<div className={props.titleclassname}>
				{props.title}
			</div> 

			<div className={props.descclassname}>
				{props.description}
			</div>

			<div className={props.priceclassname}>
				{props.pricedesc}
			</div>

			<div className={props.linkwraper}>
                <ul>
                    <li><a href="">{props.firstlink}</a></li>
					<li><a href="">{props.secondlink}</a></li>

                </ul>
            </div>
            <div className="ipod-caption row">
				<div className="col-sm-12 col-md-6 text-md-right">{props.caption1}</div>
				<div className="col-sm-12 col-md-6 text-md-left">{props.caption2}</div>
			</div>
		</div>
	</section>
    
    
    
    
    </>
  )
}

export default Toppart