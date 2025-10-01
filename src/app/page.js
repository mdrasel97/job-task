import Banner from "@/components/Banner";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import GetInTouch from "@/components/GetInTouch";

export default function Home() {
  return (
    <div>
      {/* <div className="bg-primary w-full h-40 flex items-center justify-center text-white text-center">
        <h1 className="text-4xl font-semibold">Job Task </h1>
      </div> */}
      <Banner />
      <Faq />
      <GetInTouch />
      <Footer />
    </div>
  );
}
