import Search from "../Search/Search";
import "./SearchSection.css"
import arrow from "../../assets/icons/arrows-3.png"

const SearchSection = () => {
	return (
		<div className="search-section">
			<h2 className="search-text">
				Search among <span>58340</span> courses and <br></br>find your favorite course
			</h2>
			<div className="search-wrapper">
				<Search button={true} width="large" />
				<p>Or view the following courses...</p>
                <img src={arrow} alt="icon" />
			</div>
		</div>
	)
}

export default SearchSection