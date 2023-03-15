import a from "../assets/img/academy/10.png"
import b from "../assets/img/academy/04.png"
import c from "../assets/img/academy/09.png"
import d from "../assets/img/academy/12.png"
import e from "../assets/img/academy/15.png"
import f from "../assets/img/academy/16.png"
import g from "../assets/img/academy/06.png"
import h from "../assets/img/academy/17.png"


export const courses: {
	title: string
	lesson: number
	student: number
	level: 1 | 2 | 3
	rating: number
	img: string
}[] = [
	{
		title: "Learn Figma - UI/UX Design Essential Training",
		lesson: 6,
		student: 198,
		level: 1,
		rating: 4,
		img: a,
	},
	{
		title: "Python for Beginners - Learn Programming from scratch",
		lesson: 21,
		student: 99,
		level: 3,
		rating: 3,
		img: b,
	},
	{
		title: "Acoustic Guitar and Electric Guitar Started",
		lesson: 8,
		student: 301,
		level: 2,
		rating: 5,
		img: c,
	},
	{
		title: "Mobile App Development with Flutter & Dart (iOS and Android)",
		lesson: 15,
		student: 215,
		level: 1,
		rating: 2,
		img: d,
	},
	{
		title: "Ionic React: Mobile Development with Ionic 5 Started",
		lesson: 15,
		student: 67,
		level: 3,
		rating: 5,
		img: e,
	},
	{
		title: "Sports Management: The Essentials Course",
		lesson: 26,
		student: 156,
		level: 2,
		rating: 1,
		img: f,
	},
	{
		title: "How to Market Yourself as a Consultant",
		lesson: 33,
		student: 64,
		level: 1,
		rating: 3,
		img: g,
	},
	{
		title: "Become a Product Manager | Learn the Skills & Get the Job",
		lesson: 5,
		student: 134,
		level: 3,
		rating: 4,
		img: h,
	},
]
