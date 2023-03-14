import NotificationsIcon from "@mui/icons-material/Notifications"
import profile from "../../assets/img/avatar/profile.jpg"
import "./Profile.css"
export interface IProfileProps {
	name: string
	title: string
}

export default function Profile(props: IProfileProps) {
	return (
		<div className="profile">
			<div className="left">
				{/* should be a dynamyc picture render */}
				<div className="img-wrapper">
					<img src={profile} alt="Yann" className="profile-pic square" />
					<div className="alert">
						<NotificationsIcon />
					</div>
				</div>
				<div className="profile-info">
					<h5>{props.name}</h5>
					<h6>{props.title}</h6>
				</div>
			</div>
			<div className="square alert alert-square">
				<NotificationsIcon />
			</div>
		</div>
	)
}
