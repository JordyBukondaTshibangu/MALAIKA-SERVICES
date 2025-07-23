"use client";

import { z } from "zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslations } from "next-intl";
import * as motion from "motion/react-client";
import { zodResolver } from "@hookform/resolvers/zod";
import { Map, Phone, BriefcaseBusiness } from "lucide-react";

import Button from "@atoms/button";
import Feedback from "@atoms/feedback";

const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name is required")
    .max(100, "Name is too long"),
  email: z.string().trim().email("Invalid email address"),
  subject: z
    .string()
    .trim()
    .min(3, "Subject is required")
    .max(200, "Subject is too long"),
  message: z
    .string()
    .trim()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message is too long"),
});

type ContactFormInputs = z.infer<typeof contactFormSchema>;

type ContactInfoBlockProps = {
  icon: React.ElementType;
  title: string;
  details: string[];
};

const ContactInfo = ({ title, details, icon: Icon }: ContactInfoBlockProps) => (
  <div className="flex flex-col gap-4">
    <div className="flex items-center gap-4">
      <Icon size={28} color="#047db2" strokeWidth={2} />
      <h4 className="text-2xl font-semibold">{title}</h4>
    </div>
    <div className="flex flex-col gap-1 px-10">
      {details.map((line, index) => (
        <span key={index} className="text-sm">
          {line}
        </span>
      ))}
    </div>
  </div>
);

function MsContactForm() {
  const t = useTranslations("Contact");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormInputs>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const [submissionStatus, setSubmissionStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const formFields = [
    { name: "name", type: "text", placeholder: t("form.name") },
    { name: "email", type: "text", placeholder: t("form.email") },
    { name: "subject", type: "text", placeholder: t("form.subject") },
  ];

  const handleFormSubmit = async (data: ContactFormInputs) => {
    setSubmissionStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      console.log("Response:", response);

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData.message || "Something went wrong on the server."
        );
      }

      setSubmissionStatus("success");
      reset();
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmissionStatus("error");
    }
  };

  const handleClosePopup = () => setSubmissionStatus("idle");

  return (
    <section className="relative max-w-7xl mx-auto w-full flex flex-col md:flex-row gap-32 md:gap-14 py-10 md:py-20 px-5">
      <div className="flex flex-col gap-14 md:gap-24 w-full md:w-1/2">
        <motion.h3
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-2xl text-black font-bold italic"
        >
          {t("message")}
        </motion.h3>

        {submissionStatus === "success" && (
          <Feedback
            message={t("form.success")}
            type="success"
            onClose={handleClosePopup}
          />
        )}

        {submissionStatus === "error" && (
          <Feedback
            message={t("form.error")}
            type="error"
            onClose={handleClosePopup}
          />
        )}

        <motion.form
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-8 text-black"
          onSubmit={handleSubmit(handleFormSubmit)}
        >
          {formFields.map((field, idx) => (
            <div key={idx} className="w-full flex flex-col gap-1">
              <input
                key={idx}
                type={field.type}
                placeholder={field.placeholder}
                {...register(field.name as keyof ContactFormInputs)}
                disabled={isSubmitting}
                className="border-0 border-b border-gray-300 h-10 outline-none text-[#7A7A7A] px-2"
              />
              {errors[field.name as keyof ContactFormInputs] && (
                <p className="mt-1 text-sm text-red-600">
                  {errors[field.name as keyof ContactFormInputs]?.message}
                </p>
              )}
            </div>
          ))}

          <textarea
            placeholder={t("form.message")}
            {...register("message")}
            className="border-0 border-b border-gray-300 h-40 outline-none text-[#7A7A7A] px-2"
          />

          <div className="flex justify-start w-full">
            <Button
              type="submit"
              disabled={isSubmitting}
              buttonText={
                isSubmitting ? t("form.submitting") : t("form.submit")
              }
            />
          </div>
        </motion.form>
      </div>

      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full md:w-1/3 flex flex-col gap-16 text-black ml-auto"
      >
        <ContactInfo
          icon={Map}
          title={t("location")}
          details={["Rue de la Vie 1, 75001", "Gombe", "Kinshasa"]}
        />
        <ContactInfo
          icon={Phone}
          title={t("phone")}
          details={[
            "Jordan Lilyga",
            "+237 696 696 696",
            "Monday to Friday, 8:00 - 17:00",
          ]}
        />
        <ContactInfo
          icon={BriefcaseBusiness}
          title={t("legal_information")}
          details={["David Mutumbo", "Fiscal ID: 123456789"]}
        />
      </motion.div>
    </section>
  );
}

export default MsContactForm;
