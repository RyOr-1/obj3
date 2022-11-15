function preload() {
  img = loadImage("tv.jpg");
}

function setup() {
  canvas = createCanvas(640, 420);
  canvas.center();

  detector = ml5.objectDetector('cocossd', modelLoaded)
  document.getElementById('status').innerHTML = 'Status: Detecting'
}

function draw() {
  document.getElementById('status').innerHTML = 'Status: Objects Detected'
  image(img, 0, 0, 640, 420);
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
  }
}
