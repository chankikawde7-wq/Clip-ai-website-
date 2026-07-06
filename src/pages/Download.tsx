import { motion } from "motion/react";
import { Download, ShieldCheck, Smartphone, Cpu, CheckCircle2 } from "lucide-react";

export default function DownloadPage() {
  return (
    <div className="pt-24 pb-20 bg-white dark:bg-slate-950 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-indigo-600 rounded-3xl shadow-xl shadow-indigo-500/30 mb-8">
            <Download className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">Download Clip AI Pro</h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Get the ultimate AI content creation studio on your device today. Join millions of creators making viral content.
          </p>
        </div>

        <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 md:p-12 shadow-xl mb-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            
            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Version Information</h2>
              <ul className="space-y-4 mb-8">
                <li className="flex justify-between items-center py-3 border-b border-slate-200 dark:border-slate-800">
                  <span className="text-slate-500 dark:text-slate-400">Current Version</span>
                  <span className="font-semibold text-slate-900 dark:text-white">v3.4.2 Pro</span>
                </li>
                <li className="flex justify-between items-center py-3 border-b border-slate-200 dark:border-slate-800">
                  <span className="text-slate-500 dark:text-slate-400">Last Updated</span>
                  <span className="font-semibold text-slate-900 dark:text-white">October 15, 2023</span>
                </li>
                <li className="flex justify-between items-center py-3 border-b border-slate-200 dark:border-slate-800">
                  <span className="text-slate-500 dark:text-slate-400">App Size</span>
                  <span className="font-semibold text-slate-900 dark:text-white">48.5 MB</span>
                </li>
                <li className="flex justify-between items-center py-3 border-b border-slate-200 dark:border-slate-800">
                  <span className="text-slate-500 dark:text-slate-400">Total Downloads</span>
                  <span className="font-semibold text-slate-900 dark:text-white">5,000,000+</span>
                </li>
              </ul>

              <div className="flex items-center gap-2 text-sm text-emerald-600 dark:text-emerald-400 font-medium bg-emerald-50 dark:bg-emerald-500/10 p-3 rounded-xl">
                <ShieldCheck className="w-5 h-5" />
                <span>Verified Safe & Secure. No viruses or malware.</span>
              </div>
            </div>

            <div className="space-y-4">
              <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl p-4 flex items-center justify-between transition-all shadow-lg shadow-indigo-500/25 group">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <Download className="w-6 h-6" />
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-lg">Direct APK Download</div>
                    <div className="text-indigo-200 text-sm">Fast & Secure Server</div>
                  </div>
                </div>
              </button>

              <button className="w-full bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 dark:hover:bg-slate-700 text-white rounded-2xl p-4 flex items-center justify-between transition-all border border-transparent dark:border-slate-700 group">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <div className="text-slate-400 text-xs font-medium uppercase tracking-wider">Get it on</div>
                    <div className="font-bold text-lg">Google Play</div>
                  </div>
                </div>
              </button>
            </div>

          </div>
        </div>

        {/* AdSense Placeholder */}
        <div className="w-full h-24 mb-12 bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 rounded-xl flex items-center justify-center text-slate-400 dark:text-slate-500 text-sm font-medium">
          Advertisement
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <Smartphone className="w-6 h-6 text-indigo-500" />
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Requirements</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0 mt-0.5" />
                <span className="text-slate-600 dark:text-slate-400">Android 8.0 (Oreo) or later</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0 mt-0.5" />
                <span className="text-slate-600 dark:text-slate-400">Minimum 2GB RAM (4GB recommended)</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0 mt-0.5" />
                <span className="text-slate-600 dark:text-slate-400">100MB free storage space</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0 mt-0.5" />
                <span className="text-slate-600 dark:text-slate-400">Active internet connection for AI features</span>
              </li>
            </ul>
          </div>

          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <Cpu className="w-6 h-6 text-indigo-500" />
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Installation Guide</h3>
            </div>
            <ol className="space-y-4 relative pl-4 border-l-2 border-slate-200 dark:border-slate-800 ml-3">
              <li className="relative">
                <div className="absolute -left-[1.35rem] top-1 w-4 h-4 rounded-full bg-indigo-500 ring-4 ring-white dark:ring-slate-900" />
                <p className="font-semibold text-slate-900 dark:text-white">Download the APK</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">Click the direct download button above.</p>
              </li>
              <li className="relative">
                <div className="absolute -left-[1.35rem] top-1 w-4 h-4 rounded-full bg-indigo-500 ring-4 ring-white dark:ring-slate-900" />
                <p className="font-semibold text-slate-900 dark:text-white">Enable Unknown Sources</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">Go to Settings &gt; Security and enable "Install from unknown sources".</p>
              </li>
              <li className="relative">
                <div className="absolute -left-[1.35rem] top-1 w-4 h-4 rounded-full bg-indigo-500 ring-4 ring-white dark:ring-slate-900" />
                <p className="font-semibold text-slate-900 dark:text-white">Install and Open</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">Tap the downloaded file and select Install. Open the app to begin.</p>
              </li>
            </ol>
          </div>
        </div>

      </div>
    </div>
  );
}
