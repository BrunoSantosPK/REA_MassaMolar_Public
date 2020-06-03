import React, { useState } from 'react';
  
import "intl";
import "intl/locale-data/jsonp/pt-BR";

import * as Font from "expo-font";
import { AppLoading } from "expo";

import Routes from "./src/routes";

const loadFonts = () => {
  return Font.loadAsync({
    "Noto": require("./assets/fonts/Noto.ttf"),
    "NotoBold": require("./assets/fonts/NotoBold.ttf"),
    "Roboto": require("./assets/fonts/Roboto.ttf"),
    "RobotoBold": require("./assets/fonts/RobotoBold.ttf"),
    "Montserrat": require("./assets/fonts/Montserrat.ttf"),
    "MontserratBold": require("./assets/fonts/MontserratBold.ttf"),
    "ArEssence": require("./assets/fonts/ArEssence.ttf"),
    "Humnst": require("./assets/fonts/Humnst.ttf"),
    "HumnstBold": require("./assets/fonts/HumnstBold.ttf")
  });
};

export default function App() {
  const [dataFont, setDataFont] = useState(false);

  if(!dataFont) {
    return (
      <AppLoading
        startAsync={loadFonts}
        onFinish={() => setDataFont(true)}
      />
    );
  }

  return (
    <Routes />
  );
}