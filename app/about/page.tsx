import { Users, Award, Shield, Target, Heart, Globe } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import bannerimage from "@/public/images/UT0.webp"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Democratizing Finance for
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                {" "}
                Every Indian
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              We believe everyone deserves access to quality financial services. Our mission is to make investing
              simple, transparent, and accessible to millions of Indians.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Our Mission</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Target className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Simplify Investing</h3>
                    <p className="text-gray-600">
                      Make financial markets accessible to everyone, regardless of their experience level.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Heart className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Build Trust</h3>
                    <p className="text-gray-600">
                      Maintain transparency and security in every transaction and interaction.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Globe className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Empower Growth</h3>
                    <p className="text-gray-600">Help Indians build wealth and achieve their financial goals.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src={bannerimage}
                alt="Our Mission"
                width={600}
                height={500}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Trusted by Millions</h2>
            <p className="text-xl text-gray-600">Our numbers speak for our commitment to excellence</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "2M+", label: "Active Users", icon: Users },
              { number: "₹50K Cr+", label: "Assets Under Management", icon: Target },
              { number: "4.8★", label: "App Store Rating", icon: Award },
              { number: "99.9%", label: "Uptime Guarantee", icon: Shield },
            ].map((stat, index) => (
              <Card key={index} className="text-center border-0 shadow-md">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Leadership</h2>
            <p className="text-xl text-gray-600">Experienced professionals committed to your financial success</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Rajesh Kumar",
                role: "CEO & Co-Founder",
                experience: "15+ years in fintech",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Priya Sharma",
                role: "CTO & Co-Founder",
                experience: "12+ years in technology",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Amit Patel",
                role: "Head of Product",
                experience: "10+ years in product",
                image: "/placeholder.svg?height=300&width=300",
              },
            ].map((member, index) => (
              <Card key={index} className="border-0 shadow-md overflow-hidden">
                <CardContent className="p-0">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={300}
                    height={300}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-blue-600 font-semibold mb-2">{member.role}</p>
                    <p className="text-gray-600 text-sm">{member.experience}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Transparency",
                description: "We believe in complete transparency in fees, processes, and communication.",
                icon: Shield,
              },
              {
                title: "Innovation",
                description: "Continuously improving our platform with cutting-edge technology.",
                icon: Target,
              },
              {
                title: "Customer First",
                description: "Every decision we make is centered around our customers' success.",
                icon: Heart,
              },
              {
                title: "Security",
                description: "Your financial data and investments are protected with the highest security standards.",
                icon: Shield,
              },
              {
                title: "Accessibility",
                description: "Making financial services accessible to everyone, everywhere in India.",
                icon: Globe,
              },
              {
                title: "Excellence",
                description: "Striving for excellence in every product, service, and interaction.",
                icon: Award,
              },
            ].map((value, index) => (
              <Card key={index} className="border-0 shadow-md">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <value.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
