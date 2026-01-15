"use client"
import { motion } from "framer-motion"
import { FaMedal, FaFlag, FaStar } from "react-icons/fa"
import Image from "next/image"

export default function AboutPage() {
  return (
    <main className="bg-linear-to-b from-slate-50 via-white to-slate-50">
      {/* Hero Section */}
      <section className="relative py-32 px-4 bg-linear-to-br from-emerald-50 via-white to-green-50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="inline-block px-6 py-2 bg-emerald-100 text-emerald-700 rounded-full font-bold text-sm uppercase tracking-wider mb-6">
              আমাদের সম্পর্কে
            </span>
            <h1 className="text-6xl md:text-8xl font-black text-slate-900 mb-6">
              <span className="bg-linear-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                সানজিদা ইসলাম
              </span>
            </h1>
            {/* <p className="text-2xl md:text-3xl text-slate-600 max-w-3xl mx-auto">
              বাংলাদেশের কিংবদন্তি গোলরক্ষক
            </p> */}
          </motion.div>
        </div>
      </section>
      {/* Personal Info Section */}
      <section className="py-20 px-4">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-emerald-600 font-bold text-sm uppercase tracking-wider">
                ব্যক্তিগত তথ্য
              </span>
              {/* <h2 className="text-5xl font-black text-slate-900 mt-3 mb-6">
                সানজিদা ইসলাম
              </h2> */}
              <div className="space-y-4 text-lg text-slate-700">
                <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl">
                  <FaFlag className="text-2xl text-emerald-600" />
                  <div>
                    <p className="font-bold text-slate-900">কর্মী ও সংগঠক</p>
                    <p>মানবাধিকার কর্মী ও সংগঠক</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl">
                  <FaFlag className="text-2xl text-emerald-600" />
                  <div>
                    <p className="font-bold text-slate-900">সহ-প্রতিষ্ঠাতা</p>
                    <p>মায়ের ডাক</p>
                  </div>
                </div>
                {/* <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl">
                  <FaFutbol className="text-2xl text-emerald-600" />
                  <div>
                    <p className="font-bold text-slate-900">অবস্থান</p>
                    <p>গোলরক্ষক</p>
                  </div>
                </div> */}
                <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl">
                  <FaMedal className="text-2xl text-emerald-600" />
                  <div>
                    <p className="font-bold text-slate-900">কণ্ঠস্বর</p>
                    <p>
                      গুম ও বিচারবহির্ভূত হত্যাকাণ্ডবিরোধী আন্দোলনের কণ্ঠস্বর
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl">
                  <FaFlag className="text-2xl text-emerald-600" />
                  <div>
                    <p className="font-bold text-slate-900">নেতৃত্ব</p>
                    <p>কর্পোরেট নেতৃত্ব ও ব্যবস্থাপনায় অভিজ্ঞ</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl">
                  <FaFlag className="text-2xl text-emerald-600" />
                  <div>
                    <p className="font-bold text-slate-900">প্রতিনিধি</p>
                    <p>আন্তর্জাতিক মানবাধিকার ফোরামে সক্রিয় প্রতিনিধি</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-linear-to-r from-emerald-500 to-green-500 rounded-3xl blur-2xl opacity-20"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100">
                <Image
                  src="/sanjida-islam/sanjida-islam-about.webp"
                  alt="সানজিদা ইসলাম"
                  width={600}
                  height={800}
                  className="w-full h-auto object-contain"
                  loading="lazy"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Biography Section */}
      <section className="py-20 px-4 bg-linear-to-b from-white to-slate-50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-4">
              জীবনী
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-slate-200">
              <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
                <p>
                  <strong>সানজিদা ইসলাম তুলী</strong> তাঁর শিক্ষাজীবনে
                  ধারাবাহিকভাবে কৃতিত্বের স্বাক্ষর রেখেছেন। তিনি বাংলাদেশ
                  টেক্সটাইল বিশ্ববিদ্যালয় থেকে{" "}
                  <strong>&quot;টেক্সটাইল ইঞ্জিনিয়ারিংয়ে&quot;</strong> ব্যাচেলর
                  অব সায়েন্স ডিগ্রি অর্জন করেন এবং প্রথম শ্রেণিতে উত্তীর্ণ হন।
                </p>
                <p>
                  এর আগে তিনি বিএএফ শাহীন কলেজ থেকে উচ্চ মাধ্যমিক ও মাধ্যমিক—উভয়
                  পরীক্ষায় প্রথম বিভাগে সাফল্যের সঙ্গে উত্তীর্ণ হন।
                </p>
                <p>
                  তাঁর এই শিক্ষাগত ভিত্তি তাঁকে পেশাগত দক্ষতা, বিশ্লেষণী
                  চিন্তাভাবনা ও নেতৃত্বগুণে সমৃদ্ধ করেছে, যা পরবর্তীতে কর্পোরেট
                  নেতৃত্ব ও মানবাধিকার আন্দোলন—উভয় ক্ষেত্রেই গুরুত্বপূর্ণ ভূমিকা
                  রেখেছে।
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Career Stats */}
      <section className="py-20 px-4">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-4">
              শিক্ষাগত তথ্য
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: FaFlag,
                label:
                  "ব্যাচেলর অব সায়েন্স, বাংলাদেশ টেক্সটাইল বিশ্ববিদ্যালয়, ২০০৫",
                value: "১ম শ্রেণি",
                color: "from-emerald-500 to-green-600",
              },
              {
                icon: FaMedal,
                label:
                  "উচ্চ মাধ্যমিক সার্টিফিকেট (এইচএসসি) বিএএফ শাহীন কলেজ, ২০০০",
                value: "১ম বিভাগ",
                color: "from-blue-500 to-cyan-600",
              },
              // {
              //   icon: FaTrophy,
              //   label: "ক্যারিয়ার বছর",
              //   value: "২০",
              //   color: "from-purple-500 to-pink-600",
              // },
              {
                icon: FaStar,
                label:
                  "মাধ্যমিক স্কুল সার্টিফিকেট (এসএসসি) বিএএফ শাহীন কলেজ, ১৯৯৮",
                value: "১ম বিভাগ",
                color: "from-amber-500 to-orange-600",
              },
            ].map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group relative"
              >
                <div
                  className={`absolute inset-0 bg-linear-to-r ${stat.color} rounded-2xl blur opacity-25 group-hover:opacity-50 transition-all`}
                ></div>
                <div className="relative bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all text-center border border-slate-200">
                  <div
                    className={`inline-flex p-4 bg-linear-to-br ${stat.color} rounded-xl mb-4`}
                  >
                    <stat.icon className="text-3xl text-white" />
                  </div>
                  <div className="text-5xl font-black text-slate-900 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-slate-600 font-medium">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Career & Honors Timeline */}
      <section className="py-20 px-4 bg-linear-to-b from-slate-50 to-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-4">
              কর্পোরেট অভিজ্ঞতা
            </h2>
            {/* <p className="text-xl text-slate-600">
              একজন কিংবদন্তি খেলোয়াড়ের যাত্রা
            </p> */}
          </motion.div>

          {/* Timeline Container */}
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Vertical Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-linear-to-b from-emerald-200 via-blue-200 to-purple-200 hidden md:block"></div>

            <div className="space-y-12">
              {[
                {
                  // date: "১৯৯৪–১৯৯৫",
                  title: "ব্যবস্থাপনা পরিচালক",
                  description: "গ্লোবাল অ্যাপারেল নেটওয়ার্ক, বাংলাদেশ",
                  // badge: "ক্লাব",
                  badgeColor: "bg-emerald-100 text-emerald-700",
                  align: "left",
                },
                {
                  // date: "১৯৯৭–১৯৯৮",
                  title: "বিজনেস ইউনিট ম্যানেজার",
                  description: "মার্কস এন্ড স্পেন্সার, বাংলাদেশ",
                  // badge: "ক্লাব",
                  badgeColor: "bg-blue-100 text-blue-700",
                  align: "right",
                },
                {
                  // date: "১৯৯৯-২০০০",
                  title: "বিজনেস ইউনিট টিম লিডার",
                  description: "মার্কস এন্ড স্পেন্সার, বাংলাদেশ",
                  // badge: "ক্লাব",
                  badgeColor: "bg-purple-100 text-purple-700",
                  align: "left",
                },
                {
                  // date: "২০০৩",
                  title: "সহকারী মার্চেন্ডাইজার",
                  description:
                    "অপেক্স গ্রুপ (ক্রেতা: চার্মিং সোপিস ইনকর্পোরেটেড)",
                  // badge: "সম্মাননা",
                  badgeColor: "bg-amber-100 text-amber-700",
                  align: "right",
                },
                // {
                //   date: "২০০৮-২০১০",
                //   title: "মোহামেডান এসসি",
                //   description: "২০০৯ সুপার কাপ জয় এবং সেরা গোলরক্ষক পুরষ্কার",
                //   badge: "ক্লাব",
                //   badgeColor: "bg-rose-100 text-rose-700",
                //   align: "left",
                // },
                // {
                //   date: "২০১০",
                //   title: "দক্ষিণ এশীয় গেমস স্বর্ণপদক",
                //   description:
                //     "অধিনায়ক হিসেবে বাংলাদেশ অনূর্ধ্ব-২৩ দলকে স্বর্ণপদক জেতানোর নেতৃত্ব",
                //   badge: "সম্মাননা",
                //   badgeColor: "bg-yellow-100 text-yellow-700",
                //   align: "right",
                // },
                // {
                //   date: "২০১১–২০১২",
                //   title: "শেখ জামাল ডিসি",
                //   description: "প্রিমিয়ার লীগ এবং ফেডারেশন কাপ শিরোপা",
                //   badge: "ক্লাব",
                //   badgeColor: "bg-teal-100 text-teal-700",
                //   align: "left",
                // },
                // {
                //   date: "২০০৩-২০১২",
                //   title: "ফেডারেশন কাপ চ্যাম্পিয়ন",
                //   description:
                //     "৫ বার ফেডারেশন কাপ জয় - বিভিন্ন ক্লাবের হয়ে অসাধারণ পারফরম্যান্স",
                //   badge: "পুরস্কার",
                //   badgeColor: "bg-indigo-100 text-indigo-700",
                //   align: "right",
                // },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: item.align === "left" ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className={`relative flex items-center ${
                    item.align === "left"
                      ? "md:justify-start"
                      : "md:justify-end"
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex">
                    <div className="w-4 h-4 bg-white border-4 border-emerald-500 rounded-full shadow-lg"></div>
                  </div>

                  {/* Card */}
                  <div
                    className={`w-full md:w-[38%] ${
                      item.align === "left" ? "md:ml-[100px]" : "md:mr-[100px]"
                    }`}
                  >
                    <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all border border-slate-200">
                      <div className="flex items-start justify-between mb-3">
                        {/* <span className="text-sm text-slate-500 font-semibold">
                          {item.date}
                        </span>
                        <span
                          className={`px-3 py-1 ${item.badgeColor} rounded-full text-xs font-bold uppercase tracking-wider`}
                        >
                          {item.badge}
                        </span> */}
                      </div>
                      <h3 className="text-xl md:text-2xl font-black text-slate-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-slate-700 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* International Career */}
      <section className="py-20 px-4">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-4">
              কর্পোরেট অভিজ্ঞতা ও নেতৃত্ব
            </h2>
            {/* <p className="text-xl text-slate-600">
              ১৯৯৮ থেকে ২০১০ সাল পর্যন্ত বাংলাদেশ জাতীয় দলের প্রতিনিধিত্ব
            </p> */}
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-slate-200"
            >
              <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
                <p>
                  মানবাধিকার আন্দোলনের পাশাপাশি ইঞ্জিনিয়ার সানজিদা ইসলাম তুলির
                  কর্পোরেট অভিজ্ঞতা তাঁর নেতৃত্বকে আরও শক্তিশালী করেছে।
                  ব্যবস্থাপনা, দল গঠন, আলোচনার দক্ষতা এবং আন্তর্জাতিক নেটওয়ার্ক
                  তৈরির অভিজ্ঞতা তাঁকে একটি সংগঠিত ও দীর্ঘমেয়াদি আন্দোলন
                  পরিচালনায় সহায়তা করেছে।
                </p>
                <p>
                  তিনি বিশ্বাস করেন—কার্যকর নেতৃত্ব মানে শুধু প্রতিবাদ নয়, বরং
                  পরিকল্পনা, শৃঙ্খলা ও দায়িত্বশীলতা।
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Early Life */}
      <section className="py-20 px-4">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-4">
              জীবন, সংগ্রাম ও ন্যায়বিচারের পথে যাত্রা
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-slate-200">
              <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
                <p>
                  ইঞ্জিনিয়ার সানজিদা ইসলাম তুলি একজন মানবাধিকার কর্মী, নাগরিক
                  অধিকার রক্ষার সংগঠক এবং মায়ের ডাক এর সহ-প্রতিষ্ঠাতা।
                  পেশাগতভাবে তিনি একজন টেক্সটাইল ইঞ্জিনিয়ার এবং কর্পোরেট জগতে
                  দীর্ঘদিনের নেতৃত্ব ও ব্যবস্থাপনাগত অভিজ্ঞতা অর্জন করেছেন। এই
                  পেশাগত অভিজ্ঞতাই তাঁকে সংগঠন গড়া, কৌশল নির্ধারণ এবং মানুষের
                  সঙ্গে কার্যকরভাবে কাজ করার সক্ষমতা দিয়েছে।
                </p>
                <p>
                  তাঁর জীবনের মোড় ঘুরে যায় ২০১৩ সালের গণতান্ত্রিক আন্দোলনের
                  প্রেক্ষাপটে। সেই সময় তাঁর ভাইসহ বহু রাজনৈতিক কর্মী গুমের শিকার
                  হন। ব্যক্তিগত এই ক্ষতি তাঁকে নীরব থাকতে দেয়নি। রাষ্ট্রীয়
                  নিপীড়ন, গুম ও বিচারবহির্ভূত হত্যাকাণ্ডের বিরুদ্ধে ন্যায়বিচারের
                  সংগ্রামে যুক্ত হওয়াই হয়ে ওঠে তাঁর জীবনের লক্ষ্য।
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Early Life */}
      <section className="py-20 px-4">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-4">
              ব্যক্তিগত বেদনা থেকে জনস্বার্থের সংগ্রাম
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-slate-200">
              <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
                <p>
                  গুম কেবল একজন মানুষকে হারিয়ে ফেলা নয়—এটি একটি পরিবারকে
                  অনিশ্চয়তার মধ্যে আটকে রাখে। মা, স্ত্রী ও সন্তানদের জীবন থমকে
                  যায় অপেক্ষার মধ্যে। এই বাস্তবতা খুব কাছ থেকে দেখেছেন
                  ইঞ্জিনিয়ার সানজিদা ইসলাম তুলি । সেই অভিজ্ঞতা থেকেই তিনি
                  বুঝেছেন, ন্যায়বিচার শুধু আইনের বিষয় নয়—এটি মানবিকতার প্রশ্ন।
                </p>
                <p>
                  এই উপলব্ধি তাঁকে ২০১৪ সালে মায়ের ডাক আন্দোলনের সহ-প্রতিষ্ঠায়
                  অনুপ্রাণিত করে। এই আন্দোলন গড়ে ওঠে গুম হওয়া ব্যক্তিদের
                  পরিবারকে কেন্দ্র করে—যেখানে মায়েরা, স্ত্রী ও সন্তানরা একসঙ্গে
                  দাঁড়িয়ে সত্য ও ন্যায়বিচারের দাবি জানায়।
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Early Life */}
      <section className="py-20 px-4">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-4">
              মায়ের ডাক ও মানবাধিকার আন্দোলন
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-slate-200">
              <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
                <p>
                  মায়ের ডাক আজ শুধু একটি সংগঠন নয়—এটি একটি নৈতিক প্রতিবাদ। এই
                  প্ল্যাটফর্মের মাধ্যমে ইঞ্জিনিয়ার সানজিদা ইসলাম তুলি শতাধিক
                  গুমের ঘটনার সাক্ষ্য ও তথ্য সংরক্ষণে কাজ করেছেন। ভুক্তভোগী
                  পরিবারগুলোর মানসিক সহায়তা, আন্তর্জাতিক মানবাধিকার সংস্থার
                  সঙ্গে যোগাযোগ এবং রাষ্ট্রীয় দায়বদ্ধতার প্রশ্ন তুলে ধরাই এই
                  আন্দোলনের মূল কাজ।
                </p>
                <p>
                  জাতিসংঘের গুমবিষয়ক ওয়ার্কিং গ্রুপ, আন্তর্জাতিক মানবাধিকার
                  সংস্থা এবং বিভিন্ন বৈশ্বিক ফোরামে তিনি বাংলাদেশের মানবাধিকার
                  পরিস্থিতি তুলে ধরেছেন। তাঁর কণ্ঠস্বর স্থানীয় সংগ্রামকে
                  আন্তর্জাতিক সংহতির সঙ্গে যুক্ত করেছে।
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Early Life */}
      <section className="py-20 px-4">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-4">
              রাজনীতি ও দর্শন
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-slate-200">
              <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
                <p>
                  ইঞ্জিনিয়ার সানজিদা ইসলাম তুলি র রাজনীতি প্রতিহিংসার রাজনীতি
                  নয়। এটি স্মৃতি, সত্য ও ন্যায়ের রাজনীতি। তিনি বিশ্বাস করেন—
                </p>

                <p>
                  ন্যায়বিচার বিলম্বিত হতে পারে, কিন্তু অস্বীকার করা যায় না। সত্য
                  চাপা দেওয়া যায়, মুছে ফেলা যায় না। রাষ্ট্র মানুষের জন্য—মানুষ
                  রাষ্ট্রের জন্য নয়।
                </p>
                <p>
                  এই বিশ্বাস থেকেই তিনি একটি মানবিক, গণতান্ত্রিক ও জবাবদিহিমূলক
                  বাংলাদেশ গড়ার স্বপ্ন দেখেন।
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Early Life */}
      <section className="py-20 px-4">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-4">
              ভবিষ্যৎ ভাবনা
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-slate-200">
              <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
                <p>
                  ইঞ্জিনিয়ার সানজিদা ইসলাম তুলি মনে করেন, মানবাধিকার শুধু একটি
                  আন্দোলন নয়—এটি একটি সামাজিক চুক্তি। ভবিষ্যৎ প্রজন্ম যেন ভয় নয়,
                  মর্যাদা নিয়ে বাঁচতে পারে—এই লক্ষ্যেই তাঁর কাজ অব্যাহত থাকবে।
                </p>
                <p>
                  ব্যক্তিগত বেদনা থেকে জন্ম নেওয়া এই সংগ্রাম আজ একটি বৃহত্তর
                  সামাজিক দায়িত্বে পরিণত হয়েছে।
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
