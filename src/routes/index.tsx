import { createFileRoute } from "@tanstack/react-router";
import {
  BadgeCheck,
  Check,
  CheckCircle2,
  Circle,
  Eye,
  EyeOff,
  Fingerprint,
  KeyRound,
  Layers3,
  Lock,
  Radar,
  RefreshCw,
  Shield,
  ShieldCheck,
  Sparkles,
  TerminalSquare,
  TriangleAlert,
  X,
} from "lucide-react";
import type { ReactNode } from "react";
import { useMemo, useState } from "react";

import passguardShield from "@/assets/passguard-shield.png";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

type Requirement = {
  id: string;
  label: string;
  met: boolean;
  feedback: string;
};

type StrengthTone = "danger" | "warning" | "primary" | "success" | "cyber";

const strengthLabels = ["Very Weak", "Very Weak", "Weak", "Medium", "Strong", "Very Strong"];

const criteriaSteps = [
  "Length",
  "Uppercase",
  "Lowercase",
  "Numbers",
  "Special Characters",
];

const bestPractices = [
  "Use long passwords",
  "Avoid predictable information",
  "Avoid reusing passwords",
  "Use unique passwords for important accounts",
  "Consider using a reputable password manager",
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PassGuard | Password Strength Analyzer" },
      {
        name: "description",
        content:
          "PassGuard is a private client-side password strength analyzer built for SkillCraft Technology Cybersecurity Internship Task 03.",
      },
      { property: "og:title", content: "PassGuard Password Strength Analyzer" },
      {
        property: "og:description",
        content:
          "Analyze password length, uppercase, lowercase, numbers, and special characters instantly in your browser.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function getStrengthTone(score: number): StrengthTone {
  if (score <= 1) return "danger";
  if (score === 2) return "warning";
  if (score === 3) return "primary";
  if (score === 4) return "success";
  return "cyber";
}

function Index() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const requirements: Requirement[] = useMemo(
    () => [
      {
        id: "length",
        label: "At least 8 characters",
        met: password.length >= 8,
        feedback: "Use at least 8 characters to improve your password.",
      },
      {
        id: "uppercase",
        label: "Uppercase letter",
        met: /[A-Z]/.test(password),
        feedback: "Add uppercase letters to improve your password.",
      },
      {
        id: "lowercase",
        label: "Lowercase letter",
        met: /[a-z]/.test(password),
        feedback: "Add lowercase letters for a more balanced password.",
      },
      {
        id: "number",
        label: "Number",
        met: /\d/.test(password),
        feedback: "Add numbers for additional complexity.",
      },
      {
        id: "special",
        label: "Special character",
        met: /[^A-Za-z0-9]/.test(password),
        feedback: "Add a special character such as !, @, #, or $.",
      },
    ],
    [password],
  );

  const score = requirements.filter((requirement) => requirement.met).length;
  const strength = strengthLabels[score] ?? "Very Weak";
  const tone = getStrengthTone(score);
  const missingFeedback = requirements
    .filter((requirement) => !requirement.met)
    .map((requirement) => requirement.feedback);
  const feedback =
    password.length === 0
      ? ["Enter a password to begin the local security assessment."]
      : missingFeedback.length > 0
        ? missingFeedback
        : ["Your password meets all basic complexity requirements."];

  const strengthPercentage = score * 20;

  return (
    <div className="min-h-dvh overflow-hidden bg-background text-foreground">
      <section className="cyber-grid relative isolate px-5 py-8 sm:px-8 lg:px-12">
        <div className="page-depth absolute inset-0 -z-10" />
        <div className="absolute left-0 top-20 -z-10 h-px w-full bg-cyber/25" />
        <div className="absolute bottom-0 left-0 -z-10 h-px w-full bg-cyber/20" />

        <header className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 py-2 sm:flex sm:justify-between">
          <a href="#analyzer" className="flex min-w-0 items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background">
            <span className="grid size-11 shrink-0 place-items-center rounded-lg border border-cyber/45 bg-cyber-soft cyber-glow">
              <ShieldCheck aria-hidden="true" className="size-5 text-cyber" />
            </span>
            <span className="min-w-0">
              <span className="block truncate font-display text-lg font-extrabold">PASSGUARD</span>
              <span className="block truncate text-xs font-semibold uppercase text-muted-foreground">
                Client-side analyzer
              </span>
            </span>
          </a>
          <Badge className="hidden border-cyber/35 bg-cyber-soft px-3 py-1.5 text-cyber sm:inline-flex">
            <Radar aria-hidden="true" className="mr-1.5 size-3.5" /> Local Processing
          </Badge>
        </header>

        <div className="mx-auto grid max-w-7xl items-center gap-10 pb-16 pt-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)] lg:pb-20 lg:pt-20">
          <div className="max-w-3xl">
            <Badge className="mb-6 border-panel-border bg-panel px-3 py-2 text-muted-foreground">
              SKILLCRAFT TECHNOLOGY • CYBERSECURITY INTERNSHIP • TASK 03
            </Badge>
            <h1 className="font-display text-5xl font-extrabold leading-tight text-foreground sm:text-6xl lg:text-7xl">
              PASSGUARD
            </h1>
            <p className="mt-5 max-w-2xl font-display text-2xl font-semibold text-cyber sm:text-3xl">
              Know Your Password. Strengthen Your Security.
            </p>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
              Analyze your password strength instantly with a private, client-side security
              assessment.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 text-sm font-semibold text-muted-foreground">
              <span className="inline-flex items-center gap-2 rounded-md border border-panel-border bg-panel px-3 py-2">
                <Fingerprint aria-hidden="true" className="size-4 text-cyber" /> Private by design
              </span>
              <span className="inline-flex items-center gap-2 rounded-md border border-panel-border bg-panel px-3 py-2">
                <TerminalSquare aria-hidden="true" className="size-4 text-success" /> Live security
                console
              </span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute inset-8 -z-10 rounded-full bg-cyber/20 blur-3xl" />
            <div className="glass-panel scanline overflow-hidden rounded-xl p-3 transition-transform duration-500 hover:-translate-y-1">
              <img
                src={passguardShield}
                alt="Glowing digital shield and lock representing password protection"
                width={1280}
                height={960}
                className="aspect-[4/3] w-full rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="analyzer" className="px-5 py-14 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_360px]">
            <div className="glass-panel rounded-xl p-5 transition-shadow duration-300 hover:cyber-glow sm:p-7 lg:p-8">
              <div className="grid gap-4 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-start">
                <div className="min-w-0">
                  <p className="text-sm font-semibold uppercase text-cyber">Secure input</p>
                  <h2 className="mt-2 font-display text-3xl font-bold text-foreground sm:text-4xl">
                    Password Strength Analyzer
                  </h2>
                </div>
                <div className="rounded-lg border border-success/35 bg-success/10 px-3 py-2 text-sm font-semibold text-success">
                  100% Client-Side
                </div>
              </div>

              <div className="mt-7 space-y-3">
                <Label htmlFor="password-input" className="text-sm font-semibold text-foreground">
                  Password
                </Label>
                <div className="grid grid-cols-[auto_minmax(0,1fr)_auto_auto] items-center gap-2 rounded-lg border border-panel-border bg-console p-2 transition-colors focus-within:border-cyber/70 focus-within:ring-2 focus-within:ring-ring">
                  <Lock aria-hidden="true" className="ml-2 size-5 shrink-0 text-cyber" />
                  <Input
                    id="password-input"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    placeholder="Enter a password to analyze"
                    className="h-12 border-0 bg-transparent px-1 text-base shadow-none focus-visible:ring-0"
                    autoComplete="new-password"
                    aria-describedby="privacy-indicator strength-summary"
                  />
                  <Button
                    type="button"
                    variant="console"
                    size="icon"
                    className="min-h-11 min-w-11"
                    onClick={() => setShowPassword((current) => !current)}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? <EyeOff aria-hidden="true" /> : <Eye aria-hidden="true" />}
                  </Button>
                  <Button
                    type="button"
                    variant="console"
                    size="icon"
                    className="min-h-11 min-w-11"
                    onClick={() => setPassword("")}
                    aria-label="Clear password"
                    disabled={password.length === 0}
                  >
                    <X aria-hidden="true" />
                  </Button>
                </div>
                <p id="privacy-indicator" className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Shield aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-success" />
                  100% Client-Side • Your password never leaves this browser.
                </p>
              </div>

              <div className="mt-8 grid gap-6 xl:grid-cols-[minmax(260px,0.85fr)_minmax(0,1fr)]">
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    Requirement Checklist
                  </h3>
                  <ul className="mt-4 space-y-3">
                    {requirements.map((requirement) => (
                      <li
                        key={requirement.id}
                        className={cn(
                          "flex items-center gap-3 rounded-lg border px-4 py-3 text-sm font-semibold transition-all duration-300",
                          requirement.met
                            ? "border-success/45 bg-success/10 text-foreground"
                            : "border-panel-border bg-secondary/45 text-muted-foreground",
                        )}
                      >
                        <span
                          className={cn(
                            "grid size-7 shrink-0 place-items-center rounded-md border transition-all duration-300",
                            requirement.met
                              ? "border-success bg-success text-success-foreground"
                              : "border-panel-border bg-console text-muted-foreground",
                          )}
                          aria-hidden="true"
                        >
                          {requirement.met ? <Check className="size-4" /> : <Circle className="size-3" />}
                        </span>
                        <span>{requirement.label}</span>
                        <span className="sr-only">{requirement.met ? "met" : "not met"}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-xl border border-panel-border bg-console p-5">
                  <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4">
                    <div className="min-w-0">
                      <p className="text-sm font-semibold uppercase text-cyber">Password Strength</p>
                      <h3 id="strength-summary" className="mt-2 font-display text-3xl font-bold text-foreground">
                        {strength}
                      </h3>
                    </div>
                    <div
                      className={cn(
                        "rounded-lg border px-3 py-2 text-sm font-bold",
                        tone === "danger" && "border-danger/45 bg-danger/10 text-danger",
                        tone === "warning" && "border-warning/45 bg-warning/10 text-warning",
                        tone === "primary" && "border-primary/45 bg-primary/10 text-primary",
                        tone === "success" && "border-success/45 bg-success/10 text-success",
                        tone === "cyber" && "border-cyber/45 bg-cyber-soft text-cyber",
                      )}
                    >
                      {score}/5
                    </div>
                  </div>

                  <div className="mt-6" aria-label={`Password strength score ${score} out of 5`}>
                    <div className="h-4 overflow-hidden rounded-full border border-panel-border bg-secondary">
                      <div
                        className={cn(
                          "h-full rounded-full transition-all duration-500",
                          tone === "danger" && "bg-danger",
                          tone === "warning" && "bg-warning",
                          tone === "primary" && "bg-primary",
                          tone === "success" && "bg-success",
                          tone === "cyber" && "bg-cyber-gradient",
                        )}
                        style={{ width: `${strengthPercentage}%` }}
                      />
                    </div>
                    <div className="mt-3 flex flex-wrap items-center justify-between gap-2 text-sm text-muted-foreground">
                      <span>Strength Score: {score}/5</span>
                      <span>Longer, unique passwords are generally harder to guess.</span>
                    </div>
                  </div>

                  <div className="mt-6 rounded-lg border border-panel-border bg-panel p-4" aria-live="polite">
                    <p className="text-sm font-semibold text-foreground">Feedback</p>
                    <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                      {feedback.map((item) => (
                        <li key={item} className="flex gap-2">
                          {score === 5 ? (
                            <CheckCircle2 aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-success" />
                          ) : (
                            <TriangleAlert aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-warning" />
                          )}
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <aside className="glass-panel rounded-xl p-5 lg:sticky lg:top-6 lg:self-start">
              <div className="flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-lg border border-cyber/45 bg-cyber-soft">
                  <TerminalSquare aria-hidden="true" className="size-5 text-cyber" />
                </span>
                <div>
                  <h2 className="font-display text-lg font-bold text-foreground">SECURITY STATUS</h2>
                  <p className="text-xs font-semibold uppercase text-muted-foreground">Live local console</p>
                </div>
              </div>
              <dl className="mt-6 space-y-3 font-mono text-sm">
                <StatusRow label="Password" value={password.length > 0 ? "Entered" : "Not entered"} />
                <StatusRow label="Requirements satisfied" value={`${score}/5`} />
                <StatusRow label="Strength" value={strength} />
                <StatusRow label="Processing" value="Local Browser" />
              </dl>
            </aside>
          </div>
        </div>
      </section>

      <section className="px-5 py-14 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase text-cyber">Security insights</p>
            <h2 className="mt-2 font-display text-3xl font-bold text-foreground sm:text-4xl">
              Why Password Strength Matters
            </h2>
          </div>
          <div className="mt-7 grid gap-5 md:grid-cols-3">
            <InsightCard
              icon={<KeyRound aria-hidden="true" className="size-6" />}
              title="Length Matters"
              text="Longer passwords generally provide more resistance to guessing and automated attempts."
            />
            <InsightCard
              icon={<Layers3 aria-hidden="true" className="size-6" />}
              title="Complexity"
              text="Combining different character types increases variety and makes simple patterns less likely."
            />
            <InsightCard
              icon={<ShieldCheck aria-hidden="true" className="size-6" />}
              title="Privacy First"
              text="This tool evaluates the password locally in the browser and does not transmit it."
            />
          </div>
        </div>
      </section>

      <section className="px-5 py-14 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[minmax(0,1fr)_420px]">
          <div className="glass-panel rounded-xl p-5 sm:p-7">
            <p className="text-sm font-semibold uppercase text-cyber">Evaluation model</p>
            <h2 className="mt-2 font-display text-3xl font-bold text-foreground">
              How Password Strength Is Evaluated
            </h2>
            <ol className="mt-8 grid gap-3 md:grid-cols-5">
              {criteriaSteps.map((step, index) => (
                <li key={step} className="relative rounded-lg border border-panel-border bg-console p-4">
                  <span className="grid size-8 place-items-center rounded-md bg-cyber-soft text-sm font-bold text-cyber">
                    {index + 1}
                  </span>
                  <p className="mt-4 text-sm font-semibold text-foreground">{step}</p>
                </li>
              ))}
            </ol>
            <p className="mt-6 text-sm leading-6 text-muted-foreground">
              This checker reviews five basic complexity criteria. It does not determine whether a
              password is absolutely secure.
            </p>
          </div>

          <div className="glass-panel rounded-xl p-5 sm:p-7">
            <p className="text-sm font-semibold uppercase text-cyber">Password hygiene</p>
            <h2 className="mt-2 font-display text-3xl font-bold text-foreground">
              Password Best Practices
            </h2>
            <ul className="mt-6 space-y-3">
              {bestPractices.map((practice) => (
                <li key={practice} className="flex gap-3 rounded-lg border border-panel-border bg-console px-4 py-3 text-sm font-semibold text-muted-foreground">
                  <BadgeCheck aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-cyber" />
                  <span>{practice}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="px-5 py-12 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl rounded-xl border border-success/35 bg-success/10 p-6 sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
            <ShieldCheck aria-hidden="true" className="size-8 shrink-0 text-success" />
            <div>
              <h2 className="font-display text-2xl font-bold text-foreground">Your privacy matters.</h2>
              <p className="mt-3 max-w-4xl leading-7 text-muted-foreground">
                This tool performs password analysis locally in your browser. Passwords are not
                uploaded, stored, or transmitted.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-panel-border px-5 py-10 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-6 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end">
          <div>
            <h2 className="font-display text-2xl font-extrabold text-foreground">PASSGUARD</h2>
            <p className="mt-2 text-muted-foreground">Know Your Password. Strengthen Your Security.</p>
            <p className="mt-4 text-sm text-muted-foreground">
              Built for SkillCraft Technology Cybersecurity Internship — Task 03
            </p>
          </div>
          <div className="text-left text-sm text-muted-foreground sm:text-right">
            <p>React • TypeScript • Vite • Client-Side Security</p>
            <p className="mt-2">© 2026 PassGuard</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function StatusRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 rounded-lg border border-panel-border bg-console px-4 py-3">
      <dt className="min-w-0 truncate text-muted-foreground">{label}</dt>
      <dd className="shrink-0 font-semibold text-cyber">{value}</dd>
    </div>
  );
}

function InsightCard({ icon, title, text }: { icon: ReactNode; title: string; text: string }) {
  return (
    <article className="glass-panel rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:cyber-glow">
      <div className="grid size-12 place-items-center rounded-lg border border-cyber/45 bg-cyber-soft text-cyber">
        {icon}
      </div>
      <h3 className="mt-5 font-display text-xl font-bold text-foreground">{title}</h3>
      <p className="mt-3 leading-7 text-muted-foreground">{text}</p>
    </article>
  );
}
