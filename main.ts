input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.EighthNote)
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Heart)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Happy)
})
let lumi = 0
let sat = 0
let hue = 0
let strip = neopixel.create(DigitalPin.P1, 24, NeoPixelMode.RGB)
strip.showRainbow(1, 360)
basic.forever(function () {
    strip.showColor(neopixel.hsl(hue, sat, lumi))
    strip.show()
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.A) && !(input.buttonIsPressed(Button.B))) {
        hue += 5
        if (hue >= 360) {
            hue = -50
        }
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.B) && !(input.buttonIsPressed(Button.A))) {
        sat += 5
        if (sat >= 360) {
            sat = -50
        }
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.AB)) {
        lumi += 5
        if (lumi >= 360) {
            lumi = -50
        }
    }
})
