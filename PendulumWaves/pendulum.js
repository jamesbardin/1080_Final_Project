class Pendulum {
  constructor(l) {
    this.bob = createVector()
    this.origin = createVector(width / 2, 0)
    this.len = l;
    this.angle = PI / 4;
    this.angleV = 0.0;
    this.angleA = 0.01;
    this.gravity = 0.5;
    this.size = 6;
    this.c = "#000000";
    this.colormod1 = 0;
    this.colormod2 = 255;
    this.colormod3 = 255;
    // this.fill = fill('rgba(' + this.colormod1 + ',' + this.colormod3 + ',' + this.colormod2 + ', 0.75)');
    this.fill = fill(0, 100, 100);
    this.m = 360;
    this.up = false;
  }

  display() {
    stroke(this.c)
    strokeWeight(2);
    line(this.origin.x, this.origin.y, this.bob.x, this.bob.y)
    strokeWeight(1);
    circle(this.bob.x, this.bob.y, this.size)
    fill(this.m,100,255)
  }

  update() {
    let force = this.gravity * sin(this.angle);
    this.angleA = (-0.75 * force) / this.len;

    this.angleV += this.angleA;
    this.angle += this.angleV;
    this.bob.x = this.len * sin(this.angle) + this.origin.x;
    this.bob.y = this.len * cos(this.angle) + this.origin.y;
  }
  
  played() {
    this.c = "#ff0000";
    
    if (this.m < 10){
      this.up = true;
    }
    else if (this.m > 340) {
      this.up = false;
    }
    if (this.m > -10 && this.up == false){
      this.m -= 10;
    }
    if (this.m < 370 && this.up == true){
      this.m += 10;
    }    
  }
  
  notPlayed() {
    this.c = "#000000";
    // this.fill = fill('rgba(' + this.colormod1 + ',' + this.colormod3 + ',' + this.colormod2 + ', 0.75)'); 
    // this.fill = fill('green')
  }
}