const Moment = require('moment');
const MomentRange = require('moment-range');

const moment = MomentRange.extendMoment(Moment);

let timerId;

function timer(endTime) {
    // const secodnsLeft = (d.getTime() - new Date().getTime()) / 1000;
    // const date = new Date(new Date().getTime() - (new Date().getTime() - endTime.getTime()));
    const range = moment.range(new Date(), endTime);
    const hours = range.diff('hours')
    const minutes = range.diff('minutes') % 60
    const seconds = range.diff('seconds') % 60
    console.log('\u001B[2J\u001B[0;0f');
    console.log(`${hours}:${minutes}:${seconds}`)
}

function start(end) {
    console.log(moment().format('HH:MM:SS'), moment(end).format('HH:MM:SS'))
    setInterval(() => {
        timer(end)
    }, 1000)
}

function unsubscribe() {
    if (timerId && !isNaN(timerId)) {
        clearInterval(timerId)
    }
}

const end = new Date()
end.setHours(end.getHours() + 4)
start(end);