import React from 'react';
import styles from './header.module.css';
import logo from '../../assets/headerAssets/orkutlogo.png';
import SearchBox from './searchbox';
import ProfileInfoBox from './profileinfobox';

const HeaderProfile: React.FC = () => {
    return (
        <header className={styles.header}>
            <div className={styles.content}>
                <img className={styles.logoimg} src={logo} alt="Logo do Site" />
                <nav className={styles.links}>
                    <a href="/">Início</a>
                    <a href="/perfil">Perfil</a>
                    <a href="/communities">Comunidades</a>
                    <a href="/games">Jogos</a>
                </nav>
                <SearchBox />
                <ProfileInfoBox text="Iuri Silva" />
            </div>
        </header>
    );
};

export default HeaderProfile;