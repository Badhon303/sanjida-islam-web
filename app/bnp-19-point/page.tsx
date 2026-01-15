"use client"
import { motion } from "framer-motion"
import { FaFlag } from "react-icons/fa"
import { toBanglaNumber } from "@/lib/utils"

export default function BNP19PointPage() {
  const points = [
    {
      title: "স্বাধীনতা ও সার্বভৌমত্ব রক্ষা",
      content:
        "দেশের স্বাধীনতা, অখণ্ডতা ও সার্বভৌমত্ব রক্ষাকে সর্বোচ্চ অগ্রাধিকার দেওয়া হবে এবং কোনো অবস্থাতেই জাতির মৌলিক অধিকারের উৎখাত হবে না।",
    },
    {
      title: "অংশগ্রহণমূলক শাসনব্যবস্থা প্রতিষ্ঠা",
      content:
        "রাষ্ট্রের অবকাঠামোকে গণতান্ত্রিক ও দীর্ঘস্থায়ী স্থিতিশীলতা প্রদান করতে সমাজের প্রতিটি স্তরে বিশ্বাসযোগ্য ও অংশগ্রহণমূলক শাসনব্যবস্থা প্রতিষ্ঠার লক্ষ্যে কার্যকর উদ্যোগ গ্রহণ করা হবে।",
    },
    {
      title: "জাতীয় ঐক্য ও উন্নয়ন",
      content:
        " জনগণের সরাসরি অংশগ্রহণ নিশ্চিত করে একটি শক্তিশালী জাতীয় ঐক্য গড়ে তুলতে হবে, যাতে দেশের রাজনৈতিক, সামাজিক ও অর্থনৈতিক উন্নয়নের ভিত্তি দৃঢ় হয়।",
    },
    {
      title: "মৌলিক অধিকার ও ব্যক্তিস্বাধীনতা",
      content:
        "সমাজের সর্বস্তরের মানুষের মৌলিক মানবিক স্বার্থ ও গণতান্ত্রিক অধিকারকে সর্বোচ্চ মর্যাদা দেওয়া হবে এবং ব্যক্তিস্বাধীনতার স্বীকৃতি প্রতিষ্ঠায় কার্যকর ব্যবস্থা নেওয়া হবে।",
    },
    {
      title: "সাম্প্রদায়িক সম্প্রীতি ও রাষ্ট্রীয় মূলনীতি",
      content:
        "রাষ্ট্র সকল ধর্ম, বর্ণ ও সম্প্রদায়ের মানুষের প্রতি সমান আচরণ করবে এবং ‘ধর্ম যার যার, রাষ্ট্র সবার’ মূলনীতিকে দৃঢ়ভাবে প্রতিষ্ঠিত করবে।",
    },
    {
      title: "মতপ্রকাশ ও সংগঠনের স্বাধীনতা",
      content:
        "সাংবিধানিক রাজনৈতিক অধিকার, মতপ্রকাশ ও সংগঠনের স্বাধীনতা রাষ্ট্রীয় নীতির মূল ভিত্তি হিসেবে প্রতিপালিত হবে এবং এর অধিকারকে কোনভাবেই হস্তক্ষেপ করা হবে না।",
    },
    {
      title: "প্রশাসনিক বিকেন্দ্রীকরণ ও জবাবদিহিতা",
      content:
        "প্রশাসনিক কাঠামোকে জনগণের কাছে নিকটস্থ, দ্রুত কার্যকর ও জবাবদিহিমূলক করে তোলার লক্ষ্যে প্রশাসনিক বিকেন্দ্রীকরণ বাস্তবায়িত করা হবে।",
    },
    {
      title: "শ্রমিক অধিকার ও ন্যায্য মজুরি",
      content:
        "শ্রমিক ও কর্মচারী জনগণের ন্যায্য মজুরি ও সুযোগভিত্তিক পরিবেশ নিশ্চিত করতে সবাইকে সমান সুযোগ প্রদান করা হবে এবং ট্রেড ইউনিয়ন অধিকারগুলো সুরক্ষিত রাখা হবে।",
    },
    {
      title: "আইনের শাসন ও বিচারব্যবস্থা",
      content:
        "মানুষের মৌলিক জীবন, সম্ভ্রম ও সম্পদ রক্ষায় আইন, শৃঙ্খলা ও মানবিক মূল্যবোধকে সমুন্নত রাখা হবে এবং আইনশৃঙ্খলা রক্ষায় বিচারব্যবস্থা সর্বোচ্চ স্বাধীনতা ও কার্যকারিতা পাবে।",
    },
    {
      title: "দুর্নীতি প্রতিরোধ ও স্বচ্ছতা",
      content:
        "দুর্নীতি, আর্থিক অনিয়ম ও শোষণের বিরুদ্ধে জিরো টলারেন্স ভিত্তিতে কঠোর পদক্ষেপ গ্রহণ করা হবে এবং প্রশাসনিক ও আর্থিক কর্মকাণ্ডে স্বচ্ছতা নিশ্চিত করা হবে।",
    },
    {
      title: "গণমাধ্যমের স্বাধীনতা",
      content:
        "নাগরিকদের মত প্রকাশ, সংবাদ মাধ্যম ও সাংস্কৃতিক কার্যক্রমকে পূর্ণ স্বাধীনতা প্রদান করা হবে এবং সুষ্ঠু গণমাধ্যম পরিবেশ গড়ে তোলা হবে।",
    },
    {
      title: "শিক্ষা, বিজ্ঞান ও প্রযুক্তি উন্নয়ন",
      content:
        "শিক্ষা, বিজ্ঞান, প্রযুক্তি ও সাংস্কৃতিক সম্পদকে মানুষের উন্নয়ন ও দক্ষতা বৃদ্ধির অগ্রাধিকার ভিত্তিতে প্রবৃদ্ধি করা হবে, যাতে নতুন প্রজন্মের নেতৃত্ব তৈরিতে সহায়ক পরিবেশ তৈরি হয়।",
    },
    {
      title: "সামাজিক ন্যায়বিচার ও দারিদ্র্য বিমোচন",
      content:
        "সামাজিক ন্যায়বিচার ও সুষম উন্নয়নের মাধ্যমে সমাজের প্রতিটি শ্রেণির মানুষের মৌলিক চাহিদা পূরণ করা হবে এবং দারিদ্র্য দূরীকরণে কার্যকর নীতি বাস্তবায়িত হবে।",
    },
    {
      title: "জনকল্যাণমুখী অর্থনীতি",
      content:
        "দেশের অর্থনীতি মানুষের কল্যাণকে কেন্দ্র করে পরিচালিত হবে এবং সামাজিক ও অর্থনৈতিক বৈষম্য কমিয়ে আনা হবে, যাতে সকল মানুষের সুযোগ সমানভাবে প্রচারিত হয়।",
    },
    {
      title: "শ্রমজীবী মানুষের নিরাপত্তা",
      content:
        "শ্রমজীবী জনগণের নিরাপত্তা, জীবন ও কর্মস্থানের মর্যাদা রক্ষায় কার্যকর উদ্যোগ গ্রহণ করা হবে এবং শ্রমিক অধিকার সংরক্ষিত হবে।",
    },
    {
      title: "জাতীয় সম্পদের সুষম ব্যবস্থাপনা",
      content:
        "দেশীয় সম্পদ ও জাতীয় অর্থনীতির সুষম ব্যবস্থাপনায় নিবিড় পদক্ষেপ গ্রহণ করে বাংলাদেশের সামগ্রিক উন্নয়ন নিশ্চিত করা হবে।",
    },
    {
      title: "জ্বালানি ও জনস্বার্থ রক্ষা",
      content:
        "বিদ্যুৎ, জ্বালানি ও অন্যান্য গুরুত্বপূর্ণ খাতে জনস্বার্থ বিরোধী কর্মকাণ্ড বন্ধ করে মানুষের মৌলিক চাহিদা পূরণে নতুন পরিকল্পনা গ্রহণ করা হবে।",
    },
    {
      title: "আন্তর্জাতিক সম্পর্ক ও নিরাপত্তা",
      content:
        "বাংলাদেশের আন্তর্জাতিক সম্পর্কসমূহ জাতীয় স্বার্থ, সার্বভৌমত্ব ও নিরাপত্তাকে সর্বোচ্চ অগ্রাধিকার দিয়ে বাস্তবায়িত হবে এবং কোন প্রকার সন্ত্রাসবাদী কর্মকাণ্ড বা রাজনৈতিক অপতৎপরতা আশ্রয় দেওয়া হবে না।",
    },
    {
      title: "গণতান্ত্রিক স্থিতিশীলতা ও সংহতি",
      content:
        "দেশের গণতান্ত্রিক শাসনব্যবস্থা ও রাজনৈতিক প্রতিষ্ঠানগুলোকে সুসংগত ও স্থিতিশীল করে গড়ে তুলতে সমাজের প্রতিটি স্তরে সমন্বিত, দায়িত্বশীল ও অংশগ্রহণমূলক কাঠামো নিশ্চিত করা হবে।",
    },
  ]

  return (
    <main className="bg-linear-to-b from-slate-50 via-white to-slate-50">
      {/* Hero Section */}
      <section className="relative py-32 px-4 bg-linear-to-br from-green-50 via-white to-emerald-50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-6 py-2 bg-green-100 text-green-700 rounded-full font-bold text-sm uppercase tracking-wider mb-6">
              <FaFlag className="inline mr-2" />
              ঐতিহাসিক কর্মসূচি
            </span>
            <h1 className="text-6xl md:text-8xl font-black text-slate-900 mb-6">
              <span className="bg-linear-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                বিএনপির ১৯ দফা
              </span>
            </h1>
            {/* <p className="text-2xl md:text-3xl text-slate-600 max-w-3xl mx-auto mb-4">
              শহীদ প্রেসিডেন্ট জিয়াউর রহমান
            </p>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              দেশের আর্থ-সামাজিক মুক্তির লক্ষ্যে প্রণীত
            </p> */}
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      {/* <section className="py-20 px-4">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-slate-200"
          >
            <FaFileAlt className="text-6xl text-green-600 mx-auto mb-6" />
            <h2 className="text-4xl font-black text-slate-900 mb-6 text-center">
              ঐতিহাসিক ১৯ দফা
            </h2>
            <p className="text-xl text-slate-700 leading-relaxed text-center">
              শহীদ প্রেসিডেন্ট জিয়াউর রহমান বাংলাদেশের আর্থ-সামাজিক মুক্তির
              লক্ষ্যে ১৯ দফা কর্মসূচি প্রণয়ন করেছিলেন। এই কর্মসূচি জাতির
              উন্নয়ন ও সমৃদ্ধির দিক-নির্দেশনা প্রদান করে এবং আজও এর
              প্রাসঙ্গিকতা অটুট রয়েছে।
            </p>
          </motion.div>
        </div>
      </section> */}

      {/* 19 Points List */}
      <section className="py-20 px-4 bg-linear-to-b from-white to-slate-50">
        <div className="mx-auto max-w-296">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-4">
              ১৯ দফা কর্মসূচি
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {points.map((point, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: (idx % 12) * 0.05 }}
                className="group relative h-full"
              >
                <div className="absolute inset-0 bg-linear-to-r from-green-500 to-emerald-600 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-all"></div>
                <div className="relative bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all border border-slate-200 h-full flex flex-col">
                  <div className="flex flex-col items-center text-center mb-4">
                    <div className="w-14 h-14 bg-linear-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center text-white font-black text-2xl shadow-lg mb-3">
                      {toBanglaNumber(idx + 1)}
                    </div>
                    <h3 className="text-lg font-black text-slate-900 leading-tight">
                      {point.title}
                    </h3>
                  </div>
                  <p className="text-slate-700 text-sm leading-relaxed text-justify">
                    {point.content}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      {/* <section className="py-20 px-4">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 rounded-3xl blur-2xl opacity-30"></div>
            <div className="relative bg-white rounded-3xl p-12 md:p-16 shadow-2xl text-center border border-slate-200">
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
                জিয়ার আদর্শ আমাদের পথ
              </h2>
              <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
                শহীদ প্রেসিডেন্ট জিয়াউর রহমানের দেখানো পথে বাংলাদেশের উন্নয়ন ও
                সমৃদ্ধি অর্জন করতে আমরা প্রতিশ্রুতিবদ্ধ
              </p>
              <a
                href="/contact"
                className="inline-block px-10 py-4 bg-linear-to-r from-green-600 to-emerald-600 text-white font-bold rounded-xl shadow-xl hover:shadow-2xl hover:from-green-700 hover:to-emerald-700 transition-all transform hover:scale-105"
              >
                যোগাযোগ করুন
              </a>
            </div>
          </motion.div>
        </div>
      </section> */}
    </main>
  )
}
