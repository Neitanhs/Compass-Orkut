import React, { useState } from "react";
import styles from "./styles.module.css";
import Input from "../../Input";
import Button from "../../ButtonRegister";

interface Step2Props {
  onPrevious: () => void;
  onComplete: (data: Step2Data) => void;
}

export interface Step2Data {
  autodescricao: string;
  interesses: string;
  statusRelacionamento: string;
}

const Step2: React.FC<Step2Props> = ({ onPrevious, onComplete }) => {
  const [autodescricao, setAutodescricao] = useState("");
  const [interesses, setInteresses] = useState("");
  const [statusRelacionamento, setStatusRelacionamento] = useState("");

  const handleComplete = () => {
    const step2Data: Step2Data = {
      autodescricao,
      interesses,
      statusRelacionamento,
    };
    onComplete(step2Data);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.label}>Passo 2: Informações Pessoais</h2>
      <div className={styles.content}>
        <Input
          type="text"
          placeholder="Autodescrição (Quem sou eu)"
          value={autodescricao}
          onChange={(e) => setAutodescricao(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Interesses"
          value={interesses}
          onChange={(e) => setInteresses(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Status de Relacionamento"
          value={statusRelacionamento}
          onChange={(e) => setStatusRelacionamento(e.target.value)}
        />
        <Button Text="Anterior" onClick={onPrevious} />
        <Button Text="Concluir" onClick={handleComplete} />
      </div>
    </div>
  );
};

export default Step2;