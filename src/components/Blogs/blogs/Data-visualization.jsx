import React from 'react'
import Heading from '../../Heading/Heading';
import BLogList from '../bloglist.json'
import AllBlog from '../AllBlog'
function Blog1() {
    return (
        <div>
              <>
            <Heading genre={BLogList[1].date} blogtag={BLogList[1].category} title={BLogList[1].name}/>
            <div className=" blogWrap row">
            <div className="mainBlog col-md-8">
                <div className="blogImage blogpageImage">
                    <img src="https://venngage-wordpress.s3.amazonaws.com/uploads/2020/06/What-is-Data-Visualization-Blog-Header.jpg" alt=""/>
                </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum dignissimos ipsam non voluptas itaque consequuntur nulla veniam molestiae distinctio ipsum unde vero at reprehenderit debitis repudiandae magnam aliquid aliquam tenetur nostrum voluptatem, expedita autem fugit. Enim qui quisquam dolorem quam dignissimos dolore porro! Et voluptates ipsa saepe sapiente illo. Fugiat!</p>    

            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil, cum ullam reprehenderit, corporis nesciunt unde officiis ratione nulla a, repudiandae nobis? Eius vitae placeat doloribus eum ratione. Delectus tenetur error expedita ex itaque dolore, tempora doloribus dolor perspiciatis mollitia eum porro sint minima deserunt assumenda aperiam repellat optio deleniti. Est deleniti qui magni saepe repudiandae, corporis minima repellendus perferendis ea blanditiis? Ipsa repudiandae eaque ut sunt dolores dicta reiciendis incidunt.</p>
            <section className="blogimagerow row">
            <div className="blogImg col-md-6" >
                <img src="https://online.stanford.edu/sites/default/files/styles/figure_default/public/2019-10/computer-science-data-visualization_CS448B.jpg?itok=JCfk6I7Q" className="col-lg-12 img-fluid" alt=""/>
            </div>
            <div className="blogImg col-md-6" >
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHkxrRbFPtdsSYmP4A3FJtom6kEeYvJT8U2A&usqp=CAU" className="col-lg-12 img-fluid" alt=""/>
            </div>
            </section>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro expedita eum labore doloribus cum non. Harum illo ducimus ad porro! Minus voluptates fugiat velit sequi culpa quidem, quia neque, reprehenderit voluptate eos labore est natus recusandae ut delectus fugit cumque consequuntur sed quisquam tenetur. Quia blanditiis nostrum animi sed nihil.</p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda ducimus nemo, corrupti ratione quidem sed voluptate, a in voluptatum quae rerum. Recusandae placeat quis nemo vitae sapiente quas dolor eligendi, incidunt blanditiis sunt vero quae ut accusantium doloremque in! Vel, mollitia optio eaque veniam maiores vero voluptatem atque aliquam fuga veritatis ab molestiae esse sed magnam distinctio, nam saepe sapiente! Provident temporibus doloribus, at nulla neque dicta facilis velit reiciendis rem aut, ab quidem, nemo molestiae? Pariatur exercitationem sapiente repudiandae.
            </p>
                
                
            </div> 

           
            <div className="sideBar col-md-3">
            <AllBlog/>
            </div>
             </div>
        </>
        </div>
    )
}

export default Blog1
