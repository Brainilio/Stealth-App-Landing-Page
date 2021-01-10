import React from "react"
import "./Product.scss"
import { ReactComponent as Blob } from "../../Media/Svgs/blob-left-2.svg"
import { ReactComponent as CloudOne } from "../../Media/Svgs/cloud.svg"
import { ReactComponent as ProductDisplay } from "../../Media/Svgs/guy-looking-at-app.svg"
import { ReactComponent as Buildings } from "../../Media/Svgs/buildings.svg"
import Title from "../../UI/Title/Title"

const Product = () => {
	return (
		<section className="product">
			<div className="product-title">
				<Title>COMING SOON</Title>
				<h2>Don’t wait on anyone. Make the difference.</h2>
			</div>

			<div className="product-display">
				<div className="product-itself">
					<ProductDisplay className="product-itself-guy" />
					<CloudOne className="cloud1" />
					<CloudOne className="cloud2" />
					<CloudOne className="cloud3" />
				</div>
				<div className="product-container">
					<span>Sorry for the wait!</span>
					<p>
						Our team of dedicated individuals are extremely busy building out
						our next application! Subscribe to our newsletter for the latest
						updates!
					</p>
					<button>Subscribe</button>
				</div>
			</div>

			<Blob className="blob-left-2" />
		</section>
	)
}

export default Product
