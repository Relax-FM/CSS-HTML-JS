const hourEl = document.querySelector('.hour')
const minuteEl = document.querySelector('.minute')
const secondEl = document.querySelector('.second')
const timeEl = document.querySelector('.time')
const dateEl = document.querySelector('.date')
const toggle = document.querySelector('.toggle')

const days = [
	'Sunday',
	'Monday',
	'Tuesday',
	'Wednesday',
	'Thursday',
	'Friday',
	'Saturday',
]

const months = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December',
]

toggle.addEventListener('click', e => {
	const html = document.querySelector('html')

	if (html.classList.contains('dark')) {
		html.classList.remove('dark')
		e.target.innerHTML = 'Dark mode'
	} else {
		html.classList.add('dark')
		e.target.innerHTML = 'Light mode'
	}
})

const scale = (num, in_min, in_max, out_min, out_max) => {
	return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}

const setTime = () => {
	const time = new Date()
	const month = time.getMonth()
	const day = time.getDay()
	const date = time.getDate()
	const hours = time.getHours()
	const hoursForClock = hours >= 13 ? hours % 12 : hours
	const minutes = time.getMinutes()
	const seconds = time.getSeconds()

	hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(
		hoursForClock,
		0,
		12,
		0,
		360
	)}deg)`

	minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(
		minutes,
		0,
		60,
		0,
		360
	)}deg)`

    let sec = scale(
		seconds,
		0,
		60,
		0,
		360
	)
    let secs = sec + (minutes * 360)
    console.log(secs)

	secondEl.style.transform = `translate(-50%, -100%) rotate(${secs}deg)`

	timeEl.innerHTML = `${hours}:${minutes < 10 ? `0${minutes}` : minutes}`
	dateEl.innerHTML = `${days[day]}, ${months[month]}, ${date}`
}

setTime()
setInterval(setTime, 1000)
