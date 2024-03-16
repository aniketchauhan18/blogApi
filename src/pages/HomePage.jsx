import { Link } from 'react-router-dom';
import blog from '../assets/blog.svg' 

function HomePage() {
  return (
    <div className='home-parent'>
      <main>
        <img 
          src={blog}
        />
        <div>
          <p>
            Discover fresh perspectives. From insightful articles to practical tips, we've got you covered.
          </p>
          <div>
            <Link to={'/posts'} className='blogs-link'>Blogs</Link>
          </div>
        </div>
      </main>
    </div>
  )
}

export default HomePage;