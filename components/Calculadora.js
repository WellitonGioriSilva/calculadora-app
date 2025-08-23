import React, { useState } from "react";
import { TextInput, Text, Button, View } from "react-native";
import { isNumber } from "util";

function Calculadora() {
  const [campo1, setCampo1] = useState();
  const [campo2, setCampo2] = useState();
  const [resultado, setResultado] = useState();

  const somar = () => {
    if (isNumber(campo1) && isNumber(campo2)) {
      setResultado(campo1 + campo2);
    } else {
      setResultado("Por favor, insira números válidos.");
    }
  };

  const campo1Change = (event) => {
    setCampo1(Number(event));
  };

  const campo2Change = (event) => {
    setCampo2(Number(event));
  };

  const isNumber = (value) => {
    return typeof value === "number" && !isNaN(value);
  };

  return (
    <View style={{ gap: "5px" }}>
      <TextInput
        onChangeText={campo1Change}
        value={campo1}
        keyboardType="numeric"
        placeholder="Digite o primeiro número"
      ></TextInput>
      <Text style={{ textAlign: "center", fontSize: 18, fontWeight: "bold" }}>
        +
      </Text>
      <TextInput
        onChangeText={campo2Change}
        value={campo2}
        keyboardType="numeric"
        placeholder="Digite o segundo número"
      ></TextInput>
      <Text style={{ textAlign: "center", fontSize: 18, fontWeight: "bold" }}>
        =
      </Text>
      <Text>O Resultado é: {resultado}</Text>
      <Button onPress={somar} title="Somar"></Button>
    </View>
  );
}

export default Calculadora;
