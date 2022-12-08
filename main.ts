namespace SpriteKind {
    export const NPC = SpriteKind.create()
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    Render.setViewMode(ViewMode.tilemapView)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
let mySprite2 = Render.getRenderSpriteVariable()
game.showLongText("Press\" A\" to enter 2D/Map mode, and click \"B\" to turn to 3D.", DialogLayout.Full)
Render.setViewMode(ViewMode.raycastingView)
tiles.setCurrentTilemap(tilemap`level`)
Render.getRenderSpriteVariable().setPosition(10, 10)
Render.move(mySprite2, 60, -250)
Render.setViewAngleInDegree(90)
Render.setSpriteAttribute(mySprite2, RCSpriteAttribute.ZOffset, 10)
