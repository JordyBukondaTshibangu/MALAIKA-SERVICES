"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useSearchParams } from "next/navigation";
import { useTranslations } from "next-intl";
import { AnimatePresence, motion } from "motion/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, AlertCircle, ChevronDown, X } from "lucide-react";

import Button from "@atoms/button";
import { needKeys, type NeedKey } from "@/data/services";
import { contactFormSchema, type ContactFormInputs } from "@/lib/contact-schema";

const fieldBase =
  "w-full rounded-2xl border bg-white px-4 py-3.5 text-ink outline-none transition-[border-color,box-shadow] placeholder:text-slate/60 focus:border-sky focus:shadow-[0_0_0_4px_rgba(37,152,212,0.15)] disabled:opacity-60";

export default function ContactForm() {
  const t = useTranslations("Contact");
  const searchParams = useSearchParams();
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormInputs>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: { name: "", company: "", email: "", phone: "", message: "" },
  });

  // Service CTAs link here with ?besoin=<key>: pre-select that topic.
  useEffect(() => {
    const need = searchParams.get("besoin");
    if (need && (needKeys as readonly string[]).includes(need)) {
      setValue("need", need as NeedKey);
    }
  }, [searchParams, setValue]);

  const onSubmit = async (data: ContactFormInputs) => {
    setStatus("idle");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error(`Request failed: ${res.status}`);
      setStatus("success");
      reset();
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus("error");
    }
  };

  const err = (name: keyof ContactFormInputs) => {
    const msg = errors[name]?.message;
    return msg ? (
      <motion.p
        id={`${name}-error`}
        initial={{ opacity: 0, y: -4 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-2 text-sm font-medium text-red-700"
      >
        {t(`errors.${msg}` as "errors.name")}
      </motion.p>
    ) : null;
  };

  const border = (name: keyof ContactFormInputs) =>
    errors[name] ? "border-red-400" : "border-line";

  const label = (htmlFor: string, text: string, optional = false) => (
    <label htmlFor={htmlFor} className="mb-2 block text-sm font-semibold text-ink">
      {text}
      {optional && <span className="font-normal text-slate"> ({t("form.optional")})</span>}
    </label>
  );

  return (
    <div>
      <AnimatePresence>
        {status !== "idle" && (
          <motion.div
            role={status === "error" ? "alert" : "status"}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <div
              className={`mb-6 flex items-start gap-3 rounded-2xl p-4 ${
                status === "success" ? "bg-leaf/15 text-leaf-deep" : "bg-red-50 text-red-800"
              }`}
            >
              {status === "success" ? <CheckCircle2 className="mt-0.5 shrink-0" /> : <AlertCircle className="mt-0.5 shrink-0" />}
              <div className="flex-1">
                <p className="font-semibold">{t(status === "success" ? "form.success_title" : "form.error_title")}</p>
                <p className="text-sm">{t(status === "success" ? "form.success" : "form.error")}</p>
              </div>
              <button type="button" onClick={() => setStatus("idle")} aria-label={t("form.dismiss")} className="rounded-full p-1 hover:bg-black/5">
                <X size={18} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <form noValidate onSubmit={handleSubmit(onSubmit)} className="grid gap-5 sm:grid-cols-2">
        <div>
          {label("name", t("form.name"))}
          <input id="name" autoComplete="name" disabled={isSubmitting} aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={`${fieldBase} ${border("name")}`} {...register("name")} />
          {err("name")}
        </div>
        <div>
          {label("company", t("form.company"), true)}
          <input id="company" autoComplete="organization" disabled={isSubmitting}
            className={`${fieldBase} ${border("company")}`} {...register("company")} />
          {err("company")}
        </div>
        <div>
          {label("email", t("form.email"))}
          <input id="email" type="email" autoComplete="email" disabled={isSubmitting} aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={`${fieldBase} ${border("email")}`} {...register("email")} />
          {err("email")}
        </div>
        <div>
          {label("phone", t("form.phone"), true)}
          <input id="phone" type="tel" autoComplete="tel" disabled={isSubmitting} aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            className={`${fieldBase} ${border("phone")}`} {...register("phone")} />
          {err("phone")}
        </div>
        <div className="sm:col-span-2">
          {label("need", t("form.need"))}
          <div className="relative">
            <select id="need" defaultValue="" disabled={isSubmitting} aria-invalid={!!errors.need}
              aria-describedby={errors.need ? "need-error" : undefined}
              className={`${fieldBase} ${border("need")} appearance-none pr-12`} {...register("need")}>
              <option value="" disabled>{t("form.need_placeholder")}</option>
              {needKeys.map((k) => (
                <option key={k} value={k}>{t(`needs.${k}`)}</option>
              ))}
            </select>
            <ChevronDown aria-hidden size={20} className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate" />
          </div>
          {err("need")}
        </div>
        <div className="sm:col-span-2">
          {label("message", t("form.message"))}
          <textarea id="message" rows={6} disabled={isSubmitting} placeholder={t("form.message_placeholder")}
            aria-invalid={!!errors.message} aria-describedby={errors.message ? "message-error" : undefined}
            className={`${fieldBase} ${border("message")} resize-y`} {...register("message")} />
          {err("message")}
        </div>
        <div className="sm:col-span-2">
          <Button type="submit" disabled={isSubmitting} className="w-full sm:w-auto">
            {isSubmitting && (
              <motion.span
                aria-hidden
                className="size-4 rounded-full border-2 border-white/40 border-t-white"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
              />
            )}
            {isSubmitting ? t("form.submitting") : t("form.submit")}
          </Button>
        </div>
      </form>
    </div>
  );
}
