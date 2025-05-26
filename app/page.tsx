"use client"

import type React from "react"

import { motion } from "framer-motion"
import {
  ArrowRight,
  Download,
  Play,
  Shield,
  Users,
  Award,
  TrendingUp,
  PieChart,
  Banknote,
  Building2,
  Smartphone,
  Lock,
  HeadphonesIcon,
  Star,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"
import { useInView } from "framer-motion"
import { useRef } from "react"
import bannerImage from "@/public/images/LmpwZw.webp"
import chooseImage from "@/public/images/MlBGdUtoeHVTYWM9.webp"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const scaleOnHover = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 },
}

function AnimatedSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white overflow-hidden">

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white">
        <div className="absolute inset-0 bg-black/10"></div>

        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
            }}
            transition={{
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
          <motion.div
            className="absolute -bottom-40 -left-40 w-80 h-80 bg-green-400/20 rounded-full blur-3xl"
            animate={{
              x: [0, -100, 0],
              y: [0, 50, 0],
            }}
            transition={{
              duration: 25,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        </div>

        <div className="relative container mx-auto px-4 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  <Badge className="bg-green-500/20 text-green-100 border-green-400/30 backdrop-blur-sm">
                    SEBI Registered • Trusted by 2M+ Users
                  </Badge>
                </motion.div>

                <motion.h1
                  className="text-4xl lg:text-6xl font-bold leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                >
                  Your Gateway to
                  <motion.span
                    className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300"
                    animate={{
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    }}
                    transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                  >
                    {" "}
                    Smart Investing
                  </motion.span>
                </motion.h1>

                <motion.p
                  className="text-xl text-blue-100 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  Trade stocks, invest in mutual funds, buy insurance, and build wealth with India's most trusted
                  investment platform. Start your financial journey today.
                </motion.p>
              </div>

              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                <motion.div {...scaleOnHover}>
                  <Button
                    size="lg"
                    className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                    onClick={() => {
                      const isAndroid = /Android/i.test(navigator.userAgent);
                      const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
                      // const appScheme = "myapp://"; // Replace with your app's URL scheme
                      const playStoreUrl = "https://play.google.com/store/apps/details?id=com.iw.mint.app&pcampaignid=web_share"; // Replace with your Play Store URL
                      const appStoreUrl = "https://apps.apple.com/in/app/mint-by-investwell/id1479042500"; // Replace with your App Store URL
    
                      // Try to open the app
                      // window.location.href = appScheme;
    
                      // Fallback to store if the app is not installed
                      setTimeout(() => {
                        if (isAndroid) {
                          window.location.href = playStoreUrl;
                        } else if (isIOS) {
                          window.location.href = appStoreUrl;
                        }
                      }, 2000); // Adjust timeout as needed
                    }}
                  >
                    <Download className="mr-2 h-5 w-5" />
                    Download App
                  </Button>
                </motion.div>

                {/* <motion.div {...scaleOnHover}>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white/30 text-black px-8 py-4 text-lg backdrop-blur-sm"
                  >
                    <Play className="mr-2 h-4 w-4" />
                    Watch Demo
                  </Button>
                </motion.div> */}
              </motion.div>

              <motion.div
                className="flex items-center gap-8 pt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                variants={staggerContainer}
              >
                {[
                  { value: "2M+", label: "Active Users" },
                  { value: "₹50K Cr+", label: "Assets Managed" },
                  { value: "4.8★", label: "App Rating" },
                ].map((stat, index) => (
                  <motion.div key={index} className="text-center" variants={fadeInUp} whileHover={{ scale: 1.1 }}>
                    <div className="text-2xl font-bold">{stat.value}</div>
                    <div className="text-blue-200 text-sm">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              <motion.div className="relative z-10" whileHover={{ y: -10 }} transition={{ duration: 0.3 }}>
                <Image
                  src={bannerImage}
                  alt="Devhar Mobile App"
                  width={400}
                  height={600}
                  className="mx-auto drop-shadow-2xl"
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/50 to-transparent rounded-3xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <AnimatedSection>
        <section className="py-12 bg-white/80 backdrop-blur-sm border-b">
          <div className="container mx-auto px-4">
            <motion.div
              className="flex flex-wrap justify-center items-center gap-8 opacity-60"
              variants={staggerContainer}
              initial="initial"
              animate="animate"
            >
              {[
                { icon: Shield, text: "SEBI Registered", color: "text-green-600" },
                { icon: Lock, text: "AMFI Registered", color: "text-blue-600" },
                { icon: Award, text: "Award Winning", color: "text-purple-600" },
                { icon: Users, text: "2M+ Happy Users", color: "text-orange-600" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-2"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05 }}
                >
                  <item.icon className={`h-6 w-6 ${item.color}`} />
                  <span className="font-semibold">{item.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </AnimatedSection>

      {/* Products Overview */}
      <AnimatedSection>
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4">
            <motion.div className="text-center mb-16" variants={fadeInUp}>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Complete Financial Ecosystem</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From stocks to insurance, we've got all your financial needs covered under one roof
              </p>
            </motion.div>

            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={staggerContainer}
              initial="initial"
              animate="animate"
            >
              {[
                {
                  icon: TrendingUp,
                  title: "Stock Trading",
                  description: "Trade in NSE & BSE with zero brokerage on delivery trades",
                  color: "text-green-600",
                  bgColor: "bg-green-50",
                  href: "/products/stocks",
                },
                {
                  icon: PieChart,
                  title: "Mutual Funds",
                  description: "Invest in 3000+ mutual funds with zero commission",
                  color: "text-blue-600",
                  bgColor: "bg-blue-50",
                  href: "/products/mutual-funds",
                },
                {
                  icon: Shield,
                  title: "Insurance",
                  description: "Term, health & life insurance from top insurers",
                  color: "text-purple-600",
                  bgColor: "bg-purple-50",
                  href: "/products/insurance",
                },
                {
                  icon: Banknote,
                  title: "IPOs",
                  description: "Apply for IPOs directly from the app with UPI",
                  color: "text-orange-600",
                  bgColor: "bg-orange-50",
                  href: "/products/ipos",
                },
                {
                  icon: Building2,
                  title: "Fixed Deposits",
                  description: "High-yield FDs from top banks and NBFCs",
                  color: "text-indigo-600",
                  bgColor: "bg-indigo-50",
                  href: "/products/fixed-deposits",
                },
                {
                  icon: TrendingUp,
                  title: "Gold & ETFs",
                  description: "Invest in digital gold and exchange traded funds",
                  color: "text-yellow-600",
                  bgColor: "bg-yellow-50",
                  href: "/products/gold-etfs",
                },
              ].map((product, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="group hover:shadow-xl transition-all duration-500 border-0 shadow-md bg-white/80 backdrop-blur-sm h-full">
                    <CardContent className="p-8">
                      <motion.div
                        className={`w-16 h-16 ${product.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <product.icon className={`h-8 w-8 ${product.color}`} />
                      </motion.div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{product.title}</h3>
                      <p className="text-gray-600 mb-6">{product.description}</p>
                      <Link href={product.href}>
                        <Button
                          variant="ghost"
                          className="p-0 h-auto font-semibold text-blue-600 hover:text-blue-700 group"
                        >
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </AnimatedSection>

      {/* Features Showcase */}
      <AnimatedSection>
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Why 2M+ Users Choose Devhar</h2>
                <div className="space-y-6">
                  {[
                    {
                      icon: Smartphone,
                      title: "Intuitive Mobile App",
                      description: "Clean, fast, and user-friendly interface designed for both beginners and experts",
                    },
                    {
                      icon: Lock,
                      title: "AMFI Registered",
                      description: "Your data and investments are protected with 256-bit encryption and 2FA",
                    },
                    {
                      icon: HeadphonesIcon,
                      title: "24/7 Customer Support",
                      description: "Get help whenever you need it through chat, call, or WhatsApp",
                    },
                  ].map((feature, index) => (
                    <motion.div
                      key={index}
                      className="flex gap-4"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.2, duration: 0.6 }}
                      viewport={{ once: true }}
                      whileHover={{ x: 10 }}
                    >
                      <motion.div
                        className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <feature.icon className="h-6 w-6 text-blue-600" />
                      </motion.div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                        <p className="text-gray-600">{feature.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
                <motion.div className="mt-8" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    size="lg"
                    className="bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-xl transition-all duration-300"
                    onClick={() => {
                      const isAndroid = /Android/i.test(navigator.userAgent);
                      const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
                      // const appScheme = "myapp://"; // Replace with your app's URL scheme
                      const playStoreUrl = "https://play.google.com/store/apps/details?id=com.iw.mint.app&pcampaignid=web_share"; // Replace with your Play Store URL
                      const appStoreUrl = "https://apps.apple.com/in/app/mint-by-investwell/id1479042500"; // Replace with your App Store URL
    
                      // Try to open the app
                      // window.location.href = appScheme;
    
                      // Fallback to store if the app is not installed
                      setTimeout(() => {
                        if (isAndroid) {
                          window.location.href = playStoreUrl;
                        } else if (isIOS) {
                          window.location.href = appStoreUrl;
                        }
                      }, 2000); // Adjust timeout as needed
                    }}
                  >
                    Explore All Features <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </motion.div>
              </motion.div>

              <motion.div
                className="relative"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <motion.div whileHover={{ scale: 1.05, rotateY: 5 }} transition={{ duration: 0.3 }}>
                  <Image
                    src={chooseImage}
                    alt="App Features"
                    width={600}
                    height={500}
                    className="rounded-2xl shadow-2xl"
                  />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Testimonials */}
      <AnimatedSection>
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4">
            <motion.div className="text-center mb-16" variants={fadeInUp}>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Trusted by Millions</h2>
              <p className="text-xl text-gray-600">See what our users have to say about their experience</p>
            </motion.div>

            <motion.div
              className="grid md:grid-cols-3 gap-8"
              variants={staggerContainer}
              initial="initial"
              animate="animate"
            >
              {[
                {
                  name: "Priya Sharma",
                  role: "Software Engineer",
                  content:
                    "Devhar made investing so simple. I started my SIP journey and now I'm building wealth systematically.",
                  rating: 5,
                },
                {
                  name: "Rajesh Kumar",
                  role: "Business Owner",
                  content:
                    "The zero brokerage on delivery trades saved me thousands. Best platform for long-term investing.",
                  rating: 5,
                },
                {
                  name: "Anita Patel",
                  role: "Teacher",
                  content:
                    "Customer support is excellent. They helped me understand mutual funds and choose the right ones.",
                  rating: 5,
                },
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="border-0 shadow-md bg-white/80 backdrop-blur-sm h-full">
                    <CardContent className="p-8">
                      <motion.div
                        className="flex mb-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                      >
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.1 * i, duration: 0.3 }}
                          >
                            <Star className="h-5 w-5 text-yellow-400 fill-current" />
                          </motion.div>
                        ))}
                      </motion.div>
                      <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                      <div>
                        <div className="font-semibold text-gray-900">{testimonial.name}</div>
                        <div className="text-sm text-gray-500">{testimonial.role}</div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection>
        <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white relative overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-blue-600/50 to-purple-600/50"
            animate={{
              background: [
                "linear-gradient(45deg, rgba(59, 130, 246, 0.5), rgba(147, 51, 234, 0.5))",
                "linear-gradient(45deg, rgba(147, 51, 234, 0.5), rgba(59, 130, 246, 0.5))",
                "linear-gradient(45deg, rgba(59, 130, 246, 0.5), rgba(147, 51, 234, 0.5))",
              ],
            }}
            transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
          />

          <div className="relative container mx-auto px-4 text-center">
            <motion.h2
              className="text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Start Your Investment Journey Today
            </motion.h2>
            <motion.p
              className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Join millions of Indians who trust Devhar for their financial goals. Download the app and get started in
              minutes.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  className="bg-green-500 hover:bg-green-600 px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={() => {
                    const playStoreUrl = "https://play.google.com/store/apps/details?id=com.iw.mint.app&pcampaignid=web_share";
                    setTimeout(() => {
                        window.location.href = playStoreUrl;
                    }, 2000);
                  }}
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download for Android
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={() => {
                    const appStoreUrl = "https://apps.apple.com/in/app/mint-by-investwell/id1479042500";
                    setTimeout(() => {
                        window.location.href = appStoreUrl;
                    }, 2000);
                  }}
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download for iOS
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </AnimatedSection>
    </div>
  )
}
