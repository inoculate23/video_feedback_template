   const video2 = document.getElementById('video2');

const Video = {
  element:null,
  hasPermissions: false,
  async init() {
  
    const video = document.createElement('video');
    video.style.display = 'none'
    document.body.appendChild( video )
    return await Video.start( video )
  },



     // Video = video
     // Video.hasPermissions = true
      // note that one is lowercase and we need both!
const stream = video2.captureStream();
video.srcObject = stream;
    
      Video.srcObject = stream
      await video2.play()
      return true
    }else{
      console.warning( 'No video feed / webcam detected.' )
      return false
    }
  }
}

export default Video
