"use client";

import { Suspense, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Container, Section } from "@/components/ui";

const causes = [
  { id: "education", label: "Education for All", icon: "📚" },
  { id: "food", label: "Hunger Relief & Food", icon: "🍽️" },
  { id: "medical", label: "Medical Aid", icon: "🏥" },
  { id: "orphans", label: "Orphan & Widow Assistance", icon: "🤲" },
  { id: "social-justice", label: "Social Justice & Advocacy", icon: "⚖️" },
  { id: "livelihoods", label: "Financial Support & Livelihoods", icon: "💼" },
  { id: "general", label: "Where Most Needed", icon: "❤️" },
];

const amounts = [25, 50, 100, 250, 500];

function DonateForm() {
  const searchParams = useSearchParams();
  const preselectedCampaign = searchParams.get("campaign") || "";
  const preselectedAmount = searchParams.get("amount") || "";

  const [step, setStep] = useState(1);
  const [selectedCause, setSelectedCause] = useState(preselectedCampaign || "");
  const [selectedAmount, setSelectedAmount] = useState(preselectedAmount ? Number(preselectedAmount) : 0);
  const [customAmount, setCustomAmount] = useState("");
  const [frequency, setFrequency] = useState<"one-time" | "monthly">("one-time");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    cardNumber: "",
    expiry: "",
    cvc: "",
  });

  const handleCauseSelect = (causeId: string) => {
    setSelectedCause(causeId);
    setStep(2);
  };

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount("");
    setStep(3);
  };

  const handleCustomAmount = () => {
    const amount = Number(customAmount);
    if (amount > 0) {
      setSelectedAmount(amount);
      setStep(3);
    }
  };

  const handleFrequencySelect = (freq: "one-time" | "monthly") => {
    setFrequency(freq);
    setStep(4);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = "/donate/thank-you";
  };

  const selectedCauseData = causes.find((c) => c.id === selectedCause);

  return (
    <>
      {/* Progress Steps */}
      <section className="bg-surface border-b border-border-light py-6">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-between">
              {["Cause", "Amount", "Frequency", "Payment"].map((label, i) => (
                <div key={label} className="flex items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-colors ${
                      step > i + 1
                        ? "bg-primary text-text-inverse"
                        : step === i + 1
                        ? "bg-action text-text-inverse"
                        : "bg-surface-elevated text-text-muted"
                    }`}
                  >
                    {step > i + 1 ? "✓" : i + 1}
                  </div>
                  <span
                    className={`ml-2 text-sm font-medium hidden sm:block ${
                      step >= i + 1 ? "text-text-primary" : "text-text-muted"
                    }`}
                  >
                    {label}
                  </span>
                  {i < 3 && (
                    <div
                      className={`hidden md:block w-12 lg:w-20 h-0.5 mx-4 ${
                        step > i + 1 ? "bg-primary" : "bg-border"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Step Content */}
      <Section>
        <Container>
          <div className="max-w-3xl mx-auto">
            {/* Step 1: Choose Cause */}
            {step === 1 && (
              <div>
                <h2 className="text-2xl font-bold text-text-primary mb-2 text-center">
                  What would you like to support?
                </h2>
                <p className="text-text-secondary text-center mb-8">
                  Choose a cause that resonates with you.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {causes.map((cause) => (
                    <button
                      key={cause.id}
                      onClick={() => handleCauseSelect(cause.id)}
                      className={`flex items-center gap-4 p-5 rounded-xl border-2 text-left transition-all hover:shadow-md ${
                        selectedCause === cause.id
                          ? "border-primary bg-primary/5"
                          : "border-border-light bg-surface hover:border-primary/30"
                      }`}
                    >
                      <span className="text-2xl">{cause.icon}</span>
                      <span className="font-semibold text-text-primary">
                        {cause.label}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: Choose Amount */}
            {step === 2 && (
              <div>
                <h2 className="text-2xl font-bold text-text-primary mb-2 text-center">
                  How much would you like to give?
                </h2>
                <p className="text-text-secondary text-center mb-8">
                  Supporting: <span className="font-semibold text-primary">{selectedCauseData?.label}</span>
                </p>
                <div className="grid grid-cols-3 sm:grid-cols-5 gap-4 mb-6">
                  {amounts.map((amount) => (
                    <button
                      key={amount}
                      onClick={() => handleAmountSelect(amount)}
                      className={`py-4 rounded-xl border-2 font-bold text-lg transition-all ${
                        selectedAmount === amount
                          ? "border-primary bg-primary text-text-inverse"
                          : "border-border-light bg-surface text-text-primary hover:border-primary/30"
                      }`}
                    >
                      ${amount}
                    </button>
                  ))}
                </div>
                <div className="flex gap-4">
                  <input
                    type="number"
                    placeholder="Custom amount"
                    value={customAmount}
                    onChange={(e) => setCustomAmount(e.target.value)}
                    className="flex-1 px-4 py-3 border border-border-light rounded-xl focus:outline-none focus:border-primary"
                  />
                  <button
                    onClick={handleCustomAmount}
                    disabled={!customAmount || Number(customAmount) <= 0}
                    className="px-6 py-3 bg-primary text-text-inverse font-semibold rounded-xl hover:bg-primary-dark transition-colors disabled:opacity-50"
                  >
                    Continue
                  </button>
                </div>
                <button
                  onClick={() => setStep(1)}
                  className="mt-6 text-text-secondary hover:text-primary text-sm"
                >
                  ← Change cause
                </button>
              </div>
            )}

            {/* Step 3: Choose Frequency */}
            {step === 3 && (
              <div>
                <h2 className="text-2xl font-bold text-text-primary mb-2 text-center">
                  One-time or Monthly?
                </h2>
                <p className="text-text-secondary text-center mb-8">
                  You&apos;re donating <span className="font-semibold text-primary">${selectedAmount}</span> to{" "}
                  <span className="font-semibold text-primary">{selectedCauseData?.label}</span>
                </p>
                <div className="grid grid-cols-2 gap-6 max-w-md mx-auto">
                  <button
                    onClick={() => handleFrequencySelect("one-time")}
                    className={`p-6 rounded-xl border-2 text-center transition-all ${
                      frequency === "one-time"
                        ? "border-primary bg-primary/5"
                        : "border-border-light hover:border-primary/30"
                    }`}
                  >
                    <div className="text-3xl mb-2">💝</div>
                    <div className="font-bold text-text-primary">One-time</div>
                    <div className="text-sm text-text-muted mt-1">Single donation</div>
                  </button>
                  <button
                    onClick={() => handleFrequencySelect("monthly")}
                    className={`p-6 rounded-xl border-2 text-center transition-all ${
                      frequency === "monthly"
                        ? "border-primary bg-primary/5"
                        : "border-border-light hover:border-primary/30"
                    }`}
                  >
                    <div className="text-3xl mb-2">🔄</div>
                    <div className="font-bold text-text-primary">Monthly</div>
                    <div className="text-sm text-text-muted mt-1">Sustained impact</div>
                  </button>
                </div>
                <button
                  onClick={() => setStep(2)}
                  className="mt-8 block mx-auto text-text-secondary hover:text-primary text-sm"
                >
                  ← Change amount
                </button>
              </div>
            )}

            {/* Step 4: Payment */}
            {step === 4 && (
              <div>
                <h2 className="text-2xl font-bold text-text-primary mb-2 text-center">
                  Complete Your Donation
                </h2>
                <p className="text-text-secondary text-center mb-8">
                  {frequency === "monthly" ? "Monthly" : "One-time"} donation of{" "}
                  <span className="font-semibold text-primary">${selectedAmount}</span> to{" "}
                  <span className="font-semibold text-primary">{selectedCauseData?.label}</span>
                </p>

                <form onSubmit={handleSubmit} className="bg-surface rounded-2xl p-8 border border-border-light">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-text-primary mb-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 border border-border-light rounded-xl focus:outline-none focus:border-primary"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-text-primary mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 border border-border-light rounded-xl focus:outline-none focus:border-primary"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-text-primary mb-1">
                        Card Number
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.cardNumber}
                        onChange={(e) => setFormData({ ...formData, cardNumber: e.target.value })}
                        className="w-full px-4 py-3 border border-border-light rounded-xl focus:outline-none focus:border-primary"
                        placeholder="1234 5678 9012 3456"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-text-primary mb-1">
                          Expiry
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.expiry}
                          onChange={(e) => setFormData({ ...formData, expiry: e.target.value })}
                          className="w-full px-4 py-3 border border-border-light rounded-xl focus:outline-none focus:border-primary"
                          placeholder="MM/YY"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-text-primary mb-1">
                          CVC
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.cvc}
                          onChange={(e) => setFormData({ ...formData, cvc: e.target.value })}
                          className="w-full px-4 py-3 border border-border-light rounded-xl focus:outline-none focus:border-primary"
                          placeholder="123"
                        />
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-6 py-4 bg-action text-text-inverse font-bold text-lg rounded-xl hover:bg-action-dark transition-colors"
                  >
                    Complete Donation — ${selectedAmount}
                  </button>

                  <p className="mt-4 text-center text-xs text-text-muted">
                    🔒 Secure payment powered by Stripe
                  </p>
                </form>

                <button
                  onClick={() => setStep(3)}
                  className="mt-6 block mx-auto text-text-secondary hover:text-primary text-sm"
                >
                  ← Change frequency
                </button>
              </div>
            )}
          </div>
        </Container>
      </Section>
    </>
  );
}

export default function DonatePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-dark via-primary to-primary-light py-16">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-text-inverse">
              Make a Donation
            </h1>
            <p className="mt-4 text-lg text-text-inverse/80">
              Your generosity creates real change. Choose where your donation goes.
            </p>
          </div>
        </Container>
      </section>

      <Suspense fallback={
        <Section>
          <Container>
            <div className="max-w-3xl mx-auto text-center py-16">
              <p className="text-text-muted">Loading donation form...</p>
            </div>
          </Container>
        </Section>
      }>
        <DonateForm />
      </Suspense>
    </>
  );
}
