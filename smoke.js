function Smoke(x, y, color) {
    this.x = x;
    this.y = y;
    this.id = "smoke";
    this.color = color;
    this.fragments = [];
    this.age = 0;
    this.lifeSpan = 60;
    this.expended = false;
    for (let i = 0; i < floor(random(5, 10)); i++) {
        this.fragments.push({x: this.x += random(-5, 5), y: this.y += random(-5, 5), speed: random(3, 6)});
    }
}

Smoke.prototype.show = function() {
    noStroke();
    fill(this.color);
    for (let i = 0; i < this.fragments.length; i++) {
        ellipse(this.fragments[i].x, this.fragments[i].y, 3);
        this.fragments[i].y -= this.fragments[i].speed;
        this.fragments[i].x += noise(this.age / 100 + i) * 10 - 5;
    }
    this.age++;
    if (this.age > this.lifeSpan) {
        this.expended = true;
    }
};