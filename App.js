import * as React from "react";
import { CardProfileComponent } from "./Component/CardProfile/CardFileComponent";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <CardProfileComponent />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
