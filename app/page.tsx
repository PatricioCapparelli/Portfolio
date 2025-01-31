import CoverParticles from "@/components/coverParticles";
import TransitionPage from "@/components/transitionPage";

export default function Home() {
  return (
    <main>
      <TransitionPage/>
      <div className=" flex min-h-[100vh] h-full bg-no-repeat bg-gradient-cover">
        <CoverParticles/>
      </div>
    </main>
  )
}
