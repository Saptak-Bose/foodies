import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import { fonts } from "./src/utils/constants";
import Navigation from "./src/navigation";

type Props = object;

SplashScreen.preventAutoHideAsync();

const App = (props: Props) => {
  const [loaded, error] = useFonts(fonts);

  useEffect(() => {
    if (loaded || error) SplashScreen.hideAsync();
  }, [loaded, error]);

  if (!loaded && !error) return null;

  return <Navigation />;
};

export default App;
