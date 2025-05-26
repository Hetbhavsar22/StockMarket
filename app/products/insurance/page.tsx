"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Heart,
  Home,
  Car,
  Download,
  Calculator,
  Users,
  Award,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { useState } from "react";
import bannerimage from "@/public/images/OTUuanBna.webp"
import chooseimage from "@/public/images/d1Z3PQ.webp"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

export default function InsurancePage() {
  const [isPremiumModalOpen, setPremiumModalOpen] = useState(false);
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-600 via-teal-700 to-cyan-800 text-white">
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
                  <Badge className="bg-emerald-500/20 text-emerald-100 border-emerald-400/30 backdrop-blur-sm">
                    IRDA Approved • Instant Policy
                  </Badge>
                </motion.div>

                <motion.h1
                  className="text-4xl lg:text-5xl font-bold leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                >
                  Insurance That
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
                    Protects
                  </motion.span>
                </motion.h1>

                <motion.p
                  className="text-xl text-emerald-100 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  Comprehensive insurance solutions for you and your family.
                  Term life, health, motor, and home insurance from India's top
                  insurers.
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
                    className="bg-white text-emerald-700 hover:bg-gray-100 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
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
                    Get Insurance Quote
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
              <motion.div
                whileHover={{ scale: 1.05, rotateY: 5 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={bannerimage}
                  alt="Insurance Protection"
                  width={600}
                  height={500}
                  className="rounded-2xl shadow-2xl"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Insurance Types */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Complete Insurance Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Protect what matters most with comprehensive insurance coverage
              from trusted insurers
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Heart,
                title: "Term Life Insurance",
                description:
                  "Affordable life cover to secure your family's financial future",
                coverage: "Up to ₹10 Cr",
                startingFrom: "₹490/month",
                color: "text-red-600",
                bgColor: "bg-red-50",
                features: [
                  "High coverage",
                  "Low premium",
                  "Tax benefits",
                  "Online process",
                ],
              },
              {
                icon: Shield,
                title: "Health Insurance",
                description:
                  "Comprehensive health coverage for medical emergencies",
                coverage: "Up to ₹1 Cr",
                startingFrom: "₹2,400/year",
                color: "text-blue-600",
                bgColor: "bg-blue-50",
                features: [
                  "Cashless treatment",
                  "Pre & post hospitalization",
                  "Day care procedures",
                  "No claim bonus",
                ],
              },
              {
                icon: Car,
                title: "Motor Insurance",
                description: "Complete protection for your car and two-wheeler",
                coverage: "Comprehensive",
                startingFrom: "₹2,500/year",
                color: "text-green-600",
                bgColor: "bg-green-50",
                features: [
                  "Third party cover",
                  "Own damage",
                  "Personal accident",
                  "Roadside assistance",
                ],
              },
              {
                icon: Home,
                title: "Home Insurance",
                description:
                  "Protect your home and belongings from unforeseen events",
                coverage: "Up to ₹50 Lakh",
                startingFrom: "₹1,200/year",
                color: "text-purple-600",
                bgColor: "bg-purple-50",
                features: [
                  "Structure cover",
                  "Contents protection",
                  "Natural disasters",
                  "Theft protection",
                ],
              },
            ].map((insurance, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <Card className="group hover:shadow-xl transition-all duration-500 border-0 shadow-md bg-white/80 backdrop-blur-sm h-full">
                  <CardContent className="p-6">
                    <motion.div
                      className={`w-16 h-16 ${insurance.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <insurance.icon
                        className={`h-8 w-8 ${insurance.color}`}
                      />
                    </motion.div>

                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {insurance.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {insurance.description}
                    </p>

                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-gray-500">Coverage:</span>
                        <Badge variant="secondary" className="text-xs">
                          {insurance.coverage}
                        </Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-gray-500">
                          Starting from:
                        </span>
                        <span className="text-sm font-semibold text-green-600">
                          {insurance.startingFrom}
                        </span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">
                        Key Features:
                      </h4>
                      <ul className="space-y-1">
                        {insurance.features.map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className="text-xs text-gray-600 flex items-center gap-2"
                          >
                            <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {/* <Button className="w-full" size="sm">
                        Get Quote
                      </Button> */}
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Insurance */}
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
                Why Choose Devhar Insurance?
              </h2>
              <div className="space-y-6">
                {[
                  {
                    icon: Shield,
                    title: "IRDA Approved",
                    description:
                      "All our insurance partners are IRDA approved and regulated for your safety",
                  },
                  {
                    icon: Users,
                    title: "Expert Guidance",
                    description:
                      "Get personalized advice from our insurance experts to choose the right policy",
                  },
                  {
                    icon: Award,
                    title: "Hassle-free Claims",
                    description:
                      "Quick and easy claim settlement process with dedicated support team",
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
                      className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center flex-shrink-0"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <benefit.icon className="h-6 w-6 text-emerald-600" />
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
                  src={chooseimage}
                  alt="Insurance Benefits"
                  width={600}
                  height={500}
                  className="rounded-2xl shadow-2xl"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Insurance Partners */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Trusted Insurance Partners
            </h2>
            <p className="text-xl text-gray-600">
              We partner with India's leading insurance companies
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "HDFC Life", category: "Life Insurance", rating: "AAA" },
              {
                name: "ICICI Lombard",
                category: "General Insurance",
                rating: "AAA",
              },
              { name: "SBI Life", category: "Life Insurance", rating: "AAA" },
              {
                name: "Bajaj Allianz",
                category: "General Insurance",
                rating: "AA+",
              },
              { name: "Max Life", category: "Life Insurance", rating: "AA+" },
              { name: "TATA AIG", category: "General Insurance", rating: "AA" },
              { name: "LIC", category: "Life Insurance", rating: "AAA" },
              {
                name: "New India Assurance",
                category: "General Insurance",
                rating: "AA",
              },
            ].map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="text-center border-0 shadow-md hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {partner.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-2">
                      {partner.category}
                    </p>
                    <Badge variant="outline" className="text-xs">
                      {partner.rating}
                    </Badge>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {/* <Button className="w-full" onClick={() => window.location.href='your-app-link'}>
                        Get Quote
                      </Button> */}
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-700 text-white relative overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-emerald-600/50 to-teal-600/50"
          animate={{
            background: [
              "linear-gradient(45deg, rgba(5, 150, 105, 0.5), rgba(15, 118, 110, 0.5))",
              "linear-gradient(45deg, rgba(15, 118, 110, 0.5), rgba(5, 150, 105, 0.5))",
              "linear-gradient(45deg, rgba(5, 150, 105, 0.5), rgba(15, 118, 110, 0.5))",
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
            Protect Your Future Today
          </motion.h2>
          <motion.p
            className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Don't wait for tomorrow. Get comprehensive insurance coverage for
            you and your family starting today.
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
                className="bg-white text-emerald-700 hover:bg-gray-100 px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
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
                Get Insurance Quote
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
