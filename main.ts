player.onChat("construir", function () {
    player.teleport(world(-13, 64, 159))
    builder.teleportTo(world(-13, 64, 159))
    waterfall()
})
function waterfall () {
    builder.face(WEST)
    for (let index = 0; index < 4; index++) {
        for (let index = 0; index < 19; index++) {
            builder.move(FORWARD, 1)
            builder.place(GRANITE)
        }
        builder.turn(RIGHT_TURN)
        builder.move(FORWARD, 1)
        builder.turn(RIGHT_TURN)
        for (let index = 0; index < 19; index++) {
            builder.place(WATER)
            builder.move(FORWARD, 1)
        }
        builder.turn(LEFT_TURN)
        builder.move(FORWARD, 1)
        builder.turn(LEFT_TURN)
    }
}
