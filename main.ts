controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . . f 2 f . . . . . . . 
        . . . . . f f 2 f f . . . . . . 
        . . . . . f 2 2 2 f . . . . . . 
        . . . . . f 2 2 2 f . . . . . . 
        . . . . . f 2 2 2 f . . . . . . 
        . . . . . f 2 2 2 f . . . . . . 
        . . . . f f 2 2 2 f f . . . . . 
        . . . . f 2 2 f 2 2 f . . . . . 
        . . . . f 2 f f f 2 f . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . f f 4 4 4 f f . . . . . 
        . . . . . . 2 4 2 . . . . . . . 
        . . . . . . 2 2 2 . . . . . . . 
        . . . . . . . 2 . . . . . . . . 
        `, nave, 0, -100)
    projectile.setScale(0.9, ScaleAnchor.Middle)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    sprite.destroy(effects.fire, 100)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeLifeBy(-1)
})
let enemigo: Sprite = null
let projectile: Sprite = null
let nave: Sprite = null
nave = sprites.create(img`
    . . . . . . . 1 . . . . . . . . 
    . . . . . . 1 1 1 . . . . . . . 
    . . . . . . 4 4 4 . . . . . . . 
    . . . . . . 4 4 4 . . . . . . . 
    . . . . . 4 4 4 4 4 . . . . . . 
    f . . . . 4 4 4 4 4 . . . . f . 
    1 . . . . 4 4 4 4 4 . . . . 1 . 
    1 . . . . 4 4 f 4 4 . . . . 1 . 
    1 . . . . 4 f f f 4 . . . . 1 . 
    1 . . . . 4 f f f 4 . . . . 1 . 
    1 4 4 4 4 4 f f f 4 4 4 4 4 1 . 
    1 4 4 4 4 4 4 4 4 4 4 4 4 4 1 . 
    1 . . 4 4 4 4 4 4 4 4 4 . . 1 . 
    . . . . . 4 4 4 4 4 . . . . . . 
    . . . . . 1 . . . 1 . . . . . . 
    . . . . . 2 . . . 2 . . . . . . 
    `, SpriteKind.Player)
nave.setStayInScreen(true)
info.setLife(3)
controller.moveSprite(nave, 75, 75)
scene.setBackgroundColor(8)
game.onUpdateInterval(500, function () {
    enemigo = sprites.create(img`
        . . f f . . . . . . . . f f . . 
        . f f 1 . . . . . . . . 1 f f . 
        f f 1 . . . . . . . . . . 1 f f 
        f f . . . . . . . . . . . . f f 
        1 f . . . . f f f f . . . . f 1 
        1 f . . . f 1 1 1 1 f . . . f 1 
        1 f 1 . f 1 1 f f 1 1 f . 1 f 1 
        f f 1 1 f 1 f 1 1 f 1 f 1 1 f f 
        f f f f f f f 1 1 f f f f f f f 
        f f 1 1 f 1 f 1 1 f 1 f 1 1 f f 
        1 f 1 . f 1 1 f f 1 1 f . 1 f 1 
        1 f . . . f 1 1 1 1 f . . . f 1 
        1 f . . . . f f f f . . . . f 1 
        f f 1 . . . . . . . . . . 1 f f 
        . f f 1 . . . . . . . . 1 f f . 
        . . f f . . . . . . . . f f . . 
        `, SpriteKind.Enemy)
    enemigo.setVelocity(0, 75)
    enemigo.setPosition(randint(0, 130), 0)
})
