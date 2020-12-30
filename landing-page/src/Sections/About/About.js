import React from "react"
import "./About.scss"
import { ReactComponent as LadyKneeling } from "../../Media/Svgs/lady-kneeling.svg"

const About = () => {
	return (
		<section className="about">
			<div className="about-image">
				<LadyKneeling className="lady-kneeling" />
			</div>
			<div className="about-text">
				<h1>About</h1>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
					blandit in erat id sollicitudin. Maecenas non quam non tortor congue
					porta. Sed eu facilisis urna, vel finibus lorem. Donec vitae mattis
					nunc. Vivamus hendrerit ligula at erat sodales placerat. Sed nec
					varius odio. Suspendisse consectetur non justo eget pharetra.
				</p>
			</div>
		</section>
	)
}

export default About
