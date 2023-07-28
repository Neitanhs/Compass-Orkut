import React from 'react';
import style from "./styles.module.css";
import ProfileCard from '../../components/Profile/ProfileCard';
import ButtonEditProfile from '../../components/Profile/ButtonEditProfile';
import ProfileBio from '../../components/Profile/ProfileBio';

interface ProfileProps {
  
}

const Profile: React.FC<ProfileProps> = () => {
  const HandleEdit = () => {
    console.log('Soon');
  }

  return (
    <div className={style.Container}>
      <div className={style.ContainerCard}>
        <ProfileCard Name='Iuri Silva' RelationshipStatus='Solteiro' Country='Brasil' />
        <ButtonEditProfile Text='Editar meu perfil' onClick={HandleEdit} />
      </div>
      <div className={style.ContainerCard}>
          <ProfileBio Name='Iuri Silva' Bio='Programar sem café é igual poeta sem poesia' />
      </div>
    </div>
  );
};

export default Profile;