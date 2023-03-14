import SearchIcon from "@mui/icons-material/Search"
import Button from "../Button/Button"
import "./Search.css"

export interface ISearchProps {
	button: boolean
	width?: string
}

export default function Search(props: ISearchProps) {
	return (
		<div className={`input-wrapper ${props.width && props.width}`}>
			{props.button && <Button text="Categories" class="contained" />}
            {props.button && 
                <div className="dropdown-menu">
                    <ul>
                        <li className="menu-item">Sub Menu One</li>
                        <li className="menu-item">Sub Menu Two</li>
                        <li className="menu-item">Sub Menu Three</li>
                        <li className="menu-item">Sub Menu Four</li>
                    </ul>
                </div>
            }
			<input type="text" placeholder="Search Anything"/>
			<SearchIcon />
		</div>
	)
}
