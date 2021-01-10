import React from "react"
import "./Landing.scss"
import { ReactComponent as Lady } from "../../Media/Svgs/lady-walking.svg"
import { ReactComponent as RightBlob } from "../../Media/Svgs/blob-right.svg"
import Title from "../../UI/Title/Title"

const Landing = () => {
	return (
		<>
			<section className="landing">
				<div className="landing-text">
					<Title>App Title</Title>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
						luctus tempus metus quis efficitur.
					</p>
					<button>READ MORE</button>
				</div>
				<div className="landing-image">
					<Lady className="landing-image-lady" />
				</div>
				<RightBlob className="blob-right" />
			</section>
		</>
	)
}

export default Landing
