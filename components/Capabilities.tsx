const capabilities = [
  {
    icon: "\u2713",
    title: "Behavioral QA",
    description:
      "Define expected agent behaviors and run structured test suites against them. Catch regressions before they reach production.",
  },
  {
    icon: "\u2699\ufe0f",
    title: "Deployment Governance",
    description:
      "Apply promotion gates, approval workflows, and policy checks before any agentic workload progresses to the next environment.",
  },
  {
    icon: "\ud83d\udccb",
    title: "Audit Trails",
    description:
      "Every test run, gate decision, and deployment event is logged with full context — providing a tamper-evident record for compliance and incident review.",
  },
  {
    icon: "\ud83d\udcc8",
    title: "Runtime Monitoring",
    description:
      "Track agent behavior in live environments. Surface anomalies, policy violations, and risk signals as they happen — not after the fact.",
  },
  {
    icon: "\ud83d\udd12",
    title: "Risk Management",
    description:
      "Replace ad-hoc, anecdotal validation with repeatable risk assessments tied to real behavioral data across your entire agent fleet.",
  },
  {
    icon: "\ud83d\udc65",
    title: "Team Collaboration",
    description:
      "Give engineering, product, and compliance stakeholders a shared view of AI quality and risk — with role-appropriate access to the data they need.",
  },
];

export default function Capabilities() {
  return (
    <section id="capabilities" className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-3 tracking-tight">
          Platform Capabilities
        </h2>
        <p className="text-center text-gray-500 mb-12 max-w-xl mx-auto">
          Everything your team needs to validate, monitor, and govern agentic AI systems.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap) => (
            <div
              key={cap.title}
              className="bg-white border border-gray-200 rounded-xl p-7 hover:shadow-md transition-shadow"
            >
              <div className="text-2xl mb-3">{cap.icon}</div>
              <h3 className="text-base font-bold text-gray-900 mb-2">{cap.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{cap.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
