"use client";
import { useState, useEffect } from "react";
import { MapPin, Phone, Mail, Send, Clock } from "lucide-react";
import { SectionHeading } from "@/shared/ui/SectionHeading";
import { SITE_CONFIG } from "@/shared/config/siteConfig";
import { sanitizeInput, isValidEmail, isValidPhone } from "../utils/validation";

export function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "", botcheck: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  
  // Anti-bot protection
  const [formLoadTime, setFormLoadTime] = useState(0);
  const [lastSubmitTime, setLastSubmitTime] = useState(0);

  useEffect(() => {
    setFormLoadTime(Date.now());
  }, []);

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
      setErrorMessage("Please wait a moment before submitting again.");
      setStatus("error");
      return;
    }

    // Validation
    if (!formData.name.trim() || !formData.message.trim()) {
      setErrorMessage("Please fill out all required fields.");
      setStatus("error");
      return;
    }

    if (!isValidEmail(formData.email)) {
      setErrorMessage("Please enter a valid email address.");
      setStatus("error");
      return;
    }

    if (!isValidPhone(formData.phone)) {
      setErrorMessage("Please enter a valid phone number.");
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
        throw new Error(result.message || "Failed to send message");
      }
    } catch (error) {
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again or call us directly.");
    }
  };

  return (
    <section id="contact" className="py-24 bg-sky-50">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading 
          title="We Are Here For You" 
          subtitle="Whether you have questions, want to schedule a visit, or just need to talk about options, our team is ready to help."
          centered={true}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="bg-navy-900 rounded-3xl p-8 md:p-12 text-white shadow-xl">
            <h3 className="text-2xl font-bold mb-8 text-sky-100">Get in Touch</h3>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-blue-600/20 p-3 rounded-lg">
                  <MapPin className="h-6 w-6 text-sky-300" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-sky-100 mb-1">Visit Us</h4>
                  <p className="text-sky-100/70 leading-relaxed">{SITE_CONFIG.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-600/20 p-3 rounded-lg">
                  <Phone className="h-6 w-6 text-sky-300" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-sky-100 mb-1">Call Us</h4>
                  <p className="text-sky-100/70">{SITE_CONFIG.phone}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-600/20 p-3 rounded-lg">
                  <Mail className="h-6 w-6 text-sky-300" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-sky-100 mb-1">Email Us</h4>
                  <p className="text-sky-100/70">{SITE_CONFIG.email}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-600/20 p-3 rounded-lg">
                  <Clock className="h-6 w-6 text-sky-300" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-sky-100 mb-1">Working Hours</h4>
                  <p className="text-sky-100/70">{SITE_CONFIG.workingHours}</p>
                </div>
              </div>
            </div>
            
            {/* Map Placeholder */}
            <div className="mt-12 h-48 bg-white/5 rounded-xl border border-white/10 flex items-center justify-center">
              <span className="text-sky-100/40 font-medium">Interactive Map Placeholder</span>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
            <h3 className="text-2xl font-bold mb-8 text-navy-800">Send us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Honeypot Field */}
              <input type="text" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" onChange={handleChange} value={formData.botcheck} />
              
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-navy-700 mb-2">Full Name *</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required 
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white"
                  placeholder="John Doe"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-navy-700 mb-2">Email Address *</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required 
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-navy-700 mb-2">Phone Number *</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    required 
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white"
                    placeholder="+55 (11) 90000-0000"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-navy-700 mb-2">Your Message *</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={4} 
                  required 
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white resize-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              {status === "error" && (
                <div className="p-4 bg-red-50 text-red-600 rounded-xl text-sm font-medium">
                  {errorMessage}
                </div>
              )}

              {status === "success" && (
                <div className="p-4 bg-green-50 text-green-600 rounded-xl text-sm font-medium">
                  Message sent successfully! We will get back to you soon.
                </div>
              )}

              <button 
                type="submit" 
                disabled={status === "loading" || status === "success"}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-300"
              >
                {status === "loading" ? "Sending..." : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
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
