input.onButtonPressed(Button.A, function () {
    music.playTone(262, music.beat(BeatFraction.Sixteenth))
    사람수 += 1
    basic.showNumber(사람수 % 10)
})
input.onButtonPressed(Button.AB, function () {
    사람수 = 0
    basic.showNumber(사람수)
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    basic.showNumber(사람수)
})
let 사람수 = 0
사람수 = 0
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        led.stopAnimation()
    } else {
    	
    }
})
