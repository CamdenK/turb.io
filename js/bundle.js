/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__GameState_js__ = __webpack_require__(1);

class RunState extends __WEBPACK_IMPORTED_MODULE_0__GameState_js__["a" /* default */]{

}


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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

/* harmony default export */ __webpack_exports__["a"] = (GameState);


/***/ })
/******/ ]);