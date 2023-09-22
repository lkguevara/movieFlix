import {useState, useEffect} from 'react'
import {Modal} from 'antd'
import ReactPlayer  from 'react-player'
import './index.scss'

const ModalVideo = ({videoKey, videoPlataform, isOpen, close}) => {
  console.log(videoKey)
  console.log(videoPlataform)
  const [urlVideo, setUrlVideo] = useState(null)

  useEffect(() => {
    switch(videoPlataform) {
      case "YouTube":
        setUrlVideo(`https://youtu.be/${videoKey}`)
        break
      case "Vimeo":
        setUrlVideo(`https://vimeo.com/${videoKey}`)
        break
      default:
        break
    }
  }, [videoKey, videoPlataform])

  console.log(urlVideo)

  return (
    <div>
        <Modal
            className='modal-video'
            visible={isOpen}
            centered
            onCancel={close}
            footer={false}
        >
            <ReactPlayer 
              url={urlVideo} 
              controls
            />
        </Modal>
    </div>
  )
}

export default ModalVideo