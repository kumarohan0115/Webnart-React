import './webtempletupload.css'

const WebTempletsupload = () => {
  return (
    <>
      <div className="upload_dev_content">
        <h2>Upload Templet</h2>
        <hr />
        <div className='upload_inputField'>
          <label htmlFor="">Choose Templet File</label>
          <input type="file" placeholder='Upload Templet or Thumbnail'/>
        </div>
      </div>
    </>
  )
}

export default WebTempletsupload