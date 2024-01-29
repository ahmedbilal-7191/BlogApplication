import React, { useEffect, useState } from 'react'
import appwriteService from "../appwrite/config";
import { Container, PostCard } from '../components'
import landingimg from "../components/images/blog-side.png"
import { useNavigate } from 'react-router-dom';
function Home() {
    const [posts, setPosts] = useState([])
    const navigate=useNavigate();

    useEffect(() => {
        appwriteService.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [])

    if (posts.length === 0) {
        return (
            <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <div className="flex flex-wrap">
                        <div className='w-full my-10 flex flex-col '>
                            <h1 className=' text-6xl mx-auto my-2'>Publish your passions, your way</h1>
                            <p className=' text-3xl mx-auto my-2'>Create a unique and beautiful blog easily.</p>
                            <button className='bg-indigo-500 mx-auto my-2 p-3 rounded hover:bg-white' onClick={() => navigate("/login")}>Create your blog</button>
                        </div>



                        <div className="p-2 w-6/5   mx-auto sm:w-1/2  ">

                            <h1 className='text-5xl  font-bold text-left'>
                                Create a blog.
                            </h1>
                            <p className='my-2 text-left '>
                                Share your story with the world.
                                Stand out with a professionally-designed
                                blog website that can be customized to fit your brand.
                                Build, manage, and promote your blog with Squarespace’s
                                built-in suite of design and marketing tools.
                            </p>
                            
                            <h1 className="text-2xl font-bold hover:text-gray-500 sm:text-left" onClick={() => navigate("/login")} >
                                Login to read posts
                            </h1>
                        </div>

                        <div className='sm:w-1/2 '>
                            <img width={700} height={300} src={landingimg} alt='landimg' />
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
    return (
        
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-full md:w-1/2'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Home