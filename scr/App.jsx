/*
</div>
</aside>
</section>


{/* Projects */}
<section className="mt-12">
<div className="flex items-center justify-between">
<h2 className="text-2xl font-semibold">Highlighted Projects</h2>
<p className="text-sm text-gray-400">Automatically fetched from GitHub</p>
</div>


<div className="mt-6">
{loading ? (
<div className="py-12 text-center text-gray-400">Loading projects...</div>
) : error ? (
<div className="py-6 text-red-400">Error fetching GitHub: {error}</div>
) : repos.length === 0 ? (
<div className="py-6 text-gray-400">No public projects found.</div>
) : (
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
{repos.map((r) => (
<a key={r.id} href={r.html_url} target="_blank" rel="noreferrer" className="block p-4 rounded-xl bg-gray-800/50 border border-gray-700 hover:scale-[1.01] transition transform">
<div className="flex items-start justify-between gap-3">
<div>
<h3 className="text-lg font-semibold">{r.name}</h3>
<p className="mt-1 text-sm text-gray-300 line-clamp-3">{r.description || "No description"}</p>
</div>
<div className="text-right text-xs text-gray-400">
<div>★ {r.stargazers_count}</div>
<div className="mt-2">{r.language || "—"}</div>
</div>
</div>


<div className="mt-4 text-xs text-gray-400 flex items-center justify-between">
<span>Updated {new Date(r.updated_at).toLocaleDateString()}</span>
<span className="px-2 py-1 bg-gray-900/40 rounded-lg border border-gray-700">View on GitHub</span>
</div>
</a>
))}
</div>
)}
</div>
</section>


{/* Experience Timeline */}
<section className="mt-12">
<h2 className="text-2xl font-semibold">Experience Timeline</h2>
<div className="mt-6 space-y-4">
<article className="p-6 bg-gray-800/50 rounded-xl border border-gray-700">
<h3 className="font-semibold">Vodafone — QA Testing Automation Engineer</h3>
<p className="text-sm text-gray-300 mt-1">Feb 2025 – Present</p>
<ul className="mt-3 text-gray-200 text-sm">
<li>• Led QA for a multi-vendor e-commerce platform; designed automated suites for OMS workflows.</li>
<li>• Performed API testing for 3rd-party logistics and implemented automated regression frameworks.</li>
</ul>
</article>


<article className="p-6 bg-gray-800/50 rounded-xl border border-gray-700">
<h3 className="font-semibold">ALIA-ICT — Software QC Engineer</h3>
<p className="text-sm text-gray-300 mt-1">Nov 2023 – Feb 2025</p>
<ul className="mt-3 text-gray-200 text-sm">
<li>• Built automation scripts and conducted functional, performance, and mobile testing for hospitality app revamp.</li>
<li>• Built a Selenium-based framework that sped up testing cycles and reduced time-to-market.</li>
</ul>
</article>
</div>
</section>


{/* Footer / Contact */}
<footer className="mt-12 py-8 text-center text-gray-400">
<p>© {new Date().getFullYear()} Moustafa Hamed Elbaih — Software Test Engineer</p>
<p className="mt-2 text-sm">Based in Cairo, Egypt • Available for remote roles</p>
</footer>
</div>
</div>
);
}
