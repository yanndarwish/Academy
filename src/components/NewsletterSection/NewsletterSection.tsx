import Search from "../Search/Search";
import "./NewsletterSection.css"

export default function NewsletterSection () {
  return (
		<section className="newsletter-section">
			<div className="left">
				<h2 className="newsletter-text">
					Find out about the latest courses with the <span>academy</span>{" "}
					newsletter
				</h2>
			</div>
			<div className="right">
				<Search button={true} />
			</div>
		</section>
	)
}
