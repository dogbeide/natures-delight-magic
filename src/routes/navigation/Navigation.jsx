import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import NDLogo from '../../assets/natures-delight-logo_180x180.jpg'
import './navigation.scss'

const Navigation = () => (
  <Fragment>
    <div className="navigation">
      <Link className="logo-container" to='/'>
        <img className="logo" src={NDLogo} />
      </Link>
      <div className="nav-links">
        <Link className="nav-link" to='/gallery'>GALLERY</Link>
      </div>
    </div>
    <Outlet />
  </Fragment>
)

export default Navigation;