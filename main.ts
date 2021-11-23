radio.onReceivedNumber(function (receivedNumber) {
    stored_number = receivedNumber
    basic.showNumber(stored_number)
    radio.setGroup(120)
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(stored_number + 3)
})
let stored_number = 0
radio.setGroup(110)
