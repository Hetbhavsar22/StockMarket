"use client"
import { TrendingUp, Shield, Zap, PieChart, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import bannerimage from "@/public/images/UTgxa281MzRhaz0.webp"

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

export default function StocksPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-600 via-green-700 to-emerald-800 text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-green-500/20 text-green-100 border-green-400/30">SEBI Registered</Badge>
                <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                  Trade Stocks with
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-300">
                    {" "}
                    Trust
                  </span>
                </h1>
                <p className="text-xl text-green-100 leading-relaxed">
                  Invest in 3000+ stocks listed on NSE & BSE. Delivery trades, advanced charts, and
                  real-time market data.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-green-700 hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
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
                }}>
                  <Download className="mr-2 h-5 w-5" />
                  Start Trading Now
                </Button>
                <motion.div {...scaleOnHover}>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-green-700 hover:text-green-700 px-8 py-4 text-lg backdrop-blur-sm"
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
                  View Live Prices in App
                </Button>
                </motion.div>
              </div>
            </div>

            <div className="relative">
              <Image
                src={bannerimage}
                alt="Stock Trading Interface"
                width={600}
                height={500}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Devhar for Stock Trading?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced features and zero fees make us the preferred choice for smart investors
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: TrendingUp,
                title: "Money Growth",
                description: "Start investing in Stocks, Mutual Funds, IPOs, PMS, Bonds and a lot more!",
                highlight: "Save ₹20,000+ annually",
              },
              {
                icon: Zap,
                title: "Lightning Fast",
                description: "Execute trades in milliseconds with our advanced trading engine.",
                highlight: "< 50ms execution",
              },
              {
                icon: Shield,
                title: "Secure Trading",
                description: "Bank-grade security with 2FA and encrypted transactions.",
                highlight: "100% Secure",
              },
              {
                icon: PieChart,
                title: "Advanced Charts",
                description: "Professional charting tools with 100+ technical indicators.",
                highlight: "Pro Tools",
              },
              {
                icon: TrendingUp,
                title: "Real-time Data",
                description: "Live market data, news, and alerts to stay ahead.",
                highlight: "Live Updates",
              },
              {
                icon: Shield,
                title: "SEBI Regulated",
                description: "Fully compliant and regulated by SEBI for your safety.",
                highlight: "Trusted Platform",
              },
            ].map((feature, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="h-8 w-8 text-green-600" />
                  </div>
                  <div className="mb-2">
                    <Badge variant="secondary" className="text-xs">
                      {feature.highlight}
                    </Badge>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Start Trading in 3 Simple Steps</h2>
            <p className="text-xl text-gray-600">Get started with stock trading in just a few minutes</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Download & Sign Up",
                description: "Download the Globe app and complete your KYC in minutes",
              },
              {
                step: "02",
                title: "Add Funds",
                description: "Add money to your account via UPI, net banking, or bank transfer",
              },
              {
                step: "03",
                title: "Start Trading",
                description: "Browse stocks, analyze charts, and place your first trade",
              },
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Start Your Trading Journey?</h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Join millions of traders who trust Devhar for their stock investments. Advanced tools, and
            expert support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-green-700 hover:bg-gray-100 px-8 py-4 text-lg"
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
            }}>
              <Download className="mr-2 h-5 w-5" />
              Download App & Start Trading
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 text-green-700 hover:text-green-700 px-8 py-4 text-lg"
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
              View Live Market Data
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
