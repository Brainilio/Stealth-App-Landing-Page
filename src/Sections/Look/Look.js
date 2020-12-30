import React from "react"
import Video from "../../Components/Video/Video"
import { ReactComponent as Person } from "../../Media/Svgs/teacher.svg"
import "./Look.scss"

const Look = () => {
	return (
		<section className="look">
			<Video />
			<div>
				<h1>Let's take a look</h1>
			</div>
			<Person className="teacher" />
		</section>
	)
}

export default Look
