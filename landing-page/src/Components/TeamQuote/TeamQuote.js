import React from "react"
import "./TeamQuote.scss"
import { ReactComponent as TeamMembers } from "../../Media/Svgs/team.svg"

const TeamQuote = () => {
	return (
		<div className="team-quote">
			<p>
				“Never doubt that a small group of thoughtful committed citizens can
				change the world; indeed, it is the only thing that ever has.” -
				Margaret Mead
			</p>
			<TeamMembers className="team-members" />
		</div>
	)
}

export default TeamQuote
