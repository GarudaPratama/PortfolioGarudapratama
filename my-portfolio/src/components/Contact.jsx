import React, { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";

export default function Contact(){
  const { register, handleSubmit, reset } = useForm();
  const [status, setStatus] = useState(null);

  const onSubmit = async (data) => {
    setStatus("sending");
    // simulate request
    await new Promise(r=>setTimeout(r,900));
    setStatus("ok");
    reset();
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-transparent to-white/3 dark:to-black/10">
      <div className="max-w-3xl mx-auto px-6">
        <motion.h3 initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-6">Contact</motion.h3>

        <motion.form onSubmit={handleSubmit(onSubmit)} initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} className="bg-white/60 dark:bg-[#071018] p-6 rounded-xl shadow grid gap-4">
          <input {...register("name")} placeholder="Your name" className="p-3 rounded-md bg-white dark:bg-[#0b1220] border border-gray-200 dark:border-gray-800 text-gray-900 dark:text-gray-100"/>
          <input {...register("email")} placeholder="Your email" className="p-3 rounded-md bg-white dark:bg-[#0b1220] border border-gray-200 dark:border-gray-800 text-gray-900 dark:text-gray-100"/>
          <textarea {...register("message")} placeholder="Message" rows="5" className="p-3 rounded-md bg-white dark:bg-[#0b1220] border border-gray-200 dark:border-gray-800 text-gray-900 dark:text-gray-100"/>
          <div className="flex items-center justify-between">
            <button type="submit" className="px-5 py-3 bg-accent text-black rounded-md font-semibold">Send Message</button>
            <div className="text-sm text-gray-600 dark:text-gray-300">{status === "ok" ? "Sent ✓" : status === "sending" ? "Sending..." : ""}</div>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
