input.onButtonPressed(Button.A, function () {
    logging = !(logging)
    if (logging) {
        basic.showIcon(IconNames.Heart)
    } else {
        basic.clearScreen()
    }
})
let logging = false
logging = false
datalogger.includeTimestamp(FlashLogTimeStampFormat.Seconds)
datalogger.setColumnTitles(
"temp",
"light"
)
loops.everyInterval(1000, function () {
    if (logging) {
        datalogger.log(
        datalogger.createCV("temp", input.temperature()),
        datalogger.createCV("light", input.lightLevel())
        )
    }
})
