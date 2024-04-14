async function loadSound() {
    console.log("Poshlo delo");
    var soundInput = document.getElementById("soundInput");
    var myFormData = new FormData();
    myFormData.append('soundFile', soundInput.files[0]);
    console.log(soundInput);
    console.log(soundInput.files[0]);
    console.log(myFormData);
    // fetch("https://denich4.pythonanywhere.com/file",
    let response = await fetch("https://denich4.pythonanywhere.com/file",
        {
            body: myFormData,
            method: "post"
        });
    let responseText = await response.json();
    console.log(responseText);
    document.getElementById("synth").innerHTML = `Cинтезированный звук - ${String(responseText.Not_Synth)}%, Несинтезированный звук - ${String(responseText.Synth)}% `
    
}
var button1 = document.getElementById('button');
button1.onclick = loadSound; 