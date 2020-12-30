import React from "react"
import TutorialHero from "../../Components/TutorialHero/TutorialHero"
import "./HowItWorks.scss"
import { ReactComponent as Group } from "../../Media/Svgs/group-community.svg"

const HowItWorks = () => {
	return (
		<section className="how-it-works">
			<h1>How it works</h1>

			<p>
				“The greatest threat to our planet is the belief that someone else will
				save it.”
			</p>
			<span>- Robert Swan</span>
			<Group className="how-it-works-group" />
			<TutorialHero />
		</section>
	)
}

export default HowItWorks
