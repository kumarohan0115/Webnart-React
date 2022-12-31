import './upload.css'

const Upload = () => {
  return (
    <>
      <div className="upload_dev_content">
        <h2>Upload</h2>
        <hr />
        <div className='project_title upload_detail_fields'>
          <label htmlFor="title_of_project"> Title of Project</label>
          <input className='form-control' type="text" placeholder='Give me a Name' />
        </div>
        <hr />
        <div className='upload_inputField'>
          <label htmlFor="">Choose Templet File</label>
          <input  type="file" file-accept="jpg gif jpeg png bmp mp4"  placeholder='Upload Templet or Thumbnail'/>
          
            <li>High Resolution Image(jpg/png/gif)</li>
            <li>Video(mp4,4:3)</li>
            <li> Animated gifs(4:3, 800x600 - 1600x1200)</li>
            <li>Only uploaded Media you can own the rights to</li>
          
        </div>
        <hr />
        <div className='upload_detail_fields'>
          <label htmlFor="about">About</label>
          <input className='form-control' type="text" name="about" id="" placeholder="Write what went into this shot, and anything else you'd like to mention."/>
        </div>
        <hr />
        <div className='upload_detail_fields'>
          <label htmlFor="categories">Category</label>
          <input className='form-control' type="text" name="Category" id="" placeholder='Category of Project'/>
        </div>
        <hr />
        <div className='upload_detail_fields'>
            <button className='btn btn-primary'>Upload</button>          
            <button className='btn btn-light'>Cancel</button>          
        </div>
        
      </div>
    </>
  )
}

export default Upload