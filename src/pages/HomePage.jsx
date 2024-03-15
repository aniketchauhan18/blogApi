import { Link } from 'react-router-dom';
import blog from '../assets/blog.svg' 

function HomePage() {
  return (
    <div className='home-parent'>
      <div className="heading-parent">
        <header className="heading">
          BOOO-LAA-LAAA
        </header>
      </div>
      <main>
        <img 
          src={blog}
        />
        <div>
          <p>
            Discover fresh perspectives. From insightful articles to practical tips, we've got you covered.
          </p>
        <div>
          <Link to={'/posts'} className='blogs-link'>BLOGS</Link>
        </div>
        </div>
      </main>
      <footer>
        <p>
          Upper dekho ya to reels dekho 
        </p>
      </footer>
    </div>
  )
}

export default HomePage;