import { Fragment, useContext, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import { CartContext } from "../../contexts/CartContext";
import { signOutUser } from "../../utils/firebase/firebase";
import NDLogo from '../../assets/natures-delight-logo_180x180.jpg'
import CartIcon from "../../components/CartIcon/CartIcon";
import CartDropdown from "../../components/CartDropdown/CartDropdown";
import './navigation.scss'

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { cartIsOpen } = useContext(CartContext);

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to='/'>
          <img className="logo" src={NDLogo} />
        </Link>
        <div className="nav-links">
          <Link className="nav-link" to='/gallery'>GALLERY</Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>SIGN OUT</span>
          ) : (
            <Link className="nav-link" to='/auth'>SIGN IN</Link>
          )}
          <CartIcon />
        </div>
        {cartIsOpen && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  );
}

export default Navigation;