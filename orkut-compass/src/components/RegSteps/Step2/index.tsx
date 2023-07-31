import React, { useState } from "react";
import styles from "./styles.module.css";
import Input from "../../Input";
import Button from "../../ButtonRegister";
import LogoSVG from "../../../assets/logo/logo.svg";

interface Step2Props {
  onPrevious: () => void;
  onComplete: (data: Step2Data) => void;
}

export interface Step2Data {
  selfDescription: string;
  interests: string;
  statusRelationship: string;  
}



const Step2: React.FC<Step2Props> = ({ onPrevious, onComplete }) => {
  const [selfDescription, setselfDescription] = useState("");
  const [interests, setinterests] = useState("");
  const [statusRelationship, setstatusRelationship] = useState("");
  const [error, setError] = useState("");



  const handleComplete = () => {
    if (!selfDescription|| !interests || !statusRelationship) {
      setError("Preencha todos os campos");
      return;   
  }
    setError("");
    onComplete({
      selfDescription,
      interests,
      statusRelationship,      
    });
  };

  return (
    <div className={styles.Container}>
      <div className={styles.Content}>
        <div className={styles.Logo}>        
        <img src={LogoSVG} alt="Logo" />
      </div>
      <h2 className={styles.Label}>Criação de conta</h2>
        <Input
          type="text"
          placeholder="Fale um pouco sobre você"
          value={selfDescription}
          onChange={(e) => setselfDescription(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Quais são seus Interesses?"
          value={interests}
          onChange={(e) => setinterests(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Status de Relacionamento?"
          value={statusRelationship}
          onChange={(e) => setstatusRelationship(e.target.value)}
        />
        {error && <p className={styles.LabelError}>{error}</p>}
        <Button Text="Anterior" onClick={onPrevious} />
        <Button Text="Concluir" onClick={handleComplete} />
      </div>
    </div>
  );
};

export default Step2;