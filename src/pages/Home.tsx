import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Download, Play, Star, CheckCircle2, Zap, Video, Image as ImageIcon, MessageSquare, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 pb-32">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-50/50 to-white dark:from-indigo-950/20 dark:to-slate-950 z-0" />
        
        {/* Abstract shapes */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-purple-500/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-indigo-500/10 blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex-1 text-center lg:text-left pt-10"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-sm font-semibold mb-6">
                <Star className="w-4 h-4 fill-current" />
                <span>#1 AI Content Creator App</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-slate-900 dark:text-white mb-6 leading-tight">
                Create Amazing <br className="hidden lg:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600">
                  Content with AI.
                </span>
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Unlock your creativity with Clip AI Pro. Generate stunning videos, images, avatars, and scripts in seconds using advanced artificial intelligence.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Link
                  to="/download"
                  className="w-full sm:w-auto px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-semibold text-lg transition-all shadow-xl shadow-indigo-500/25 flex items-center justify-center gap-2"
                >
                  <Download className="w-5 h-5" />
                  <span>Download Free</span>
                </Link>
                <Link
                  to="/features"
                  className="w-full sm:w-auto px-8 py-4 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 rounded-2xl font-semibold text-lg transition-all flex items-center justify-center gap-2"
                >
                  <span>Explore Features</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
              
              <div className="mt-10 flex items-center justify-center lg:justify-start gap-6 text-sm text-slate-500 dark:text-slate-400 font-medium">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>Free to try</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>No credit card required</span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex-1 w-full max-w-lg lg:max-w-none relative"
            >
              <div className="relative rounded-[2.5rem] border-[8px] border-slate-900 dark:border-slate-800 bg-slate-900 overflow-hidden shadow-2xl aspect-[9/19] sm:aspect-[4/3] lg:aspect-[9/19] max-w-[320px] mx-auto">
                <img 
                  src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop" 
                  alt="App interface preview" 
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                
                {/* Simulated UI elements */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 mb-4">
                    <div className="h-2 w-12 bg-indigo-500 rounded-full mb-2" />
                    <div className="h-4 w-3/4 bg-white/80 rounded-md mb-2" />
                    <div className="h-3 w-1/2 bg-white/50 rounded-md" />
                  </div>
                  <div className="flex justify-center">
                    <button className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center shadow-lg shadow-indigo-500/50 hover:scale-105 transition-transform">
                      <Zap className="w-7 h-7 text-white" />
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Floating badges */}
              <div className="absolute top-20 -left-6 sm:-left-12 bg-white dark:bg-slate-800 p-3 sm:p-4 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 flex items-center gap-3 animate-bounce" style={{ animationDuration: '3s' }}>
                <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center">
                  <Video className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">Generation</p>
                  <p className="font-bold text-slate-900 dark:text-white">4K Video</p>
                </div>
              </div>

              <div className="absolute bottom-32 -right-6 sm:-right-12 bg-white dark:bg-slate-800 p-3 sm:p-4 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 flex items-center gap-3 animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}>
                <div className="w-10 h-10 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center">
                  <ImageIcon className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">AI Art</p>
                  <p className="font-bold text-slate-900 dark:text-white">Ultra HD</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* AdSense Placeholder */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-8">
        <div className="w-full h-24 bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 rounded-xl flex items-center justify-center text-slate-400 dark:text-slate-500 text-sm font-medium">
          Advertisement
        </div>
      </div>

      {/* Stats Section */}
      <section className="py-16 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-x divide-slate-200 dark:divide-slate-800 text-center">
            {[
              { label: "Active Users", value: "2M+" },
              { label: "Downloads", value: "5M+" },
              { label: "AI Models", value: "50+" },
              { label: "App Rating", value: "4.9/5" },
            ].map((stat, i) => (
              <div key={i} className="px-4">
                <div className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-2">{stat.value}</div>
                <div className="text-sm text-slate-500 dark:text-slate-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Preview */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">All-In-One AI Studio</h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg">Replace a dozen apps with one powerful tool. Clip AI Pro has everything you need to create viral content.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Video className="w-6 h-6" />,
                title: "AI Video Generator",
                desc: "Turn text prompts into high-quality videos in seconds.",
                color: "bg-blue-500"
              },
              {
                icon: <ImageIcon className="w-6 h-6" />,
                title: "AI Image & Avatar",
                desc: "Create stunning AI art and personalized avatars.",
                color: "bg-purple-500"
              },
              {
                icon: <MessageSquare className="w-6 h-6" />,
                title: "AI Script & Captions",
                desc: "Auto-generate engaging scripts and viral captions.",
                color: "bg-pink-500"
              }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-slate-950 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm"
              >
                <div className={`w-12 h-12 rounded-2xl ${feature.color} text-white flex items-center justify-center mb-6 shadow-lg`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{feature.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6">{feature.desc}</p>
                <Link to="/features" className="text-indigo-600 dark:text-indigo-400 font-semibold flex items-center gap-1 hover:gap-2 transition-all">
                  Learn more <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/features" className="inline-flex items-center justify-center px-6 py-3 border-2 border-indigo-600 dark:border-indigo-500 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-500 font-semibold rounded-full transition-colors">
              View All 15+ Features
            </Link>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-24 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Loved by Creators</h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg">Join millions of creators who are already using Clip AI Pro.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Sarah Jenkins",
                role: "Content Creator",
                text: "This app completely changed my workflow. What used to take hours now takes minutes. The AI video generation is mind-blowing!"
              },
              {
                name: "David Chen",
                role: "Digital Marketer",
                text: "The best AI tool on the market right now. The script writer combined with the voice generator makes creating ads so incredibly easy."
              },
              {
                name: "Elena Rodriguez",
                role: "YouTuber",
                text: "I use the AI thumbnail generator for every video now. My click-through rates have doubled since I started using Clip AI Pro."
              }
            ].map((review, i) => (
              <div key={i} className="bg-slate-50 dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-1 mb-4 text-amber-500">
                  {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-slate-700 dark:text-slate-300 mb-6 italic">"{review.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center text-indigo-700 dark:text-indigo-300 font-bold">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white text-sm">{review.name}</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400">{review.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AdSense Placeholder */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="w-full h-24 bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 rounded-xl flex items-center justify-center text-slate-400 dark:text-slate-500 text-sm font-medium">
          Advertisement
        </div>
      </div>

    </div>
  );
}
