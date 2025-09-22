import React, { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  name: yup.string().required("Tolong isi nama lu"),
  email: yup.string().email("Email invalid").required("Tolong isi email"),
  message: yup.string().min(10, "Biar panjang dikit ya").required("Tolong isi pesan"),
});

export default function Contact() {
  const [status, setStatus] = useState(null);
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (data) => {
    try {
      // Simulate network
      setStatus(null);
      await new Promise((r) => setTimeout(r, 900));
      // Normally here you call API (EmailJS / Netlify / server)
      setStatus({ ok: true, message: "Message sent! I will reply soon." });
      reset();
    } catch (err) {
      setStatus({ ok: false, message: "Gagal kirim, coba lagi nanti." });
    }
  };

  return (
    <section id="contact" className="bg-gray-50 dark:bg-gray-900 py-24">
      <div className="max-w-3xl mx-auto px-6">
        <motion.h2 className="text-3xl font-bold mb-6 text-blue-600 dark:text-blue-400 text-center" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          Contact Me
        </motion.h2>

        <motion.form onSubmit={handleSubmit(onSubmit)} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md space-y-4" initial={{ y: 10, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }}>
          <div>
            <label className="text-sm">Name</label>
            <input {...register("name")} className="w-full mt-1 p-3 rounded-lg border dark:bg-gray-900" />
            {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name.message}</p>}
          </div>

          <div>
            <label className="text-sm">Email</label>
            <input {...register("email")} className="w-full mt-1 p-3 rounded-lg border dark:bg-gray-900" />
            {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>}
          </div>

          <div>
            <label className="text-sm">Message</label>
            <textarea {...register("message")} rows="5" className="w-full mt-1 p-3 rounded-lg border dark:bg-gray-900" />
            {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message.message}</p>}
          </div>

          <div className="flex items-center gap-4">
            <button type="submit" disabled={isSubmitting} className="ripple px-5 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>

            {status && (
              <div className={`text-sm ${status.ok ? "text-green-600" : "text-red-500"}`}>
                {status.message}
              </div>
            )}
          </div>
        </motion.form>
      </div>
    </section>
  );
}
