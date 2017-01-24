// documentation:
// https://github.com/kittykatattack/learningPixi/blob/master/examples/09_movingSprites.html
// https://github.com/kittykatattack/learningPixi#sizenscale
// http://pixijs.github.io/examples/#/basics/basic.js

var renderer = PIXI.autoDetectRenderer(800, 600);
document.body.appendChild(renderer.view);

// create the root of the scene graph
var stage = new PIXI.Container();
    renderer.backgroundColor = 0xffffff;

var count = 0;

// build a rope!
var ropeLength = 918 / 20;

var points = [];

for (var i = 0; i < 20; i++)
{
    points.push(new PIXI.Point(i * ropeLength, 0));
}

var snakeOne = new PIXI.mesh.Rope(PIXI.Texture.fromImage('snake-one.png'), points);
var snakeTwo = new PIXI.mesh.Rope(PIXI.Texture.fromImage('blob.png'), points);
var snakeThree = new PIXI.mesh.Rope(PIXI.Texture.fromImage('snake-one.png'), points);

// snakes
snakeOne.x = -659;

snakeTwo.x = -159;
snakeTwo.y = 59;
snakeTwo.position.set(24, 14);
// snakeTwo.height = 520;
// snakeTwo.width = 300;

snakeThree.x = -659;
snakeThree.y = 69;


// making the snake container
var snakeContainer = new PIXI.Container();
snakeContainer.position.x = 400;
snakeContainer.position.y = 300;

snakeContainer.scale.set(800 / 1100);

stage.addChild(snakeContainer);

// add the snakes to the container
snakeContainer.addChild(snakeOne);
snakeContainer.addChild(snakeTwo);
snakeContainer.addChild(snakeThree);

// start animating
requestAnimationFrame(animate);

function animate() {

    count += 0.1;

    // make the snake
    for (var i = 0; i < points.length; i++) {

        points[i].y = Math.sin((i * 0.5) + count) * 1;

        points[i].x = i * ropeLength + Math.cos((i * 0.3) + count) * 10;

    }
    // render the stage
    renderer.render(stage);
    requestAnimationFrame(animate);
}

