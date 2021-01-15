import React from "react"
import "./Why.scss"
import { ReactComponent as Jumping } from "../../Media/Svgs/jumping-lady.svg"
import { ReactComponent as Mountains } from "../../Media/Svgs/mountains.svg"
import { ReactComponent as Hand } from "../../Media/Svgs/hand.svg"
import { ReactComponent as Blob } from "../../Media/Svgs/blob-left-1.svg"
import Title from "../../UI/Title/Title"

const Why = () => {
	return (
		<section className="why">
			<Title>Why?</Title>
			<div className="why-reason">
				<div>
					<Jumping className="jumping" />
				</div>
				<span>
					Reason #1 for using this application and supporting motive to this
					argument.
				</span>
			</div>
			<div className="why-reason">
				<div>
					<Mountains className="mountains" />
				</div>
				<span>
					Reason #1 for using this application and supporting motive to this
					argument.
				</span>
			</div>
			<div className="why-reason">
				<div>
					<Hand className="hand" />
				</div>
				<span>
					Reason #1 for using this application and supporting motive to this
					argument.
				</span>
			</div>

			<Blob className="blob-left-1" />
		</section>
	)
}

export default Why
