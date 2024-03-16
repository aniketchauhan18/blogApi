import { Link } from 'react-router-dom';
import blog from '../assets/blog.svg' 

function HomePage() {
  return (
    <div className='home'>
      {/* <Link to={'posts'} className='blogs-link'>
        See Blogs
      </Link> */}
      <div>
        At BOOO-LAA-LAAA, we are passionate about nothing. Our mission is to sleep
      </div>
      <Link to={'posts'} className='blogs-link'>
        See Blogs
      </Link>
      
    </div>
  )
}

export default HomePage;