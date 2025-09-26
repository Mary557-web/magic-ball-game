let answer = 0
input.onGesture(Gesture.Shake, function () {
    answer = randint(0, 5)
    if (answer == 0) {
        basic.showString("YES")
    } else if (answer == 1) {
        basic.showString("NO")
    } else if (answer == 2) {
        basic.showString("Ask again")
    } else if (answer == 3) {
        basic.showString("definitely")
    } else if (answer == 0) {
        basic.showString("MAYBE")
    } else {
        basic.showString("cannot predict")
    }
})
