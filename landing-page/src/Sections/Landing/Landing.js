import React from "react"
import "./Landing.scss"
import { ReactComponent as Lady } from "../../Media/Svgs/lady-walking.svg"
import { ReactComponent as RightBlob } from "../../Media/Svgs/blob-right.svg"

const Landing = () => {
	return (
		<>
			<section className="landing">
				<div className="landing-text">
					<h1>App Title</h1>
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
