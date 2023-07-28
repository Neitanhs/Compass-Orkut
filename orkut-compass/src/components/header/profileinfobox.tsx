import React from 'react';
import styles from './profileinfobox.module.css';
import profileImage from '../../assets/headerAssets/profileinfoimg.jpg'; // Importe a imagem de perfil

interface ProfileInfoBoxProps {
  text: string; // Texto a ser exibido na caixa
}

const ProfileInfoBox: React.FC<ProfileInfoBoxProps> = ({ text }) => {
  return (
    <div className={styles.profileInfoBox}>
      <img src={profileImage} alt="Perfil" className={styles.profileImage} />
      <span className={styles.profileText}>{text}</span>
      <span className={styles.arrowDown}>▼</span>
    </div>
  );
};

export default ProfileInfoBox;