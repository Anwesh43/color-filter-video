import ColorFilter from './ColorFilter'
export default class VideoColorFilter {
    constructor(src,color) {
        const img = document.createElement('img')
        const colorFilter = new ColorFilter(src,color,img)
    }
    createVideoFilter() {
        colorFilter.renderVideo()
    }
}
