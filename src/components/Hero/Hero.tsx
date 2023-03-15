import Button from "../Button/Button"
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined"
import arrow from "../../assets/hero/arrows.png"
import arrow2 from "../../assets/hero/arrows-2.png"
import progress from "../../assets/hero/chart.png"
import booked from "../../assets/hero/advertising.png"
import girl from "../../assets/hero/1-removebg 1.png"
import shadow from "../../assets/hero/1-removebg 2.png"
import ellipse from "../../assets/hero/Ellipse 4.png"
import journal from "../../assets/hero/Group-2.png"
import lightbulb from "../../assets/hero/Group.png"
import triangle from "../../assets/hero/Polygon 1.png"

import "./Hero.css"

export interface IHeroProps {}

const Hero = (props: IHeroProps) => {
	return (
		<div className="hero">
			<div className="left">
				<p className="hero-text">
					🙌 Hello friends<br></br> I am Sofia and we want to start A{" "}
					<span>Web Design </span>
					course together.<br></br> Do you like it too 😍 ?
				</p>
				<div className="cta-wrapper">
					<img src={arrow2} alt="icon" id="arrow-left" />
					<Button
						text="Start Course Now"
						icon={{ position: "end", element: <ChevronRightOutlinedIcon /> }}
						class="contained large"
					/>
					<div className="icons">
						<img src={progress} alt="icon" id="progress" />
						<img src={arrow} alt="icon" id="arrow-right" />
						<img src={booked} alt="icon" id="booked" />
					</div>
				</div>
			</div>
			<div className="right">
				<div className="ellipse rotating">
					<img src={ellipse} alt="icon" id="ellipse" className="hero-icon" />
					<img src={journal} alt="icon" id="journal" className="hero-icon" />
					<img
						src={lightbulb}
						alt="icon"
						id="lightbulb"
						className="hero-icon"
					/>
					<img src={triangle} alt="icon" id="triangle" className="hero-icon" />
				</div>
				<p className="hero-highlight">UX & UI</p>

				<img src={shadow} alt="icon" id="shadow" className="hero-icon" />
				<img src={girl} alt="icon" id="girl" className="hero-icon" />
			</div>
		</div>
	)
}

export default Hero
