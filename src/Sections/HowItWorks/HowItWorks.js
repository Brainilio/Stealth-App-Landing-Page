import React from "react"
import TutorialHero from "../../Components/TutorialHero/TutorialHero"
import "./HowItWorks.scss"
import { ReactComponent as Group } from "../../Media/Svgs/group-community.svg"
import Title from "../../UI/Title/Title"

const HowItWorks = () => {
	return (
		<section className="how-it-works">
			<Title>How it works</Title>
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
