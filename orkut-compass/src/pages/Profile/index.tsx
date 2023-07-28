import React from 'react';
import style from "./styles.module.css";
import ProfileCard from '../../components/Profile/ProfileCard';
import ButtonEditProfile from '../../components/Profile/ButtonEditProfile';

interface ProfileProps {
  
}

const Profile: React.FC<ProfileProps> = () => {
  const HandleEdit = () => {
    console.log('Soon');
  }

  return (
    <div className={style.Container}>
      <ProfileCard Name='Iuri Silva' RelationshipStatus='Solteiro' Country='Brasil' />
      <ButtonEditProfile Text='Editar meu perfil' onClick={HandleEdit} />
    </div>  
  );
};

export default Profile;