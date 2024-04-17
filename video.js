const Video = {
  element:null,
  hasPermissions: false,
  async init() {
     const video2 = document.getElementById('video2');
    const video = document.createElement('video');
    video.style.display = 'none'
    document.body.appendChild( video )
    return await Video.start( video )
  },

  async start( element ) {
    let isStreaming = true 
    if (navigator.mediaDevices.getUserMedia) {
      const video = element
      let stream
      try {
        stream = await navigator.mediaDevices.getUserMedia({ video: true })
      } catch {
        console.log( 'stream didnt work' )
        return false
      }

      Video.element = video
      Video.hasPermissions = true
      // note that one is lowercase and we need both!
      video2.srcObject = stream
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
