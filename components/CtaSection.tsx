export default function CtaSection() {
  return (
    <section id="contact" className="bg-gradient-to-r from-blue-900 to-blue-600 py-20 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-4 tracking-tight">
          Ready to bring structure to your AI governance?
        </h2>
        <p className="text-blue-200 text-base mb-8 leading-relaxed">
          Join the teams using AgentQA to make agentic AI deployment safe, auditable, and
          repeatable.
        </p>
        <a
          href="mailto:hello@agentqa.io"
          className="inline-block bg-white text-blue-900 hover:bg-blue-50 font-semibold px-8 py-3 rounded-md transition-colors"
        >
          Request a Demo
        </a>
      </div>
    </section>
  );
}
