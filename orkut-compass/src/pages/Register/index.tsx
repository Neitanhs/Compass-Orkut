import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/ButtonLogin";
import LogoSVG from "../../assets/logo/logo.svg";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";

interface RegisterFormData {
  name: string;
  email: string;
  dateOfBirth: string;
  cityState: string;
  password: string;
}

const Register: React.FC = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState<RegisterFormData>({
    name: "",
    email: "",
    dateOfBirth: "",
    cityState: "",
    password: "",
  });

  const [error, setError] = useState<string>("");

  const handleRegister = () => {
    if (!formData.name || !formData.email || !formData.dateOfBirth || !formData.cityState || !formData.password) {
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
        <label className={styles.LabelError}>{error}</label>
        <Button Text="Criar conta" onClick={handleRegister} />
      </div>
    </div>
  );
};

export default Register;