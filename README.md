# vas-gaming-engine
This is a JavaScript gaming engine I am developing.


This project may not look like much right now but I plan to keep editing it and improving upon it. I plan to have the engine simplify game development for js/canvas, allow developers to create in both 2d(like platforming games) and 3d-ish(like original zelda games), and be usable for developers both experienced and beginners.

Currently the engine simplifies shape creation(Rectangles, Circles, Lines, and Backgrounds), and allows sprite importing. I plan to release updates that allow more shapes, loops, animationd, tilemaps, and more.

# Current Docs

- This project is very much in development. I will be moving into another branch at some point but wanted to update the current documentation.

```js

/*
 * Creating a gameArea / Canvas:
 */
Vas.createCanvas(<style>);


/*
 * Style must be an object:
 */
Vas.createCanvas({style:"border: 1px solid #333; box-shadow: 0 0 16px 2px rgba(0,0,0,1);"})

/*
 * Initialize the gameArea
 */
Vas.init();

/*
 * Creating a GameObject (currently only shapes.rect exists, will add more soon)
 * METHOD: GameObject.shapes.rect( x, y, width, height, OPTIONAL: color);
 * color defaults to black.
 */
var rect = GameObject.shapes.rect( 100, 100, 100, 150, 'blue');

/*
 * You can change the mass of the object as it will currently be affected by gravity. Default = 1
 */
rect.mass = 0;

/*
 * Starts the game Loop
 */
Vas._FixedUpdate();

```


# Updates

- I am starting to work on this project again after a long break.
- Currently, I am trying to model the engine similar to that of the Unity Engine, i.e. having multiple scenes, being able to apply various properties to game objects, and being able to write custom scripts for objects.
- Eventually, I would like to create some sort of 'editor' which runs on the engine, but will have UI to simplify the process

Please stay tuned for more updates to this project.
