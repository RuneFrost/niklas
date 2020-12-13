input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    temp = -1
    cnd_X = 0
    cnd_Y = 0
})
input.onButtonPressed(Button.A, function () {
    temp = temp + 1
    if (temp >= 5) {
        led.unplot(4, cnd_Y)
        if (cnd_Y == 4) {
            cnd_Y = 0
        } else {
            cnd_Y = cnd_Y + 1
        }
        cnd_X = 0
        temp = 0
    }
})
input.onButtonPressed(Button.B, function () {
    temp = temp - 1
    if (temp < 0) {
        led.unplot(0, cnd_Y)
        if (cnd_Y == 0) {
            cnd_Y = 4
        } else {
            cnd_Y = cnd_Y - 1
        }
        cnd_X = 4
        temp = 4
    }
})
let cnd_Y = 0
let cnd_X = 0
let temp = 0
basic.showIcon(IconNames.Heart)
music.playTone(523, music.beat(BeatFraction.Whole))
basic.clearScreen()
basic.forever(function () {
    cnd_X = temp
    led.plot(cnd_X, cnd_Y)
    led.unplot(cnd_X - 1, cnd_Y)
    led.unplot(cnd_X + 1, cnd_Y)
})
