input.onButtonPressed(Button.A, function () {
    LT = 129
})
input.onButtonPressed(Button.B, function () {
    LT = 2008
})
let LT = 0
music.playMelody("C D E A D F G B ", 600)
LT = 0
basic.forever(function () {
    if (LT == 0) {
        basic.showLeds(`
            . . . . .
            . . # . .
            . . # . .
            . # # # .
            . . # . .
            `)
    }
    if (LT == 129) {
        basic.showNumber(input.lightLevel())
        music.playMelody("B C5 B C5 B C5 B C5 ", 600)
    }
    if (LT == 2008) {
        basic.showNumber(input.temperature())
        music.playMelody("C D C D C D C D ", 600)
    }
})
