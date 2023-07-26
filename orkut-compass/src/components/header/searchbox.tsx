import React from 'react';
import styles from './searchbox.module.css';
import searchLogo from '../../assets/searchboxlogo.png';

const SearchBox: React.FC = () => {
  return (
    <div className={styles.searchBox}>
      <img src={searchLogo} alt="Logo da Pesquisa" className={styles.searchLogo} />
      <input type="text" placeholder="Digite sua pesquisa" className={styles.searchInput} />
    </div>
  );
};

export default SearchBox;