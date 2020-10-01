window.requestAnimFrame =
  window.requestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.oRequestAnimationFrame ||
  window.msRequestAnimationFrame ||
  function(callback) {
    return window.setTimeout(callback, 1000 / 60);
  };


// class Vas {
//     constructor() {
//         this.args = arguments;
    
//         this.gameArea = {
//             canvas: undefined,
//             width: 512,
//             height: 512,
//             style: "", //border: 1px solid #333; box-shadow: 0 0 16px 2px rgba(0,0,0,1);
//             imageSmoothing: false,
//             dimensions: '2d',
//             appendTo: "body",
//             ctx: undefined,
//             clearFrames: true
//         }
    
//         this.objects = [],
//         this.scenes  = [],
//         this.maps    = [],
//         this.frames  = undefined,
//         this.pen     = "black",
//         this.bucket  = "black"
//         this.ij()
//         this.jquery = $ ? true : false;

        
//         //this.self.jquery =
//     }
//     ij() {
//         let script = `<script src='https://code.jquery.com/jquery-3.5.1.min.js' type='text/javascript'></script>`
//         document.getElementsByTagName('head')[0].insertAdjacentHTML('afterbegin', script);
//         this.jquery = $ ? true : false;
//     }
//     appendTo() {

//     }
//     createCanvas(object = {}) {
        
//         if(typeof object !== "object") {
//             console.error(`Vas.create() cannot be of data type ${typeof object}.`)
//         }
//         else {
//             let str = ""
//             Object.keys(object).forEach(o => {
//                 if(object[o] && this.gameArea[o] !== undefined) {
                    
//                     this.gameArea[o] = object[o]
//                 }
//                 else if(object[o] && this.gameArea[o] == undefined) {
                   
//                     str += `${o},`
//                 }
//             })
//             if(str !== "") {
//                 console.warn(`Vas.create paramaters do not need arguments: ${str.substring(0, str.length - 1)}`)
//             }
            
//             if(!object.canvas) {
                
//                 if(this.gameArea.appendTo == "body") {
//                     $('body').append(`<canvas id='vas-canvas' style='${this.gameArea.style || ""}'></canvas>`)
//                     this.gameArea.canvas = 'vas-canvas'
//                 }
//                 else {
//                     if(document.getElementById(this.gameArea.appendTo).length > 0) {
//                         $(`#${this.gameArea.appendTo}`).append(`<canvas id='vas-canvas' style='${this.gameArea.style || ""}'></canvas>`)
//                         this.gameArea.canvas = 'vas-canvas'
//                     }
//                     else if(document.getElementsByTagName(this.gameArea.appendTo).length > 0) {
//                         $(this.gameArea.appendTo).append(`<canvas id='vas-canvas' style='${this.gameArea.style || ""}'></canvas>`)
//                         this.gameArea.canvas = 'vas-canvas'
//                     }
//                     else {
//                         let el = `<canvas id='vas-canvas' style='${this.gameArea.style || ""}'></canvas>`
//                         this.gameArea.canvas = 'vas-canvas'
//                         this.gameArea.appendTo.appendChild(el)
//                     }
//                 }
//                 let canvas = 'vas-canvas'
//             }
//             else {
//                 let canvas = object.canvas
//             }
//             return this;
//         }
//     }
//     link(string = "") {
//         if(typeof string !== "string") {
//             console.error("Vas.link currently does not accept data types other than string")
//         }
//         else {
            
//             if(string.charAt(0) == '#' || string.charAt(0) == '.') {
//                 if($(`${string}`).length == 1) {
//                     if(string.charAt(0) == '#') {
//                         this.gameArea.canvas = string.substring(1, string.length)
//                     }
//                     else {
                        
//                         $(`${string}`).attr('id', 'vas-canvas')
//                         this.gameArea.canvas = 'vas-canvas'
//                     }
//                 }
//                 else {
//                     console.error("Multiple Classes/ID's match '" + string.substring(1, string.length) + "'")
//                 }
//             }
//             else {
//                 if($(`#${string}`).length == 1) {
//                     this.gameArea.canvas = string
//                 }
//             }
//         }
//     }
//     setStyle() {
//         if(arguments.length == 1 && typeof arguments === 'object') {

//         }
//         else if(arguments.length == 1 && typeof arguments === 'string') {

//         }
//         else if(arguments.length == 2 && typeof arguments[0] === 'string' && typeof arguments[1] === "string") {

//         }
//     }
//     assign(name) {
//         //console.log()
//     }

//     newScene() {
//         let s = new Scene()
//         this.scenes.push(s)
//     }

//     init() {
//         if(this.gameArea.canvas) {
            
//             let c = document.getElementById(this.gameArea.canvas);
//             //console.log(c.length)
//             c.width = this.gameArea.width
//             c.height = this.gameArea.height
//             this.gameArea.ctx = c.getContext('2d')
//         }
//         else {
//             console.warn('Canvas not init')
//         }
//     }
//     _loop() {
//         //console.log(this)
//         if(this.gameArea.clearFrames) this.gameArea.ctx.clearRect(0, 0, this.gameArea.width, this.gameArea.height)
//         this._drawObjs()

//         window.requestAnimFrame(this._loop.bind(this))
//     }
//     start() {
//         this._loop()
//     }

//     _drawObjs() {
//         this.objects.forEach(obj => {
//             if(obj.type == 'shape') {
//                 if(obj.name == 'rect') {
//                     //console.log('ok')
//                     this.gameArea.ctx.fillStyle = obj.color
//                     this.gameArea.ctx.fillRect(obj.x, obj.y, obj.w, obj.h)
//                 }
//             }
//         })
//     }


//     get shapes() {
//         return new Shapes(this.gameArea, this.pen, this.bucket, this.objects)
//     }
//     get stroke() {
//         return new Stroke(this.gameArea, this.pen, this.bucket)
//     }
// }

class Scene {
    constructor() {
        this.objects = [];
    }

}

// class Shapes {
//     constructor(gameArea, pen, bucket, objects) {
//         this.gameArea = gameArea
//         this.pen = pen
//         this.bucket = bucket
//         this.objects = objects
//     }
//     rect(x, y, w, h, color = undefined) {

//         let obj = {
//             type: "shape",
//             name: "rect",
//             x: x,
//             y: y,
//             w: w,
//             h: h,
//             color: color ? color : this.bucket
//         }
//         this.objects.push(obj)
//         //this.gameArea.ctx.fillStyle = color ? color : this.bucket
//         //this.gameArea.ctx.fillRect(x, y, w, h)
//         //this.gameArea.ctx.fillStyle = this.bucket
//         return this;
//     }
//     circle(x, y, r, color = undefined) {
//         this.gameArea.ctx.fillStyle = color ? color : this.bucket
//         this.gameArea.ctx.arc(x, y, r, 0, 2*Math.PI, false)
//         this.gameArea.ctx.fill()
//         this.gameArea.ctx.fillStyle = this.bucket
//         return this;
//     }
//     poly(x, y, N, size, color = undefined) {
//         this.gameArea.ctx.fillStyle = color ? color : this.bucket
//         this.gameArea.ctx.strokeStyle = color ? color : this.bucket;
//         this.gameArea.ctx.beginPath();
//         this.gameArea.ctx.moveTo (x + size * Math.cos(0), y + size *  Math.sin(0));
        
//         for (var i = 1; i <= N; i += 1) {
//           this.gameArea.ctx.lineTo (x + size * Math.cos(i * 2 * Math.PI / N), y + size * Math.sin(i * 2 * Math.PI / N));
//         }

        
//         this.gameArea.ctx.lineWidth = 1;
//         this.gameArea.ctx.stroke();
//         this.gameArea.ctx.save();
        
//         this.gameArea.ctx.fill();
//         this.gameArea.ctx.restore();
//         return this;
//     }
// }

// class Stroke {
//     constructor(gameArea, pen, bucket) {
//         this.gameArea = gameArea
//         this.pen = pen
//         this.bucket = bucket
        
//     }
//     rect(x, y, w, h, color = undefined) {
//         this.gameArea.ctx.strokeStyle = color ? color : this.pen
//         this.gameArea.ctx.strokeRect(x, y, w, h)
//         this.gameArea.ctx.strokeStyle = this.pen
//         return this;
//     }
//     circle(x, y, r, color = undefined) {
//         this.gameArea.ctx.strokeStyle = color ? color : this.pen
//         this.gameArea.ctx.arc(x, y, r, 0, 2*Math.PI, false)
//         this.gameArea.ctx.stroke()
//         this.gameArea.ctx.strokeStyle = this.pen
//         return this;
//     }
//     poly(x, y, N, size, color = undefined) {
//         this.gameArea.ctx.fillStyle = color ? color : this.bucket
//         this.gameArea.ctx.strokeStyle = color ? color : this.pen;
//         this.gameArea.ctx.beginPath();
//         this.gameArea.ctx.moveTo (x + size * Math.cos(0), y + size *  Math.sin(0));
        
//         for (var i = 1; i <= N; i += 1) {
//           this.gameArea.ctx.lineTo (x + size * Math.cos(i * 2 * Math.PI / N), y + size * Math.sin(i * 2 * Math.PI / N));
//         }

        
//         this.gameArea.ctx.lineWidth = 1;
//         this.gameArea.ctx.stroke();
//         this.gameArea.ctx.save();
        
//         //this.gameArea.ctx.fill();
//         this.gameArea.ctx.restore();
//         return this;
//     }
// }

//Returns true if it is a DOM node
function isNode(o){
  return (
    typeof Node === "object" ? o instanceof Node :
    o && typeof o === "object" && typeof o.nodeType === "number" && typeof o.nodeName==="string"
  );
}

//Returns true if it is a DOM element
function isElement(o){
  return (
    typeof HTMLElement === "object" ? o instanceof HTMLElement : //DOM2
    o && typeof o === "object" && o !== null && o.nodeType === 1 && typeof o.nodeName==="string"
);
}




var Vas = {
    gameArea: {
        canvas: undefined,
            width: 512,
            height: 512,
            style: "", //border: 1px solid #333; box-shadow: 0 0 16px 2px rgba(0,0,0,1);
            imageSmoothing: false,
            dimensions: '2d',
            appendTo: "body",
            ctx: undefined,
            clearFrames: true
    },
    objects : {},
    scenes  : [],
    maps    : [],
    frames  : undefined,
    pen     : "black",
    bucket  : "black",
    jquery  : $ ? true : false,
    //camera: Object.assign({}, Camera),
    
    addGameObject(gameObject) {
      let _self = this;
      if(typeof gameObject === 'object') {
        let type = gameObject.object ? (gameObject.object.type ? gameObject.object.type : "NO_OBJECT_TYPE" ) : "UNDEFINED_OBJECT_TYPE";
        
        if(type == "UNDEFINED_OBJECT_TYPE" || type == "NO_OBJECT_TYPE") {
          return console.error("Error at VAS.addGameObject(<GameObject>) => <GameObject>.object.type was not defined. This usually results from an error in initializing a GameObject.")
        }
        
        
        if(_self.objects[type]) {
          
          for(var i = 0; i < Object.keys(_self.objects).length; i++) {
            if(_self.objects[Object.keys(_self.objects)[i]].object.type && _self.objects[Object.keys(_self.objects)[i]].object.type == type) {
              if(!_self.objects[`${type}_${i + 1}`]) {
                _self.objects[`${type}_${i + 1}`] = gameObject
                i=0;
                return;
              }
            }
          }
        }
        else {
          _self.objects[`${gameObject.object.type}`] = gameObject
        }
        
        
      }
    },
    
    test: function() {

    },
    createCanvas: function(object = {}) {
        
        if(typeof object !== "object") {
            console.error(`Vas.create() cannot be of data type ${typeof object}.`)
        }
        else {
            let str = ""
            Object.keys(object).forEach(o => {
                if(object[o] && this.gameArea[o] !== undefined) {
                    
                    this.gameArea[o] = object[o]
                }
                else if(object[o] && this.gameArea[o] == undefined) {
                   
                    str += `${o},`
                }
            })
            if(str !== "") {
                console.warn(`Vas.create paramaters do not need arguments: ${str.substring(0, str.length - 1)}`)
            }
            
            if(!object.canvas) {
                
                if(this.gameArea.appendTo == "body") {
                    $('body').append(`<canvas id='vas-canvas' style='${this.gameArea.style || ""}'></canvas>`)
                    this.gameArea.canvas = 'vas-canvas'
                }
                else {
                    if(document.getElementById(this.gameArea.appendTo).length > 0) {
                        $(`#${this.gameArea.appendTo}`).append(`<canvas id='vas-canvas' style='${this.gameArea.style || ""}'></canvas>`)
                        this.gameArea.canvas = 'vas-canvas'
                    }
                    else if(document.getElementsByTagName(this.gameArea.appendTo).length > 0) {
                        $(this.gameArea.appendTo).append(`<canvas id='vas-canvas' style='${this.gameArea.style || ""}'></canvas>`)
                        this.gameArea.canvas = 'vas-canvas'
                    }
                    else {
                        let el = `<canvas id='vas-canvas' style='${this.gameArea.style || ""}'></canvas>`
                        this.gameArea.canvas = 'vas-canvas'
                        this.gameArea.appendTo.appendChild(el)
                    }
                }
                let canvas = 'vas-canvas'
            }
            else {
                let canvas = object.canvas
            }
            return this;
        }
    },
    link: function(string = "") {
        if(typeof string !== "string") {
            console.error("Vas.link currently does not accept data types other than string")
        }
        else {
            
            if(string.charAt(0) == '#' || string.charAt(0) == '.') {
                if($(`${string}`).length == 1) {
                    if(string.charAt(0) == '#') {
                        this.gameArea.canvas = string.substring(1, string.length)
                    }
                    else {
                        
                        $(`${string}`).attr('id', 'vas-canvas')
                        this.gameArea.canvas = 'vas-canvas'
                    }
                }
                else {
                    console.error("Multiple Classes/ID's match '" + string.substring(1, string.length) + "'")
                }
            }
            else {
                if($(`#${string}`).length == 1) {
                    this.gameArea.canvas = string
                }
            }
        }
    },
    newScene: function() {
        let s = new Scene()
        this.scenes.push(s)
    },
    init: function() {
        if(this.gameArea.canvas) {
            
            let c = document.getElementById(this.gameArea.canvas);
            //console.log(c.length)
            c.width = this.gameArea.width
            c.height = this.gameArea.height
            this.gameArea.ctx = c.getContext('2d')
            Camera.main.position = {
                x: c.width / 2,
                y: c.height / 2
            }
        }
        else {
            console.warn('Canvas not init')
        }
    },
    _loop: function() {
        //console.log(this)
        if(this.gameArea.clearFrames) this.gameArea.ctx.clearRect(0, 0, this.gameArea.width, this.gameArea.height)
        this._drawObjs()

        window.requestAnimFrame(this._loop.bind(this))
    },
    _FixedUpdate:function() {
        let self = this;
        this.gameArea.ctx.clearRect(0, 0, this.gameArea.width, this.gameArea.height)
        
        if(Object.keys(self.objects).length > 0) {
          
          for(var i = 0; i < Object.keys(self.objects).length; i++) {
            let _objname = (Object.keys(self.objects)[i])
            let _obj = self.objects[_objname];
            if(_obj.Draw) {
              _obj.Draw(self.gameArea.ctx)
            }
            if(_obj.Update) {
              _obj.Update()
            }
          }
          
        }
        
        window.requestAnimFrame(this._FixedUpdate.bind(this))
    },
    start: function() {
        this._loop()
    },

    _drawObjs: function() {
        this.objects.forEach(obj => {
            if(obj.type == 'shape') {
                if(obj.name == 'rect') {
                    //console.log('ok')
                    this.gameArea.ctx.fillStyle = obj.color
                    this.gameArea.ctx.fillRect(obj.x, obj.y, obj.w, obj.h)
                }
            }
        })
    }
}
if(!Vas.jquery) {
    let script = `<script src='https://code.jquery.com/jquery-3.5.1.min.js' type='text/javascript'></script>`
    document.getElementsByTagName('head')[0].insertAdjacentHTML('afterbegin', script);
    Vas.jquery = $ ? true : false;
}

var Shape = {
    gameArea: Vas.gameArea,
    pen: Vas.gameArea.pen,
    bucket: Vas.gameArea.bucket,
    position: {
        x: 0,
        y: 0
    },
    stroke: {
        rect: function() {

        }
    },
    rect: function(x, y, w, h, c) {
        var self = this;
        if(x !== undefined && y !== undefined && w !== undefined && h !== undefined) {
            return {
                
                color: c ? self.bucket = c : self.bucket,
                mass: 1,
                position: {x, y},
                dimensions: {w, h},
                object: {
                    type: 'rect',
                    other: []
                },
                velocity: {
                    x: 0,
                    y: 0
                },
                Physics: Object.assign({}, GameObject.Physics),
                
                Draw: function(ctx = Vas.gameArea.ctx) {
                  let _self = this;
                  ctx.fillStyle = this.color
                  ctx.fillRect(_self.position.x, _self.position.y, _self.dimensions.w, _self.dimensions.h)
                  ctx.fillStyle = "black"
                },
                Update: function() {
                  let _self = this;
                  if(_self.Physics.ExperiencesGravity) {
                    _self.velocity = {
                      x: _self.velocity.x,
                      y: 9.81 * (_self.mass)
                    }
                  }
                  _self.position = {
                    x: _self.position.x + _self.velocity.x,
                    y: _self.position.y + _self.velocity.y
                  }
                }
                
                
            }
            // let color = c ? self.bucket = c : self.bucket;
            // Vas.gameArea.ctx.fillStyle = self.bucket
            // Vas.gameArea.ctx.fillRect(x, y, w, h)
        }
        else {
            console.error("Shapes.rect missing arguments 'x, y, w, h'")
        }
    }
}
var GameObject = {
    shapes: Object.assign({}, Shape),
    position: {
        x: 0,
        y: 0
    },
    velocity: {
      x:0,
      y:0
    },
    Physics: {
      ExperiencesGravity: true
    }
}

var Camera = {
    main: {
        position: {
            x: 0,
            y: 0
        },
        velocity: {
            x: 0,
            y: 0,
        }
    },
    addForce: function() {
        if(arguments.length < 1) {
          return console.error("No arguments supplied")
        }
        else if(arguments.length == 1) {
          
        }
    },
    mass: 1
}

