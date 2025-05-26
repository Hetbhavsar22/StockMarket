"use client"

import { motion } from "framer-motion"
import { Banknote, Shield, TrendingUp, Download, Calendar, Target, Clock, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import ipoimage from "@/public/images/aS5qcGc.webp"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
}

export default function IPOsPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-orange-600 via-red-700 to-pink-800 text-white">
        <div className="absolute inset-0 bg-black/10"></div>

        {/* Animated background */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        </div>

        <div className="relative container mx-auto px-4 py-20">
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
                  <Badge className="bg-orange-500/20 text-orange-100 border-orange-400/30 backdrop-blur-sm">
                    UPI Payments • Instant Allotment
                  </Badge>
                </motion.div>

                <motion.h1
                  className="text-4xl lg:text-5xl font-bold leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                >
                  IPO Investments Made
                  <motion.span
                    className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-300"
                    animate={{
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    }}
                    transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                  >
                    {" "}
                    Simple
                  </motion.span>
                </motion.h1>

                <motion.p
                  className="text-xl text-orange-100 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  Apply for IPOs directly from the app with UPI payments. Get instant allotment updates and invest in
                  India's most promising companies from day one.
                </motion.p>
              </div>

              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    size="lg"
                    className="bg-white text-orange-700 hover:bg-gray-100 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                    onClick={() => {
                      const isAndroid = /Android/i.test(navigator.userAgent);
                      const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
                      // const appScheme = "myapp://"; // Replace with your app's URL scheme
                      const playStoreUrl = "https://play.google.com/store/apps/details?id=com.globecapital.prod"; // Replace with your Play Store URL
                      const appStoreUrl = "https://apps.apple.com/in/app/globe-capital-stock-trading/id1545938530"; // Replace with your App Store URL
    
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
                    Apply for IPOs
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              <motion.div whileHover={{ scale: 1.05, rotateY: 5 }} transition={{ duration: 0.3 }}>
                <Image
                  src={ipoimage}
                  alt="IPO Application Interface"
                  width={600}
                  height={500}
                  className="rounded-2xl shadow-2xl"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* IPO Features */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Devhar for IPO Investments?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Seamless IPO application process with instant updates and expert research
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Banknote,
                title: "UPI Payments",
                description: "Apply for IPOs using UPI for instant and secure payments",
                highlight: "Instant Process",
                color: "text-orange-600",
                bgColor: "bg-orange-50",
              },
              {
                icon: Clock,
                title: "Real-time Updates",
                description: "Get instant notifications about allotment status and refunds",
                highlight: "Live Tracking",
                color: "text-blue-600",
                bgColor: "bg-blue-50",
              },
              {
                icon: Shield,
                title: "Expert Research",
                description: "Detailed IPO analysis and recommendations from our experts",
                highlight: "Research Reports",
                color: "text-green-600",
                bgColor: "bg-green-50",
              },
              {
                icon: Target,
                title: "Easy Application",
                description: "Apply for multiple IPOs with just a few taps on your phone",
                highlight: "User Friendly",
                color: "text-purple-600",
                bgColor: "bg-purple-50",
              },
              {
                icon: TrendingUp,
                title: "Portfolio Tracking",
                description: "Track your IPO investments and performance in one place",
                highlight: "Complete View",
                color: "text-indigo-600",
                bgColor: "bg-indigo-50",
              },
              {
                icon: Users,
                title: "Community Insights",
                description: "See what other investors are saying about upcoming IPOs",
                highlight: "Social Trading",
                color: "text-teal-600",
                bgColor: "bg-teal-50",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <Card className="group hover:shadow-xl transition-all duration-500 border-0 shadow-md bg-white/80 backdrop-blur-sm h-full">
                  <CardContent className="p-8">
                    <motion.div
                      className={`w-16 h-16 ${feature.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <feature.icon className={`h-8 w-8 ${feature.color}`} />
                    </motion.div>

                    <div className="mb-2">
                      <Badge variant="secondary" className="text-xs">
                        {feature.highlight}
                      </Badge>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How IPO Works */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How to Apply for IPOs</h2>
            <p className="text-xl text-gray-600">Simple 4-step process to invest in IPOs</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Browse IPOs",
                description: "Explore upcoming and live IPOs with detailed company information",
              },
              {
                step: "02",
                title: "Research & Analyze",
                description: "Read our expert analysis and company fundamentals before investing",
              },
              {
                step: "03",
                title: "Apply with UPI",
                description: "Submit your application and make payment instantly using UPI",
              },
              {
                step: "04",
                title: "Track & Get Allotted",
                description: "Monitor your application status and receive allotment notifications",
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  {step.step}
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-700 text-white relative overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-orange-600/50 to-red-600/50"
          animate={{
            background: [
              "linear-gradient(45deg, rgba(234, 88, 12, 0.5), rgba(220, 38, 38, 0.5))",
              "linear-gradient(45deg, rgba(220, 38, 38, 0.5), rgba(234, 88, 12, 0.5))",
              "linear-gradient(45deg, rgba(234, 88, 12, 0.5), rgba(220, 38, 38, 0.5))",
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
            Start Your IPO Investment Journey
          </motion.h2>
          <motion.p
            className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Get early access to India's most promising companies. Apply for IPOs with just a few taps and UPI payments.
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
                className="bg-white text-orange-700 hover:bg-gray-100 px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => {
                  const isAndroid = /Android/i.test(navigator.userAgent);
                  const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
                  // const appScheme = "myapp://"; // Replace with your app's URL scheme
                  const playStoreUrl = "https://play.google.com/store/apps/details?id=com.globecapital.prod"; // Replace with your Play Store URL
                  const appStoreUrl = "https://apps.apple.com/in/app/globe-capital-stock-trading/id1545938530"; // Replace with your App Store URL

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
                Download App & Apply
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
