import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import './navigation-styles.scss';
import BasketIcon from '../../components/basket-icon/basket-icon-component';
import BasketDropdown from '../../components/basket-dropdown/basket-dropdown-component';
import { BasketContext } from '../../contexts/basket-context';

const Navigation = () => {
  const { isBasketOpen } = useContext(BasketContext);
  return (
    <Fragment>
      <div className='navbar'>
        <Link className='logo-container' to='/'>
          <Logo className='logo' />
        </Link>
        <div className='nav-link-container'>
          <Link className='nav-link' to='/shop'>
            SHOP
          </Link>
          <Link className='nav-link' to='/sign-in'>
            SIGN IN
          </Link>
          <BasketIcon />
        </div>
        {isBasketOpen && <BasketDropdown />}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
