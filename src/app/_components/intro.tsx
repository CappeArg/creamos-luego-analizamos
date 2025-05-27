import { WTF_IS_IT } from "@/lib/constants";

export function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        Efímero.
      </h1>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        Mi blog personal, donde comparto {WTF_IS_IT}.
      </h4>
    </section>
  );
}
