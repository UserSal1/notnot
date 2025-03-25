class HelloWorld {
    getInfo() {
      return {
        id: 'helloworld',
        name: 'JS+',
        color1: '#FF8C1A',
        color2: '#DB6E00',
        blocks: [
          {
            opcode: 'hello',
            blockType: Scratch.BlockType.COMMAND,
            text: 'print and format [TEXT] with CSS style [CSS]',
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
            category: 'My Category'
          },
          {
            opcode: "webalert",
            blockType: Scratch.BlockType.COMMAND,
            text: "alert [MSG]",
            arguments: {
                MSG: {
                    type: Scratch.ArgumentType.STRING
                }
            },
            category: 'My Category'
          }
        ],
      };
    }
  
    hello(args) {
      console.log(`%c${args.TEXT}`, `${args.CSS}`);
    }

    colorget(args) {
        return `color:${args.COLOR}; `
    }

    sizeget(args) {
        return `font-size:${args.FONTSIZE}px; `
    }

    random() {
        return Math.random()
    }

    webalert(args) {
        alert(args.MSG)
    }
}
  
Scratch.extensions.register(new HelloWorld());