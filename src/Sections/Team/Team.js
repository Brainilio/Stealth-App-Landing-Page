import React from "react"
import TeamMember from "../../Components/TeamMember/TeamMember"
import "./Team.scss"

const Team = () => {
	return (
		<section className="team">
			<h1>Meet the team</h1>
			<div className="team-wrapper">
				<TeamMember />
				<TeamMember />
				<TeamMember />
			</div>
		</section>
	)
}

export default Team
