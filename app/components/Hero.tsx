"use client"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-white to-slate-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 md:py-32 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 space-y-6 order-2 md:order-1"
        >
          {/* <span className="inline-block px-6 py-2 bg-emerald-100 text-emerald-700 rounded-full font-bold text-sm uppercase tracking-wider">
            জনগণের সেবায়
          </span> */}
          <h1>
            <Image
              src="/sanjida-islam/jonogonerPashe.webp"
              alt="জনগণের পাশে"
              width={400}
              height={200}
              className="w-full max-w-md h-auto"
              priority
            />
          </h1>
          <p className="text-slate-600 text-lg max-w-prose leading-relaxed">
            আপনার নিরাপত্তা, মর্যাদা ও অধিকার নিশ্চিত করাই আমাদের লক্ষ্য। গুম,
            বিচারবহির্ভূত হত্যাকাণ্ড ও রাষ্ট্রীয় নিপীড়নের বিরুদ্ধে ন্যায়বিচারের
            লড়াইয়ে আমরা মানুষের পাশে আছি—সাহস, সত্য এবং মানবিকতার পক্ষে।
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/about"
              className="px-8 py-4 bg-emerald-600 text-white font-bold rounded-xl shadow-xl hover:bg-emerald-700 hover:shadow-2xl transition-all transform hover:scale-105"
            >
              আরও জানুন
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 bg-slate-100 text-slate-900 font-bold rounded-xl hover:bg-slate-200 transition-all"
            >
              যোগাযোগ করুন
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative order-1 md:order-2 mb-12 md:mb-0"
        >
          <div className="absolute inset-0 bg-emerald-500 rounded-3xl blur-2xl opacity-20"></div>
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white h-[400px] sm:h-[500px] md:h-[600px]">
            <Image
              src="/sanjida-islam/sanjida-islam.webp"
              alt="সানজিদা ইসলাম "
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="mt-4 md:absolute md:bottom-[-50px] md:left-0 md:right-0 p-2 md:p-4">
            <p className="text-black text-center font-semibold text-lg md:text-xl">
              ইঞ্জিনিয়ার সানজিদা ইসলাম তুলী
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
