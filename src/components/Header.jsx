import { Link } from "react-router-dom"

function Header() {
  return (
    <div className="header1">
      <Link to={'/'} className="heading-parent">
        <header className="heading">
          BOOO-LAA-LAAA
        </header>
      </Link>
      <hr />
    </div>
  )
}

export default Header