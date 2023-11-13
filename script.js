const daysEl1 = document.getElementById('days-1')
const daysEl2 = document.getElementById('days-2')
const hoursEl1 = document.getElementById('hours-1')
const hoursEl2 = document.getElementById('hours-2')
const minutesEl1 = document.getElementById('minutes-1')
const minutesEl2 = document.getElementById('minutes-2')
const secondsEL1 = document.getElementById('seconds-1')
const secondsEL2 = document.getElementById('seconds-2')

function formatTime(value) {
    return value < 10 ? '0' + value : value.toString();
}

function updateElement(element, value) {
    element.textContent = value;
}

const electionDate = new Date('Dec 3, 2023 12:00:00').getTime()

const timer = setInterval(tick, 1000);

function tick() {
    const now = new Date().getTime()
    const diff = electionDate - now

    if (diff > 0) {
        const days = formatTime(Math.floor(diff / (1000 * 60 * 60 * 24)))

        const hours = formatTime(Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)))

        const minutes = formatTime(Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)))

        const seconds = formatTime(Math.floor((diff % (1000 * 60)) / 1000))

        // console.log(days, hours, minutes, seconds)

        // updating dom values
        updateElement(daysEl1, days.charAt(0))
        updateElement(daysEl2, days.charAt(1))
        updateElement(hoursEl1, hours.charAt(0))
        updateElement(hoursEl2, hours.charAt(1))
        updateElement(minutesEl1, minutes.charAt(0))
        updateElement(minutesEl2, minutes.charAt(1))
        updateElement(secondsEL1, seconds.charAt(0))
        updateElement(secondsEL2, seconds.charAt(1))

    } else {
        clearInterval(timer)
    }
}
