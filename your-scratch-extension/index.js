const BlockType = require('../../extension-support/block-type');
const ArgumentType = require('../../extension-support/argument-type');
const TargetType = require('../../extension-support/target-type');

class Scratch3YourExtension {

    constructor (runtime) {
        // put any setup for your extension here
    }

    /**
     * Returns the metadata about your extension.
     */
    getInfo () {
        return {
            // unique ID for your extension
            id: 'yourScratchExtension',

            // name that will be displayed in the Scratch UI
            name: 'Demo',

            // colours to use for your extension blocks
            color1: '#000099',
            color2: '#660066',

            // icons to display
            blockIconURI: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAFCAAAAACyOJm3AAAAFklEQVQYV2P4DwMMEMgAI/+DEUIMBgAEWB7i7uidhAAAAABJRU5ErkJggg==',
            menuIconURI: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAFCAAAAACyOJm3AAAAFklEQVQYV2P4DwMMEMgAI/+DEUIMBgAEWB7i7uidhAAAAABJRU5ErkJggg==',

            // your Scratch blocks
            blocks: [
                {
                    opcode: 'hello',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'print and format [TEXT] with CSS style [CSS]',
                    terminal: false,
                    filter: [ TargetType.SPRITE, TargetType.STAGE ],
                    arguments: {
                        TEXT: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: "Hello, World!"
                        },
                        CSS: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: "color:yellow; font-size:50px;"
                        }
                    },
                    category: 'My Category'
                  },
                  {
                    opcode: 'colorget',
                    blockType: Scratch.BlockType.REPORTER,
                    text: "get [COLOR] color as CSS stroke",
                    terminal: false,
                    filter: [ TargetType.SPRITE, TargetType.STAGE ],
                    arguments: {
                        COLOR: {
                            type: Scratch.ArgumentType.COLOR
                        }
                    },
                    category: "CSS"
                  },
                  {
                    opcode: 'sizeget',
                    blockType: Scratch.BlockType.REPORTER,
                    text: "get [FONTSIZE] font size as CSS stroke",
                    terminal: false,
                    filter: [ TargetType.SPRITE, TargetType.STAGE ],
                    arguments: {
                        FONTSIZE: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 24
                        }
                    },
                    category: "CSS"
                  },
                  {
                    opcode: 'random',
                    blockType: Scratch.BlockType.REPORTER,
                    text: "return random number",
                    terminal: false,
                    filter: [ TargetType.SPRITE, TargetType.STAGE ],
                    category: 'My Category'
                  },
                  {
                    opcode: "webalert",
                    blockType: Scratch.BlockType.COMMAND,
                    text: "alert [MSG]",
                    terminal: false,
                    filter: [ TargetType.SPRITE, TargetType.STAGE ],
                    arguments: {
                        MSG: {
                            type: Scratch.ArgumentType.STRING
                        }
                    },
                    category: 'My Category'
                  }
            ]
        };
    }

    hello({TEXT, CSS}) {
        console.log(`%c${TEXT}`, `${CSS}`);
    }
  
    colorget({COLOR}) {
        return `color:${COLOR}; `
    }
  
    sizeget({FONTSIZE}) {
        return `font-size:${FONTSIZE}px; `
    }
  
    random() {
        return Math.random()
    }
  
    webalert({MSG}) {
        alert(MSG)
    }
    /**
     * implementation of the block with the opcode that matches this name
     *  this will be called when the block is used
     */
    
}

module.exports = Scratch3YourExtension;
