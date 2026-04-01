export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-white border-b border-gray-200 py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight tracking-tight mb-6">
          AI Behavioral QA &amp; Deployment Governance for Agentic Systems
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mb-8 leading-relaxed">
          AgentQA replaces anecdotal AI validation with structured, repeatable, auditable risk
          management — so your team can ship agentic AI confidently, before and after deployment.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="#capabilities"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-md transition-colors"
          >
            See What We Do
          </a>
          <a
            href="#contact"
            className="border border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold px-6 py-3 rounded-md transition-colors"
          >
            Request a Demo
          </a>
        </div>
      </div>
    </section>
  );
}
