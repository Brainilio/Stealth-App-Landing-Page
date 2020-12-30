import React from "react"
import "./Video.scss"
import { ReactComponent as VideoWrapper } from "../../Media/Svgs/video-placer.svg"
import { ReactComponent as VideoBorder } from "../../Media/Svgs/video-placer-border.svg"
import VideoSrc from "../../Media/Videos/sustainability.mp4"

const Video = () => {
	return (
		<div className="video-wrapper">
			<VideoWrapper className="video-border" />
			<VideoBorder className="video-placer-border" />
			<video controls>
				<source src={VideoSrc} type="video/mp4" />
			</video>
		</div>
	)
}

export default Video
