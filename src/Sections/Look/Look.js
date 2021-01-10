import React from "react"
import Video from "../../Components/Video/Video"
import { ReactComponent as Person } from "../../Media/Svgs/teacher.svg"
import Title from "../../UI/Title/Title"
import "./Look.scss"

const Look = () => {
	return (
		<section className="look">
			<Video />
			<div>
				<Title>Let's take a look</Title>
			</div>
			<Person className="teacher" />
		</section>
	)
}

export default Look
