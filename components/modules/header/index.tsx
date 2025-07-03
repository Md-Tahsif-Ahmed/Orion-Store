// Header.tsx
'use client'; 

import MainMenu from "./MainMenu";
import Menus from "./Menus";
import SocialMenu from "./SocialMenu";

export default function Header() {
  return (
    <header>
      <SocialMenu className="hidden lg:block" />
      <MainMenu />
      <Menus />
    </header>
  );
}
