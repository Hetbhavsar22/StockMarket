"use client";

import { motion } from "framer-motion";
import {
  TrendingUp,
  Shield,
  Coins,
  Download,
  Calculator,
  Target,
  BarChart3,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import chooseimage from "@/public/images/NnotYzVWdGs9.webp"
import bannerimage from "@/public/images/anBn.webp"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

export default function GoldETFsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-yellow-600 via-amber-700 to-orange-800 text-white">
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
                  <Badge className="bg-yellow-500/20 text-yellow-100 border-yellow-400/30 backdrop-blur-sm">
                    Digital Gold • ETF Trading
                  </Badge>
                </motion.div>

                <motion.h1
                  className="text-4xl lg:text-5xl font-bold leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                >
                  Gold & ETFs Made
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
                    Digital
                  </motion.span>
                </motion.h1>

                <motion.p
                  className="text-xl text-yellow-100 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  Invest in digital gold and diversified ETFs with zero storage
                  hassles. Start with as little as ₹100 and build a balanced
                  portfolio.
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
                    className="bg-white text-yellow-700 hover:bg-gray-100 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
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
                    Start Investing
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
                  alt="Gold and ETF Investment"
                  width={600}
                  height={500}
                  className="rounded-2xl shadow-2xl"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Investment Options */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Gold & ETF Investment Options
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Diversify your portfolio with precious metals and exchange-traded
              funds
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {[
              {
                icon: Coins,
                title: "Digital Gold",
                description:
                  "Buy, sell, and store gold digitally with 99.9% purity guarantee",
                features: [
                  "24K pure gold",
                  "Secure vault storage",
                  "Real-time pricing",
                  "Instant liquidity",
                  "No making charges",
                  "Home delivery option",
                ],
                minInvestment: "₹100",
                returns: "Historical: 8-12% p.a.",
                color: "text-yellow-600",
                bgColor: "bg-yellow-50",
              },
              {
                icon: BarChart3,
                title: "Gold ETFs",
                description:
                  "Invest in gold ETFs for easy trading and liquidity",
                features: [
                  "Diversification",
                  "Low expense ratios",
                  "Easy to buy and sell",
                  "No storage issues",
                ],
                minInvestment: "₹500",
                returns: "Historical: 10-15% p.a.",
                color: "text-yellow-600",
                bgColor: "bg-yellow-50",
              },
            ].map((option, index) => (
              <motion.div key={index} className="space-y-4">
                <h3 className="text-lg font-bold text-gray-900">
                  {option.title}
                </h3>
                <p className="text-gray-600 mb-2">{option.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular ETFs */}
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
              Popular ETFs
            </h2>
            <p className="text-xl text-gray-600">
              Diversify your portfolio with these top-performing ETFs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Nifty 50 ETF",
                category: "Large Cap",
                expenseRatio: "0.05%",
                returns1Y: "18.2%",
                returns3Y: "15.8%",
                aum: "₹12,450 Cr",
              },
              {
                name: "Gold ETF",
                category: "Commodity",
                expenseRatio: "0.50%",
                returns1Y: "12.5%",
                returns3Y: "9.8%",
                aum: "₹8,200 Cr",
              },
              {
                name: "Bank Nifty ETF",
                category: "Sectoral",
                expenseRatio: "0.08%",
                returns1Y: "22.1%",
                returns3Y: "18.5%",
                aum: "₹5,600 Cr",
              },
              {
                name: "IT Sector ETF",
                category: "Sectoral",
                expenseRatio: "0.10%",
                returns1Y: "25.3%",
                returns3Y: "20.2%",
                aum: "₹3,800 Cr",
              },
              {
                name: "Midcap 150 ETF",
                category: "Mid Cap",
                expenseRatio: "0.12%",
                returns1Y: "28.7%",
                returns3Y: "22.1%",
                aum: "₹2,900 Cr",
              },
              {
                name: "International ETF",
                category: "Global",
                expenseRatio: "0.75%",
                returns1Y: "15.8%",
                returns3Y: "12.5%",
                aum: "₹1,500 Cr",
              },
            ].map((etf, index) => (
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
                      <Badge className="bg-blue-500 text-white">
                        {etf.category}
                      </Badge>
                      <span className="text-sm text-gray-500">
                        AUM: {etf.aum}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-gray-900 mb-4">
                      {etf.name}
                    </h3>

                    <div className="space-y-3 mb-6">
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-500">
                          Expense Ratio:
                        </span>
                        <span className="text-sm font-semibold">
                          {etf.expenseRatio}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-500">
                          1Y Returns:
                        </span>
                        <span className="text-sm font-semibold text-green-600">
                          {etf.returns1Y}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-500">
                          3Y Returns:
                        </span>
                        <span className="text-sm font-semibold text-green-600">
                          {etf.returns3Y}
                        </span>
                      </div>
                    </div>

                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Why Invest in Gold & ETFs?
              </h2>
              <div className="space-y-6">
                {[
                  {
                    icon: Shield,
                    title: "Portfolio Diversification",
                    description:
                      "Reduce risk by spreading investments across different asset classes and sectors",
                  },
                  {
                    icon: TrendingUp,
                    title: "Inflation Hedge",
                    description:
                      "Gold historically performs well during inflationary periods, protecting your wealth",
                  },
                  {
                    icon: Target,
                    title: "Professional Management",
                    description:
                      "ETFs are managed by experienced fund managers with proven track records",
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
                      className="w-12 h-12 bg-yellow-50 rounded-xl flex items-center justify-center flex-shrink-0"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <benefit.icon className="h-6 w-6 text-yellow-600" />
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
                  alt="Investment Benefits"
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
      <section className="py-20 bg-gradient-to-r from-yellow-600 to-orange-700 text-white relative overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-yellow-600/50 to-orange-600/50"
          animate={{
            background: [
              "linear-gradient(45deg, rgba(202, 138, 4, 0.5), rgba(234, 88, 12, 0.5))",
              "linear-gradient(45deg, rgba(234, 88, 12, 0.5), rgba(202, 138, 4, 0.5))",
              "linear-gradient(45deg, rgba(202, 138, 4, 0.5), rgba(234, 88, 12, 0.5))",
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
            Start Building Your Golden Portfolio
          </motion.h2>
          <motion.p
            className="text-xl text-yellow-100 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Diversify your investments with digital gold and ETFs. Start with
            just ₹100 and build wealth systematically.
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
                className="bg-white text-yellow-700 hover:bg-gray-100 px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
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
                Start Investing Now
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
