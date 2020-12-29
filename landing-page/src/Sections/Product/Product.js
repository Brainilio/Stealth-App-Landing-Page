import React from "react"
import "./Product.scss"

const Product = () => {
	return (
		<section className="product">
			<div className="product-title">
				<h1>COMING SOON</h1>
				<h2>Don’t wait on anyone. Make the difference.</h2>
			</div>

			<div className="product-display">
				<div>Product image here</div>
				<div className="product-container">
					<span>Sorry for the wait!</span>
					<p>
						Our team of dedicated individuals are extremely busy building out
						our next application! Subscribe to our newsletter for the latest
						updates!
					</p>
					<button>Subscribe</button>
					<div className="product-container-image">Image here</div>
				</div>
			</div>
		</section>
	)
}

export default Product
