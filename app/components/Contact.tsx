"use client";

import { useState } from "react";
import { Mail, MapPin, Send, MessageCircle } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();
  const c = t.contact;
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`S.CoreTech — ${form.name}`);
    const body = encodeURIComponent(
      `${c.nameLabel}: ${form.name}\n${c.emailFieldLabel}: ${form.email}\n\n${c.messageLabel}:\n${form.message}`
    );
    window.location.href = `mailto:info@escoretech.com.mx?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contacto" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-[#C8102E] text-sm font-semibold uppercase tracking-widest mb-4">
            {c.label}
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#1F3589]">{c.heading}</h2>
          <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">{c.sub}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <div className="flex items-start gap-4 p-6 rounded-2xl bg-gray-50 border border-gray-100">
              <div className="w-11 h-11 rounded-xl bg-[#1F3589]/10 flex items-center justify-center shrink-0">
                <Mail size={20} className="text-[#1F3589]" />
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-1">
                  {c.emailLabel}
                </p>
                <a
                  href="mailto:info@escoretech.com.mx"
                  className="text-gray-900 font-medium hover:text-[#C8102E] transition-colors"
                >
                  info@escoretech.com.mx
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 rounded-2xl bg-gray-50 border border-gray-100">
              <div className="w-11 h-11 rounded-xl bg-[#1F3589]/10 flex items-center justify-center shrink-0">
                <MapPin size={20} className="text-[#1F3589]" />
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-1">
                  {c.locationLabel}
                </p>
                <p className="text-gray-900 font-medium">{c.location}</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 rounded-2xl bg-gray-50 border border-gray-100">
              <div className="w-11 h-11 rounded-xl bg-[#25D366]/20 flex items-center justify-center shrink-0">
                <MessageCircle size={20} className="text-[#25D366]" />
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-1">
                  {c.whatsappLabel}
                </p>
                <a
                  href="https://wa.me/521XXXXXXXXXX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-900 font-medium hover:text-[#25D366] transition-colors"
                >
                  +52 (XX) XXXX XXXX
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            {sent ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mb-4">
                  <Send size={28} className="text-green-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{c.successTitle}</h3>
                <p className="text-gray-500">{c.successSub}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{c.nameLabel}</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder={c.namePlaceholder}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#1F3589]/30 focus:border-[#1F3589] transition text-gray-900"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{c.emailFieldLabel}</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder={c.emailPlaceholder}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#1F3589]/30 focus:border-[#1F3589] transition text-gray-900"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{c.messageLabel}</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder={c.messagePlaceholder}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#1F3589]/30 focus:border-[#1F3589] transition resize-none text-gray-900"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#C8102E] text-white font-semibold hover:bg-[#a00d23] transition-colors"
                >
                  <Send size={18} />
                  {c.submit}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
