import { useState } from 'react'
import styles from './nav/nav.css';



function NavBar() {


  // adding the states 
  const [isActive, setIsActive] = useState(false);


  //add the active class
  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };


  //clean up function to remove the active class
  const removeActive = () => {
    setIsActive(false)
  }

   let num = 10;
   {
    console.log(num);
    let num=20;
   }


  return (
    <div className="App">
      <header className="App-header">


        <nav className={`${styles.navbar}`}>


          {/* logo */}
          <a href='#home' className={`${styles.logo}`}>Dev </a>


          <ul className={`${styles.navMenu} ${isActive ? styles.active : ''}`}>
            <li onClick={removeActive}>
              <a href='#home' className={`${styles.navLink}`}>Home</a>
            </li>
            <li onClick={removeActive}>
              <a href='#home' className={`${styles.navLink}`}>Catalog</a>
            </li>
            <li onClick={removeActive}>
              <a href='#home' className={`${styles.navLink}`}>All products</a>
            </li>
            <li onClick={removeActive}>
              <a href='#home' className={`${styles.navLink}`}>Contact</a>
            </li>
          </ul>


          <div className={`${styles.hamburger} ${isActive ? styles.active : ''}`}  onClick={toggleActiveClass}>
            <span className={`${styles.bar}`}></span>
            <span className={`${styles.bar}`}></span>
            <span className={`${styles.bar}`}></span>
          </div>
        </nav>


      </header>
    </div>
  );
}


export default NavBar;      