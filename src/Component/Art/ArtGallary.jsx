import React from 'react'
import './ArtGallary.css'
import Navbar from '../Navbar/Navbar'

const ArtGallary = () => {
    return (
        <div>
            <Navbar button_name={'SignUp'} />
            <div className="side-nav2 vis2">
                <div className="logo">
                    <a href="/artgallary"><svg id="Logo" xmlns="http://www.w3.org/2000/svg" width="133.744" height="160.494" viewBox="0 0 144.744 197.494">
                        <path id="Path_197" data-name="Path 197" d="M-64.21,151.723,7.151,10.11h0l4.535-7.644,3.4,8.384,3.887,13.708,50.066,175.4L8.648,32.654-64.21,151.723ZM80.533,30.444c-.493-.493-106.122,83.679-106.862,83.433-.493-.247,7.048-19.42,5.322-19.42C-21.007,94.457,81.026,30.938,80.533,30.444Z" transform="translate(64.21 -2.466)" fill="#fff" />
                    </svg></a>
                </div>
                <div className="nav-con2" id="cool">
                    
                    <a href="index.php"><img alt='' id="home" src="https://img.icons8.com/fluency/64/000000/home.png" /> Home</a>
                    <a href="/"><img alt='' src="https://img.icons8.com/color/48/000000/adobe-illustrator--v2.png" /> Adobe Illustrater</a>
                    <a href="/"><img alt='' src="https://img.icons8.com/color/48/000000/adobe-xd--v1.png" /> Adobe XD</a>
                    <a href="/"><img alt='' src="https://img.icons8.com/color/48/000000/adobe-photoshop--v1.png" /> Adobe Photoshop</a>
                    <a href="/"><img alt='' src="https://img.icons8.com/fluency/48/000000/vector.png" /> Vector Art</a>
                    <a href="/"><img alt='' id="asprite" src="https://img.icons8.com/dusk/64/000000/aseprite.png" /> Pixel Art</a>
                    <a href="/photos"><img alt='' src="https://cdn.iconscout.com/icon/free/png-256/apple-photos-493155.png" /> Images</a>
                </div>
            </div>

            {/* content------------------------------- */}


            <div className="artgallary-home-main_div">
                <div className="tranparent">
                    <div className="container head">
                        <div className="Art_section">
                            <h1>Art Section</h1>
                        </div>
                    </div>
                    <div className="container ">
                        <div className="row">
                            <div className="description col-5 offset-1">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro nam inventore, nobis voluptatem praesentium alias nulla odit rem dicta aspernatur delectus necessitatibus architecto quasi? Voluptatem alias ea nobis minus odio.
                                Velit voluptates accusamus ab, obcaecati nihil quaerat! Corporis rem ratione laboriosam tempore eligendi eum nostrum repellat, a sapiente atque, sequi ipsum, delectus quasi accusantium vitae enim modi quibusdam? Sint, tenetur.
                                Earum voluptate iusto tempore non
                            </div>

                            <div className="description col-5">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro nam inventore, nobis voluptatem praesentium alias nulla odit rem dicta aspernatur delectus necessitatibus architecto quasi? Voluptatem alias ea nobis minus odio.
                                Velit voluptates accusamus ab, obcaecati nihil quaerat! Corporis rem ratione laboriosam tempore eligendi eum nostrum repellat, a sapiente atque, sequi ipsum, delectus quasi accusantium vitae enim modi quibusdam? Sint, tenetur.
                                Earum voluptate iusto tempore non

                            </div>
                        </div>
                    </div>
                </div>

                <div className="area">
                    <div className="row content">
                        <div className="col-lg-3 col-sm-6 images">
                            <img src="https://d138zd1ktt9iqe.cloudfront.net/media/seo_landing_files/file-istockphoto-859550894-170667a-1600430313.jpg" alt="" />
                            <img src="https://imgeng.jagran.com/images/2021/may/moon1621498496944.jpg" alt="" />
                            <img src="https://cdn.pixabay.com/photo/2018/10/30/16/06/water-lily-3784022__480.jpg" alt="" />
                            <img src="https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg" alt="" />
                        </div>
                        <div className="col-lg-3 col-sm-6 images  ">
                            <img src="https://1.bp.blogspot.com/-HbEjZs4pwg0/X1U1_i8j0BI/AAAAAAAAeD8/hLM-HqXbU9Itej60RvfqkbsJwOwM1GeXACLcBGAsYHQ/s1600/flower%2Bimages%2Bwhatsapp%2Bdp%2B%25281%2529.jpeg" alt="" />

                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTmNCXR1dknjfuSMWfcHO9QK8AZTfPE1Hc7GrTcNCZtK2bPKJFnA16T60dERm9TEgpjRA&usqp=CAU" alt="" />
                        </div>
                        <div className="col-lg-3 col-sm-6 images  ">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTmNCXR1dknjfuSMWfcHO9QK8AZTfPE1Hc7GrTcNCZtK2bPKJFnA16T60dERm9TEgpjRA&usqp=CAU" alt="" />
                            <img src="https://i.pinimg.com/originals/83/64/66/83646654668bf9ae412f45bb2e417ddf.jpg" alt="" />

                        </div>
                        <div className="col-lg-3 col-sm-6 images  ">
                            <img src="https://www.w3schools.com/w3css/img_lights.jpg" alt="" />
                            <img src="https://www.whatsappimages.in/wp-content/uploads/2021/04/Beautiful-Nice-Whatsapp-Dp-Images.jpg" alt="" />
                            <img src="https://images.unsplash.com/photo-1471879832106-c7ab9e0cee23?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZGV3fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" alt="" />
                            <img src="https://www.lovesove.com/wp-content/uploads/2017/02/Alone-Sad-Girls-Desktop-Pictures-Lovesove.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="foot">
                <div className="row footer">
                    <div className="col-3">
                        <h5>Feedback</h5>
                        <p>abc@example.com</p>
                    </div>
                    <div className="col-3">
                        <h5>Contact</h5>
                        <p>Webnart.help@google.com</p>
                    </div>
                    <div className="col-3 social">
                        <a href="/"><img alt='' src="https://img.icons8.com/fluency/48/000000/instagram-new.png" /></a>
                        <a href="/"><img alt='' src="https://img.icons8.com/fluency/48/000000/facebook.png" /></a>
                        <a href="/"><img alt='' src="https://img.icons8.com/color/48/000000/twitter.png" /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ArtGallary