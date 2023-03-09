import insta from "./img/insta.png";
import face from "./img/face.png";
import twiter from "./img/twiter.png";
import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.cuerpo__pie}>
    <section className={styles.cuerpo__pie__texto}>
      <p>
        Rafael Cattini Proyecto CODER<br />Montevideo, Uruguay. Copyright ® -
        2022
      </p>
    </section>
    <section className={styles.cuerpo__pie__redes}>
      <ul>
        <li>
          <a href="" target="_blank"
            ><img width="40px" src={insta} alt="Instagram" />
          </a>
        </li>
        <li>
          <a href="" target="_blank">
            <img src={face} alt="Facebook" width="40px" />
          </a>
        </li>
        <li>
          <a href="" target="_blank"
            ><img src={twiter} alt="Twitter" width="40px" />
          </a>
        </li>
      </ul>
    </section>
  </footer>
  )
}

export default Footer