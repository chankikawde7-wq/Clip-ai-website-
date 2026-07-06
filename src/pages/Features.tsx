import { motion } from "motion/react";
import { Video, Image as ImageIcon, User, Mic, FileText, Layout, Type, Eraser, Film, PlaySquare, BookOpen, Layers, Music, Volume2, Mic2, Bot } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: <Video className="w-6 h-6" />,
      title: "AI Video Generator",
      desc: "Transform simple text prompts into high-quality, engaging videos instantly.",
      benefits: ["No editing skills needed", "Multiple art styles", "Export in 4K resolution"],
      color: "bg-blue-500"
    },
    {
      icon: <ImageIcon className="w-6 h-6" />,
      title: "AI Image Generator",
      desc: "Create stunning artwork, photorealistic images, and graphics from text.",
      benefits: ["Midjourney-level quality", "Unlimited variations", "Commercial use rights"],
      color: "bg-purple-500"
    },
    {
      icon: <User className="w-6 h-6" />,
      title: "AI Avatar Generator",
      desc: "Generate professional talking avatars or cartoon versions of yourself.",
      benefits: ["100+ preset avatars", "Custom voice syncing", "Perfect for faceless channels"],
      color: "bg-indigo-500"
    },
    {
      icon: <Mic className="w-6 h-6" />,
      title: "AI Voice Generator",
      desc: "Clone voices or choose from our library of ultra-realistic AI voices.",
      benefits: ["50+ languages supported", "Emotion control", "Voice cloning capability"],
      color: "bg-pink-500"
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "AI Script Writer",
      desc: "Never stare at a blank page again. Auto-generate viral video scripts.",
      benefits: ["Hook generation", "Multiple tone options", "Optimized for retention"],
      color: "bg-rose-500"
    },
    {
      icon: <Layout className="w-6 h-6" />,
      title: "AI Thumbnail Generator",
      desc: "Create click-worthy YouTube thumbnails that drive massive views.",
      benefits: ["A/B testing tools", "High-contrast designs", "Custom text overlays"],
      color: "bg-orange-500"
    },
    {
      icon: <Type className="w-6 h-6" />,
      title: "AI Caption Generator",
      desc: "Automatically add dynamic, animated captions to your videos.",
      benefits: ["Hormozi-style captions", "Auto-emoji insertion", "99% accuracy"],
      color: "bg-amber-500"
    },
    {
      icon: <Eraser className="w-6 h-6" />,
      title: "AI Background Remover",
      desc: "Remove or replace video and image backgrounds with one click.",
      benefits: ["No green screen needed", "Clean edge detection", "Custom background replacement"],
      color: "bg-green-500"
    },
    {
      icon: <Film className="w-6 h-6" />,
      title: "AI Reel Generator",
      desc: "Turn long-form content into viral Instagram Reels instantly.",
      benefits: ["Auto-highlight detection", "Vertical formatting", "Trending audio sync"],
      color: "bg-emerald-500"
    },
    {
      icon: <PlaySquare className="w-6 h-6" />,
      title: "AI Shorts Generator",
      desc: "Create highly engaging YouTube Shorts optimized for the algorithm.",
      benefits: ["Pacing optimization", "Auto-framing", "Engagement hooks"],
      color: "bg-teal-500"
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "AI Story Generator",
      desc: "Craft compelling stories and narratives for your brand.",
      benefits: ["Character development", "Plot structuring", "Creative brainstorming"],
      color: "bg-cyan-500"
    },
    {
      icon: <Layers className="w-6 h-6" />,
      title: "AI Content Creator",
      desc: "A unified workspace to manage all your AI-generated assets.",
      benefits: ["Cloud storage", "Asset organization", "Team collaboration"],
      color: "bg-sky-500"
    },
    {
      icon: <Music className="w-6 h-6" />,
      title: "AI Music Generator",
      desc: "Generate original, royalty-free background music for your content.",
      benefits: ["Mood-based generation", "Custom track length", "Zero copyright claims"],
      color: "bg-violet-500"
    },
    {
      icon: <Volume2 className="w-6 h-6" />,
      title: "AI Text to Speech",
      desc: "Convert written articles or scripts into natural-sounding audio.",
      benefits: ["Podcast creation", "Audiobook generation", "Multiple accents"],
      color: "bg-fuchsia-500"
    },
    {
      icon: <Mic2 className="w-6 h-6" />,
      title: "AI Speech to Text",
      desc: "Transcribe audio and video files with near-perfect accuracy.",
      benefits: ["Fast processing", "Speaker identification", "Export to TXT/SRT"],
      color: "bg-pink-600"
    },
    {
      icon: <Bot className="w-6 h-6" />,
      title: "AI Chat Assistant",
      desc: "Your personal AI co-pilot for brainstorming and content strategy.",
      benefits: ["24/7 availability", "Context-aware suggestions", "Strategy planning"],
      color: "bg-blue-600"
    }
  ];

  return (
    <div className="pt-24 pb-20 bg-white dark:bg-slate-950 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">Powerful AI Features</h1>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Everything you need to create amazing content, packed into one single application. Discover what Clip AI Pro can do for you.
          </p>
        </div>

        {/* AdSense Placeholder */}
        <div className="w-full h-24 mb-16 bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 rounded-xl flex items-center justify-center text-slate-400 dark:text-slate-500 text-sm font-medium">
          Advertisement
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 hover:shadow-lg hover:border-indigo-200 dark:hover:border-indigo-900/50 transition-all group"
            >
              <div className={`w-14 h-14 rounded-2xl ${feature.color} text-white flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{feature.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6 text-sm leading-relaxed">{feature.desc}</p>
              
              <div className="space-y-2">
                <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-3">Benefits</h4>
                {feature.benefits.map((benefit, bIdx) => (
                  <div key={bIdx} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* AdSense Placeholder */}
        <div className="w-full h-24 mt-16 bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 rounded-xl flex items-center justify-center text-slate-400 dark:text-slate-500 text-sm font-medium">
          Advertisement
        </div>

      </div>
    </div>
  );
}
