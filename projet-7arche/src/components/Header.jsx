import { Link } from 'react-router-dom'
import { useState } from 'react';

export default function Header() {
    const [ isBurgerMenuActive, setIsBurgerMenuActive] = useState<boolean>(false);
    const [ isChecked, setIsChecked] = useState<boolean>(false);

    function toggleMenu() {
        const menuContainer = document.getElementById('menuContainer');
        const navBarContainer = document.getElementById('navBarContainer');

if (menuContainer) {
    menuContainer.style.transform = isBurgerMenuActive
      ? 'translateX(100%)'
      : 'translateX(0%)';
  }
  if (navBarContainer) {
    navBarContainer.style.backgroundColor = isBurgerMenuActive
      ? '#FFF'
      : '#dc1818';
  }
  setLogoUrl(
    isBurgerMenuActive ? '/public/logo.png' : '/public/logo.png',
  );

  setIsChecked(!isChecked);
  setIsBurgerMenuActive(!isBurgerMenuActive);
}

return (
  <>
    <NavBar id="navBarContainer">
      <NavLayout>
        {/* <Link to="/">
          <Logo alt="Askbob" src={logoUrl} />
        </Link> */}
        <BurgerBtn htmlFor="check" id="checkLabel">
          <input
            type="checkbox"
            id="check"
            checked={isChecked}
            onChange={toggleMenu}
          />
          <span />
          <span />
          <span />
        </BurgerBtn>
        <NavigationMenu>
          <MenuElement>
            <NavLink to="/accueil">Accueil</NavLink>
          </MenuElement>
          <MenuElement>
            <NavLink to="/connection">Se connecter</NavLink>
          </MenuElement>
        </NavigationMenu>
      </NavLayout>
    </NavBar>
    <BurgerMenu className="mobile-menu" id="menuContainer">
      <MenuElement onClick={() => toggleMenu()}>
        <Link to="/accueil">Accueil</Link>
      </MenuElement>
      <MenuElement onClick={() => toggleMenu()}>
        <Link to="/connection">Se connecter</Link>
      </MenuElement>
    </BurgerMenu>
  </>
);
}






