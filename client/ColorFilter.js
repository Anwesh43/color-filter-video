class ColorFilter {
    constructor(src,color,img) {
        this.img = img
        this.video = document.createElement('video')
        this.video.src = src
        this.video.autoplay = true
        this.video.height = window.innerHeight
        this.video.width = window.innerWidth
        this.color = color
        this.canvas = document.createElement('canvas')
        this.canvas.width = this.video.width
        this.canvas.height = this.video.height
        this.context = this.canvas.getContext('2d')
        this.video.loop = true
    }
    drawFilter() {
        this.context.clearRect(0,0,this.canvas.width,this.canvas.height)
        this.context.drawImage(this.video,0,0,this.canvas.width,this.canvas.height)
        this.context.globalAlpha = 0.5
        this.context.fillStyle = this.color
        this.context.fillRect(0,0,this.canvas.width,this.canvas.height)
    }
    renderVideo() {
        setInterval(()=>{
          this.drawFilter()
          const dataUrl = this.canvas.toDataURL()
          this.img.src = dataUrl
        },100)
    }
}
