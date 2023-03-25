import { NativeBaseProvider } from "native-base";
import Home from "./src/pages/Home";
import { LinearGradient } from "react-native-svg";
export default function App() {
  const config={
    dependencies:{
      'linear-gradient':LinearGradient
    }
  }
  return (
    <NativeBaseProvider
    config={config}>
      <Home />
    </NativeBaseProvider>
  );
}


