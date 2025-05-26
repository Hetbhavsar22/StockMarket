"use client";

import { motion } from "framer-motion";
import {
  PieChart,
  Shield,
  TrendingUp,
  Download,
  Calculator,
  Target,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import SPICalculator from "@/components/ui/SIPCalculatorModal";
import { useState } from "react";
import mutualimage from "@/public/images/UUl0NTRBPQ.webp";
import sipimage from "@/public/images/OS5qcGc.webp";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

export default function MutualFundsPage() {
  const [showSIP, setShowSIP] = useState(false);
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 text-white">
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
                  <Badge className="bg-blue-500/20 text-blue-100 border-blue-400/30 backdrop-blur-sm">
                    SIP in more than 3000+ Funds
                  </Badge>
                </motion.div>

                <motion.h1
                  className="text-4xl lg:text-5xl font-bold leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                >
                  Mutual Funds Made
                  <motion.span
                    className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-300"
                    animate={{
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                    }}
                  >
                    {" "}
                    Simple
                  </motion.span>
                </motion.h1>

                <motion.p
                  className="text-xl text-blue-100 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  Start your SIP journey with as little as ₹100. Invest in 3000+
                  mutual funds with no other charges and build wealth
                  systematically.
                </motion.p>
              </div>

              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    size="lg"
                    className="bg-white text-blue-700 hover:bg-gray-100 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                    onClick={() => {
                      const isAndroid = /Android/i.test(navigator.userAgent);
                      const isIOS = /iPhone|iPad|iPod/i.test(
                        navigator.userAgent
                      );
                      // const appScheme = "myapp://"; // Replace with your app's URL scheme
                      const playStoreUrl =
                        "https://play.google.com/store/apps/details?id=com.iw.mint.app&pcampaignid=web_share"; // Replace with your Play Store URL
                      const appStoreUrl =
                        "https://apps.apple.com/in/app/mint-by-investwell/id1479042500"; // Replace with your App Store URL

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
                    Start SIP Now
                  </Button>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white/30 text-blue-700 hover:text-blue-700 px-8 py-4 text-lg backdrop-blur-sm"
                    onClick={() => setShowSIP(true)}
                  >
                    <Calculator className="mr-2 h-4 w-4" />
                    SIP Calculator
                  </Button>
                  <SPICalculator
                    open={showSIP}
                    onClose={() => setShowSIP(false)}
                  />
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              <motion.div
                whileHover={{ scale: 1.05, rotateY: 5 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={mutualimage}
                  alt="Mutual Funds Dashboard"
                  width={600}
                  height={500}
                  className="rounded-2xl shadow-2xl"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Fund Categories */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Choose from 3000+ Mutual Funds
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Diversify your portfolio across different fund categories based on
              your risk appetite and goals
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: TrendingUp,
                title: "Equity Funds",
                description: "High growth potential with market-linked returns",
                risk: "High Risk",
                returns: "15-20% p.a.",
                color: "text-green-600",
                bgColor: "bg-green-50",
              },
              {
                icon: Target,
                title: "ELSS Funds",
                description: "Tax-saving funds with 3-year lock-in period",
                risk: "High Risk",
                returns: "12-15% p.a.",
                color: "text-orange-600",
                bgColor: "bg-orange-50",
              },
              {
                icon: TrendingUp,
                title: "Index Funds",
                description: "Track market indices with low expense ratios",
                risk: "Medium Risk",
                returns: "10-12% p.a.",
                color: "text-teal-600",
                bgColor: "bg-teal-50",
              },
              {
                icon: PieChart,
                title: "Hybrid Funds",
                description: "Balanced mix of equity and debt instruments",
                risk: "Medium Risk",
                returns: "8-12% p.a.",
                color: "text-purple-600",
                bgColor: "bg-purple-50",
              },
              {
                icon: Shield,
                title: "Debt Funds",
                description: "Stable returns with lower risk profile",
                risk: "Low Risk",
                returns: "6-8% p.a.",
                color: "text-blue-600",
                bgColor: "bg-blue-50",
              },
              {
                icon: Clock,
                title: "Liquid Funds",
                description: "Park your money for short-term with easy exit",
                risk: "Very Low Risk",
                returns: "5-7% p.a.",
                color: "text-indigo-600",
                bgColor: "bg-indigo-50",
              },
            ].map((fund, index) => (
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
                      className={`w-16 h-16 ${fund.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <fund.icon className={`h-8 w-8 ${fund.color}`} />
                    </motion.div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {fund.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{fund.description}</p>

                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500">
                          Risk Level:
                        </span>
                        <Badge variant="secondary" className="text-xs">
                          {fund.risk}
                        </Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500">
                          Expected Returns:
                        </span>
                        <span className="text-sm font-semibold text-green-600">
                          {fund.returns}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SIP Benefits */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Why Start a SIP?
              </h2>
              <div className="space-y-6">
                {[
                  {
                    icon: Calculator,
                    title: "Rupee Cost Averaging",
                    description:
                      "Buy more units when prices are low and fewer when high, averaging your cost",
                  },
                  {
                    icon: Clock,
                    title: "Power of Compounding",
                    description:
                      "Your money grows exponentially over time with the magic of compounding",
                  },
                  {
                    icon: Target,
                    title: "Disciplined Investing",
                    description:
                      "Automate your investments and build wealth systematically",
                  },
                ].map((benefit, index) => (
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
                      <benefit.icon className="h-6 w-6 text-blue-600" />
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={sipimage}
                  alt="SIP Growth Chart"
                  width={600}
                  height={500}
                  className="rounded-2xl shadow-2xl"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
            Start Your SIP Journey Today
          </motion.h2>
          <motion.p
            className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Begin with just ₹100 per month and watch your wealth grow. Zero
            commission, expert-picked funds, and easy management.
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
                className="bg-white text-blue-700 hover:bg-gray-100 px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => {
                  const isAndroid = /Android/i.test(navigator.userAgent);
                  const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
                  // const appScheme = "myapp://"; // Replace with your app's URL scheme
                  const playStoreUrl =
                    "https://play.google.com/store/apps/details?id=com.iw.mint.app&pcampaignid=web_share"; // Replace with your Play Store URL
                  const appStoreUrl =
                    "https://apps.apple.com/in/app/mint-by-investwell/id1479042500"; // Replace with your App Store URL

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
                Start SIP in App
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-blue-700 hover:text-blue-700 px-8 py-4 text-lg backdrop-blur-sm"
                onClick={() => setShowSIP(true)}
              >
                <Calculator className="mr-2 h-5 w-5" />
                Calculate SIP Returns
              </Button>
              <SPICalculator open={showSIP} onClose={() => setShowSIP(false)} />
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
