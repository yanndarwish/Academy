import a from "../assets/img/academy/10.png"
import b from "../assets/img/academy/04.png"
import c from "../assets/img/academy/09.png"
import d from "../assets/img/academy/12.png"
import e from "../assets/img/academy/15.png"
import f from "../assets/img/academy/16.png"
import g from "../assets/img/academy/06.png"
import h from "../assets/img/academy/17.png"

import i from "../assets/img/instructor/07.png"
import j from "../assets/img/instructor/10.png"
import k from "../assets/img/instructor/09.png"
import l from "../assets/img/instructor/11.png"
import m from "../assets/img/instructor/06.png"
import n from "../assets/img/instructor/02.png"

import o from "../assets/img/academy/05.png"
import p from "../assets/img/academy/07.png"
import q from "../assets/img/academy/08.png"
import r from "../assets/img/academy/02.png"

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

export const instructors: {
	id: number
	name: string
	role: string
	img: string
}[] = [
	{ id: 1, name: "Jon Kantner", role: "Designer", img: i },
	{ id: 2, name: "Debbie Lachusa", role: "SEO", img: j },
	{ id: 3, name: "Edwin Diaz", role: "Composer", img: k },
	{ id: 4, name: "Cassie Evans", role: "Photographer", img: l },
	{ id: 5, name: "Erich Andreas", role: "Programmer", img: m },
	{ id: 6, name: "Jason Allen", role: "Accounting", img: n },
]

export const yourCourses: {
	title: string
	lesson: number
	student: number
	level: 1 | 2 | 3
	progress: number
	professor: number
	days: number
	img: string
}[] = [
	{
		title: "Google Ads Training 2021: Profit with Pay",
		lesson: 5,
		student: 134,
		level: 3,
		progress: 75,
		professor: 1,
		days: 56,
		img: o,
	},
	{
		title: "ASO & Mobile App Marketing: Monetize Your App",
		lesson: 6,
		student: 134,
		level: 2,
		progress: 25,
		professor: 2,
		days: 56,
		img: p,
	},
	{
		title: "Python for Beginners - Learn Programming from scratch",
		lesson: 12,
		student: 99,
		level: 1,
		progress: 50,
		professor: 3,
		days: 33,
		img: q,
	},
	{
		title: "Beginner Nikon Digital SLR  Photography",
		lesson: 18,
		student: 37,
		level: 2,
		progress: 100,
		professor: 4,
		days: 45,
		img: r,
	},
]
