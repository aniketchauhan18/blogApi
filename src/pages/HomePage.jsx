import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div 
      className='home'
      style={{
        height :'80vh'
      }}
    >
      {/* <Link to={'posts'} className='blogs-link'>
        See Blogs
      </Link> */}
      <div>  
        <div>
          At BOOO-LAA-LAAA , Our mission is LA LA 
        </div>
        <div>
          <Link to={'posts'} className='blogs-link'>
            See Blogs
          </Link>
        </div>
      </div>
      
    </div>
  )
}

export default HomePage;