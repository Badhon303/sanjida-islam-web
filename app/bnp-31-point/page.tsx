"use client"
import { motion } from "framer-motion"
import { FaFileAlt, FaFlag } from "react-icons/fa"
import { toBanglaNumber } from "@/lib/utils"

export default function BNP31PointPage() {
  // const vision_2030 = [
  //   {
  //     title: 'বিসমিল্লাহির রাহমানির রাহিম',
  //     description: 'মহান মুক্তিযুদ্ধের মধ্য দিয়ে বাংলাদেশের জনগণ স্বপ্ন দেখেছিল। সেই স্বপ্ন ছিল ন্যায়বিচার, মানবিক মর্যাদা ও সাম্যের। জনগণের এই স্বপ্ন আজও সফল হয়নি। স্বৈরশাসন ও দুঃশাসনের যাঁতাকলে স্বপ্নগুলো চুরমার হয়ে গেছে। আজ আমাদের সকলকে সম্মিলিতভাবে সেই স্বপ্ন পূরণের জন্য নতুন করে শপথ নিতে হবে। বাংলাদেশের সকল ধর্ম বিশ্বাসের মানুষ, ক্ষুদ্র জাতি-গোষ্ঠীসহ সকল জাতি-গোষ্ঠী ও মানুষের চিন্তা চেতনা ও আশা আকাক্সক্ষাকে ধারণ করে একটি অংশীদারিত্বমূলক সামাজিক ও অর্থনৈতিক ন্যায়বিচারসম্পন্ন, জনকল্যাণমূলক, সহিষ্ণু, মানবিক, শান্তিকামী ও সমৃদ্ধ গণতান্ত্রিক সমাজ গঠন বাংলাদেশ জাতীয়তাবাদী দলের (BNP) লক্ষ্য। বিএনপি বিশ্বাস করে জনগণই হবে সকল উন্নয়নের কেন্দ্রবিন্দু। যে সব বাধা জনগণের মেধা, শ্রম, উদ্যোগ এবং উৎসাহকে দমিয়ে দেয় সেগুলোকে দূর করে বিএনপি বাংলাদেশকে একটি সুখী, সমৃদ্ধ, আধুনিক ও আত্মমর্যাদাশীল রাষ্ট্রে পরিণত করার লক্ষ্য নিয়ে ভিশন - ২০৩০ প্রণয়ন করেছে।',
  //     img: 'image.png'
  //   }
  // ]
  const points = [
    {
      title: "গুম ও বিচারবহির্ভূত হত্যাকাণ্ড বন্ধ",
      content:
        "গুম ও বিচারবহির্ভূত হত্যাকাণ্ড সম্পূর্ণরূপে বন্ধ করতে কার্যকর রাষ্ট্রীয় ব্যবস্থা গ্রহণ।",
    },
    {
      title: "স্বাধীন তদন্ত কমিশন গঠন",
      content:
        "গুম ও রাজনৈতিক সহিংসতার ঘটনায় স্বাধীন ও নিরপেক্ষ তদন্ত কমিশন গঠন।",
    },
    {
      title: "ন্যায়বিচার ও পুনর্বাসন",
      content:
        "ভুক্তভোগী পরিবারগুলোর জন্য ন্যায়বিচার, ক্ষতিপূরণ ও পুনর্বাসন নিশ্চিত করা।",
    },
    {
      title: "অপরাধীদের বিচার নিশ্চিতকরণ",
      content:
        "বিচারবহির্ভূত হত্যাকাণ্ডে জড়িত সকলের বিরুদ্ধে আইনানুগ ব্যবস্থা গ্রহণ।",
    },
    {
      title: "জবাবদিহি কাঠামো প্রণয়ন",
      content:
        "রাষ্ট্রীয় বাহিনীর জন্য মানবাধিকারভিত্তিক জবাবদিহি কাঠামো প্রণয়ন।",
    },
    {
      title: "স্বাধীন বিচারব্যবস্থা",
      content: "স্বাধীন বিচারব্যবস্থা ও আইনের শাসন নিশ্চিত করা।",
    },
    {
      title: "সাংবিধানিক অধিকার রক্ষা",
      content:
        "মতপ্রকাশ, সভা ও শান্তিপূর্ণ প্রতিবাদের সাংবিধানিক অধিকার রক্ষা।",
    },
    {
      title: "রাজনৈতিক হয়রানি বন্ধ",
      content:
        "রাজনৈতিক ভিন্নমতের কারণে কাউকে হয়রানি বা নিপীড়ন না করার নিশ্চয়তা।",
    },
    {
      title: "সাংবাদিক ও মানবাধিকারকর্মীদের নিরাপত্তা",
      content: "মানবাধিকার রক্ষাকারী ও সাংবাদিকদের নিরাপত্তা নিশ্চিত করা।",
    },
    {
      title: "জাতীয় স্মৃতি ও নথি সংরক্ষণ",
      content: "গুম ও সহিংসতার ঘটনার জাতীয় স্মৃতি ও নথি সংরক্ষণ।",
    },
    {
      title: "নারীর মর্যাদা ও নেতৃত্ব",
      content:
        "নারীর নিরাপত্তা, মর্যাদা ও নেতৃত্ব নিশ্চিত করতে কার্যকর নীতি গ্রহণ।",
    },
    {
      title: "নারী ও শিশুদের সহায়তা",
      content: "ভুক্তভোগী নারী ও শিশুদের জন্য বিশেষ আইনি ও মনোসামালিক সহায়তা।",
    },
    {
      title: "নাগরিক সমাজের স্বাধীনতা",
      content:
        "নাগরিক সমাজ ও মানবাধিকার সংগঠনের স্বাধীন কার্যক্রম নিশ্চিত করা।",
    },
    {
      title: "আন্তর্জাতিক মানবাধিকার সনদ বাস্তবায়ন",
      content: "আন্তর্জাতিক মানবাধিকার সনদ ও চুক্তির পূর্ণ বাস্তবায়ন।",
    },
    {
      title: "আন্তর্জাতিক সহযোগিতা",
      content:
        "জাতিসংঘ ও আন্তর্জাতিক মানবাধিকার প্রক্রিয়ার সঙ্গে সহযোগিতা জোরদার।",
    },
    {
      title: "জবাবদিহিমূলক রাষ্ট্রব্যবস্থা",
      content:
        "দায়মুক্তির সংস্কৃতি ভেঙে জবাবদিহিমূলক রাষ্ট্রব্যবস্থা গড়ে তোলা।",
    },
    {
      title: "আইনশৃঙ্খলা বাহিনী সংস্কার",
      content: "আইনশৃঙ্খলা বাহিনীর ক্ষমতার অপব্যবহার রোধে সংস্কার।",
    },
    {
      title: "সামাজিক সুরক্ষা নিশ্চিতকরণ",
      content:
        "রাষ্ট্রীয় সহিংসতার শিকার পরিবারগুলোর সামাজিক সুরক্ষা নিশ্চিত করা।",
    },
    {
      title: "তরুণদের রাজনৈতিক অংশগ্রহণ",
      content: "তরুণদের নাগরিক অধিকার ও রাজনৈতিক অংশগ্রহণে উৎসাহ দেওয়া।",
    },
    {
      title: "মানবাধিকার শিক্ষা কর্মসূচি",
      content: "মানবাধিকার শিক্ষা ও সচেতনতা কর্মসূচি চালু করা।",
    },
    {
      title: "গণতান্ত্রিক প্রতিষ্ঠান শক্তিশালীকরণ",
      content: "স্বাধীন নির্বাচন ও গণতান্ত্রিক প্রতিষ্ঠান শক্তিশালী করা।",
    },
    {
      title: "নাগরিক ঐক্য ও সংহতি",
      content: "নাগরিক ঐক্য ও সামাজিক সংহতি গড়ে তোলা।",
    },
    {
      title: "সহনশীলতা প্রতিষ্ঠা",
      content: "রাজনৈতিক প্রতিহিংসার সংস্কৃতি পরিহার ও সহনশীলতা প্রতিষ্ঠা।",
    },
    {
      title: "মতপ্রকাশের স্বাধীনতা",
      content: "ডিজিটাল নিরাপত্তার নামে মতপ্রকাশ দমন বন্ধ করা।",
    },
    {
      title: "তথ্যের অধিকার ও স্বচ্ছতা",
      content: "তথ্যের অধিকার ও স্বচ্ছতা নিশ্চিত করা।",
    },
    {
      title: "নাগরিক মতামতের অংশগ্রহণ",
      content: "রাষ্ট্রীয় সিদ্ধান্তে নাগরিক মতামতের অংশগ্রহণ বৃদ্ধি।",
    },
    {
      title: "মানবিক রাষ্ট্র গঠন",
      content: "মানবিক রাষ্ট্র গঠনে ন্যায়, সমতা ও মর্যাদার নীতি প্রতিষ্ঠা।",
    },
    {
      title: "নিখোঁজ ব্যক্তিদের সন্ধান",
      content:
        "নিখোঁজ ব্যক্তিদের সন্ধানে রাষ্ট্রীয় দায় স্বীকার ও কার্যকর উদ্যোগ।",
    },
    {
      title: "পুনর্মিলন প্রক্রিয়া",
      content: "স্মৃতি, সত্য ও ন্যায়ভিত্তিক পুনর্মিলন প্রক্রিয়া চালু করা।",
    },
    {
      title: "ভবিষ্যৎ প্রজন্মের জন্য বাংলাদেশ",
      content: "ভবিষ্যৎ প্রজন্মের জন্য মানবাধিকারবান্ধব বাংলাদেশ গড়ে তোলা।",
    },
    {
      title: "গণতান্ত্রিক রাষ্ট্রব্যবস্থা",
      content:
        "একটি জবাবদিহিমূলক, গণতান্ত্রিক ও মানবিক রাষ্ট্রব্যবস্থা প্রতিষ্ঠা।",
    },
  ]

  return (
    <main className="bg-linear-to-b from-slate-50 via-white to-slate-50">
      {/* Hero Section */}
      <section className="relative py-32 px-4 bg-linear-to-br from-red-50 via-white to-orange-50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-6 py-2 bg-red-100 text-red-700 rounded-full font-bold text-sm uppercase tracking-wider mb-6">
              <FaFlag className="inline mr-2" />
              জাতীয় কর্মসূচি
            </span>
            <h1 className="text-6xl md:text-8xl font-black text-slate-900 mb-6">
              <span className="bg-linear-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
                বিএনপির ৩১ দফা
              </span>
            </h1>
            <p className="text-2xl md:text-3xl text-slate-600 max-w-3xl mx-auto">
              গণতন্ত্র পুনরুদ্ধার ও রাষ্ট্রীয় সংস্কারের রূপরেখা
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 px-4">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-slate-200"
          >
            <FaFileAlt className="text-6xl text-red-600 mx-auto mb-6" />
            <h2 className="text-4xl font-black text-slate-900 mb-6 text-center">
              রাষ্ট্র কাঠামো মেরামতের রূপরেখা{" "}
            </h2>
            <h3 className="text-2xl font-black text-slate-900 mb-6 text-center">
              (সংবিধান ও রাষ্ট্র ব্যবস্থার গণতান্ত্রিক সংস্কার, অর্থনৈতিক
              মুক্তির লক্ষ্যে প্রণীত)
            </h3>
            <p className="text-xl text-slate-700 leading-relaxed mb-6 text-center">
              বাংলাদেশের জনগণ গণতন্ত্র, সাম্য, মানবিক মর্যাদা, সামাজিক
              ন্যায়বিচার প্রতিষ্ঠার স্বপ্ন নিয়া এক সাগর রক্তের বিনিময়ে মহান
              মুক্তিযুদ্ধের মাধ্যমে যে রাষ্ট্র গড়িয়া তুলিয়াছিল, সেই রাষ্ট্রের
              মালিকানা আজ তাহাদের হাতে নাই। বর্তমান কর্তৃত্ববাদী সরকার বাংলাদেশ
              রাষ্ট্র কাঠামোকে ভাঙ্গিয়া চুরমার করিয়া ফেলিয়াছে। এই রাষ্ট্রকে
              মেরামত ও পুনর্গঠন করিতে হইবে। দেশের জনগণের হাতেই দেশের মালিকানা
              ফিরাইয়া দেওয়ার লক্ষ্যে একটি অবাধ, সুষ্ঠু, নিরপেক্ষ, গ্রহণযোগ্য ও
              অংশগ্রহণমূলক নির্বাচনে জয় লাভের পর বর্তমান ফ্যাসিস্ট সরকার হঠানোর
              আন্দোলনে অংশগ্রহণকারী রাজনৈতিক দলসমূহের সমন্বয়ে একটি
              “জনকল্যাণমূলক জাতীয় ঐকমত্যের সরকার” প্রতিষ্ঠা করা হইবে।
            </p>
            <p className="text-xl text-slate-700 leading-relaxed text-center">
              উক্ত “জাতীয় সরকার” নিম্নলিখিত রাষ্ট্র রূপান্তরমূলক সংস্কার
              কার্যক্রম গ্রহণ করিবে :
            </p>
          </motion.div>
        </div>
      </section>

      {/* 31 Points List */}
      <section className="py-20 px-4 bg-linear-to-b from-white to-slate-50">
        <div className="mx-auto max-w-296">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-4">
              ৩১ দফা দাবি
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
                <div className="absolute inset-0 bg-linear-to-r from-red-500 to-orange-600 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-all"></div>
                <div className="relative bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all border border-slate-200 h-full flex flex-col">
                  <div className="flex flex-col items-center text-center mb-4">
                    <div className="w-14 h-14 bg-linear-to-br from-red-500 to-orange-600 rounded-xl flex items-center justify-center text-white font-black text-2xl shadow-lg mb-3">
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
                একসাথে পরিবর্তন আনি
              </h2>
              <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
                এই ৩১ দফা বাস্তবায়নে আপনার সমর্থন ও অংশগ্রহণ প্রয়োজন
              </p>
              <a
                href="/contact"
                className="inline-block px-10 py-4 bg-linear-to-r from-red-600 to-orange-600 text-white font-bold rounded-xl shadow-xl hover:shadow-2xl hover:from-red-700 hover:to-orange-700 transition-all transform hover:scale-105"
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
