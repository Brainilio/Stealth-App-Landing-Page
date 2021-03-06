import React from "react"
import "./About.scss"
import { ReactComponent as LadyKneeling } from "../../Media/Svgs/lady-kneeling.svg"
import Title from "../../UI/Title/Title"

const About = () => {
	return (
		<section className="about">
			<LadyKneeling className="lady-kneeling" />

			<div className="about-text">
				<Title>About</Title>
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
