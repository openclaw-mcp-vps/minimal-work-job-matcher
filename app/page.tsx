export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-medium tracking-wide uppercase">
          Work smarter, not harder
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Find Legitimate{" "}
          <span className="text-[#58a6ff]">Low-Effort</span>{" "}
          Tech Jobs
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          AI-curated job listings filtered for flexible requirements, minimal oversight, and genuine work-life balance. Built for developers who value their time.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors duration-150 text-base"
        >
          Get Access — $19/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">Cancel anytime. No contracts.</p>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <div className="rounded-xl border border-[#30363d] bg-[#161b22] p-8 text-center">
          <h2 className="text-xl font-bold text-white mb-1">Pro Access</h2>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need to land a chill role</p>
          <div className="text-5xl font-bold text-white mb-1">
            $19<span className="text-xl font-normal text-[#8b949e]">/mo</span>
          </div>
          <p className="text-[#6e7681] text-xs mb-8">Billed monthly</p>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "AI-filtered listings updated daily",
              "Flexible & async-friendly roles only",
              "Remote-first job sources",
              "Work-life balance score per listing",
              "Email alerts for new matches",
              "Unlimited saved searches"
            ].map((f) => (
              <li key={f} className="flex items-center gap-3">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span className="text-[#c9d1d9]">{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors duration-150 text-sm"
          >
            Start Browsing Jobs
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-10">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {[
            {
              q: "What makes a job 'low-effort'?",
              a: "We use AI to analyze job descriptions for signals like async communication, flexible hours, no micromanagement, reasonable scope, and healthy team culture — not jobs that are low quality."
            },
            {
              q: "Where do the job listings come from?",
              a: "We aggregate from multiple sources including remote job boards, company career pages, and niche tech communities, then filter and score each listing automatically."
            },
            {
              q: "Can I cancel my subscription?",
              a: "Yes, cancel anytime from your billing portal. You keep access until the end of your billing period with no questions asked."
            }
          ].map(({ q, a }) => (
            <div key={q} className="border border-[#30363d] rounded-lg p-6 bg-[#161b22]">
              <h3 className="font-semibold text-white mb-2">{q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-8 text-xs text-[#6e7681]">
        © {new Date().getFullYear()} MinimalWork. All rights reserved.
      </footer>
    </main>
  );
}
