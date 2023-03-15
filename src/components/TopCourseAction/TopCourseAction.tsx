import ChevronLeftOutlinedIcon from "@mui/icons-material/ChevronLeftOutlined"
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined"
import "./TopCourseAction.css"
export default function TopCourseAction() {
	return (
		<div className="top-course-action-wrapper">
			<div className="arrow-btn"><ChevronLeftOutlinedIcon /></div>
			<div className="arrow-btn active"><ChevronRightOutlinedIcon /></div>
		</div>
	)
}
