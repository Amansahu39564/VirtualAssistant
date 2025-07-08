const btn = document.querySelector('.talk')
const content = document.querySelector('.content')

function speak (text){
const text_speak = new SpeechSynthesisUtterance(text);
text_speak.rate = 1;
text_speak.volume = 1;
text_speak.pitch = 1;

window.speechSynthesis.speak(text_speak);
}
function wishMe(){
 var day = new Date();
 var hour = day.getHours();

 if(hour>=0 && hour<12){
    speak("Good morning Boss...");
 }

 else if(hour>12 && hour<17){
    speak("Good afternoon Sir...");
 }

  else{
    speak("Good Evening Master...");
 }
}
window.addEventListener('load',()=>{
 speak("hello I am JEEVAN....");
 wishMe();
});

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const  recognition = new  SpeechRecognition();
 recognition.onresult = (event)=>{
    const currentIndex = event.resultIndex;
    const transcript = event.results[currentIndex][0].transcript;
    content.textContent = transcript;
    takeCommand(transcript.toLowerCase());
 }
 btn.addEventListener('click',()=>{
  content.textContent = "Listening....."
  recognition.start();

 });


 function takeCommand(message){
    if(message.includes('hey')||message.includes('hello')){
        speak("Hello sir ,How May Help you? ..");
    }
    
else if(message.includes("open google")){
    window.open("https://www.google.com/");
    speak("Opening Google ....");
}
else if(message.includes("open youtube")){
    window.open("https://www.youtube.com/");
    speak("Opening youtube ....");
}
else if(message.includes("open instagram")){
    window.open("https://www.instagram.com/");
    speak("Opening instagram ....");
}
else if(message.includes("open facebook")){
    window.open("https://www.facebook.com/");
    speak("Opening facebook ....");
}

else if(message.includes("open amazon")){
    window.open("https://www.amazon.com/");
    speak("Opening amazon ....");
}
else if(message.includes("open flipkart")){
    window.open("https://www.flipkart.com/");
    speak("Opening flipkart ....");
}
else if(message.includes("open meesho")){
    window.open("https://www.meesho.com/");
    speak("Opening meesho ....");
}
else if(message.includes("open chatgpt")){
    window.open("https://chatgpt.com/");
    speak("Opening chatGPT ....");
}

else if(message.includes("play")) {
    const song = message.replace("play", "").trim();
    speak(`Playing ${song} on YouTube`);
    window.open(`https://www.youtube.com/results?search_query=${message}`, "_blank");
}
else if(message.includes("your name")) {
    speak("My name is JEEVAN, your virtual assistant.");
}
else if(message.includes("your boss name")) {
    speak("My boss name is Aman Sahu , who made");
}
else if(message.includes("where is your boss")) {
    speak("My boss from Narsinghpur in Madhya Pradesh");
}
 else if(message.includes('what is') || message.includes('who is') || message.includes('what are')) {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "This is what i found on internet regarding " + message;
	    speak(finalText);
  
    }

    else if(message.includes('wikipedia')) {
        window.open(`https://en.wikipedia.org/wiki/${message.replace("wikipedia", "")}`, "_blank");
        const finalText = "This is what i found on wikipedia regarding " + message;
        speak(finalText);
    }

    else if(message.includes('time')) {
        const time = new Date().toLocaleString(undefined, {hour: "numeric", minute: "numeric"})
        const finalText = time;
        speak(finalText);
    }

    else if(message.includes('date')) {
        const date = new Date().toLocaleString(undefined, {month: "short", day: "numeric"})
        const finalText = date;
        speak(finalText);
    }

    else if(message.includes('open calculator')) {
        window.open('Calculator:///')
        const finalText = "Opening Calculator";
        speak(finalText);
    }

    else {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "I found some information for " + message + " on google";
        speak(finalText);
    }
}

















// const btn = document.querySelector('.talk')
// const content = document.querySelector('.content')


// function speak(text){
//     const text_speak = new SpeechSynthesisUtterance(text);

    // text_speak.rate = 1;
    // text_speak.volume = 1;
    // text_speak.pitch = 1;

//     window.speechSynthesis.speak(text_speak);
// }

// function wishMe(){
//     var day = new Date();
//     var hour = day.getHours();

//     if(hour>=0 && hour<12){
//         speak("My boss is Aman... tell me how can help you")
//     }

//     else if(hour>12 && hour<17){
//         speak("Good Afternoon Master...")
//     }

//     else{
//         speak("Good Evenining Sir...")
//     }

// }

// window.addEventListener('load', ()=>{
//     speak("Hello i am chitti (human Robot)..");
//     wishMe();
// });

// const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

// const recognition =  new SpeechRecognition();

// recognition.onresult = (event)=>{
//     const currentIndex = event.resultIndex;
//     const transcript = event.results[currentIndex][0].transcript;
//     content.textContent = transcript;
//     takeCommand(transcript.toLowerCase());

// }

// btn.addEventListener('click', ()=>{
//     content.textContent = "Listening...."
//     recognition.start();
// })

// function takeCommand(message){
//     if(message.includes('hey') || message.includes('hello')){
//         speak("Hello Sir, How May I Help You?");
//     }
//     else if(message.includes("open google")){
//         window.open("https://google.com", "_blank");
//         speak("Opening Google...")
//     }
//     else if(message.includes("open youtube")){
//         window.open("https://youtube.com", "_blank");
//         speak("Opening Youtube...")
//     }
//     else if(message.includes("open facebook")){
//         window.open("https://facebook.com", "_blank");
//         speak("Opening Facebook...")
//     }

//     else if(message.includes('what is') || message.includes('who is') || message.includes('what are')) {
//         window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
//         const finalText = "This is what i found on internet regarding " + message;
// 	    speak(finalText);
  
//     }

//     else if(message.includes('wikipedia')) {
//         window.open(`https://en.wikipedia.org/wiki/${message.replace("wikipedia", "")}`, "_blank");
//         const finalText = "This is what i found on wikipedia regarding " + message;
//         speak(finalText);
//     }

//     else if(message.includes('time')) {
//         const time = new Date().toLocaleString(undefined, {hour: "numeric", minute: "numeric"})
//         const finalText = time;
//         speak(finalText);
//     }

//     else if(message.includes('date')) {
//         const date = new Date().toLocaleString(undefined, {month: "short", day: "numeric"})
//         const finalText = date;
//         speak(finalText);
//     }

//     else if(message.includes('calculator')) {
//         window.open('Calculator:///')
//         const finalText = "Opening Calculator";
//         speak(finalText);
//     }

//     else {
//         window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
//         const finalText = "I found some information for " + message + " on google";
//         speak(finalText);
//     }
// }