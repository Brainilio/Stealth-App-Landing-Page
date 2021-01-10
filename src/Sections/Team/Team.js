import React from "react"
import TeamMember from "../../Components/TeamMember/TeamMember"
import Title from "../../UI/Title/Title"
import "./Team.scss"

const Team = () => {
	return (
		<section className="team">
			<Title>Meet the team</Title>
			<div className="team-wrapper">
				<TeamMember />
				<TeamMember />
				<TeamMember />
			</div>
		</section>
	)
}

export default Team
