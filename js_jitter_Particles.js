autowatch = 1;
inlets = 3;
outlets = 2;

var lifePoints = 999;
var gameOver = false;

var myWindow = new JitterObject("jit.window", "Particles");

myWindow.floating = 1;

myWindow.size = [700, 700];

myWindow.fsaa = 1;

myWindow.pos = [1000, 100];

myWindow.depthbuffer = 0;

myWindow.idlemouse = 1;


var myRender = new JitterObject("jit.gl.render", "Particles");

myRender.erase_color = [1, 1, 1, 0.7];


var mySketch = new JitterObject("jit.gl.sketch", "Particles");

mySketch.blend_enable = 1;


var Vector = {
	x: 0.0,
	y: 0.0,
	z: 0.0,

	add: function(Vector) {
		this.x += Vector.x;
		this.y += Vector.y;
		this.z += Vector.z;
	}  
};


var globalStick1 = 0;
var globalStick2 = 0;

function msg_int(v){
	if (inlet==1){ 
		if (v > 32760){
	v = v / 187000;
	globalStick1 = v;
}

		else if (v <= 28000){
	v = 0;
	globalStick1 = v;
}

}
	if (inlet==2){ 
		if (v <= 28000){
	v = 0;
	globalStick2 = v;
}

		else if (v > 32760){
	v = ( (v / 187000) * -1)
	globalStick2 = v;
}

}
}

// Particles Array
var pArray = [];

var total = 100;

function draw2() {
	
	pArray.push(new Particle2());
	pArray.push(new Particle3());
	
	for(var i = pArray.length-1; i >= 0; i--) {
		pArray[i].run();
		if(pArray[i].isDead()) {
			pArray.splice(i, 1);
		}
	}
}

function draw3() {
	
}

function draw5() {
	
	pArray.push(new Particle5());

	for(var i = pArray.length-1; i >= 0; i--) {
		pArray[i].run();
		if(pArray[i].isDead()) {
			pArray.splice(i, 1);
		}
	}
}

function draw7() {
	
	pArray.push(new Particle7());

	for(var i = pArray.length-1; i >= 0; i--) {
		pArray[i].run();
		if(pArray[i].isDead()) {
			pArray.splice(i, 1);
		}
	}
}

function Particle2() {
	this.location = Object.create(Vector);

	this.velocity = Object.create(Vector);

	this.acceleration = Object.create(Vector);

	this.location.y = 0.8;

        this.location.x = -0.8;

	this.velocity.x = globalStick1 / 50;
	this.velocity.y = globalStick2 / 50;

	this.lifespan = 255;
};
function Particle3() {
	this.location = Object.create(Vector);

	this.velocity = Object.create(Vector);

	this.acceleration = Object.create(Vector);

	this.location.y = -0.8;

        this.location.x = 0.8;

	this.velocity.x = globalStick2 / 50;
	this.velocity.y = globalStick1 / 50;

	this.lifespan = 255;
};

function Particle5() {
	this.location = Object.create(Vector);

	this.velocity = Object.create(Vector);

	this.acceleration = Object.create(Vector);

	this.location.y = -0.8;
    this.location.x = -0.8;

	this.velocity.x = (Math.random()*2) / 140.0;
	this.velocity.y = (Math.random()*2) / 140.0;

	this.lifespan = 255;
};

function Particle7() {
	this.location = Object.create(Vector);

	this.velocity = Object.create(Vector);

	this.acceleration = Object.create(Vector);

	this.location.y = 0.8;
    this.location.x = 0.8;

	this.velocity.x = (Math.random()* -2) / 140.0;
	this.velocity.y = (Math.random()* -2) / 140.0;

	this.lifespan = 255;
};


Particle2.prototype.update = function () {

    this.location.add(this.velocity);

    this.lifespan -= 2;
};


Particle2.prototype.display = function () {
    mySketch.moveto(this.location.x, this.location.y, this.location.z);
    var alpha = this.lifespan / 255.0;
    mySketch.glcolor(0.9, 0.1, 0.7, alpha);
    mySketch.circle(0.02);
    mySketch.glcolor(0, 0, 0, alpha);
    mySketch.gllinewidth(2);
    mySketch.framecircle(0.02);
};


Particle2.prototype.run = function () {
    this.update();
    this.display();
}


Particle2.prototype.isDead = function () {
    if (this.lifespan < 0.0) {
        return true;
    } else {
        return false;
    }
};

Particle3.prototype.update = function () {

    this.location.add(this.velocity);

    this.lifespan -= 2;
};


Particle3.prototype.display = function () {
    mySketch.moveto(this.location.x, this.location.y, this.location.z);
    var alpha = this.lifespan / 255.0;
    mySketch.glcolor(1, 0.3, 0.2, alpha);
    mySketch.circle(0.02);
    mySketch.glcolor(0, 0, 0, alpha);
    mySketch.gllinewidth(2);
    mySketch.framecircle(0.02);
};


Particle3.prototype.run = function () {
    this.update();
    this.display();
}


Particle3.prototype.isDead = function () {
    if (this.lifespan < 0.0) {
        return true;
    } else {
        return false;
    }
};


Particle5.prototype.update = function () {

    this.location.add(this.velocity);

    this.lifespan -= 2;
};


Particle5.prototype.display = function () {
    mySketch.moveto(this.location.x, this.location.y, this.location.z);
    var alpha = this.lifespan / 255.0;
    mySketch.glcolor(0.3, 0.3, 0.6, alpha);
    mySketch.circle(0.02);
    mySketch.glcolor(0, 0, 0, alpha);
    mySketch.gllinewidth(2);
    mySketch.framecircle(0.02);
};


Particle5.prototype.run = function () {
    this.update();
    this.display();
}


Particle5.prototype.isDead = function () {
    if (this.lifespan < 0.0) {
        return true;
    } else {
        return false;
    }
};

Particle7.prototype.update = function () {

    this.location.add(this.velocity);

    this.lifespan -= 2;
};


Particle7.prototype.display = function () {
    mySketch.moveto(this.location.x, this.location.y, this.location.z);
    var alpha = this.lifespan / 255.0;
    mySketch.glcolor(0.5, 0.7, 0.1, alpha);
    mySketch.circle(0.02);
    mySketch.glcolor(0, 0, 0, alpha);
    mySketch.gllinewidth(2);
    mySketch.framecircle(0.02);
};


Particle7.prototype.run = function () {
    this.update();
    this.display();
}


Particle7.prototype.isDead = function () {
    if (this.lifespan < 0.0) {
        return true;
    } else {
        return false;
    }
};

var myListener = new JitterListener (myWindow.getregisteredname(), pointer);

// create a object for use to control with the mouse
var myWidget = new JitterObject("jit.gl.gridshape","Particles");
myWidget.shape = "sphere";
myWidget.lighting_enable = 1;
myWidget.smooth_shading = 1;
myWidget.scale = [0.02,0.02,0.02];
myWidget.color = [0,0,0,1];
myWidget.blend_enable = 1;
myWidget.position = [0,0,0];

function pointer(event) {

    var x, y, click, alpha;
	alpha = lifePoints / 999;

    if (event.eventname == "mouse") {
        x = event.args[0];
        y = event.args[1];
        click = event.args[2];
        if (click) {
            myWidget.color = [0, 1, 0, alpha];
            myWidget.shape = "shpere";
        }
        else {
            myWidget.color = [0, 0, 1, alpha];
            myWidget.shape = "circle";
        }
        // move our control object to the drawing context's
        // equivalent of where our mouse event occurred:
        myWidget.position = myRender.screentoworld(x, y);
    }
    else if (event.eventname == "mouseidle") {
        x = event.args[0];
        y = event.args[1];
        myWidget.color = [.1, .4, .1, alpha];
        myWidget.position = myRender.screentoworld(x, y);
    }
    else if (event.eventname == "mouseidleout") {
        x = event.args[0];
        y = event.args[1];
        myWidget.color = [1, 1, 1, alpha];
        myWidget.position = myRender.screentoworld(x, y);
    }
}

// don't allow this function to be called from Max
pointer.local = 1;

function noPause() {

	for(var i = pArray.length-1; i >= 0; i--) {
		pArray[i].run();

		if(pArray[i].isDead()) {
			pArray.splice(-i, 1);
			}
		
		var distx = myWidget.position[0] - pArray[i].location.x;
	    var disty = myWidget.position[1] - pArray[i].location.y;

	    // polar distance between the two objects
	    var r = Math.sqrt(distx * distx + disty * disty);
	   
	    // check for collision...
	    if (r < 0.05)
	    {
		pArray[i].lifespan = 0;
		lifePoints = lifePoints - 1;
		outlet(1,1);
	    }
	}
	
	// game over condition
	if ( lifePoints <= 0) {
		gameOver = true;
		outlet(0,1);
};
	
	myRender.erase();

	myRender.drawswap();

	mySketch.reset();
}