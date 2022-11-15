var objArray = []
var width, height, x, y, label, confidence

function preload() {
  img = loadImage("fruits.jpg");
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();

    detector = ml5.objectDetector('cocossd', modelLoaded)
    document.getElementById('status').innerHTML = 'Status: Detecting'
}

function modelLoaded() {
  console.log('CocoSSD is Loaded')
  detector.detect(img, gotResults)
}

function gotResults(error, results) {
  if (error) {
      console.log(error)
  } else {
      console.log(results)
      objArray = results
  }
}

function draw() {
    document.getElementById('status').innerHTML = 'Status: Objects Detected'
    image(img, 0, 0, 640, 420);

    for(var s = 0; s<objArray.length; s++){
        x = objArray[s].x
        y = objArray[s].y
        width = objArray[s].width
        height = objArray[s].height
        confidence = Math.floor(objArray[s].confidence * 100) + "%"
        label = objArray[s].label.toUpperCase()
        fill("#FF0000");
        text(label+"  "+confidence, x+15, y+15);
        noFill()
        stroke('#FF0000')
        rect(x, y, width, height)
    }
}

