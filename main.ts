let sprite = game.createSprite(0, 0)
loops.everyInterval(500, function () {
    for (let index = 0; index < 4; index++) {
        basic.pause(500)
        sprite.move(1)
    }
    sprite.turn(Direction.Right, 90)
})
