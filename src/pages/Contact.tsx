import { Mail, MessageSquare, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <div className="pt-24 pb-20 bg-white dark:bg-slate-950 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">Contact Us</h1>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Have questions about Clip AI Pro? We're here to help. Send us a message and our support team will get back to you shortly.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 max-w-5xl mx-auto">
          
          <div className="lg:col-span-1 space-y-8">
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Get in Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white">Email Support</h4>
                    <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">We aim to respond within 24 hours.</p>
                    <a href="mailto:support@clipaipro.com" className="text-indigo-600 dark:text-indigo-400 text-sm font-medium hover:underline mt-1 block">support@clipaipro.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center shrink-0">
                    <MessageSquare className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white">Live Chat</h4>
                    <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">Available for Pro users 24/7.</p>
                    <button className="text-indigo-600 dark:text-indigo-400 text-sm font-medium hover:underline mt-1 block">Start a conversation</button>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white">Office HQ</h4>
                    <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">123 AI Boulevard, Tech District<br />San Francisco, CA 94105</p>
                  </div>
                </div>
              </div>
            </div>

            {/* AdSense Placeholder */}
            <div className="w-full h-[250px] bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 rounded-xl flex items-center justify-center text-slate-400 dark:text-slate-500 text-sm font-medium">
              Ad Placement
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 shadow-sm">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-slate-900 dark:text-slate-300">Full Name</label>
                    <input 
                      type="text" 
                      id="name"
                      className="w-full px-4 py-3 bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-800 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all dark:text-white"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-slate-900 dark:text-slate-300">Email Address</label>
                    <input 
                      type="email" 
                      id="email"
                      className="w-full px-4 py-3 bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-800 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all dark:text-white"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-slate-900 dark:text-slate-300">Subject</label>
                  <select 
                    id="subject"
                    className="w-full px-4 py-3 bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-800 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all dark:text-white"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="support">Technical Support</option>
                    <option value="billing">Billing & Subscriptions</option>
                    <option value="feedback">Feedback & Suggestions</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-slate-900 dark:text-slate-300">Message</label>
                  <textarea 
                    id="message"
                    rows={6}
                    className="w-full px-4 py-3 bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-800 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all resize-none dark:text-white"
                    placeholder="How can we help you?"
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl transition-all shadow-lg shadow-indigo-500/25"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
