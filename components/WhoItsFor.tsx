const audiences = [
  {
    title: "AI / ML Engineers",
    description:
      "Write behavioral tests alongside your models. Get fast feedback loops on agent regressions and integration failures before code merges.",
  },
  {
    title: "Platform & DevOps Teams",
    description:
      "Integrate AgentQA into your CI/CD pipelines and enforce quality gates as a first-class step in your agentic deployment workflow.",
  },
  {
    title: "Product & Engineering Leaders",
    description:
      "Maintain visibility into AI quality across multiple teams and systems. Make data-driven go/no-go decisions backed by structured evidence.",
  },
  {
    title: "Compliance & Risk Officers",
    description:
      "Access auditable records of every AI decision and deployment event. Demonstrate that governance controls are in place and working.",
  },
];

export default function WhoItsFor() {
  return (
    <section id="who-its-for" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-3 tracking-tight">
          Who AgentQA Is For
        </h2>
        <p className="text-center text-gray-500 mb-12 max-w-xl mx-auto">
          Built for the teams responsible for delivering reliable, trustworthy agentic AI.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {audiences.map((audience) => (
            <div key={audience.title} className="bg-gray-100 rounded-xl p-7">
              <h3 className="text-base font-bold text-blue-800 mb-2">{audience.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{audience.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
