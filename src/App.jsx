import HomePage from "./pages/HomePage"
import PostPage from "./pages/PostPage"
import Post from "./components/Post"
import { Routes, Route } from "react-router-dom"

function App() {

  return(
    <>
      <div className="heading-parent">
        <header className="heading">
          BOOO-LAA-LAAA
        </header>
      </div>
      <hr />
      <Routes>
        <Route path="/"  element={<HomePage />}/>
        <Route path="/posts" element={<PostPage />}/>
        <Route path="/posts/:id" element={<Post />}/>
      </Routes>
    </>
  )
}

export default App
