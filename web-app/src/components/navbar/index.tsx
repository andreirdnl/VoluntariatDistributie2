import style from './style.module.css'
import { ReactComponent as SVGLogo } from '../../assets/doli-logo-v2b.svg' 
import avatar from "../../assets/avatar.png"

export const Navbar: view = ({
}) => {
  return (
    <nav className={style.navbar}>
      <div className={style.logo}><SVGLogo/></div>
      <div className={style.profile}>
        <div role="group">
          <div className={style.name}>Daciana Alexandrescu</div>
          <ul className={style.actions}>
            <li><a href="#">Cursele mele</a></li>
            <li><a href="#">Profilul meu</a></li>
            <li><a href="#">Delogare</a></li>
          </ul>
        </div>
        <div className={style.avatar}>
          <img src={avatar} alt="avatar"/>
        </div>
      </div>
    </nav>
  )
};
