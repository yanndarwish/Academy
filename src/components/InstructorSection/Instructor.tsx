import Button from "../Button/Button"
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined"
import arrow from "../../assets/icons/arrows-4.png"
import ad from "../../assets/icons/advertising-2.png"
import "./InstructorSection.css"
import bg from "../../assets/img/instructor/background.png"
import { instructors } from "../../data/data"
import InstructorCard from "../InstructorCard/InstructorCard"

export default function InstructorSection() {
	return (
		<div className="instructor-section">
			<div className="left">
				<h2 className="instructor-text">
					<span>Best</span> Instructors
				</h2>
				<p>
					At the Academy, we strive to bring together the best professors for
					the best courses
				</p>
				<div className="cta-wrapper">
					<Button
						text="All Instructors"
						icon={{ position: "end", element: <ChevronRightOutlinedIcon /> }}
						class="contained"
					/>
					<img src={arrow} alt="icon" />
					<img src={ad} alt="ad" id="ad"/>
				</div>
			</div>
            <div className="right">
                <img src={bg} alt="background" id="bg"/>
                <div className="instructor-wrapper">
                    {instructors.map(inst => (
                        <InstructorCard key={inst.id} name={inst.name} role={inst.role} img={inst.img}/>
                    ))}
                </div>
            </div>
		</div>
	)
}
