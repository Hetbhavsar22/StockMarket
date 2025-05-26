"use client"

import { motion } from "framer-motion"
import { BookOpen, TrendingUp, PieChart, Clock, ArrowRight, Play, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
}

export default function LearnPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-100">
        <div className="container mx-auto px-4">
          <motion.div className="text-center max-w-4xl mx-auto" {...fadeInUp}>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Learn to
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                {" "}
                Invest Smart
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Master the art of investing with our comprehensive guides, tutorials, and expert insights. From basics to
              advanced strategies.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 text-lg">
                <BookOpen className="mr-2 h-5 w-5" />
                Start Learning
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Learning Paths */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Learning Path</h2>
            <p className="text-xl text-gray-600">Structured courses designed for every skill level</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: BookOpen,
                title: "Beginner's Guide",
                description: "Start your investment journey with the basics",
                lessons: 12,
                duration: "2 hours",
                level: "Beginner",
                color: "text-green-600",
                bgColor: "bg-green-50",
                topics: ["What is investing?", "Types of investments", "Risk and return", "Getting started"],
              },
              {
                icon: TrendingUp,
                title: "Stock Market Mastery",
                description: "Deep dive into stock analysis and trading",
                lessons: 18,
                duration: "4 hours",
                level: "Intermediate",
                color: "text-blue-600",
                bgColor: "bg-blue-50",
                topics: ["Technical analysis", "Fundamental analysis", "Portfolio building", "Risk management"],
              },
              {
                icon: PieChart,
                title: "Advanced Strategies",
                description: "Professional investment techniques and strategies",
                lessons: 24,
                duration: "6 hours",
                level: "Advanced",
                color: "text-purple-600",
                bgColor: "bg-purple-50",
                topics: ["Options trading", "Derivatives", "Portfolio optimization", "Tax planning"],
              },
            ].map((path, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                  <CardHeader>
                    <motion.div
                      className={`w-16 h-16 ${path.bgColor} rounded-2xl flex items-center justify-center mb-4`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <path.icon className={`h-8 w-8 ${path.color}`} />
                    </motion.div>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="secondary">{path.level}</Badge>
                      <Badge variant="outline">{path.lessons} lessons</Badge>
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900">{path.title}</CardTitle>
                    <p className="text-gray-600">{path.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Clock className="h-4 w-4" />
                        <span>{path.duration} total duration</span>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">What you'll learn:</h4>
                        <ul className="space-y-1">
                          {path.topics.map((topic, topicIndex) => (
                            <li key={topicIndex} className="text-sm text-gray-600 flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                              {topic}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button className="w-full mt-4">
                          Start Course <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest Articles & Guides</h2>
            <p className="text-xl text-gray-600">Stay updated with market insights and investment tips</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "How to Start Investing with ₹1000",
                excerpt: "A complete beginner's guide to making your first investment with a small amount.",
                category: "Beginner",
                readTime: "5 min read",
                image: "/placeholder.svg?height=200&width=300",
                featured: true,
              },
              {
                title: "SIP vs Lump Sum: Which is Better?",
                excerpt: "Compare systematic investment plans with lump sum investments to make the right choice.",
                category: "Strategy",
                readTime: "7 min read",
                image: "/placeholder.svg?height=200&width=300",
                featured: false,
              },
              {
                title: "Understanding Mutual Fund Categories",
                excerpt: "Learn about different types of mutual funds and how to choose the right ones.",
                category: "Mutual Funds",
                readTime: "6 min read",
                image: "/placeholder.svg?height=200&width=300",
                featured: false,
              },
              {
                title: "Tax Saving Investments in 2024",
                excerpt: "Maximize your tax savings with ELSS, PPF, and other investment options.",
                category: "Tax Planning",
                readTime: "8 min read",
                image: "/placeholder.svg?height=200&width=300",
                featured: false,
              },
              {
                title: "Building Your First Portfolio",
                excerpt: "Step-by-step guide to creating a diversified investment portfolio.",
                category: "Portfolio",
                readTime: "10 min read",
                image: "/placeholder.svg?height=200&width=300",
                featured: false,
              },
              {
                title: "Common Investment Mistakes to Avoid",
                excerpt: "Learn from others' mistakes and avoid these common investment pitfalls.",
                category: "Tips",
                readTime: "6 min read",
                image: "/placeholder.svg?height=200&width=300",
                featured: false,
              },
            ].map((article, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className={article.featured ? "md:col-span-2 lg:col-span-1" : ""}
              >
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full overflow-hidden">
                  <div className="relative">
                    <Image
                      src={article.image || "/placeholder.svg"}
                      alt={article.title}
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover"
                    />
                    {article.featured && (
                      <Badge className="absolute top-4 left-4 bg-purple-600 text-white">Featured</Badge>
                    )}
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="secondary" className="text-xs">
                        {article.category}
                      </Badge>
                      <span className="text-xs text-gray-500">{article.readTime}</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">{article.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{article.excerpt}</p>
                    <Link
                      href="#"
                      className="text-purple-600 hover:text-purple-700 font-semibold text-sm flex items-center gap-1"
                    >
                      Read More <ArrowRight className="h-3 w-3" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Button variant="outline" size="lg">
              View All Articles
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Video Tutorials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Video Tutorials</h2>
            <p className="text-xl text-gray-600">Learn visually with our expert-led video content</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "How to Use the Devhar App",
                description: "Complete walkthrough of our mobile app features and how to get started.",
                duration: "12:30",
                views: "25K views",
                thumbnail: "/placeholder.svg?height=300&width=500",
              },
              {
                title: "Understanding Stock Market Basics",
                description: "Learn the fundamentals of stock market investing in simple terms.",
                duration: "18:45",
                views: "42K views",
                thumbnail: "/placeholder.svg?height=300&width=500",
              },
            ].map((video, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="relative group">
                    <Image
                      src={video.thumbnail || "/placeholder.svg"}
                      alt={video.title}
                      width={500}
                      height={300}
                      className="w-full h-64 object-cover"
                    />
                    <motion.div
                      className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                      whileHover={{ scale: 1.1 }}
                    >
                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                        <Play className="h-8 w-8 text-gray-900 ml-1" />
                      </div>
                    </motion.div>
                    <Badge className="absolute bottom-4 right-4 bg-black/70 text-white">{video.duration}</Badge>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{video.title}</h3>
                    <p className="text-gray-600 mb-4">{video.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{video.views}</span>
                      <Button variant="ghost" size="sm">
                        <Play className="h-4 w-4 mr-2" />
                        Watch Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-700 text-white relative overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-purple-600/50 to-blue-600/50"
          animate={{
            background: [
              "linear-gradient(45deg, rgba(147, 51, 234, 0.5), rgba(59, 130, 246, 0.5))",
              "linear-gradient(45deg, rgba(59, 130, 246, 0.5), rgba(147, 51, 234, 0.5))",
              "linear-gradient(45deg, rgba(147, 51, 234, 0.5), rgba(59, 130, 246, 0.5))",
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
            Ready to Put Your Knowledge to Practice?
          </motion.h2>
          <motion.p
            className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Download the Devhar app and start your investment journey with the knowledge you've gained.
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
                className="bg-white text-purple-700 hover:bg-gray-100 px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
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
          </motion.div>
        </div>
      </section>
    </div>
  )
}
