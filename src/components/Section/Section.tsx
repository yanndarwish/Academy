import { ReactNode } from "react"
import "./Section.css"

export interface ISectionProps {
	title: string
	action: ReactNode
	children: ReactNode
}

export default function Section(props: ISectionProps) {
	return (
		<section className="section-container">
			<div className="section-header">
				<div className="dot"></div>
				<h4 className="section-title">{props.title}</h4>
				{props.action}
			</div>
			{props.children}
		</section>
	)
}
