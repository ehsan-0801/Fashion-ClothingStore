'use client'

import { Facebook, Instagram, MessageCircle, Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Nadia Fashion</h3>
            <p className="text-sm text-primary-foreground/80">
              আপনার স্টাইল, আপনার আত্মবিশ্বাস। প্রিমিয়াম মানের ফ্যাশন পণ্য।
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-semibold text-lg">দ্রুত লিঙ্ক</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <a href="#" className="hover:text-primary-foreground transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition">
                  Products
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Policies */}
          <div className="space-y-3">
            <h4 className="font-semibold text-lg">নীতিমালা</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <a href="#" className="hover:text-primary-foreground transition">
                  ডেলিভারি পলিসি
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition">
                  রিটার্ন পলিসি
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition">
                  গোপনীয়তা নীতি
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition">
                  শর্তাবলী
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-3">
            <h4 className="font-semibold text-lg">আমাদের অনুসরণ করুন</h4>
            <div className="flex gap-3">
              <a
                href="https://facebook.com/gorgeousyou2021"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-primary-foreground/20 hover:bg-primary-foreground/40 flex items-center justify-center transition-all hover:scale-110 hover:shadow-lg"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-full bg-primary-foreground/20 hover:bg-primary-foreground/40 flex items-center justify-center transition-all hover:scale-110 hover:shadow-lg"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://wa.me/8801742787523?text=আমি%20Nadia%20Fashion%20থেকে%20একটি%20পণ্য%20অর্ডার%20করতে%20আগ্রহী।"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-primary-foreground/20 hover:bg-primary-foreground/40 flex items-center justify-center transition-all hover:scale-110 hover:shadow-lg"
                aria-label="WhatsApp"
              >
                <MessageCircle size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-primary-foreground/20 my-8"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-primary-foreground/80 space-y-4 md:space-y-0">
          <p>© 2024 Nadia Fashion. সমস্ত অধিকার সংরক্ষিত।</p>
          <p>
            ডিজাইন করা হয়েছে সর্বোচ্চ মানের অভিজ্ঞতার জন্য।
          </p>
        </div>
      </div>
    </footer>
  )
}
