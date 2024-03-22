import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import styles from "./src/styles/styles";
import TouristLocation from "./src/components/TouristLocation";

export default function App() {
  return (
    <View style={styles.container}>
      <TouristLocation
        name="Louvre Museum"
        adress="Localizado no 1º arrondissement, na Rue de Rivoli, 75001, próximo ao Rio Sena - Paris, França"
        description="Louvre ou Museu do Louvre (em francês: Musée du Louvre) é o maior museu de arte do mundo e um monumento histórico em Paris, França."
        imagesource={require("./src/Images/louvre.png")}
      />
      <StatusBar style="auto" />
    </View>
  );
}
