/// <reference path="../node_modules/@types/p5/global.d.ts" />

function setup() {
  createCanvas(600, 800)

  angleMode(DEGREES);
  
  loadFont("/p5/assets/")
}

const circleX = 150
const circleY = 150
const circleR = 100

function draw() {
  background(220)

  fill('black')
  text(`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam laoreet, dolor a tincidunt accumsan, neque felis luctus enim, vel tempor nunc dui ac nisl. Praesent at purus id dui consequat pretium at eget arcu. Curabitur ac finibus quam. Curabitur consectetur est et faucibus ullamcorper. Sed fermentum ligula ac ipsum facilisis, non finibus sapien vulputate. Integer nec turpis sem. Pellentesque eleifend neque vitae libero laoreet, vel dictum sapien blandit.`,
    300, 300, 250)

  const angle = frameCount % 360

  const pointX = cos(angle) * circleR
  const pointY = sin(angle) * circleR


  noFill()
  strokeWeight(2)
  circle(circleX, circleY, 2 * circleR)
  circle(circleX + pointX, circleY + pointY, 10)
  circle(circleX, circleY + pointY, 10)

  circle(circleX + circleR, circleY + pointY, 10)
  circle(circleX + circleR + 275, circleY + sin(550 + angle) * circleR, 10)
  line(circleX, circleY - circleR, circleX, circleY + circleR)

  circle(circleX + pointX, circleY + circleR, 10)
  circle(circleX + cos(400 + angle) * circleR, circleY + circleR + 200, 10)
  line(circleX - circleR, circleY, circleX + circleR, circleY)

  noFill()
  strokeWeight(2)
  beginShape()
  for (let i = 0; i < 550; i++) {
    vertex(circleX + circleR + i / 2, circleY + sin(i + angle) * circleR)
  }
  endShape()

  beginShape()
  for (let i = 0; i < 400; i++) {
    vertex(circleX + cos(i + angle) * circleR, circleY + circleR + i / 2)
  }
  endShape()

}


