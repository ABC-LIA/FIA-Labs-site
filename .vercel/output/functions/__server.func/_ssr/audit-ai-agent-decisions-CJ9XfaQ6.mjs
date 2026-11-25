import { u as FIA_ORG_ID } from "./site-DzHDP_Sq.mjs";
import { q as require_jsx_runtime, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as PageFrame } from "./page-frame-DwFh0oLd.mjs";
import { a as PATH, i as DESCRIPTION$1, r as AUDIT_FAQS } from "./router-CtbgqIrj.mjs";
import { t as JsonLd } from "./json-ld-2dnvi90N.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/audit-ai-agent-decisions-CJ9XfaQ6.js
var import_jsx_runtime = require_jsx_runtime();
var ORIGIN = "https://federatedintel.ai";
var URL = `${ORIGIN}${PATH}`;
var H1 = "How to audit AI agent decisions (and design a human approval that holds up)";
var ANSWER = "To audit an AI agent's decision, reconstruct it as a chain: what triggered it, which agent and policy version acted, what data it used, what it proposed, who approved it and on what record, what it did, and what happened next. Then test the record, not the narrative: separate what the record establishes (evidence) from what was drawn from it (inference) and what is missing (gap). A human approval counts only if the approver had authority, saw the record the agent acted on, and the approval was still current when the action ran.";
var JSON_LD = {
	"@context": "https://schema.org",
	"@graph": [
		{
			"@type": "Article",
			"@id": `${URL}#article`,
			headline: H1,
			description: DESCRIPTION$1,
			url: URL,
			mainEntityOfPage: URL,
			inLanguage: "en",
			datePublished: "2026-11-25",
			dateModified: "2026-11-25",
			author: { "@id": FIA_ORG_ID },
			publisher: { "@id": FIA_ORG_ID }
		},
		{
			"@type": "BreadcrumbList",
			itemListElement: [{
				"@type": "ListItem",
				position: 1,
				name: "FIA Labs",
				item: `${ORIGIN}/`
			}, {
				"@type": "ListItem",
				position: 2,
				name: "How to audit AI agent decisions",
				item: URL
			}]
		},
		{
			"@type": "FAQPage",
			"@id": `${URL}#faq`,
			url: URL,
			mainEntity: AUDIT_FAQS.map((item) => ({
				"@type": "Question",
				name: item.q,
				acceptedAnswer: {
					"@type": "Answer",
					text: item.a
				}
			}))
		}
	]
};
var STEPS = [
	{
		h: "1. Trigger and mandate",
		p: "Start with why the agent acted at all. What request, event or schedule triggered it? Which agent was it, and what was it permitted to do? An action outside the mandate fails the audit however good the outcome was."
	},
	{
		h: "2. Versions",
		p: "Record the model, the prompt or policy, and the tools in force when it ran. Agents change often. Without the versions, you are auditing today's system, not the one that made the decision."
	},
	{
		h: "3. Inputs",
		p: "List the data and documents the agent retrieved, with their sources and the time they were read. A decision can only be as good as what it was given, and the question later is often what it was not given."
	},
	{
		h: "4. The proposal and its working",
		p: "What did the agent propose, and on what reasoning? Keep the working, not just the output. If the reasoning cannot be produced, the decision cannot be reconstructed."
	},
	{
		h: "5. Approval",
		p: "Who approved it, on what record, and when? Note whether the approver saw the inputs and the working or only a summary, and whether they had authority for this kind of action."
	},
	{
		h: "6. Action and outcome",
		p: "What did the agent actually do, did it match what was approved, and what happened next? A gap between the approved proposal and the executed action is one of the most important findings an audit can make."
	}
];
var CHECKLIST = `[ ] Trigger and mandate recorded; action within mandate
[ ] Model, prompt/policy and tool versions recorded
[ ] Inputs listed with sources and retrieval time
[ ] Proposal and working kept, not just the output
[ ] Each step classified: EVIDENCE / INFERENCE / GAP
[ ] Approver identified, with authority for this action
[ ] Approver saw the record, not only a summary
[ ] Approval still current when the action ran
[ ] Executed action matches approved proposal
[ ] Outcome recorded and linked back to the decision`;
function H2({ children, id }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
		id,
		className: "mt-14 font-display text-3xl tracking-tight",
		children
	});
}
function H3({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
		className: "mt-8 font-display text-xl tracking-tight",
		children
	});
}
function P({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "mt-3 text-base leading-relaxed text-muted",
		children
	});
}
function A({ href, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		href,
		className: "text-fg underline underline-offset-4",
		children
	});
}
function AuditAiAgentDecisionsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageFrame, {
		index: "Guide",
		title: H1,
		dek: ANSWER,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(JsonLd, { data: JSON_LD }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: "mx-auto max-w-3xl px-5 py-12 md:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "FIA Labs builds governed desks that keep evidence, inference and gap on separate lines and show their working, so a decision can be reconstructed before anyone relies on it. This guide sets out the method in a form you can use on any agent, ours or anyone else's." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H2, { children: "What an AI decision audit has to answer" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "Every audit of a consequential decision comes down to three questions. Was it within authority: was the agent allowed to do this, and was the person who approved it allowed to approve it? Was it supported by the record: did the inputs actually establish what the decision assumed? Can it be reconstructed: could someone who was not there rebuild the decision from what was kept? A decision that fails any one of the three is not one an organisation can stand behind, however well it turned out." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H2, { children: "Step by step: reconstructing a decision" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", { children: STEPS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H3, { children: s.h }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: s.p })] }, s.h)) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H2, { children: "Evidence, inference, gap: testing the record" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "Once the chain is rebuilt, classify each step. Evidence is what the record establishes. Inference is what was drawn from it. Gap is what the record does not establish, or what was missing. A worked example, fictional:" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
					className: "mt-4 border-l-2 border-border pl-4 text-base leading-relaxed text-muted",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
							className: "font-medium text-fg",
							children: "Decision:"
						}), " a procurement agent paid a supplier invoice early to take a discount."] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
								className: "font-medium text-fg",
								children: "Evidence:"
							}), " the invoice and the supplier's payment terms were retrieved from the finance system, with timestamps."]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
								className: "font-medium text-fg",
								children: "Inference:"
							}), " the agent treated the supplier's bank details as verified because they matched last quarter's payment; no verification check ran."]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
								className: "font-medium text-fg",
								children: "Gap:"
							}), " the approver's record shows the amount and discount, not the bank details. Nobody approved the account the money went to."]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [
					"The audit finding is not \"the agent made a mistake\". It is that an inference was treated as evidence, and the approval did not cover it. For how FIA desks keep the three lines apart, see ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/method",
						className: "text-fg underline underline-offset-4",
						children: "the method"
					}),
					"."
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H2, { children: "Designing a human approval that means something" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H3, { children: "Approve the record, not the summary" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "An approval screen that shows only \"Pay supplier, $X, approve?\" invites a rubber stamp. Show the approver what the agent relied on, what it inferred and what it could not find. If they would need to open three systems to check, the approval is not informed." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H3, { children: "Authority: who is allowed to say yes" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "Map approvals to the same delegations of authority your organisation already uses for people. An agent's action should not be approvable by someone who could not authorise the same action if a colleague proposed it." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H3, { children: "When an approval should lapse" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "An approval is given on a particular record, for a particular scope, at a particular time. It should stop covering the action when the inputs change, when the scope widens, or when enough time has passed that the circumstances may have moved. Set the lapse condition when the approval is given, and record it with the approval." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H3, { children: "Where to put the gate" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "Put the human gate before actions that are irreversible or leave the organisation: payments, filings, messages to customers or regulators, changes to production systems. Internal drafting and analysis rarely need a gate; the record of them does." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H2, { children: "How this maps to frameworks you already use" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "The method above fits the frameworks most organisations already work with. It does not make anyone compliant with them; read each in its official source." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-3 list-disc space-y-2 pl-5 text-base leading-relaxed text-muted",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(A, {
							href: "https://www.nist.gov/itl/ai-risk-management-framework",
							children: "NIST AI Risk Management Framework"
						}), ": a voluntary US framework organised around Govern, Map, Measure and Manage. Accountability and documentation sit mainly under Govern."] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(A, {
							href: "https://www.iso.org/standard/81230.html",
							children: "ISO/IEC 42001"
						}), ": an international standard for an AI management system, covering defined roles, documented processes and ongoing monitoring."] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(A, {
							href: "https://eur-lex.europa.eu/eli/reg/2024/1689/oj",
							children: "EU AI Act"
						}), ": for systems it classes as high-risk, it includes requirements on record-keeping and human oversight."] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(A, {
							href: "https://www.industry.gov.au/publications/voluntary-ai-safety-standard",
							children: "Australia's Voluntary AI Safety Standard"
						}), ": its guardrails cover accountability, human oversight and record-keeping. The National AI Centre's Guidance for AI Adoption, published in October 2025, updates and simplifies it."] })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H2, { children: "Audit checklist" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "Copy this into the file for each consequential decision." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
					className: "mt-4 overflow-x-auto border border-border p-4 font-mono text-[0.8rem] leading-relaxed text-muted",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: CHECKLIST })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H2, { children: "How FIA desks are built for this" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "FIA desks are federated specialists, each owning one domain. Dual engines split the work: a generation engine reads the record and proposes, and a symbolic engine tests the proposal against domain rules, logic and precedent. Show working sets out what each conclusion depends on, and evidence, inference and gap stay on separate lines. Human judgment remains the authority." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-3 list-disc space-y-2 pl-5 text-base leading-relaxed text-muted",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
							"Legal files: ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(A, {
								href: "https://legalintel.ai",
								children: "LIA Pro, LIA SC and LIA Chambers"
							}),
							" (",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(A, {
								href: "https://pro.legalintel.ai",
								children: "open LIA Pro"
							}),
							")."
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
							"Finance and board reporting: ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(A, {
								href: "https://cfosentinel.pro",
								children: "CFO Sentinel"
							}),
							"."
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
							"Decision memos and board packs: ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(A, {
								href: "https://execmind.app",
								children: "ExecMind"
							}),
							" (",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(A, {
								href: "https://pro.execmind.app",
								children: "open ExecMind"
							}),
							")."
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
							"Medical literature, for practitioners and researchers only: ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(A, {
								href: "https://medicalintel.org",
								children: "MIA"
							}),
							"."
						] })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [
					"See also ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/research",
						className: "text-fg underline underline-offset-4",
						children: "research"
					}),
					",",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/what-is-symbolic-ai",
						className: "text-fg underline underline-offset-4",
						children: "what is symbolic AI?"
					}),
					", ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/work",
						className: "text-fg underline underline-offset-4",
						children: "the desks"
					}),
					" and",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/company",
						className: "text-fg underline underline-offset-4",
						children: "the company"
					}),
					"."
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H2, {
					id: "faq",
					children: "Frequently asked questions"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
					className: "mt-6 divide-y divide-border border-y border-border",
					children: AUDIT_FAQS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "py-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "font-display text-xl",
							children: item.q
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "mt-2 text-[0.95rem] leading-relaxed text-muted",
							children: item.a
						})]
					}, item.q))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: "mt-14 border border-border bg-surface p-6 md:p-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-base leading-relaxed text-fg",
						children: "Try a governed desk on your own file: 150 free credits, no card."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5 flex flex-wrap gap-5 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(A, {
								href: "https://pro.legalintel.ai",
								children: "LIA Pro"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(A, {
								href: "https://cfosentinel.pro",
								children: "CFO Sentinel"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(A, {
								href: "https://pro.execmind.app",
								children: "ExecMind"
							})
						]
					})]
				})
			]
		})]
	});
}
//#endregion
export { AuditAiAgentDecisionsPage as component };
