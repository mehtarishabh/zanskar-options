import { NavLink, useLocation } from "react-router-dom";
import "./Header.css";

function Header() {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");
  const menuItems = [
    {
      name: "Home",
      link: "",
    },
    {
      name: "Charts",
      link: "charts",
    },
    {
      name: "Contact",
      link: "contact",
    },
  ];

  return (
    <header className="Header">
      <ul className="Header__list">
        {menuItems.map((item, index) => (
          <li key={item.name}>
            <NavLink
              exact={`${item.link === "/"}`}
              to={"/"+item.link}
              alt={item.name.toLowerCase()}
              className={
                "Header__link " +
                (splitLocation[1] === item.link ? "Header__link--active" : "")
              }
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </header>
  );
}

export default Header;
