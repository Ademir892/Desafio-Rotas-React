import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";

export default function Produtos() {
  return (
    <>
      <main>
        <section>
          <div className="search-bar section-home">
            <NavLink to="computers" className={({isActive}) => isActive ? "menu menu-active" : "menu"}><p>Computadores</p></NavLink>
            <NavLink to="eletronics" className={({isActive}) => isActive ? "menu menu-active" : "menu"}><p>Eletrônicos</p></NavLink>
            <NavLink to="books" className={({isActive}) => isActive ? "menu menu-active" : "menu"}><p>Livros</p></NavLink>
          </div>
        </section>
        <Outlet />
      </main>
    </>
  );
}
