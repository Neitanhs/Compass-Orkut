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
  statusRelationship: string;
  hasChildren: string; // "Você tem filho?"
  smokes: string; // "Você fuma?"
  drinks: string; // "Você bebe?"
}

const Step2: React.FC<Step2Props> = ({ onPrevious, onComplete }) => {
  const [selfDescription, setSelfDescription] = useState("");
  const [statusRelationship, setStatusRelationship] = useState("");
  const [hasChildren, setHasChildren] = useState(""); // New state for "Você tem filho?"
  const [smokes, setSmokes] = useState(""); // New state for "Você fuma?"
  const [drinks, setDrinks] = useState(""); // New state for "Você bebe?"
  const [error, setError] = useState("");

  const isValidYesNoResponse = (response: string) => {
    const lowerCaseResponse = response.toLowerCase();
    return lowerCaseResponse === "sim" || lowerCaseResponse === "não";
  };

  const handleComplete = () => {
    if (!selfDescription || !statusRelationship || !hasChildren || !smokes || !drinks) {
      setError("Preencha todos os campos");
      return;
    }

    if (!isValidYesNoResponse(hasChildren) || !isValidYesNoResponse(smokes) || !isValidYesNoResponse(drinks)) {
      setError("Responda 'Sim' ou 'Não' para as perguntas adequadas");
      return;
    }

    setError("");
    onComplete({
      selfDescription,      
      statusRelationship,
      hasChildren,
      smokes,
      drinks,
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
          onChange={(e) => setSelfDescription(e.target.value)}
        />
        <h3 className={styles.LabelReg}>Status de Relacionamento</h3>

        <Input
          type="text"
          placeholder="Ex.: 'Solteiro', 'Casado', 'Namorando'"
          value={statusRelationship}
          onChange={(e) => setStatusRelationship(e.target.value)}
        />

        <h3 className={styles.LabelReg}>Você tem filho?</h3>

        <Input
          type="text"
          placeholder="Ex.: 'Sim', 'Não'"
          value={hasChildren}
          onChange={(e) => setHasChildren(e.target.value)}
        />

        <h3 className={styles.LabelReg}>Você fuma?</h3>

        <Input
          type="text"
          placeholder="Ex.: 'Sim', 'Não'"
          value={smokes}
          onChange={(e) => setSmokes(e.target.value)}
        />

        <h3 className={styles.LabelReg}>Você bebe?</h3>

        <Input
          type="text"
          placeholder="Ex.: 'Sim', 'Não'"
          value={drinks}
          onChange={(e) => setDrinks(e.target.value)}
        />
        {error && <p className={styles.LabelError}>{error}</p>}
        <Button Text="Anterior" onClick={onPrevious} />
        <Button Text="Concluir" onClick={handleComplete} />
      </div>
    </div>
  );
};

export default Step2;
