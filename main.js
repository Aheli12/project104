Webcam.set({
    height: 500,
    width: 500,
    image_format: 'png' ,
    png_quality: 90
});

camera = document.getElementById("camera");

Webcam.attach("#camera");

function take_snapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id="output" src="' + data_uri + '"/>';
    });
}

console.log("ml5version:", ml5.version);

v1 = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/7WoezVcVk/model.json', v3);

function v3() {
    console.log("model is loaded");
}

