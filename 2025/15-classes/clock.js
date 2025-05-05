// create c class name 'clock', that prints time every second.
// user should define the time format including HH, MM , SS

class Clock {
    constructor(template) {
        this.template = template;
    }

    render() {
        let date = new Date();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();

        if (hours < 10) {
            hours = '0' + hours;
        }
        if (minutes < 10) {
            minutes = '0' + minutes;
        }
        if (seconds < 10) {
            seconds = '0' + seconds;
        }

        let output = this.template
            .replace("hh", hours)
            .replace("mm", minutes)
            .replace("ss", seconds);
        
        console.log(output);
    }   

    start() {
        const timerX = () => {
            this.render();
            setTimeout(timerX, 1000);
        }
        this.timer = setTimeout(timerX, 1000);
    }

    stop() {
        clearTimeout(this.timer);
    }
};  

new Clock("hh/mm/ss").start();