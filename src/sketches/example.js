export const sketch = function(p) {
  p.setup = function() {
    p.createCanvas(p.windowWidth, p.windowHeight)
    p.noStroke()
  }

  p.draw = function() {
    p.background(255)
    var colorOfCircle = p.map(p.mouseX, 0, p.width, 0, 255)
    p.fill(colorOfCircle)
    p.ellipse(p.mouseX, p.mouseY, 60, 60)
  }
}
