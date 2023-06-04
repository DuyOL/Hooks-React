import { forwardRef, useImperativeHandle, useRef } from 'react'
import video1 from './Videos/Benzema.mp4'

function Video(props, ref) {

    const videoRef = useRef()

    useImperativeHandle(ref, () => ({
        play() {
            videoRef.current.play()
        },
        pause() {
            videoRef.current.pause()
        }
    }))

    return (
        <video
            ref={videoRef}
            src={video1}
            width={980}
            controls
        />
    )
}
export default forwardRef(Video)