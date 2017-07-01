import GameState from './GameState.js'
class RunState extends GameState{
  preload(){
    super.preload()

    game.load.tilemap('mainMap', '/assets/tiles.json', null, Phaser.Tilemap.TILED_JSON)
    game.load.image('tiles', '/assets/sheet.png')
  }
  create(){
    super.create()
    this.initTilemap()
    this.initKeyboard()
    this.resetPlayer()
  }
  initTilemap(){
    let map = game.add.tilemap('mainMap')
    this.map = map.addTilesetImage('sheet','tiles')
  }
}
