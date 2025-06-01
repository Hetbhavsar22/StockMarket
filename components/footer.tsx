import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">D</span>
              </div>
              <span className="text-2xl font-bold">devhar</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              India's most trusted investment platform. Start your journey towards financial freedom with stocks, mutual
              funds, and more.
            </p>
            {/* <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube className="h-5 w-5" />
              </Link>
            </div> */}
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Products</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/products/stocks" className="text-gray-400 hover:text-white transition-colors">
                  Stocks
                </Link>
              </li>
              <li>
                <Link href="/products/mutual-funds" className="text-gray-400 hover:text-white transition-colors">
                  Mutual Funds
                </Link>
              </li>
              <li>
                <Link href="/products/ipos" className="text-gray-400 hover:text-white transition-colors">
                  IPOs
                </Link>
              </li>
              <li>
                <Link href="/products/insurance" className="text-gray-400 hover:text-white transition-colors">
                  Insurance
                </Link>
              </li>
              <li>
                <Link href="/products/fixed-deposits" className="text-gray-400 hover:text-white transition-colors">
                  Fixed Deposits
                </Link>
              </li>
              <li>
                <Link href="/products/gold-etfs" className="text-gray-400 hover:text-white transition-colors">
                  Gold & ETFs
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            {/* <h3 className="text-lg font-semibold">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/help" className="text-gray-400 hover:text-white transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-white transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/security" className="text-gray-400 hover:text-white transition-colors">
                  Security
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul> */}

            <div className="space-y-2 pt-4">
              <div className="flex items-center space-x-2 text-gray-400">
                <Phone className="h-4 w-4" />
                <span>+91 9998156835</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <Mail className="h-4 w-4" />
                <span>atul.26778@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">© {new Date().getFullYear()} Devhar Technologies Pvt Ltd. All rights reserved.</div>
            <div className="flex space-x-6 text-sm text-gray-400">
              {/* <span>SEBI Reg: INZ000123456</span> */}
              {/* <span>IRDAI Reg: 123456789</span> */}
              <span>NSE Member: 06637</span>
            </div>
          </div>

          <div className="mt-4 text-xs text-gray-500 leading-relaxed">
            <p>
              Investments in securities market are subject to market risks. Read all the related documents carefully
              before investing. Registration granted by SEBI, membership of BASL (in case of IAs) and certification from
              NISM in no way guarantee performance of the intermediary or provide any assurance of returns to investors.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
