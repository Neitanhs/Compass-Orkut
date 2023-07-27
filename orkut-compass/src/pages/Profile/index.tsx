import React from 'react';
import "./styles.module.css"
import FriendsCard from '../../components/Cards/FriendsCard';

interface ProfileProps {
  
}

const Profile: React.FC<ProfileProps> = () => {
  return (
    <div>
      Profile
      <FriendsCard />      
    </div>
  );
};

export default Profile;