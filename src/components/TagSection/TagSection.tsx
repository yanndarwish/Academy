import icon1 from "../../assets/icons/icon.png"
import icon2 from "../../assets/icons/icon-2.png"
import icon3 from "../../assets/icons/icon-3.png"
import ChevronLeftOutlinedIcon from "@mui/icons-material/ChevronLeftOutlined"
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined"
import Tag from "../Tag/Tag"
import "./TagSection.css"
import { useRef, useState } from "react"

const TagSection = () => {
	const [index, setIndex] = useState<number>(0)
	const ref1 = useRef<HTMLDivElement | null>(null)
	const ref2 = useRef<HTMLDivElement | null>(null)
	const ref3 = useRef<HTMLDivElement | null>(null)

	const refs = [ref1, ref2, ref3]

	const handlePrevClick = () => {
		if (index === 0) {
			setIndex(2)
			refs[2].current?.scrollIntoView({
				behavior: "smooth",
				block: "nearest",
				inline: "center",
			})
		} else {
			setIndex(index - 1)
			refs[index - 1].current?.scrollIntoView({
				behavior: "smooth",
				block: "nearest",
				inline: "center",
			})
		}
	}

	const handleNextClick = () => {
		if (index === 2) {
			setIndex(0)
			refs[0].current?.scrollIntoView({
				behavior: "smooth",
				block: "nearest",
				inline: "center",
			})
		} else {
			setIndex(index + 1)
			refs[index + 1].current?.scrollIntoView({
				behavior: "smooth",
				block: "nearest",
				inline: "center",
			})
		}
	}

	return (
		<div className="tag-section">
			<div className="wrapper">
				<div ref={ref1} className="tag-group">
					<Tag isIcon={true} content={icon1} />
					<Tag isIcon={false} content="Python" />
					<Tag isIcon={false} content="React" />
					<Tag isIcon={false} content="Unity" />
				</div>
				<div ref={ref2} className="tag-group">
					<Tag isIcon={true} content={icon2} />
					<Tag isIcon={false} content="Ui & Ux" />
					<Tag isIcon={false} content="Vector" />
				</div>
				<div ref={ref3} className="tag-group">
					<Tag isIcon={true} content={icon3} />
					<Tag isIcon={false} content="After Effects" />
					<Tag isIcon={false} content="Lightroom" />
					<Tag isIcon={false} content="Photography" />
				</div>
			</div>
			<ChevronLeftOutlinedIcon
				className="left tag-nav"
				fontSize="large"
				onClick={() => handlePrevClick()}
			/>
			<ChevronRightOutlinedIcon
				className="right tag-nav"
				fontSize="large"
				onClick={() => handleNextClick()}
			/>
		</div>
	)
}

export default TagSection
