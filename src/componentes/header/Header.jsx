import React from "react";
import styles from "./header.module.css";
import Link from "next/link";

export const Header = () => {
  return (
    <div className={styles.header_container}>
      <header className={styles.header}>
        <Link href="/">
          {" "}
          <h1 className={styles.logo}>
            Pajari<span aria-hidden="true">Ando</span>
          </h1>
        </Link>

        <button id="abrir" className={styles.abrir_menu}>
          <i className="bi bi-list"></i>
        </button>
        <nav id="nav" className={styles.nav_} aria-label="Main navigation">
          <ul className={styles.nav_list}>
            <li>
              <Link href="/nosotros">Quienes Somos</Link>
            </li>
            <li>
              <Link href="/aves">Aves</Link>
            </li>
            <li>
              <Link href="/especies">Especies</Link>
            </li>
            <li>
              <Link href="/avistamiento">Avistamiento</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};
