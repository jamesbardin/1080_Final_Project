class Pendulum {
  constructor(l) {
    this.bob = createVector()
    this.origin = createVector(width / 2, 0)
    this.len = l;
    this.angle = PI / 4;
    this.angleV = 0.03;
    this.angleA = 0.01;
    this.gravity = 0.5;
    this.size = 12;
    this.c = "#000000";
    this.colormod1 = 0;
    this.colormod2 = 255;
    this.colormod3 = 255;
    this.fill = fill('rgba(' + this.colormod1 + ',' + this.colormod3 + ',' + this.colormod2 + ', 0.75)');
  }


  display() {
    stroke(this.c)
    strokeWeight(2);
    line(this.origin.x, this.origin.y, this.bob.x, this.bob.y)
    strokeWeight(1);
    circle(this.bob.x, this.bob.y, this.size)
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
    this.fill = fill('rgba(' + 255 + ',' + this.colormod3 + ',' + this.colormod2 + ', 0.75)');

    // attempt at making colors slowly change, issues is it updates ALL self attr. 
    // if (this.colormod1 < 240) {
    //   this.colormod1 += 5;
    // }
    // else {
    //   this.colormod1 -= 5;
    // }
    // if (this.colormod2 < 240) {
    //   this.colormod2 += 9;
    // }
    // else {
    //   this.colormod2 -= 9;
    // }
    // if (this.colormod3 < 230) {
    //   this.colormod3 += 16;
    // }
    // else {
    //   this.colormod3 -= 16;
    // }
    // // this.updateColor()
    // this.fill = fill('rgba(' + this.colormod1 + ',' + this.colormod3 + ',' + this.colormod2 + ', 0.75)');
    
  }
  
  notPlayed() {
    this.c = "#000000";
    this.fill = fill('rgba(' + this.colormod1 + ',' + this.colormod3 + ',' + this.colormod2 + ', 0.75)'); 
  }
}