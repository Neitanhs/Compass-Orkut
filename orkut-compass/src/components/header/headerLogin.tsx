import React from 'react';
import styles from './header.module.css';
import logo from '../../assets/headerAssets/orkutlogo.png';

const HeaderLogin: React.FC = () => {
    return (
        <header className={styles.header}>
            <div className={styles.contentLogin}>
                <img className={styles.logoimg} src={logo} alt="Logo do Site" />
                <nav className={styles.links}>
                    <a href="/">Sobre o Orkut</a>
                    <a href="/">Centro de Segurança</a>
                </nav>
            </div>
        </header>
    );
};

export default HeaderLogin;