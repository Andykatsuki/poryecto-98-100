var SpeechRecognition = window.webkitSpeechRecognition;
var Content;
var recognition = new SpeechRecognition();

function start()
{
    recognition.start();
} 


camera = document.getElementById("camera");
Webcam.set({
    width:500,
    height:400,
    image_format : 'jpeg',
    jpeg_quality:90
});



function speak(){

    
    var synth = window.speechSynthesis;
    Webcam.attach(camera);

    speak_data = "Tomando la próxima selfie en 5 segundos";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
 
function setTimeout()
{
    image_id ="selfie1";
    take_snaphot();
    speak_data="tomando la proxima selfie en 10 segundos";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
}
function setTimeout()
{
    image_id ="selfie2";
    take_snaphot();
    speak_data="tomando la proxima selfie en 20 segundos";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
}

}
function take_snaphot()
{
    console.log(image_id);

    webcam.snap(function(data_uri){
        if(image_id=="selfie1")
        {
            document.getElementById("result1").innerHTML='<img id="selfie1" src="'+data_uri+'"/>';
        }
    })
}