import Faq from "@/components/Faq";

export default function Home() {
  return (
    <div>
      <div className="bg-blue-600 w-full h-40 flex items-center justify-center text-white text-center">
        <h1 className="text-4xl font-semibold">Job Task </h1>
      </div>
      <Faq />
    </div>
  );
}
