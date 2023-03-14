import logo from "../../assets/logo/head-logo.png"
import MenuIcon from "@mui/icons-material/Menu"
import "./Header.css"
import Search from "../Search/Search"
import Profile from "../Profile/Profile"
import Button from "../Button/Button"
import { useRef } from "react"

export interface IHeaderProps {}

export default function Header(props: IHeaderProps) {
	const sideBarRef = useRef<HTMLDivElement | null>(null)

	const handleClick = () => {
		const isOpen = sideBarRef.current?.classList.contains("open")
		if (isOpen) {

			sideBarRef.current?.classList.remove("open")
		} else {
			sideBarRef.current?.classList.add("open")

		}
	}

	return (
		<header>
			<div className="container">
				<div className="left">
					<a href="" className="logo">
						<img src={logo} alt="Logo" />
					</a>
					<div className="sidebar-btn">
						<Button
							onClick={() => handleClick()}
							text=""
							icon={{ position: "start", element: <MenuIcon /> }}
						/>
					</div>
					<div className="sidebar" ref={sideBarRef}>
						<nav>
							<ul className="nav-list">
								<li>
									<a href="" className="nav-item">
										Categories
									</a>
								</li>
								<li>
									<a href="" className="nav-item">
										Teach
									</a>
								</li>
								<li>
									<a href="" className="nav-item">
										Contact Us
									</a>
								</li>
								<li>
									<a href="" className="nav-item">
										Aout Us
									</a>
								</li>
							</ul>
						</nav>
						<div className="right">
							<Search button={false} />
							<div className="separator"></div>
							<Profile name="Yann" title="Front-End Dev" />
						</div>
					</div>
				</div>
			</div>
		</header>
	)
}
