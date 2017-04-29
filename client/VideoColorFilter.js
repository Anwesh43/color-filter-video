class VideoColorFilter {
    constructor(src,color) {
        const img = document.createElement('img')
        this.colorFilter = new ColorFilter(src,color,img)
        document.body.appendChild(img)
    }
    createVideoFilter() {
        this.colorFilter.renderVideo()
    }
}
