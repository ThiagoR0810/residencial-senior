"use client";
import { useState } from "react";
import { MapPin, Phone, Mail, Send, Clock } from "lucide-react";
import { useTranslations } from "next-intl";
import { SectionHeading } from "@/shared/ui/SectionHeading";
import { SITE_CONFIG } from "@/shared/config/siteConfig";
import { sanitizeInput, isValidEmail, isValidPhone } from "../utils/validation";

export function ContactSection() {
  const t = useTranslations();
  const contactT = useTranslations("contact");
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "", botcheck: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  
  // Anti-bot protection
  const [formLoadTime] = useState(() => Date.now());
  const [lastSubmitTime, setLastSubmitTime] = useState(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Honeypot check
    if (formData.botcheck) return;
    
    // Minimum fill time check (3 seconds)
    if (Date.now() - formLoadTime < 3000) return;

    // Rate limiting check (10 seconds between submissions)
    if (Date.now() - lastSubmitTime < 10000) {
      setErrorMessage(contactT("errors.rateLimit"));
      setStatus("error");
      return;
    }

    // Validation
    if (!formData.name.trim() || !formData.message.trim()) {
      setErrorMessage(contactT("errors.required"));
      setStatus("error");
      return;
    }

    if (!isValidEmail(formData.email)) {
      setErrorMessage(contactT("errors.email"));
      setStatus("error");
      return;
    }

    if (!isValidPhone(formData.phone)) {
      setErrorMessage(contactT("errors.phone"));
      setStatus("error");
      return;
    }

    setStatus("loading");
    setLastSubmitTime(Date.now());

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: SITE_CONFIG.web3formsKey,
          name: sanitizeInput(formData.name),
          email: sanitizeInput(formData.email),
          phone: sanitizeInput(formData.phone),
          message: sanitizeInput(formData.message),
        }),
      });

      const result = await response.json();
      
      if (result.success) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", message: "", botcheck: "" });
      } else {
        throw new Error(result.message || contactT("errors.sendFailed"));
      }
    } catch {
      setStatus("error");
      setErrorMessage(contactT("errors.generic"));
    }
  };

  return (
    <section id="contact" className="py-24 bg-sky-50">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading 
          title={contactT("title")}
          subtitle={contactT("subtitle")}
          centered={true}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="bg-navy-900 rounded-3xl p-8 md:p-12 text-white shadow-xl">
            <h3 className="text-2xl font-bold mb-8 text-sky-100">{contactT("getInTouch")}</h3>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-blue-600/20 p-3 rounded-lg">
                  <MapPin className="h-6 w-6 text-sky-300" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-sky-100 mb-1">{contactT("visitUs")}</h4>
                  <p className="text-sky-100/70 leading-relaxed">{SITE_CONFIG.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-600/20 p-3 rounded-lg">
                  <Phone className="h-6 w-6 text-sky-300" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-sky-100 mb-1">{contactT("callUs")}</h4>
                  <p className="text-sky-100/70">{SITE_CONFIG.phone}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-600/20 p-3 rounded-lg">
                  <Mail className="h-6 w-6 text-sky-300" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-sky-100 mb-1">{contactT("emailUs")}</h4>
                  <p className="text-sky-100/70">{SITE_CONFIG.email}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-600/20 p-3 rounded-lg">
                  <Clock className="h-6 w-6 text-sky-300" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-sky-100 mb-1">{contactT("workingHours")}</h4>
                  <p className="text-sky-100/70">{t("site.workingHours")}</p>
                </div>
              </div>
            </div>
            
            {/* Map Placeholder */}
            <div className="mt-12 h-48 bg-white/5 rounded-xl border border-white/10 flex items-center justify-center">
              <span className="text-sky-100/40 font-medium">{contactT("mapPlaceholder")}</span>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
            <h3 className="text-2xl font-bold mb-8 text-navy-800">{contactT("sendMessage")}</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Honeypot Field */}
              <input type="text" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" onChange={handleChange} value={formData.botcheck} />
              
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-navy-700 mb-2">{contactT("form.fullName")}</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required 
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white"
                  placeholder={contactT("form.fullNamePlaceholder")}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-navy-700 mb-2">{contactT("form.email")}</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required 
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white"
                    placeholder={contactT("form.emailPlaceholder")}
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-navy-700 mb-2">{contactT("form.phone")}</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    required 
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white"
                    placeholder={contactT("form.phonePlaceholder")}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-navy-700 mb-2">{contactT("form.message")}</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={4} 
                  required 
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white resize-none"
                  placeholder={contactT("form.messagePlaceholder")}
                ></textarea>
              </div>

              {status === "error" && (
                <div className="p-4 bg-red-50 text-red-600 rounded-xl text-sm font-medium">
                  {errorMessage}
                </div>
              )}

              {status === "success" && (
                <div className="p-4 bg-green-50 text-green-600 rounded-xl text-sm font-medium">
                  {contactT("form.success")}
                </div>
              )}

              <button 
                type="submit" 
                disabled={status === "loading" || status === "success"}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-300"
              >
                {status === "loading" ? contactT("form.sending") : (
                  <>
                    <Send className="w-5 h-5" />
                    {contactT("form.send")}
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
