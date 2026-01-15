"use client"
import { motion } from "framer-motion"
import {
  FaRoad,
  FaShieldAlt,
  FaFemale,
  FaGraduationCap,
  FaHospital,
  FaBriefcase,
  FaBalanceScale,
  FaVoteYea,
  FaLightbulb,
  FaUserTie,
  FaHandsHelping,
  FaSearchLocation,
  FaCity,
  FaRocket,
  FaUserShield,
  FaUniversity,
  FaBullhorn,
  FaFileAlt,
} from "react-icons/fa"

export default function AminulManifestoPage() {
  const manifestoSections = [
    {
      id: "rehabilitation",
      icon: FaRoad,
      title: "নাগরিক সুবিধা, রাস্তাঘাট ও ড্রেনেজ ব্যবস্থার উন্নতি",
      color: "from-blue-600 to-indigo-700",
      content: [
        "ঢাকা–১৪ এলাকার নাগরিক জীবনের প্রধান সংকট হলো ভাঙা রাস্তা, জলাবদ্ধতা ও অপরিকল্পিত ড্রেনেজ ব্যবস্থা। এই সমস্যাগুলো মানুষের চলাচল, ব্যবসা ও স্বাস্থ্যঝুঁকি বাড়াচ্ছে। পরিকল্পিত নগর ব্যবস্থাপনা, মানসম্মত রাস্তা ও কার্যকর ড্রেনেজ উন্নয়নের মাধ্যমে একটি পরিচ্ছন্ন ও বাসযোগ্য এলাকা গড়ে তোলা হবে।",
      ],
    },
    {
      id: "urdu-community",
      icon: FaShieldAlt,
      title: "মাদক, সন্ত্রাস ও দুর্নীতিমুক্ত সমাজ গড়া",
      color: "from-violet-500 to-purple-600",
      content: [
        "মাদক ও সন্ত্রাস যুবসমাজকে ধ্বংস করছে এবং সমাজে ভয় ও অস্থিরতা সৃষ্টি করছে। রাজনৈতিক আশ্রয়ে গড়ে ওঠা দুর্নীতি ও সন্ত্রাসের বিরুদ্ধে থাকবে কঠোর ও আপসহীন অবস্থান। জনগণ ও আইনশৃঙ্খলা বাহিনীর সমন্বয়ে একটি শান্তিপূর্ণ ও নিরাপদ সমাজ প্রতিষ্ঠা করা হবে।",
      ],
    },
    {
      id: "education-quality",
      icon: FaFemale,
      title: "নারীর কর্মসংস্থান, নিরাপত্তা ও মর্যাদা নিশ্চিত করা",
      color: "from-sky-500 to-blue-600",
      content: [
        "নারী নিরাপত্তা ও সম্মান ছাড়া কোনো সমাজ টেকসইভাবে এগোতে পারে না। কর্মক্ষেত্র, শিক্ষা প্রতিষ্ঠান ও জনপরিসরে নারীর নিরাপত্তা নিশ্চিত করা হবে। নারীদের জন্য কর্মসংস্থান ও আত্মনির্ভরশীলতার সুযোগ সৃষ্টি করে একটি নারীবান্ধব ঢাকা–১৪ গড়ে তোলা হবে।",
      ],
    },
    {
      id: "scholarship",
      icon: FaGraduationCap,
      title: "মেধাভিত্তিক ও কর্মমুখী শিক্ষা ব্যবস্থা গড়ে তোলা",
      color: "from-amber-500 to-yellow-600",
      content: [
        "শিক্ষা হতে হবে মেধা ও দক্ষতার ভিত্তিতে, কেবল সনদনির্ভর নয়। শিক্ষার্থীদের বাস্তব জীবনের জন্য প্রস্তুত করতে কর্মমুখী ও প্রযুক্তিনির্ভর শিক্ষা ব্যবস্থার প্রসার ঘটানো হবে। শিক্ষার মানোন্নয়ন ও ঝরে পড়া রোধে কার্যকর উদ্যোগ নেওয়া হবে।",
      ],
    },
    {
      id: "healthcare",
      icon: FaHospital,
      title: "স্বাস্থ্য সেবার সার্বিক গুণগত মান উন্নয়ন",
      color: "from-rose-500 to-red-600",
      content: [
        "স্বাস্থ্যসেবা মানুষের মৌলিক অধিকার। সরকারি ও বেসরকারি স্বাস্থ্যসেবার মান উন্নয়ন, সহজলভ্য চিকিৎসা এবং দরিদ্র মানুষের জন্য সহায়তা নিশ্চিত করা হবে। কেউ যেন চিকিৎসার অভাবে কষ্ট না পায়—এটাই আমাদের অঙ্গীকার।",
      ],
    },
    {
      id: "higher-education",
      icon: FaBriefcase,
      title: "যুবসমাজের কর্মসংস্থান ও প্রশিক্ষণের ব্যবস্থা করা",
      color: "from-indigo-500 to-blue-600",
      content: [
        "যুবসমাজ এই দেশের সবচেয়ে বড় শক্তি, কিন্তু বেকারত্ব তাদের ভবিষ্যৎ অনিশ্চিত করছে। দক্ষতা উন্নয়ন, কারিগরি ও আইটি প্রশিক্ষণের মাধ্যমে কর্মসংস্থানের সুযোগ তৈরি করা হবে। তরুণদের স্বপ্ন পূরণের পথ খুলে দিতেই এই উদ্যোগ।",
      ],
    },
    {
      id: "nationalization",
      icon: FaBalanceScale,
      title: "গুম ও বিচারবহির্ভূত হত্যাকাণ্ড বন্ধ করা",
      color: "from-emerald-600 to-green-700",
      content: [
        "গুম ও বিচারবহির্ভূত হত্যাকাণ্ড একটি মানবিক ও গণতান্ত্রিক রাষ্ট্রের জন্য অগ্রহণযোগ্য। এসব ঘটনার অবসান এবং ভুক্তভোগী পরিবারগুলোর ন্যায়বিচার নিশ্চিত করা হবে। ভয় নয়—আইনের শাসন ও মানবাধিকারের ভিত্তিতেই রাষ্ট্র পরিচালিত হবে।",
      ],
    },
    {
      id: "shelter",
      icon: FaVoteYea,
      title: "আপনার একটি ভোটেই বদলাতে পারে ঢাকা–১৪ এর ভবিষ্যৎ",
      color: "from-pink-500 to-rose-600",
      content: [
        "পরিবর্তন একদিনে আসে না, কিন্তু একটি সচেতন ভোট সেই পরিবর্তনের সূচনা করতে পারে। আপনার ভোটই নির্ধারণ করবে ঢাকা–১৪ হবে নিরাপদ, মানবিক ও উন্নত একটি এলাকা কি না। ন্যায়, মর্যাদা ও ভবিষ্যতের পক্ষে আপনার ভোটই আমাদের শক্তি।",
      ],
    },
    {
      id: "utilities",
      icon: FaLightbulb,
      title: "কেন এই ইশতেহার",
      color: "from-yellow-500 to-amber-600",
      content: [
        "আমরা এমন একটি সময়ে দাঁড়িয়ে আছি, যখন মানুষ নিরাপত্তাহীন, ন্যায়বিচার অনিশ্চিত এবং রাষ্ট্রীয় প্রতিষ্ঠানগুলো জবাবদিহিতা হারিয়েছে। গুম, খুন, দমন-পীড়ন ও ভয় আমাদের দৈনন্দিন বাস্তবতা হয়ে উঠেছে। এই পরিস্থিতিতে নীরব থাকা মানে অন্যায়ের পাশে দাঁড়ানো। তাই এই ইশতেহার একটি স্পষ্ট ঘোষণা—ভয় নয় ন্যায়, নীরবতা নয় সত্য, দায়মুক্তি নয় জবাবদিহিতা।",
      ],
    },
    {
      id: "employment",
      icon: FaUserTie,
      title: "কর্মসংস্থান সৃষ্টি",
      color: "from-teal-500 to-emerald-600",
      content: [
        "বেকার ও তরুণদের কর্মসংস্থান সৃষ্টির লক্ষ্যে কারিগরি প্রশিক্ষণ, তৃতীয় ভাষা শিক্ষা এবং Job Fair-এর মাধ্যমে কর্মসংস্থান নিশ্চিত করা",
      ],
    },
    {
      id: "sports-academy",
      icon: FaHandsHelping,
      title: "আমার রাজনীতির দর্শন",
      color: "from-green-500 to-teal-600",
      content: [
        "আমার রাজনীতি প্রতিহিংসার রাজনীতি নয়। আমার রাজনীতি মানুষের জীবনের রাজনীতি। আমি বিশ্বাস করি রাষ্ট্র মানুষের জন্য, মানুষ রাষ্ট্রের জন্য নয়। ন্যায়বিচার বিলম্বিত হতে পারে, কিন্তু অস্বীকার করা যায় না। সত্য চাপা দেওয়া যায়, মুছে ফেলা যায় না। রাজনীতি যদি মানুষের নিরাপত্তা, মর্যাদা ও অধিকার নিশ্চিত না করে, তবে সেই রাজনীতির কোনো অর্থ নেই।",
      ],
    },
    {
      id: "religious-harmony",
      icon: FaHandsHelping,
      title: "মানুষের নিরাপত্তা ও মর্যাদা",
      color: "from-purple-500 to-violet-600",
      content: [
        "নিরাপত্তা মানে শুধু আইনশৃঙ্খলা বাহিনী নয়। নিরাপত্তা মানে ভয় ছাড়া বাঁচার অধিকার, মত প্রকাশের স্বাধীনতা এবং রাষ্ট্রীয় সহিংসতা থেকে সুরক্ষা। আমি এমন একটি সমাজ চাই, যেখানে কোনো মানুষ গুম হবে না, কোনো পরিবার অনিশ্চয়তায় আটকে থাকবে না এবং আইনের ঊর্ধ্বে কেউ থাকবে না। মানুষের জীবনের নিরাপত্তা ও মর্যাদা নিশ্চিত করাই রাষ্ট্রের প্রথম দায়িত্ব।",
      ],
    },
    {
      id: "security",
      icon: FaSearchLocation,
      title: "গুম ও বিচারবহির্ভূত সহিংসতার বিরুদ্ধে অবস্থান",
      color: "from-slate-600 to-zinc-700",
      content: [
        "গুম কোনো বিচ্ছিন্ন ঘটনা নয়; এটি একটি রাষ্ট্রীয় ব্যর্থতার বহিঃপ্রকাশ। আমি নিজে এই বেদনার ভেতর দিয়ে এসেছি। সেই অভিজ্ঞতা থেকেই আমার অবস্থান স্পষ্ট ও আপসহীন। গুম, বিচারবহির্ভূত হত্যাকাণ্ড ও নির্যাতনের বিরুদ্ধে আমি কখনো আপস করব না। ভুক্তভোগী পরিবারগুলোর ন্যায়বিচারের দাবি রাষ্ট্রের প্রতিটি স্তরে তুলে ধরব এবং দায়মুক্তির সংস্কৃতি ভেঙে জবাবদিহিমূলক রাষ্ট্রব্যবস্থা প্রতিষ্ঠার জন্য কাজ করব।",
      ],
    },
    {
      id: "humanity",
      icon: FaCity,
      title: "মানবিক উন্নয়ন ও নাগরিক সেবা",
      color: "from-cyan-500 to-sky-600",
      content: [
        "উন্নয়ন মানে শুধু অবকাঠামো নয়; উন্নয়ন মানে মানুষের জীবন সহজ হওয়া। পানি, গ্যাস, বিদ্যুৎ, স্বাস্থ্য ও শিক্ষা মানুষের মৌলিক অধিকার। এসব সেবা দুর্নীতি ও অব্যবস্থাপনার কারণে মানুষের ভোগান্তির কারণ হতে পারে না। আমি চাই নাগরিক সেবা হবে সহজ, স্বচ্ছ ও মানবিক, যাতে মানুষ সেবার জন্য অপমানিত বা হয়রানির শিকার না হয়।",
      ],
    },
    {
      id: "future-generation",
      icon: FaRocket,
      title: "তরুণ ও ভবিষ্যৎ প্রজন্ম",
      color: "from-cyan-500 to-sky-600",
      content: [
        "তরুণরা এই দেশের সবচেয়ে বড় শক্তি। কিন্তু ভয়, বেকারত্ব ও অনিশ্চয়তা তাদের ভবিষ্যৎ কেড়ে নিচ্ছে। আমি এমন একটি বাংলাদেশ চাই, যেখানে তরুণরা ভয় নয় স্বপ্ন নিয়ে বাঁচবে, দক্ষতা ও সুযোগ পাবে এবং রাষ্ট্র তাদের পাশে দাঁড়াবে। ভবিষ্যৎ প্রজন্মের জন্য একটি নিরাপদ ও মানবিক রাষ্ট্র গড়ে তোলাই আমার অন্যতম অঙ্গীকার।",
      ],
    },
    {
      id: "citizen-service",
      icon: FaCity,
      title: "মানবিক উন্নয়ন ও নাগরিক সেবা",
      color: "from-cyan-500 to-sky-600",
      content: [
        "উন্নয়ন মানে শুধু অবকাঠামো নয়; উন্নয়ন মানে মানুষের জীবন সহজ হওয়া। পানি, গ্যাস, বিদ্যুৎ, স্বাস্থ্য ও শিক্ষা মানুষের মৌলিক অধিকার। এসব সেবা দুর্নীতি ও অব্যবস্থাপনার কারণে মানুষের ভোগান্তির কারণ হতে পারে না। আমি চাই নাগরিক সেবা হবে সহজ, স্বচ্ছ ও মানবিক, যাতে মানুষ সেবার জন্য অপমানিত বা হয়রানির শিকার না হয়।",
      ],
    },
    {
      id: "women-human-rights",
      icon: FaUserShield,
      title: "নারী ও মানবাধিকার",
      color: "from-cyan-500 to-sky-600",
      content: [
        "নারী নিরাপত্তা ছাড়া কোনো সমাজ এগোতে পারে না। গুম ও সহিংসতার ঘটনায় নারীরাই সবচেয়ে বেশি ভোগান্তির শিকার হন। আমি অঙ্গীকার করছি—নারীর নিরাপত্তা, মর্যাদা ও সমান অধিকার নিশ্চিত করা হবে রাষ্ট্রের দায়িত্ব। সহিংসতার বিরুদ্ধে থাকবে জিরো টলারেন্স এবং ভুক্তভোগীদের পাশে দাঁড়ানো হবে রাষ্ট্রের নৈতিক কর্তব্য।",
      ],
    },
    {
      id: "democracy-accountability",
      icon: FaUniversity,
      title: "জবাবদিহিমূলক রাষ্ট্র ও গণতন্ত্র",
      color: "from-cyan-500 to-sky-600",
      content: [
        "গণতন্ত্র মানে শুধু ভোট নয়। গণতন্ত্র মানে জবাবদিহিতা, স্বাধীন প্রতিষ্ঠান এবং জনগণের কাছে ক্ষমতার দায়। আমি এমন একটি রাষ্ট্রব্যবস্থা চাই, যেখানে জনপ্রতিনিধি জনগণের কাছে জবাবদিহি করবে, রাষ্ট্রীয় প্রতিষ্ঠান স্বাধীনভাবে কাজ করবে এবং আইনের শাসন বাস্তব অর্থে প্রতিষ্ঠিত হবে।",
      ],
    },
    {
      id: "our-appeal",
      icon: FaBullhorn,
      title: "আমার আহ্বান",
      color: "from-cyan-500 to-sky-600",
      content: [
        "এই ইশতেহার একা আমার নয়। এটি সকল নির্যাতিত মানুষের, সকল নীরব কণ্ঠের এবং সকল ন্যায়ের দাবির ইশতেহার। সত্য, ন্যায় ও মানবিকতার পক্ষে, ভয় ও নিপীড়নের রাজনীতির বিরুদ্ধে একটি নতুন বাংলাদেশ গড়তে—আমাদের সঙ্গে থাকুন।",
      ],
    },
  ]

  return (
    <main className="bg-linear-to-b from-slate-50 via-white to-slate-50">
      {/* Hero Section */}
      <section className="relative py-32 px-4 bg-linear-to-br from-emerald-50 via-white to-green-50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-6 py-2 bg-emerald-100 text-emerald-700 rounded-full font-bold text-sm uppercase tracking-wider mb-6">
              <FaFileAlt className="inline mr-2" />
              আমাদের প্রতিশ্রুতি
            </span>
            <h1 className="text-6xl md:text-8xl font-black text-slate-900 mb-6">
              <span className="bg-linear-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                সানজিদা ইসলামের ইশতেহার
              </span>
            </h1>
            {/* <p className="text-2xl md:text-3xl text-slate-600 max-w-3xl mx-auto">
              জনগণের জন্য, জনগণের দ্বারা - একটি সমৃদ্ধ ভবিষ্যতের রূপরেখা
            </p> */}
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      {/* <section className="py-20 px-4">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 rounded-3xl blur-2xl opacity-20 bg-linear-to-r from-emerald-500 to-green-600"></div>
            <div className="relative bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-slate-200">
              <div className="text-center mb-8">
                <FaHeart className="text-6xl text-emerald-600 mx-auto mb-4" />
                <h2 className="text-4xl font-black text-slate-900 mb-4">
                  আমার পরিচয়
                </h2>
              </div>
              <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
                <p>
                  আসসালামু আলাইকুম। আমি আমিনুল হক - ঢাকা মহানগর উত্তর বিএনপির
                  আহ্বায়ক এবং আপনাদেরই একজন সন্তান। এই ঢাকা-১৬ আমার ঘর, আমার
                  মরিয়ার। আপনাদের সুখ-দুঃখ, কষ্ট আর স্বপ্ন – সিই আমার মনদজর মদ
                  া কদর অনুভি কমর।
                </p>
                <p>
                  মিগ ১৭ বছর আমরা সিাই একসাদে এক কমিন সময় িার কদরমছ। যানজট,
                  িামন ও গযাদসর ঘাটম, চাাঁোিামজ, মােক আর অিযিস্থািনার কারদে
                  আমাদের প্রম মেদনর জীিন দমিিষহ হদয় উিদছ। আমাদের রুেরা িে
                  হারাদে, মাদয়রা মনরািত্তাহীন ায় ভুগদছ, মরিয়ারগুদলা স্বপ্ন
                  হারাদে।
                </p>
                <p>
                  আমি রাজনীতি করি ক্ষমতার জন্য না, মানুষদের সেবা করার জন্য। আমি
                  বিশ্বাস করি – মরি ন সম্ভি, যমে আমরা একসাদে চাই। আর সসই মরি
                  িদনর িে সেখাদ আমি আপনার কাদছ এদসমছ আমার মরকল্পনা ও প্রম শ্রুম
                  মনদয়।
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section> */}

      {/* Manifesto Sections */}
      <section className="py-20 px-4 bg-linear-to-b from-white to-slate-50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-4">
              আমার প্রতিশ্রুতি সমূহ
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              ঢাকা-১৪ এর উন্নয়নের জন্য আমার পরিকল্পনা
            </p>
          </motion.div>

          <div className="space-y-8">
            {manifestoSections.map((section, idx) => (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group relative"
              >
                <div
                  className={`absolute inset-0 rounded-3xl blur-xl opacity-10 group-hover:opacity-20 transition-all bg-linear-to-r ${section.color}`}
                ></div>
                <div className="relative bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-slate-200">
                  <div className="flex items-start gap-6 mb-6">
                    <div
                      className={`inline-flex p-4 bg-linear-to-br ${section.color} rounded-2xl shrink-0`}
                    >
                      <section.icon className="text-4xl text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">
                        {section.title}
                      </h3>
                      <div className="space-y-4">
                        {section.content.map((paragraph, pIdx) => (
                          <p
                            key={pIdx}
                            className="text-lg text-slate-700 leading-relaxed"
                          >
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Commitment */}
      <section className="py-20 px-4">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 rounded-3xl blur-2xl opacity-30 bg-linear-to-r from-emerald-500 to-green-600"></div>
            <div className="relative bg-white rounded-3xl p-12 md:p-16 shadow-2xl text-center border border-slate-200">
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
                শেষ কথা
              </h2>
              <div className="space-y-6 text-xl text-slate-700 leading-relaxed">
                {/* <p>প্রিয় ঢাকা-১৬ এর জনগণ,</p> */}
                <p>
                  ন্যায় কোনো দান নয়—এটি মানুষের অধিকার। সত্য চাপা দেওয়া যায়,
                  মুছে ফেলা যায় না।
                </p>
                {/* <p className="text-2xl font-black text-emerald-600 mt-8">
                  &quot;আমি আমিনুল হক, প্রম শ্রুম মেমে আমি কো মেদয় োমদিা না,
                  কাদজ সেখাদিা।&quot;
                </p>
                <p className="text-lg text-slate-600 mt-6">
                  আপনাদের সন্তান, আপনাদের প্রম মনমধ মহদসদি আমি আপনাদের িাদশ
                  োকদিা প্রম মট ঘদর আদলা মিমরদয় আনার জন্য।
                </p> */}
                <div className="mt-8 text-3xl font-black text-emerald-600">
                  ইঞ্জিনিয়ার সানজিদা ইসলাম তুলি
                </div>
                <p>সত্য • স্মৃতি • ন্যায়</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
