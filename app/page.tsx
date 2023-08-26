import ScrollUp from "@/components/Common/ScrollUp";
import Features from "@/components/Features";
import Mentors from "@/components/Mentors";
import Advisors from "@/components/Advisor";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <ScrollUp />

      <Features />

      <Mentors />
      <Advisors />
    </>
  );
}
