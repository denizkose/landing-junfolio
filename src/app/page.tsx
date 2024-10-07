import Image from "next/image";
import MainScreen from "./components/home/MainScreen";
import ForJuniorScreen from "./components/home/ForJuniorScreen";
import ForClientScreen from "./components/home/ForClientScreen";
import AdditionalInformationScreen from "./components/home/AdditionalInformationScreen";
import SpecialistsScreen from "./components/home/SpecialistsScreen";
import StagesScreen from "./components/home/StagesScreen";

export default function Home() {
  return (
    <div>
      <MainScreen/>
      <ForJuniorScreen/>
      <ForClientScreen/>
      <AdditionalInformationScreen/>
      <SpecialistsScreen/>
      <StagesScreen/>
    </div>
  );
}
