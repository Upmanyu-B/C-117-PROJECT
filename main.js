
function startClassification()
{
    microphone.toggel();
    ml5.startClassification('https://teachablemachine.withgoogle.com/models/iGWbqFSzl/'model.json, modelReady);
}

function modelReady
{
  if( microphone == ml5.startClassification())
    {
        classifier.classify()
        gotResults()
    }

}

function gotResult()
{
    console.error( 'got result');
}