import Event from "@/components/event";
import Header from "@/components/header";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Event />
      <Header />
      <img
        src="http://www.monami.com/images/main/visual1.jpg"
        alt="이미지"
      />
    </div>
  )
}
