class Pendulum {
  constructor(l) {
    this.bob = createVector()
    this.origin = createVector(width / 2, 0)
    this.len = l;
    this.angle = PI / 3;
    this.angleV = 0.0;
    this.angleA = 0.01;
    this.gravity = 1;
    this.size = 26;
    this.c = "#000000";
    // this.colormod1 = 0;
    // this.colormod2 = 255;
    // this.colormod3 = 255;
    // // this.fill = fill('rgba(' + this.colormod1 + ',' + this.colormod3 + ',' + this.colormod2 + ', 0.75)');
    // this.fill = fill(0, 200, 100);
    this.m = 60;
    this.m2 = 100;
    this.up_m = false;
    this.up_m2 = true;
  }

  display() {
    stroke(this.c)
    strokeWeight(2);
    line(this.origin.x, this.origin.y, this.bob.x, this.bob.y)
    //strokeWeight(1);
    circle(this.bob.x, this.bob.y, this.size)
    fill(this.m, 100, this.m2)
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
    this.c = "#FCFF00";

    if (this.m < 10){
      this.up_m = true;
    }
    else if (this.m > 340) {
      this.up_m = false;
    }
    if (this.m > -10 && this.up_m == false){
      this.m -= 10;
    }
    if (this.m < 370 && this.up_m == true){
      this.m += 10;
    }    

    if (this.m2 < 10){
      this.up_m2 = true;
    }
    else if (this.m2 > 340) {
      this.up_m2 = false;
    }
    if (this.m2 > -10 && this.up_m2 == false){
      this.m2 -= 15;
    }
    if (this.m2 < 370 && this.up_m2 == true){
      this.m2 += 20;
    }  
  }
  
  notPlayed() {
    this.c = "#000000";
    // this.fill = fill('rgba(' + this.colormod1 + ',' + this.colormod3 + ',' + this.colormod2 + ', 0.75)'); 
    // this.fill = fill('green')
  }
}