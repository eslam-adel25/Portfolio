import emailjs from "emailjs-com";
import { useEffect, useRef, useState } from "react";
import { useGoogleLogin, googleLogout } from "@react-oauth/google";
import { motion, useInView } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Linkedin,
  Github,
  Twitter,
  Instagram,
  CheckCircle,
} from "lucide-react";

const ContactSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    message: "",
  });
  const [googleUser, setGoogleUser] = useState<{
    email: string;
    name?: string;
  } | null>(null);
  const [googleError, setGoogleError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCooldown, setIsCooldown] = useState(false);
  const [cooldownSeconds, setCooldownSeconds] = useState(60);

  const getWordCount = (text: string) => {
    const trimmedText = text.trim();
    if (!trimmedText) return 0;
    return trimmedText.split(/\s+/).length;
  };

  const messageWordCount = getWordCount(formData.message);
  const messageValidationError =
    messageWordCount < 5
      ? "Please enter at least 5 words."
      : messageWordCount > 200
        ? "Maximum message length is 200 words."
        : "";

  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        setGoogleError("");
        const response = await fetch(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          {
            headers: {
              Authorization: `Bearer ${tokenResponse.access_token}`,
            },
          },
        );

        if (!response.ok) {
          throw new Error("Unable to verify Google account.");
        }

        const profile = await response.json();

        if (!profile.email) {
          throw new Error("Unable to verify Google email.");
        }

        setGoogleUser({ email: profile.email, name: profile.name });

        if (!formData.name && profile.name) {
          setFormData((prev) => ({ ...prev, name: profile.name }));
        }
      } catch (error) {
        console.error(error);
        setGoogleError("Google authentication failed. Please try again.");
      }
    },
    onError: () => {
      setGoogleError("Google authentication failed. Please try again.");
    },
    scope: "openid email profile",
    flow: "implicit",
  });

  const handleSignOut = () => {
    googleLogout();
    setGoogleUser(null);
    setGoogleError("");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isSubmitting || isCooldown) {
      return;
    }

    setIsSubmitting(true);

    if (!googleUser?.email) {
      setIsSubmitting(false);
      setGoogleError("Please sign in with Google before submitting.");
      return;
    }

    const trimmedName = formData.name.trim();
    const trimmedSubject = formData.subject.trim();
    const messageWordCount = getWordCount(formData.message);

    if (!trimmedName || !trimmedSubject) {
      setIsSubmitting(false);
      return;
    }

    if (messageWordCount < 5 || messageWordCount > 200) {
      setIsSubmitting(false);
      return;
    }

    const verifiedEmail = googleUser.email;

    try {
      // ✅ إرسال على الإيميل
      await emailjs.send(
        "service_kutggjp",
        "template_ok0dp52",
        {
          name: formData.name,
          email: verifiedEmail,
          subject: formData.subject,
          message: formData.message,
        },
        "iIels6mC6zz5yd7A2",
      );

      // ✅ تجهيز رسالة واتساب
      const text = `
Name: ${formData.name}
Email: ${verifiedEmail}
Subject: ${formData.subject}
Message: ${formData.message}
    `;

      const whatsappUrl = `https://wa.me/201093397961?text=${encodeURIComponent(text)}`;

      // فتح واتساب
      window.open(whatsappUrl, "_blank");

      // UI بتاعك (زي ما هو 🔥)
      setIsSubmitting(false);
      setIsSubmitted(true);
      setIsCooldown(true);
      setCooldownSeconds(60);
      setFormData({ name: "", subject: "", message: "" });

      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      console.log(error);
      setIsSubmitting(false);
      alert("في مشكلة في الإرسال ❌");
    }
  };

  useEffect(() => {
    if (!isCooldown) {
      return;
    }

    const interval = setInterval(() => {
      setCooldownSeconds((seconds) => {
        if (seconds <= 1) {
          setIsCooldown(false);
          clearInterval(interval);
          return 60;
        }

        return seconds - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isCooldown]);

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "eslam.adel2596@gmail.com",
      href: "mailto:eslam.adel2596@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+20 1093397961",
      href: "tel:+201093397961",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Assiut, Egypt",
      href: "#",
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/eslam-adel-jadalrab-808862361?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      label: "LinkedIn",
    },
    { icon: Github, href: "https://github.com/eslam-adel25", label: "GitHub" },
    { icon: Twitter, href: "https://x.com/AdelEslam87922", label: "Twitter" },
    {
      icon: Instagram,
      href: "https://www.instagram.com/eslam_adel0127?igsh=MWZ5bGgzdGdvbDY2Nw==",
      label: "Instagram",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <section
      id="contact"
      className="py-24 relative bg-[#12121a]"
      ref={sectionRef}
    >
      {/* Background Orbs */}
      <div
        className="orb orb-3"
        style={{ top: "30%", left: "80%", opacity: 0.15 }}
      />

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#00d4ff] text-sm font-semibold tracking-wider uppercase mb-4 block">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Contact <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00d4ff] to-[#7b2cbf] mx-auto rounded-full mb-6" />
          <p className="text-[#a0a0b0] max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach
            out. I'm always open to discussing new opportunities.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="lg:col-span-2 space-y-8"
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold mb-6">Let's Talk</h3>
              <p className="text-[#a0a0b0] mb-8 leading-relaxed">
                Whether you have a question, a project idea, or just want to say
                hello, I'd love to hear from you. Send me a message and I'll
                respond as soon as possible.
              </p>
            </motion.div>

            {/* Contact Details */}
            <motion.div variants={itemVariants} className="space-y-4">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  className="flex items-center gap-4 p-4 rounded-xl bg-[#1a1a25] border border-[#ffffff05] hover:border-[#00d4ff30] transition-colors group"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00d4ff20] to-[#7b2cbf20] flex items-center justify-center group-hover:scale-110 transition-transform">
                    <item.icon className="text-[#00d4ff]" size={22} />
                  </div>
                  <div>
                    <p className="text-sm text-[#a0a0b0]">{item.label}</p>
                    <p className="font-medium">{item.value}</p>
                  </div>
                </motion.a>
              ))}
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants}>
              <p className="text-sm text-[#a0a0b0] mb-4">Follow me on</p>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={social.label}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="lg:col-span-3"
          >
            <motion.form
              variants={itemVariants}
              onSubmit={handleSubmit}
              className="card-luxury p-8"
            >
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#00d4ff20] to-[#7b2cbf20] flex items-center justify-center">
                    <CheckCircle className="text-[#00d4ff]" size={40} />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                  <p className="text-[#a0a0b0]">
                    Thank you for reaching out. I'll get back to you soon.
                  </p>
                </motion.div>
              ) : (
                <>
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                        className="input-luxury"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Your Email
                      </label>
                      <div className="rounded-xl bg-[#1a1a25] border border-[#ffffff05] p-4">
                        {googleUser ? (
                          <div className="space-y-3">
                            <div className="flex items-center justify-between gap-3">
                              <div className="flex items-center gap-2 text-[#00d4ff]">
                                <CheckCircle size={18} />
                                <span className="font-medium">
                                  Verified Google Account
                                </span>
                              </div>
                              <button
                                type="button"
                                onClick={handleSignOut}
                                className="text-sm text-[#a0a0b0] hover:text-white transition"
                              >
                                Sign Out
                              </button>
                            </div>
                            <p className="text-white break-all">
                              {googleUser.email}
                            </p>
                          </div>
                        ) : (
                          <button
                            type="button"
                            onClick={() => {
                              setGoogleError("");
                              login();
                            }}
                            className="btn-luxury w-full"
                          >
                            Continue with Google
                          </button>
                        )}
                      </div>
                      {googleError && (
                        <p className="text-sm text-red-400 mt-2">
                          {googleError}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-medium mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Project Inquiry"
                      required
                      className="input-luxury"
                    />
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project..."
                      required
                      rows={5}
                      className="input-luxury resize-none"
                    />
                    <p className="text-sm text-[#a0a0b0] mt-2">
                      {messageWordCount} / 200 words
                    </p>
                    {messageValidationError && (
                      <p className="text-sm text-red-400 mt-2">
                        {messageValidationError}
                      </p>
                    )}
                  </div>

                  <motion.button
                    type="submit"
                    disabled={
                      isSubmitting ||
                      isCooldown ||
                      !googleUser ||
                      !formData.name.trim() ||
                      !formData.subject.trim() ||
                      messageWordCount < 5 ||
                      messageWordCount > 200
                    }
                    className="btn-luxury w-full flex items-center justify-center gap-2 disabled:opacity-70"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full loading" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        Send Message
                      </>
                    )}
                  </motion.button>
                  {isCooldown && (
                    <p className="text-sm text-[#a0a0b0] mt-3">
                      You can send another message in {cooldownSeconds} seconds.
                    </p>
                  )}
                </>
              )}
            </motion.form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
