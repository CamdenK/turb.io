class GameState extends Phaser.State{
  preload() {
    this.load.onLoadStart.add(this.loadStart, this)
    this.load.onFileComplete.add(this.fileComplete,this)
    this.load.onLoadComplete.add(this.loadComplete,this)
  }

  loadStart(){
    this.loadingText = this.add.text(20,this.world.height - 32, 'Loading', {font: '20px Arial', fill: '#ffffff'})
  }
  fileComplete(progress, cacheKey, success, totalLoaded, totalFiles){
    this.loadingText.setText('File Complete: ' + progress + "% - " + totalLoaded + 'out of '+ totalFiles)
  }
  loadComplete(){
    game.world.remove(this.loadingText)
    this.time.advancedTiming = true
  }

  create(){
    this.showDebug = false;
    game.input.keyboard.addKey(Phaser.KeyCode.D).onDown.add(() => {
      this.showDebug = !this.showDebug
    })
    game.camera.x = game.world.centerX - game.width /2
  }

  update(){
  }

  render(){
  }

  loadSpriter(key){
    if(!this.spriterLoader) this.spriterLoader = new Spriter.Loader()

    let spriterFile = new Spriter.SpriterXml(game.cache.getXML(key + 'Animations'))

    let spriter = this.spriterLoader.load(spriterFile)

    return new Spriter.SpriterGroup(game,spriter,key,key)
  }

  drawIsoGrid(){
    let isoGrid = new isoGrid(game)
    isoGrid.drawGrid()
  }
}

export default GameState
