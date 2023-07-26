import React from 'react';
import styles from './header.module.css';
import logo from '../../assets/orkutlogo.png';
import SearchBox from './searchbox';

const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <div className={styles.content}>
                <img className={styles.logoimg} src={logo} alt="Logo do Site" />
                <nav className={styles.links}>
                    <a href="/">Início</a>
                    <a href="/sobre">Perfil</a>
                    <a href="/servicos">Comunidades</a>
                    <a href="/contato">Jogos</a>
                </nav>
                <SearchBox />
            </div>
        </header>
    );
};

export default Header;