"use client";

import { motion } from "framer-motion";
import {
  Building2,
  Shield,
  TrendingUp,
  Download,
  Calculator,
  Clock,
  Award,
  Percent,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import FDCalculatorModal from "../../../components/ui/FDCalculatorModal";
import { useState } from "react";
import fdimage from "@/public/images/RT0.webp"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

export default function FixedDepositsPage() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-700 to-blue-800 text-white">
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
                  <Badge className="bg-indigo-500/20 text-indigo-100 border-indigo-400/30 backdrop-blur-sm">
                    Up to 9.5% Returns • DICGC Insured
                  </Badge>
                </motion.div>

                <motion.h1
                  className="text-4xl lg:text-5xl font-bold leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                >
                  High-Yield Fixed Deposits
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
                    Guaranteed
                  </motion.span>
                </motion.h1>

                <motion.p
                  className="text-xl text-indigo-100 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  Earn high returns up to 9.5% with fixed deposits from
                  top banks and NBFCs. DICGC insured and completely safe
                  investments.
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
                    className="bg-white text-indigo-700 hover:bg-gray-100 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
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
                    Start FD Investment
                  </Button>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white/30 text-indigo-700 hover:text-indigo-700 px-8 py-4 text-lg backdrop-blur-sm"
                    onClick={() => setIsOpen(true)}
                  >
                    <Calculator className="mr-2 h-4 w-4" />
                    FD Calculator
                  </Button>
                  <FDCalculatorModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
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
                  src={fdimage}
                  alt="Fixed Deposits Dashboard"
                  width={600}
                  height={500}
                  className="rounded-2xl shadow-2xl"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FD Features */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Fixed Deposits?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Safe, secure, and high-yielding fixed deposits from India's most
              trusted financial institutions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Percent,
                title: "High Interest Rates",
                description:
                  "Earn up to 9.5% annual returns with our partner banks and NBFCs",
                highlight: "Up to 9.5% p.a.",
                color: "text-green-600",
                bgColor: "bg-green-50",
              },
              {
                icon: Shield,
                title: "DICGC Insured",
                description:
                  "Your deposits are insured up to ₹5 lakhs by DICGC for complete safety",
                highlight: "100% Safe",
                color: "text-blue-600",
                bgColor: "bg-blue-50",
              },
              {
                icon: Clock,
                title: "Flexible Tenure",
                description:
                  "Choose from 7 days to 10 years tenure based on your financial goals",
                highlight: "7 days to 10 years",
                color: "text-purple-600",
                bgColor: "bg-purple-50",
              },
              {
                icon: Building2,
                title: "Top Banks & NBFCs",
                description:
                  "Partner with leading financial institutions with strong credit ratings",
                highlight: "AAA Rated",
                color: "text-orange-600",
                bgColor: "bg-orange-50",
              },
              {
                icon: TrendingUp,
                title: "Guaranteed Returns",
                description:
                  "Fixed returns with no market risk - perfect for conservative investors",
                highlight: "Zero Risk",
                color: "text-indigo-600",
                bgColor: "bg-indigo-50",
              },
              {
                icon: Award,
                title: "Easy Management",
                description:
                  "Track all your FDs in one place with automatic renewal options",
                highlight: "Auto Renewal",
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
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FD Options */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Available Fixed Deposit Options
            </h2>
            <p className="text-xl text-gray-600">
              Choose from various tenure and interest rate combinations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                bank: "HDFC Bank",
                tenure: "1 Year",
                rate: "7.25%",
                minAmount: "₹10,000",
                rating: "AAA",
                type: "Bank FD",
              },
              {
                bank: "Bajaj Finance",
                tenure: "2 Years",
                rate: "8.85%",
                minAmount: "₹25,000",
                rating: "AAA",
                type: "NBFC FD",
              },
              {
                bank: "Mahindra Finance",
                tenure: "3 Years",
                rate: "9.50%",
                minAmount: "₹25,000",
                rating: "AA+",
                type: "NBFC FD",
              },
              {
                bank: "ICICI Bank",
                tenure: "5 Years",
                rate: "7.50%",
                minAmount: "₹10,000",
                rating: "AAA",
                type: "Bank FD",
              },
              {
                bank: "Shriram Finance",
                tenure: "18 Months",
                rate: "9.25%",
                minAmount: "₹25,000",
                rating: "AA",
                type: "NBFC FD",
              },
              {
                bank: "SBI",
                tenure: "10 Years",
                rate: "7.75%",
                minAmount: "₹1,000",
                rating: "AAA",
                type: "Bank FD",
              },
            ].map((fd, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <Badge
                        className={`${
                          fd.type === "Bank FD"
                            ? "bg-blue-500"
                            : "bg-purple-500"
                        } text-white`}
                      >
                        {fd.type}
                      </Badge>
                      <Badge variant="outline">{fd.rating}</Badge>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {fd.bank}
                    </h3>
                    <div className="text-3xl font-bold text-green-600 mb-4">
                      {fd.rate}
                    </div>

                    <div className="space-y-2 mb-6">
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-500">Tenure:</span>
                        <span className="text-sm font-semibold">
                          {fd.tenure}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-500">
                          Min Amount:
                        </span>
                        <span className="text-sm font-semibold">
                          {fd.minAmount}
                        </span>
                      </div>
                    </div>

                    {/* <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        className="w-full"
                        onClick={() => (window.location.href = "your-app-link")}
                      >
                        Invest Now
                      </Button>
                    </motion.div> */}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How to Invest in Fixed Deposits
            </h2>
            <p className="text-xl text-gray-600">
              Simple 3-step process to start earning guaranteed returns
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Choose Your FD",
                description:
                  "Select from various banks and NBFCs based on tenure and interest rates",
              },
              {
                step: "02",
                title: "Complete KYC",
                description:
                  "Quick digital KYC process with instant verification and approval",
              },
              {
                step: "03",
                title: "Start Earning",
                description:
                  "Transfer funds and start earning guaranteed returns immediately",
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
                  className="w-16 h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  {step.step}
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-700 text-white relative overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-indigo-600/50 to-purple-600/50"
          animate={{
            background: [
              "linear-gradient(45deg, rgba(79, 70, 229, 0.5), rgba(147, 51, 234, 0.5))",
              "linear-gradient(45deg, rgba(147, 51, 234, 0.5), rgba(79, 70, 229, 0.5))",
              "linear-gradient(45deg, rgba(79, 70, 229, 0.5), rgba(147, 51, 234, 0.5))",
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
            Start Earning Guaranteed Returns Today
          </motion.h2>
          <motion.p
            className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Secure your financial future with high-yield fixed deposits. DICGC
            insured and completely safe investments.
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
                className="bg-white text-indigo-700 hover:bg-gray-100 px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
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
                Start FD Investment
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-indigo-700 hover:text-indigo-700 px-8 py-4 text-lg backdrop-blur-sm"
                onClick={() => setIsOpen(true)}
              >
                <Calculator className="mr-2 h-5 w-5" />
                Calculate Returns
              </Button>
              <FDCalculatorModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
