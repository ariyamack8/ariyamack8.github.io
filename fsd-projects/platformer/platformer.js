$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();


    // TODO 2 - Create Platforms
 createPlatform(326,685,200,14, " green",300,500,1);
createPlatform(489,567,179,14,"red",300,500,1);
createPlatform(587,438,160,14,"purple",400,600,1);
createPlatform(678,387,150,14,"orange",100,600,1);
createPlatform(486,287,140,14,"yellow",200,300,1);
createPlatform(278,267,130,14,"teal"),700,500,1;
createPlatform(149,227,110,14,"pink",200,600,1);
createPlatform(209,398,103,14,"blue",500,700,1);
createPlatform(100, 210, 100, 14, "orange", 400, 500, 1)


    // TODO 3 - Create Collectables
    createCollectable("database",703,360,0,1,100,300,2);
    createCollectable("diamond", 200, 170, 0,1,100,300,1);
    createCollectable("grace", 490, 539,0,1,100,300,2);
    createCollectable("max",300, 618, 0,1,200,300,2 );
    createCollectable("steve",479,268,0,1,200,405,2 );
    createCollectable("diamond",658, 99, 0, 1, 100, 300, 2);
    // TODO 4 - Create Cannons
createCannon("bottom", 260, 800);
createCannon("right", 300, 290);
createCannon("left", 400,900);  
createCannon("top",700,809);
createCannon("right",700,908);  
createCannon("top",309,609);
createCannon("left",200,698);
createCannon("bottom",700,400);
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
