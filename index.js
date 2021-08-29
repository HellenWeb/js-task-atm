
// Modules

const chalk = require("chalk")

// Solving

let getMoney = x => {
    let notes = [100, 50, 20, 10]
    let result = []
    if (x > 0) {
        for (let i = 0; i < notes.length; i++) {
            let note = notes[i]
            while (x - note >= 0) {
                x -= note;
                result.push(note)
                console.log(chalk.green(note));
            }
        }
    } else { console.log(chalk.red("Please enter new amount")); }
}

getMoney(Math.floor(Math.random() * 1000))

// || \\