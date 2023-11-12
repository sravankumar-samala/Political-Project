const daysEl1 = document.getElementById('days-1')
const daysEl2 = document.getElementById('days-2')
const hoursEl1 = document.getElementById('hours-1')
const hoursEl2 = document.getElementById('hours-1')
const minutesEl1 = document.getElementById('minutes-1')
const minutesEl2 = document.getElementById('minutes-2')
const secondsEL1 = document.getElementById('seconds-1')
const secondsEL2 = document.getElementById('seconds-2')


let electionDate = new Date('Dec 3, 2023 12:00:00').getTime()

let timer = setInterval(tick, 1000);

function tick() {
    let now = new Date().getTime()
    let diff = electionDate - now

    if (diff > 0) {
        let days = Math.floor(diff / (1000 * 60 * 60 * 24))
        days = days < 10 ? '0' + days : days.toString()

        let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        hours = hours < 10 ? '0' + hours : hours.toString()

        let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
        minutes = minutes < 10 ? '0' + minutes : minutes.toString()


        let seconds = Math.floor((diff % (1000 * 60)) / 1000)
        seconds = seconds < 10 ? '0' + seconds : seconds.toString()


        // console.log(days, hours, minutes, seconds)
        daysEl1.textContent = days.charAt(0);
        daysEl2.textContent = days.charAt(1);
        hoursEl1.textContent = hours.charAt(0);
        hoursEl2.textContent = hours.charAt(1);
        minutesEl1.textContent = minutes.charAt(0);
        minutesEl2.textContent = minutes.charAt(1);
        secondsEL1.textContent = seconds.charAt(0);
        secondsEL2.textContent = seconds.charAt(1);

    } else {
        clearInterval(timer)
    }

}