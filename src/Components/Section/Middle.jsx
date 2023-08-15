import React from 'react'

const Middle = (props) => {
  return (
    <>
        <section className={props.middleclassname}>
		<div className="container-fluid">
			<div className="row">
				<div className="left-side-wrapper col-sm-12 col-md-6">
					<div className="left-side-container">
                        	<div className="logo-wrapper">
								<img src={props.logo} alt=''/>
							</div>
							<div className={props.titleclassname}>
							{props.title}
						</div> 
						<div className={props.descriptionclassname}>
							{props.description}
						</div>
						<div className="price-wrapper">
							{props.pricedesciption}
						</div>

						<div className={props.linkwraper}>
                            <ul>
                                <li><a href="">{props.firstlink}</a></li>
                                <li><a href="">{props.secondlink}</a></li>
                            </ul>
                        </div>
						<div className="top-logo-wrapper">
							
						</div>

						<div className="tvshow-logo-wraper">
							<img src={props.logobot} alt='' />
						</div>

						<div className={props.playlink}>
								<a href="#">{props.caption}</a>
								
						</div>
						
					</div>
				</div>
				<div className="right-side-wrapper col-sm-12 col-md-6">
					<div className="right-side-container">
						<div className="top-logo-wrapper">
							<div className="logo-wrapper">
								<img src={props.logo1} alt='' />
							</div>
						</div>
                        <div className={props.titleclassname1}>
							{props.title1}
						</div> 
						<div className={props.descriptionclassname1}>
                             {props.description1}
						</div>
                        <div className="price-wrapper">
							{props.pricedesciption1}
						</div>
						<div className={props.linkwraper1}>
                            <ul>
                                <li><a href="">{props.firstlink1}</a></li>
                                <li><a href="">{props.secondlink1}</a></li>
                            </ul>
                        </div>
						<div className="tvshow-logo-wraper">
							<img src={props.logobot1} alt='' />
						</div>

					
					</div>
				</div>					
			</div>
		</div> 
	</section>
    
    
    </>
  )
}

export default Middle