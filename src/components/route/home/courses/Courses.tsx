import { motion } from "framer-motion";
import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import img2 from "../../../../images/course/Databasae-programing.jpg";
import img3 from "../../../../images/course/Digital-marketing.jpg";
import img8 from "../../../../images/course/Ethical-hacking1.jpg";
import img4 from "../../../../images/course/Graphics-design2.jpg";
import img6 from "../../../../images/course/Video-editing.jpg";
import img5 from "../../../../images/course/Webdesign-and-devlopment.jpg";
import img7 from "../../../../images/course/auto-cad.jpg";
import img1 from "../../../../images/course/office-application.jpg";
import SectionHeader from "../../../animation/SectionHeader";
import CoursesModel from "./CoursesModel";

export default function Courses() {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div className="space-y-10 bg-slate-100 px-2 py-16 md:px-20">
      <SectionHeader
        title="আমাদের লেটেস্ট কোর্স সমূহ"
        text=" আমাদের চলমান সেরা কোর্সগুলো থেকে আপনার কাঙ্ক্ষিত কোর্স বেছে নিয়ে
          ক্যারিয়ার গড়ে তুলুন"
        icon={FaGraduationCap}
      />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-2 items-center justify-center gap-2 md:grid-cols-4 md:gap-6"
      >
        <motion.div variants={item}>
          <CoursesModel img={img1} color="blue" title="অফিস অ্যাপলিকেশন" />
        </motion.div>
        <motion.div variants={item}>
          <CoursesModel img={img2} color="green" title="ডাটাবেজ প্রোগ্রামিং" />
        </motion.div>
        <motion.div variants={item}>
          <CoursesModel img={img3} color="blue" title="ডিজিটাল মার্কেটিং" />
        </motion.div>
        <motion.div variants={item}>
          <CoursesModel img={img4} color="green" title="গ্রাফিক্স ডিজাইন" />
        </motion.div>
        <motion.div variants={item}>
          <CoursesModel img={img5} color="yellow" title="ওয়েব ডিজাইন" />
        </motion.div>
        <motion.div variants={item}>
          <CoursesModel img={img6} color="blue" title="ভিডিও এডিটিং" />
        </motion.div>
        <motion.div variants={item}>
          <CoursesModel img={img7} color="yellow" title="অটোক্যাড" />
        </motion.div>
        <motion.div variants={item}>
          <CoursesModel img={img8} color="green" title="ইথিক্যাল হ্যাকিং" />
        </motion.div>
      </motion.div>
      <div className="flex items-center justify-center pt-6">
        <button className="flex items-center gap-2 rounded-md bg-primary-100 px-6 py-2 font-bold uppercase text-white">
          <span>
            <LuGraduationCap />
          </span>
          <span>View all courses</span>
        </button>
      </div>
    </div>
  );
}
