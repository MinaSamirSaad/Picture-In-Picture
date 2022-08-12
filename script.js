const video = document.getElementById("video");
const button= document.getElementById("button");

// Prompt to select media stream, pass to Video element , then play
const selectMideaStream=async()=>{
    try{
        const mediaStream= await navigator.mediaDevices.getDisplayMedia();
        video.srcObject= mediaStream
        video.onloadedmetadata=()=>{
            video.play()
        }

    }catch(error){
        // Catch Error here
        console.log('error:',error) 
    }
}


button.addEventListener('click',async()=>{
    // Disable button
    button.disabled=true;
    // Start picture In picture
    await video.requestPictureInPicture();
    // Reset Button
    button.disabled=false;
})
// on Load

selectMideaStream()