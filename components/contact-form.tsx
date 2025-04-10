"use client";

import { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

// Form validation schema
const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters" })
    .max(50, { message: "Name must be less than 50 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters" })
    .max(1000, { message: "Message must be less than 1000 characters" }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Something went wrong");
      }

      // Show success message
      toast.success("Message sent successfully! I'll get back to you soon.");

      // Reset form
      reset();
    } catch (error) {
      // Show error message
      toast.error(
        error instanceof Error
          ? error.message
          : "Failed to send message. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit(onSubmit)}>
      <div className="space-y-1 sm:space-y-2">
        <Label htmlFor="name" className="text-sm sm:text-base">
          Name
        </Label>
        <Input
          id="name"
          type="text"
          className={`h-10 border-border/50 bg-secondary/70 text-sm text-foreground transition-all focus:border-primary focus:ring-1 focus:ring-primary sm:h-11 sm:text-base ${
            errors.name ? "border-red-500" : ""
          }`}
          {...register("name")}
          disabled={isSubmitting}
        />
        {errors.name && (
          <p className="mt-1 text-xs text-red-500 sm:text-sm">
            {errors.name.message}
          </p>
        )}
      </div>

      <div className="space-y-1 sm:space-y-2">
        <Label htmlFor="email" className="text-sm sm:text-base">
          Email
        </Label>
        <Input
          id="email"
          type="email"
          className={`h-10 border-border/50 bg-secondary/70 text-sm text-foreground transition-all focus:border-primary focus:ring-1 focus:ring-primary sm:h-11 sm:text-base ${
            errors.email ? "border-red-500" : ""
          }`}
          {...register("email")}
          disabled={isSubmitting}
        />
        {errors.email && (
          <p className="mt-1 text-xs text-red-500 sm:text-sm">
            {errors.email.message}
          </p>
        )}
      </div>

      <div className="space-y-1 sm:space-y-2">
        <Label htmlFor="message" className="text-sm sm:text-base">
          Message
        </Label>
        <Textarea
          id="message"
          rows={4}
          className={`border-border/50 bg-secondary/70 text-sm text-foreground transition-all focus:border-primary focus:ring-1 focus:ring-primary sm:text-base ${
            errors.message ? "border-red-500" : ""
          }`}
          {...register("message")}
          disabled={isSubmitting}
        />
        {errors.message && (
          <p className="mt-1 text-xs text-red-500 sm:text-sm">
            {errors.message.message}
          </p>
        )}
      </div>

      <Button
        type="submit"
        size="lg"
        className="hover-lift mt-2 w-full py-2 text-sm font-medium sm:mt-4 sm:py-3 sm:text-base"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}
