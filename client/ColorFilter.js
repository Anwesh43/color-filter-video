class ColorFilter {
    constructor(src,color) {
        this.video = document.createElement('video')
        this.video.src = src
        this.video.width = window.innerHeight
        this.video.height = window.innerWidth
        this.color = color
        this.canvas = document.createElement('canvas')
        this.canvas.width = video.width
        this.canvas.height = video.height
        this.context = this.canvas.getContext('2d')
    }
    drawFilter() {
        this.conext.drawImage(this.video,0,0,this.canvas.width,this.canvas.height)
        this.context.globalAlpha = 1
        this.context.fillStyle = color
        this.context.fillRect(0,0,canvas.width,canvas.height)
    }
}
