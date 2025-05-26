"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Clock, MessageCircle, Send, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useState } from "react"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
}

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormSubmitted(true)
    setTimeout(() => setFormSubmitted(false), 3000)
  }

  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4">
          <motion.div className="text-center max-w-4xl mx-auto" {...fadeInUp}>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Get in
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600"> Touch</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Have questions about investing? Need help with your account? Our expert team is here to assist you 24/7.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Multiple Ways to Reach Us</h2>
            <p className="text-xl text-gray-600">Choose the method that works best for you</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              {
                icon: Phone,
                title: "Call Us",
                description: "Speak directly with our experts",
                contact: "+91 99981 56835",
                action: "Call Now",
                color: "text-green-600",
                bgColor: "bg-green-50",
              },
              {
                icon: MessageCircle,
                title: "WhatsApp",
                description: "Quick support via WhatsApp",
                contact: "+91 99981 56835",
                action: "Chat Now",
                color: "text-green-600",
                bgColor: "bg-green-50",
              },
              {
                icon: Mail,
                title: "Email Support",
                description: "Detailed queries and documentation",
                contact: "atul.26778@gmail.com",
                action: "Send Email",
                color: "text-blue-600",
                bgColor: "bg-blue-50",
              },
            ].map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                  <CardContent className="p-8">
                    <motion.div
                      className={`w-16 h-16 ${method.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-6`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <method.icon className={`h-8 w-8 ${method.color}`} />
                    </motion.div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{method.title}</h3>
                    <p className="text-gray-600 mb-4">{method.description}</p>
                    <p className="font-semibold text-gray-900 mb-4">{method.contact}</p>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button className="w-full" variant="outline">
                        {method.action}
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Office Info */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-900">Send us a Message</CardTitle>
                  <p className="text-gray-600">Fill out the form below and we'll get back to you within 24 hours</p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" placeholder="Enter your first name" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" placeholder="Enter your last name" required />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="Enter your email" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" type="tel" placeholder="Enter your phone number" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input id="subject" placeholder="What's this about?" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea id="message" placeholder="Tell us how we can help you..." rows={5} required />
                    </div>

                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-3"
                        disabled={formSubmitted}
                      >
                        {formSubmitted ? (
                          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="flex items-center">
                            <CheckCircle className="mr-2 h-5 w-5" />
                            Message Sent!
                          </motion.div>
                        ) : (
                          <>
                            <Send className="mr-2 h-5 w-5" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </motion.div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Office Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Visit Our Office</h3>

                <Card className="border-0 shadow-lg mb-6">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Headquarters</h4>
                        <p className="text-gray-600 leading-relaxed">
                          Devhar Technologies Pvt Ltd
                          <br />
                          K-31/361 Shiv Shakti App., Akhbarnagar
                          <br />
                          Ahmedabad, Gujarat 380013
                          <br />
                          India
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg mb-6">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Clock className="h-6 w-6 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Business Hours</h4>
                        <div className="text-gray-600 space-y-1">
                          <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                          <p>Saturday: 10:00 AM - 4:00 PM</p>
                          <p className="text-green-600 font-medium">24/7 App Support Available</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Map Placeholder */}
              <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
                <Card className="border-0 shadow-lg overflow-hidden">
                  <CardContent className="p-0">
                    <div className="h-64 bg-gradient-to-br from-blue-100 to-indigo-200 flex items-center justify-center">
                      <div className="text-center">
                        <MapPin className="h-12 w-12 text-blue-600 mx-auto mb-2" />
                        <p className="text-gray-600">Interactive Map</p>
                        <p className="text-sm text-gray-500">Click to view directions</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Quick answers to common questions</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: "How do I open a demat account?",
                answer: "Download our app, complete KYC verification, and your account will be ready in 24 hours.",
              },
              {
                question: "What are the charges for trading?",
                answer: "Zero brokerage on delivery trades. ₹20 per order for intraday and F&O trading.",
              },
              {
                question: "Is my money safe with Devhar?",
                answer: "Yes, we're SEBI registered and your funds are kept in segregated accounts with top banks.",
              },
              {
                question: "Can I start SIP with ₹100?",
                answer: "You can start your SIP journey with as little as ₹100 per month.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-gray-900 mb-3">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
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
            <p className="text-gray-600 mb-4">Can't find what you're looking for?</p>
            <Button variant="outline" size="lg">
              View All FAQs
            </Button>
          </motion.div>
        </div>
      </section>

    </div>
  )
}
