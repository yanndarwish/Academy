import certificate from "../../assets/img/academy/certificate.png"
import "./Footer.css"
import logo from "../../assets/logo/logo.png"

const categories = [
	"Designing",
	"Programming",
	"Graphics",
	"Front End",
	"Composition",
	"Tailoring",
	"Database",
	"Sport",
	"Cooking",
	"Diving",
	"Photography",
	"Camerawork",
]
const access = [
	"What We Offer",
	"Careers",
	"Leadership",
	"About",
	"Catalog",
	"Degrees",
	"For Enterprise",
	"For Government",
	"For Campus",
	"Become A Partner",
	"Terms",
	"Accessibility",
]
const messages = [
	{
		name: "Ellsmartx",
		message:
			"how nice does this look 😍 I feel it should be delicious, thank you",
	},
	{
		name: "Cassio",
		message: "Take a rest, i'll be cheer up you again in 2 next game go go go",
	},
	{
		name: "Amanda",
		message: "you were stunning today, jan! 💗 great match 👍🏽👍🏽",
	},
	{
		name: "Denis Simonassi",
		message: "It was a great match today Janzi! You did great😉🇩🇪",
	},
]

export default function Footer() {
	return (
		<footer className="footer">
			<div className="top">
				<div className="left">
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas
						purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris
						rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed
						euismod nisi porta lorem mollis. Morbi tristique senectus et netus.
						Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien
						faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper
						velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum
						varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris
						a diam maecenas sed enim. Velit ut tortor pretium
					</p>
					<div className="blob"></div>
				</div>
				<img src={logo} alt="logo" className="logo" />
			</div>
			<div className="center">
				<div className="membership">
					<h4 className="section-title">Membership Certificate</h4>
					<img src={certificate} alt="certificate" className="certificate" />
				</div>
				<div className="categories">
					<h4 className="section-title">Categories</h4>
					<ul className="list-wrapper">
						{categories.map((item) => (
							<li className="footer-link" key={item}>
								<a href="#">{item}</a>
							</li>
						))}
					</ul>
				</div>
				<div className="quick">
					<h4 className="section-title">quick access</h4>
					<ul className="list-wrapper">
						{access.map((item) => (
							<li className="footer-link" key={item}>
								<a href="#">{item}</a>
							</li>
						))}
					</ul>
				</div>
				<div className="comments">
					<h4 className="section-title">new comment</h4>
					<div className="message-wrapper">
						{messages.map((item) => (
							<div className="message" key={item.name}>
								<h5>{item.name}</h5>
								<p>{item.message}</p>
							</div>
						))}
					</div>
				</div>
			</div>
			<div className="bottom">
				<p>privacy policy | terms & conditions</p>
				<p>all copyright (c) 2022 reserved</p>
			</div>
		</footer>
	)
}
