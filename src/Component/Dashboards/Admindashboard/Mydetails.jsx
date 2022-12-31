import './mydetails.css'

const Mydetails = () => {
  return (
    <div id='admin_mydetails'>
        <div className=" admin_mydetails_div admin_username">
          <label htmlFor="username">UserName</label>
          <input className='form-control' type="text" name='adminUsername' maxLength={30} minLength={8}  placeholder='Username' />
        </div>
        <hr />
        <div className=" admin_mydetails_div website">
          <label htmlFor="admin_website">Website</label>
          <input className='form-control' type="text"  name='adminWebsite' maxLength={30} minLength={8}  placeholder='Website' />
        </div>
        <hr />
        <div className=" admin_mydetails_div your_bio">
          <label htmlFor="Your_bio">Your Bio</label>
          <input className='form-control' type="text" name='adminBio'  maxLength={300} placeholder='Add a short Bio...'/>
        </div>
        <hr />
        <div className=" admin_mydetails_div designation">
          <label htmlFor="Designation">Designation</label>
          <input className='form-control' type="text" name='adminDesignation' placeholder='Designation' />
        </div>
        <hr />
        <div className=" admin_mydetails_div contact">
          <label htmlFor="Email">Email</label>
          <input className='form-control' type="email" name='adminEmail'  placeholder='example@example.com'/>
        </div>
        <hr />
        <div className=" admin_mydetails_div address">
          <label htmlFor="Address">Address</label>
          <input className='form-control' type="email" name='adminAddress'  placeholder='Address'/>
        </div>
    </div>
  )
}

export default Mydetails