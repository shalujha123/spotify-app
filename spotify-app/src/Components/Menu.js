import React, { useEffect } from "react";

const Menu = ({ title, menuObject }) => {
  useEffect(() => {
    const allLi = document
      .querySelector(".menuContainer ul")
      .querySelectorAll("li");

      // we can not use fat arrow function here must use normal function while firing event function
      function changeMenuActive() {
        allLi.forEach((n) => n.classList.remove('active'));
        this.classList.add('active');
      }

      allLi.forEach((n) => n.addEventListener('click', changeMenuActive))
  }, []);

  return (
    <div className="menuContainer">
      <p className="title">{title}</p>
      <ul>
        {menuObject &&
          menuObject.map((menu) => {
            const { id, icon, name } = menu;
            return (
              <li key={id}>
                <a href="#">
                  <i>{icon}</i>
                  <span>{name}</span>
                </a>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Menu;
