import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/ButtonLogin";
import LogoSVG from "../../assets/logo/logo.svg";
import { useNavigate } from "react-router-dom";
import styles from "./step2.module.css";

interface RegisterFormData {
  name: string;
  email: string;
  dateOfBirth: string;
  cityState: string;
  password: string;
  selfDescription: string;
  interests: string;
  relationshipStatus: string;
  children: string;
  smokingHabits: string;
  drinkingHabits: string;
  profilePicture: string;
  favoriteMusic: string;
  favoriteMovies: string;
}

const Register: React.FC = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState<RegisterFormData>({
    name: "",
    email: "",
    dateOfBirth: "",
    cityState: "",
    password: "",
    selfDescription: "",
    interests: "",
    relationshipStatus: "",
    children: "",
    smokingHabits: "",
    drinkingHabits: "",
    profilePicture: "",
    favoriteMusic: "",
    favoriteMovies: "",
  });

  const [error, setError] = useState<string>("");

  const handleRegister = () => {
    if (
      !formData.name ||
      !formData.email ||
      !formData.dateOfBirth ||
      !formData.cityState ||
      !formData.password ||
      !formData.selfDescription ||
      !formData.interests ||
      !formData.relationshipStatus ||
      !formData.children ||
      !formData.smokingHabits ||
      !formData.drinkingHabits ||
      !formData.profilePicture ||
      !formData.favoriteMusic ||
      !formData.favoriteMovies
    ) {
      setError("Preencha todos os campos");
      return;
    }

    // Send form data to server
    console.log(formData);

    navigate("/profile");
  };

  return (
    <div className={styles.Container}>
      <div className={styles.Content}>
        <div className={styles.Logo}>
          <img src={LogoSVG} alt="Logo" />
        </div>
        <label className={styles.Label}>Crie sua conta</label>
        <Input
          type="text"
          placeholder="Nome"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <Input
          type="email"
          placeholder="E-mail"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <Input
          type="date"
          placeholder="Data de Nascimento"
          value={formData.dateOfBirth}
          onChange={(e) => setFormData({ ...formData, dateOfBirth: e.target.value })}
        />
        <Input
          type="text"
          placeholder="Cidade/Estado"
          value={formData.cityState}
          onChange={(e) => setFormData({ ...formData, cityState: e.target.value })}
        />
        <Input
          type="password"
          placeholder="Senha"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        />
        <Input
          type="text"
          placeholder="Descrição pessoal"
          value={formData.selfDescription}
          onChange={(e) => setFormData({ ...formData, selfDescription: e.target.value })}
        />
        <Input
          type="text"
          placeholder="Interesses"
          value={formData.interests}
          onChange={(e) => setFormData({ ...formData, interests: e.target.value })}
        />
        <Input
          type="text"
          placeholder="Estado civil"
          value={formData.relationshipStatus}
          onChange={(e) => setFormData({ ...formData, relationshipStatus: e.target.value })}
        />
        <Input
          type="text"
          placeholder="Filhos"
          value={formData.children}
          onChange={(e) => setFormData({ ...formData, children: e.target.value })}
        />
        <Input
          type="text"
          placeholder="Hábitos de fumar"
          value={formData.smokingHabits}
          onChange={(e) => setFormData({ ...formData, smokingHabits: e.target.value })}
        />
        <Input
          type="text"
          placeholder="Hábitos de beber"
          value={formData.drinkingHabits}
          onChange={(e) => setFormData({ ...formData, drinkingHabits: e.target.value })}
        />
        <Input
          type="text"
          placeholder="Foto de perfil"
          value={formData.profilePicture}
          onChange={(e) => setFormData({ ...formData, profilePicture: e.target.value })}
        />
        <Input
          type="text"
          placeholder="Música favorita"
          value={formData.favoriteMusic}
          onChange={(e) => setFormData({ ...formData, favoriteMusic: e.target.value })}
        />
        <Input
          type="text"
          placeholder="Filme favorito"
          value={formData.favoriteMovies}
          onChange={(e) => setFormData({ ...formData, favoriteMovies: e.target.value })}
        />
        <label className={styles.LabelError}>{error}</label>
        <Button Text="Próximo" onClick={handleRegister} />
      </div>
    </div>
  );
};

export default Register;