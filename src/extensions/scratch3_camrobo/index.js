const ArgumentType = require('../../extension-support/argument-type');
const BlockType = require('../../extension-support/block-type');
const TargetType = require('../../extension-support/target-type');
const Cast = require('../../util/cast');
const Clone = require('../../util/clone');
const Color = require('../../util/color');
const formatMessage = require('format-message');
const MathUtil = require('../../util/math-util');
const RenderedTarget = require('../../sprites/rendered-target');
const log = require('../../util/log');
const StageLayering = require('../../engine/stage-layering');

class Scratch3CamroboBlocks {
  constructor(runtime) {
    this.runtime = runtime;
    this.baseurl_ = "http://192.168.68.90:8765"
  }

  getInfo() {
    return {
      id: "camrobo",
      name: "Camrobo",
      blocks: [
        {
          opcode: "forward",
          blockType: BlockType.COMMAND,
          text: "すすむ"
        },
        {
          opcode: "back",
          blockType: BlockType.COMMAND,
          text: "さがる"
        },
        {
          opcode: "turnright",
          blockType: BlockType.COMMAND,
          text: "みぎにまわる"
        },
        {
          opcode: "turnleft",
          blockType: BlockType.COMMAND,
          text: "ひだりにまわる"
        },
        {
          opcode: "stop",
          blockType: BlockType.COMMAND,
          text: "とまる"
        }
      ],
      menus: {
      }
    };
  }

  forward() {
    fetch(this.baseurl_ + "/forward", {mode: "no-cors"})
  }
  back() {
    fetch(this.baseurl_ + "/back", {mode: "no-cors"})
  }
  turnright() {
    fetch(this.baseurl_ + "/turnright", {mode: "no-cors"})
  }
  turnleft() {
    fetch(this.baseurl_ + "/turnleft", {mode: "no-cors"})
  }
  stop() {
    fetch(this.baseurl_ + "/stop", {mode: "no-cors"})
  }
}

module.exports = Scratch3CamroboBlocks;
