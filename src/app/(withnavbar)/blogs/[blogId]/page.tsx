import { BiDislike, BiLike, BiPaint } from 'react-icons/bi'
import '../../../../css/blogs/singleBlog.css'
import dummy from '../../../../../public/assets/login-page.jpeg'
import Image from 'next/image'
import { BsFillEyeFill } from 'react-icons/bs'

const page = ({ params }: { params : { blogId: string }}) => {

    return (
        <div className='singleBlog-details'>
            
            <div className='header-container'> 
                <h1 className='blog-header'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quas libero recusandae nobis, harum unde.{params?.blogId}</h1>
            </div>

            <div className="image-container">
                <Image className='blog-image' src={dummy} alt="" />
            </div>

            <div className="about-blog">
                
                <div className="author-info">
                    <h1 className="author-name">md mahfuz anam tasnim</h1>
                    <h1 className="author-email">mahfuz.ta09@gmail.com</h1>
                    <h1 className="author-email">published: 22/12/2222</h1>
                    <h1 className="author-email">edited</h1>
                </div>
                
                <div className="blog-react">
                    <div className="like">
                        <BiLike className='checked-like'/>
                        <p>300</p>
                    </div>
                    <div className="like">
                        <BiDislike className='checked-dislike'/>
                        <p>300</p>
                    </div>
                </div>

            </div>

            <div className="blog-section">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi sequi odit consequatur, 
                    quasi sed aspernatur est quisquam unde aliquam non laudantium. Expedita, autem velit ipsa reiciendis, 
                    veritatis nam sapiente fugiat dignissimos atque veniam eligendi quo, totam cum animi magnam 
                    exercitationem id sunt quisquam itaque sint enim fugit ut quia tenetur? Est optio architecto odit 
                    quia velit porro aliquam voluptas corrupti adipisci possimus, ea ab consectetur corporis eligendi 
                    voluptatibus pariatur natus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi sequi odit consequatur, 
                    quasi sed aspernatur est quisquam unde aliquam non laudantium. Expedita, autem velit ipsa reiciendis, 
                    veritatis nam sapiente fugiat dignissimos atque veniam eligendi quo, totam cum animi magnam 
                    exercitationem id sunt quisquam itaque sint enim fugit ut quia tenetur? Est optio architecto odit 
                    quia velit porro aliquam voluptas corrupti adipisci possimus, ea ab consectetur corporis eligendi 
                    voluptatibus pariatur natus.
                </p>
            </div>

            <div className="blog-section">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi sequi odit consequatur, 
                    quasi sed aspernatur est quisquam unde aliquam non laudantium. Expedita, autem velit ipsa reiciendis, 
                    veritatis nam sapiente fugiat dignissimos atque veniam eligendi quo, totam cum animi magnam 
                    exercitationem id sunt quisquam itaque sint enim fugit ut quia tenetur? Est optio architecto odit 
                    quia velit porro aliquam voluptas corrupti adipisci possimus, ea ab consectetur corporis eligendi 
                    voluptatibus pariatur natus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi sequi odit consequatur, 
                    quasi sed aspernatur est quisquam unde aliquam non laudantium. Expedita, autem velit ipsa reiciendis, 
                    veritatis nam sapiente fugiat dignissimos atque veniam eligendi quo, totam cum animi magnam 
                    exercitationem id sunt quisquam itaque sint enim fugit ut quia tenetur? Est optio architecto odit 
                    quia velit porro aliquam voluptas corrupti adipisci possimus, ea ab consectetur corporis eligendi 
                    voluptatibus pariatur natus.
                </p>
            </div>

            <div className="blog-section">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi sequi odit consequatur, 
                    quasi sed aspernatur est quisquam unde aliquam non laudantium. Expedita, autem velit ipsa reiciendis, 
                    veritatis nam sapiente fugiat dignissimos atque veniam eligendi quo, totam cum animi magnam 
                    exercitationem id sunt quisquam itaque sint enim fugit ut quia tenetur? Est optio architecto odit 
                    quia velit porro aliquam voluptas corrupti adipisci possimus, ea ab consectetur corporis eligendi 
                    voluptatibus pariatur natus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi sequi odit consequatur, 
                    quasi sed aspernatur est quisquam unde aliquam non laudantium. Expedita, autem velit ipsa reiciendis, 
                    veritatis nam sapiente fugiat dignissimos atque veniam eligendi quo, totam cum animi magnam 
                    exercitationem id sunt quisquam itaque sint enim fugit ut quia tenetur? Est optio architecto odit 
                    quia velit porro aliquam voluptas corrupti adipisci possimus, ea ab consectetur corporis eligendi 
                    voluptatibus pariatur natus.
                </p>
            </div>

            <div className="blog-section">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi sequi odit consequatur, 
                    quasi sed aspernatur est quisquam unde aliquam non laudantium. Expedita, autem velit ipsa reiciendis, 
                    veritatis nam sapiente fugiat dignissimos atque veniam eligendi quo, totam cum animi magnam 
                    exercitationem id sunt quisquam itaque sint enim fugit ut quia tenetur? Est optio architecto odit 
                    quia velit porro aliquam voluptas corrupti adipisci possimus, ea ab consectetur corporis eligendi 
                    voluptatibus pariatur natus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi sequi odit consequatur, 
                    quasi sed aspernatur est quisquam unde aliquam non laudantium. Expedita, autem velit ipsa reiciendis, 
                    veritatis nam sapiente fugiat dignissimos atque veniam eligendi quo, totam cum animi magnam 
                    exercitationem id sunt quisquam itaque sint enim fugit ut quia tenetur? Est optio architecto odit 
                    quia velit porro aliquam voluptas corrupti adipisci possimus, ea ab consectetur corporis eligendi 
                    voluptatibus pariatur natus.
                </p>
            </div>

            
            <div className="visite-info">
                    <h1>Visited : 1219</h1>
                    <BsFillEyeFill /> 
            </div>

        </div>
    )
}

export default page