
import Image from "next/image";
import Greet from "../components/greet"
import {About} from "./about/about"
import Counter from "./about/counter";
export default function Home() {
  return (
    <div>
      <Greet></Greet>
      <About></About>
      <Counter></Counter>
    </div>
  );
}
