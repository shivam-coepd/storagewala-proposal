'use client';

import { useState, useEffect } from 'react';

const referenceLinks = [
  {
    name: "Demo 1",
    url: "https://laravel-transhub.mnsithub.com/",
  },
  {
    name: "Demo 2",
    url: "https://themehealer.com/php-template/onpoint-php/index.php",
  },
  {
    name: "Demo 3",
    url: "https://www.wowtheme7.com/tf/transpro/home.html",
  },
  {
    name: "Demo 4",
    url: "https://html.favdevs.com/translo/index-2.html",
  },
  {
    name: "Demo 5",
    url: "https://html.favdevs.com/translo/index-3.html",
  }
];

export default function Home() {
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollY = window.scrollY;
      
      sections.forEach((section) => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'executive-summary', label: 'Summary' },
    { id: 'website-experience', label: 'Website' },
    { id: 'payment-system', label: 'Payment' },
    { id: 'scope-timeline', label: 'Scope' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'why-apt', label: 'Why APT' },
    { id: 'reference-sites', label: 'References' },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-md">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <img src="/APT_Logo.png" alt="APT Digital Express Logo" className="h-10 w-auto" />
            </div>
            
            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    activeSection === item.id
                      ? 'text-[#d4a843] bg-[#d4a843]/10'
                      : 'text-gray-600 hover:text-[#1e3a5f] hover:bg-gray-100'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-md text-gray-600 hover:bg-gray-100"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Nav */}
          {mobileMenuOpen && (
            <div className="lg:hidden py-4 border-t">
              <div className="flex flex-col space-y-2">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`px-4 py-2 text-sm font-medium rounded-md text-left ${
                      activeSection === item.id
                        ? 'text-[#d4a843] bg-[#d4a843]/10'
                        : 'text-gray-600 hover:text-[#1e3a5f] hover:bg-gray-100'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1e3a5f] via-[#0f1924] to-[#1e3a5f] pt-16">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#d4a843]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#3498db]/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-8">
            <span className="text-[#d4a843] text-sm font-medium">APT DIGITAL EXPRESS</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Website Redesign &
            <br />
            <span className="text-gradient">Online Booking Proposal</span>
          </h1>
          
          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-[#d4a843]"></div>
            <span className="text-[#d4a843] font-semibold text-xl">STORAGEWALA.COM</span>
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-[#d4a843]"></div>
          </div>
          
          <p className="text-lg sm:text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            A conversion-focused digital platform for discovering storage plans, calculating transparent pricing, booking pickup, and paying securely online.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-4 text-left">
              <p className="text-gray-400 text-sm mb-1">Prepared for</p>
              <p className="text-white font-semibold">StorageWala</p>
            </div>
            <div className="hidden sm:block w-8 h-px bg-gray-600"></div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-4 text-left">
              <p className="text-gray-400 text-sm mb-1">Prepared by</p>
              <p className="text-white font-semibold">APT Digital Express</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto mb-16">
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
              <p className="text-gray-400 text-sm mb-2">Website</p>
              <p className="text-white font-medium">storagewala.com</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
              <p className="text-gray-400 text-sm mb-2">Contact</p>
              <p className="text-white font-medium">Nilesh G. • Digital Transformation Manager</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
              <p className="text-gray-400 text-sm mb-2">Date</p>
              <p className="text-white font-medium">14 August 2026</p>
            </div>
          </div>

          <div className="inline-block bg-[#d4a843] text-[#0f1924] px-8 py-3 rounded-full font-semibold text-lg">
            WE OPTIMIZE. WE ENGAGE. WE GROW.
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Executive Summary */}
      <section id="executive-summary" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-[#1e3a5f]/10 text-[#1e3a5f] rounded-full text-sm font-medium mb-4">Section 01</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1e3a5f] mb-4">Executive Summary</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#d4a843] to-[#d4a843]/50 mx-auto"></div>
          </div>

          <p className="text-lg text-gray-600 text-center max-w-4xl mx-auto mb-16 leading-relaxed">
            StorageWala has strong service breadth across household storage, business storage, vehicle storage, packing and moving, and fulfilment. The redesign should convert this breadth into a simple digital buying experience—making pricing easier to understand, building trust faster, and enabling customers to complete a booking and payment without unnecessary calls or form friction.
          </p>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-r-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <svg className="w-5 h-5 mr-2 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                What we observed on the current website
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Storage packages are published for individual items, 10+ household goods, 1 BHK, 2 BHK, 3 BHK, two-wheelers and custom extra space.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Discounts, GST, insurance and logistics exclusions are described, but the customer must mentally calculate the payable amount.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  The Book Space page largely repeats homepage content instead of guiding the visitor through a focused checkout journey.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Customer registration and login exist, while the FAQ states that portal payments support cards, debit cards and net banking; this should be unified into a visible, reliable booking flow.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Repeated content, inconsistent wording and form labels, and limited conversion hierarchy reduce clarity and confidence.
                </li>
              </ul>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Recommended outcome
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Clear packages, sticky "Book Now" CTAs and guided checkout
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Automated tenure, discount, GST and optional service calculations
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Facility photos, security proof, service steps, FAQs and verified testimonials
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Secure gateway, payment status, receipts, retries and admin reconciliation
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  SEO-friendly service and location architecture with preserved URLs/redirects
                </li>
              </ul>
            </div>
          </div>

          {/* Business Objectives & Success Measures */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-[#1e3a5f] text-center mb-8">Business Objectives & Design Response</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { objective: 'Increase qualified bookings', response: 'Clear packages, sticky "Book Now" CTAs and guided checkout', icon: '📈' },
                { objective: 'Reduce manual quotation effort', response: 'Automated tenure, discount, GST and optional service calculations', icon: '⚙️' },
                { objective: 'Build customer trust', response: 'Facility photos, security proof, service steps, FAQs and verified testimonials', icon: '🛡️' },
                { objective: 'Improve payment collection', response: 'Secure gateway, payment status, receipts, retries and admin reconciliation', icon: '💳' },
                { objective: 'Support organic growth', response: 'SEO-friendly service and location architecture with preserved URLs/redirects', icon: '🔍' },
              ].map((item, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow">
                  <div className="text-3xl mb-4">{item.icon}</div>
                  <h4 className="font-bold text-[#1e3a5f] mb-2">{item.objective}</h4>
                  <p className="text-gray-600 text-sm">{item.response}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#1e3a5f] to-[#2d5a8a] rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6 text-center">Success Measures</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                'More completed booking requests and successful online payments',
                'Lower drop-off between package selection and confirmation',
                'Fewer support calls for pricing, inclusions and payment status',
                'Improved mobile performance, discoverability and lead tracking'
              ].map((measure, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-8 h-8 bg-[#d4a843] rounded-full flex items-center justify-center text-[#0f1924] font-bold text-sm mr-3 flex-shrink-0">
                    {index + 1}
                  </div>
                  <p className="text-sm">{measure}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Proposed Website Experience */}
      <section id="website-experience" className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-[#1e3a5f]/10 text-[#1e3a5f] rounded-full text-sm font-medium mb-4">Section 02</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1e3a5f] mb-4">Proposed Website Experience</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#d4a843] to-[#d4a843]/50 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The new interface will be mobile-first, fast, reassuring and designed around the two primary audiences: households seeking secure storage and businesses requiring scalable warehousing or fulfilment.
            </p>
          </div>

          {/* Sitemap */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-[#1e3a5f] text-center mb-8">Recommended Sitemap</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { page: 'Home', purpose: 'Value proposition, plan finder, trust proof, service highlights and conversion CTAs' },
                { page: 'Household Storage', purpose: 'Storage categories, packages, safety features and booking entry point' },
                { page: 'Business Storage', purpose: 'Warehouse, inventory, document, retail and fulfilment solutions' },
                { page: 'Packers & Movers', purpose: 'Packing, pickup, transport, unloading and service enquiry' },
                { page: 'Vehicle Storage & Transport', purpose: 'Two-wheeler/car storage, transport options and quote request' },
                { page: 'Pricing / Book Space', purpose: 'Plan comparison, duration, add-ons and real-time payable estimate' },
                { page: 'Locations', purpose: 'City and locality pages with unique, useful SEO content' },
                { page: 'How It Works / Safety', purpose: 'Process, prohibited items, warehouse security and insurance guidance' },
                { page: 'About / Testimonials / FAQ / Blog / Contact', purpose: 'Brand credibility, education and enquiries' },
                { page: 'Customer Account', purpose: 'Bookings, invoices, payments, documents and service requests' },
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-lg p-5 shadow-sm border border-gray-100 hover:border-[#d4a843] transition-colors">
                  <h4 className="font-bold text-[#1e3a5f] mb-2">{item.page}</h4>
                  <p className="text-gray-600 text-sm">{item.purpose}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Customer Booking Journey */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-[#1e3a5f] text-center mb-8">Customer Booking Journey</h3>
            <div className="relative">
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#d4a843] to-[#1e3a5f]"></div>
              <div className="space-y-8 md:space-y-0">
                {[
                  { step: 1, title: 'Choose requirement', desc: 'Select household, business, vehicle or custom storage.' },
                  { step: 2, title: 'Configure booking', desc: 'Choose plan/volume, storage period, pickup city/date and optional services.' },
                  { step: 3, title: 'Review transparent estimate', desc: 'Show base rent, tenure discount, insurance, GST and add-ons before payment.' },
                  { step: 4, title: 'Enter customer details', desc: 'OTP verification, address, item declaration and acceptance of terms.' },
                  { step: 5, title: 'Pay securely', desc: 'Pay full amount, advance amount or booking token according to the approved business rule.' },
                  { step: 6, title: 'Receive confirmation', desc: 'Booking ID, invoice/receipt, email/SMS/WhatsApp acknowledgement and account access.' },
                ].map((item, index) => (
                  <div key={index} className={`md:flex items-center md:mb-8 ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                    <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                      <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 card-hover">
                        <div className="inline-flex items-center justify-center w-10 h-10 bg-[#d4a843] text-[#0f1924] rounded-full font-bold mb-3">
                          {item.step}
                        </div>
                        <h4 className="font-bold text-[#1e3a5f] text-lg mb-2">{item.title}</h4>
                        <p className="text-gray-600">{item.desc}</p>
                      </div>
                    </div>
                    <div className="hidden md:flex w-12 h-12 bg-white rounded-full shadow-lg items-center justify-center z-10 border-4 border-[#d4a843]">
                      <span className="text-[#d4a843] font-bold">{item.step}</span>
                    </div>
                    <div className="md:w-1/2"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Gateway Section */}
      <section id="payment-system" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-[#1e3a5f]/10 text-[#1e3a5f] rounded-full text-sm font-medium mb-4">Section 03</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1e3a5f] mb-4">Payment Gateway & Booking System</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#d4a843] to-[#d4a843]/50 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              APT Digital Express will integrate an Indian payment gateway such as Razorpay, Cashfree or PayU. Final selection will depend on StorageWala's merchant approval, preferred settlement terms and transaction fees.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Payment Functionality */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-[#1e3a5f] mb-6">Payment Functionality</h3>
              <div className="space-y-4">
                {[
                  { feature: 'Payment modes', desc: 'UPI, cards, net banking and supported wallets' },
                  { feature: 'Pricing engine', desc: 'Monthly rate × tenure, approved discounts, GST and configurable add-ons' },
                  { feature: 'Payment choices', desc: 'Full payment, advance/token or custom invoice link—subject to final business rule' },
                  { feature: 'Verification', desc: 'Server-side signature verification and gateway webhook handling' },
                  { feature: 'Customer proof', desc: 'Booking confirmation, payment receipt and downloadable invoice' },
                  { feature: 'Failed payments', desc: 'Retry flow with preserved booking details and clear status' },
                  { feature: 'Refund support', desc: 'Admin-recorded refund status; automated gateway refund can be added if approved' },
                  { feature: 'Reconciliation', desc: 'Transaction ID, booking ID, amount, gateway status and settlement reference' },
                  { feature: 'Notifications', desc: 'Email confirmation included; SMS/WhatsApp subject to provider integration and usage fees' },
                ].map((item, index) => (
                  <div key={index} className="flex items-start border-b border-gray-200 pb-3 last:border-0">
                    <div className="w-2 h-2 bg-[#d4a843] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <span className="font-medium text-[#1e3a5f]">{item.feature}: </span>
                      <span className="text-gray-600">{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Admin Controls */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-[#1e3a5f] mb-6">Admin Controls</h3>
              <div className="space-y-4">
                {[
                  'Dashboard for booking, lead and payment summaries',
                  'Manage plans, monthly prices, discounts, GST rules, service areas and add-ons',
                  'View customer details, pickup requirements and booking history',
                  'Update booking stages: pending, payment received, pickup scheduled, stored, return requested and closed',
                  'Export booking and payment records to CSV/Excel',
                  'Role-based access for authorised operations and finance users'
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <svg className="w-5 h-5 text-[#d4a843] mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scope & Timeline */}
      <section id="scope-timeline" className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-[#1e3a5f]/10 text-[#1e3a5f] rounded-full text-sm font-medium mb-4">Section 04</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1e3a5f] mb-4">Scope, Deliverables & Timeline</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#d4a843] to-[#d4a843]/50 mx-auto"></div>
          </div>

          {/* Included Deliverables */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-[#1e3a5f] text-center mb-8">Included Deliverables</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { workstream: 'Discovery & UX', deliverables: 'Requirement workshop, user journeys, sitemap and wireframes' },
                { workstream: 'UI Design', deliverables: 'Responsive design system and key page mockups aligned with StorageWala branding' },
                { workstream: 'Development', deliverables: 'Responsive front end, CMS-managed content and database-backed booking flow' },
                { workstream: 'Booking Engine', deliverables: 'Packages, tenure, discounts, taxes, add-ons, booking IDs and confirmations' },
                { workstream: 'Payment Integration', deliverables: 'One approved payment gateway, webhooks, success/failure flows and receipts' },
                { workstream: 'Customer Account', deliverables: 'Registration/login, booking history, payment records and basic profile' },
                { workstream: 'Admin Panel', deliverables: 'Plans, prices, bookings, customers, payment status, service areas and export' },
                { workstream: 'SEO Migration', deliverables: 'Metadata, schema basics, sitemap, robots, URL mapping and priority redirects' },
                { workstream: 'Analytics & QA', deliverables: 'GA4 events, form/payment conversion tracking, responsive and functional testing' },
                { workstream: 'Launch & Handover', deliverables: 'Production deployment, admin walkthrough and 30-day defect warranty' },
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-[#1e3a5f] rounded-lg flex items-center justify-center text-white font-bold mb-4">
                    {index + 1}
                  </div>
                  <h4 className="font-bold text-[#1e3a5f] mb-2">{item.workstream}</h4>
                  <p className="text-gray-600 text-sm">{item.deliverables}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Client Inputs */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-[#1e3a5f] mb-6 text-center">Client Inputs Required</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                'Brand assets, approved copy, original facility/service photographs and testimonials',
                'Final rate card, discount logic, taxes, insurance calculation and service/add-on charges',
                'Booking, cancellation, refund, prohibited-items and data-privacy policies',
                'Domain/hosting access, existing website/database access and payment gateway account',
                'One authorised stakeholder for consolidated feedback and approvals'
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-8 h-8 bg-[#d4a843] rounded-full flex items-center justify-center text-[#0f1924] font-bold text-sm mr-3 flex-shrink-0">
                    {index + 1}
                  </div>
                  <p className="text-gray-700 text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-[#1e3a5f]/10 text-[#1e3a5f] rounded-full text-sm font-medium mb-4">Section 05</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1e3a5f] mb-4">Pricing Plans</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#d4a843] to-[#d4a843]/50 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose the perfect plan for your business needs. All plans include our core features with varying levels of functionality.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Basic Plan */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col">
              <div className="bg-gradient-to-r from-gray-600 to-gray-700 p-6 text-white text-center">
                <h3 className="text-2xl font-bold mb-2">Basic / Starter</h3>
                <p className="text-gray-200 text-sm">Essential website with inquiry form</p>
              </div>
              <div className="p-8 flex-grow">
                <div className="text-center mb-8">
                  <span className="text-5xl font-bold text-[#1e3a5f]">₹40,000</span>
                  <span className="text-gray-500"> + GST</span>
                </div>
                <ul className="space-y-4">
                  {[
                    'Responsive website design',
                    'Home, About & Contact pages',
                    'Service showcase pages',
                    'Customer inquiry form',
                    'Service booking request form',
                    'Location/branch pages',
                    'Mobile-friendly layout',
                    'Basic SEO setup',
                    '2 rounds of revisions'
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-6 bg-gray-50">
                <p className="text-center text-gray-600 text-sm mb-4">Ideal for: Small businesses starting online</p>
                <button className="w-full py-3 px-6 bg-gray-600 hover:bg-gray-700 text-white font-semibold rounded-lg transition-colors">
                  Get Started
                </button>
              </div>
            </div>

            {/* Standard Plan */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col transform md:scale-105 border-4 border-[#d4a843] relative">
              <div className="absolute top-0 right-0 bg-[#d4a843] text-[#0f1924] px-4 py-1 text-sm font-bold rounded-bl-lg">
                POPULAR
              </div>
              <div className="bg-gradient-to-r from-[#1e3a5f] to-[#2d5a8a] p-6 text-white text-center">
                <h3 className="text-2xl font-bold mb-2">Standard</h3>
                <p className="text-gray-200 text-sm">Website + Booking System</p>
              </div>
              <div className="p-8 flex-grow">
                <div className="text-center mb-8">
                  <span className="text-5xl font-bold text-[#1e3a5f]">₹75,000</span>
                  <span className="text-gray-500"> + GST</span>
                </div>
                <ul className="space-y-4">
                  {[
                    'Everything in Basic',
                    'Free domain & hosting for 1 year',
                    'Online booking system',
                    'Customer account portal',
                    'Booking status tracking',
                    'Admin dashboard (basic)',
                    'Email notifications',
                    'Booking history',
                    '5 rounds of revisions'
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-6 bg-[#d4a843]/10">
                <p className="text-center text-gray-600 text-sm mb-4">Ideal for: Growing businesses with bookings</p>
                <button className="w-full py-3 px-6 bg-[#d4a843] hover:bg-[#c49a3d] text-[#0f1924] font-bold rounded-lg transition-colors">
                  Get Started
                </button>
              </div>
            </div>

            {/* Premium Plan */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col">
              <div className="bg-gradient-to-r from-[#0f1924] to-[#1e3a5f] p-6 text-white text-center">
                <h3 className="text-2xl font-bold mb-2">Premium</h3>
                <p className="text-gray-300 text-sm">Full Solution + Payment Gateway</p>
              </div>
              <div className="p-8 flex-grow">
                <div className="text-center mb-8">
                  <span className="text-5xl font-bold text-[#1e3a5f]">₹1,50,000</span>
                  <span className="text-gray-500"> + GST</span>
                </div>
                <ul className="space-y-4">
                  {[
                    'Everything in Standard',
                    'Custom future ready backend ',
                    'Payment gateway integration',
                    'Online payments (UPI)',
                    'Invoice generation',
                    'Full admin panel',
                    'Analytics & tracking',
                    'SEO optimization',
                    'Priority support',
                    'Unlimited revisions'
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 font-bold">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-6 bg-gray-50">
                <p className="text-center text-gray-600 text-sm mb-4">Ideal for: Enterprise with payment needs</p>
                <button className="w-full py-3 px-6 bg-[#1e3a5f] hover:bg-[#0f1924] text-white font-semibold rounded-lg transition-colors">
                  Get Started
                </button>
              </div>
            </div>
          </div>

          {/* Plan Comparison Table */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <h3 className="text-2xl font-bold text-[#1e3a5f] text-center mb-8">Plan Comparison</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="py-4 px-6 text-left text-gray-700 font-bold">Feature</th>
                    <th className="py-4 px-6 text-center text-gray-600 font-bold">Basic</th>
                    <th className="py-4 px-6 text-center bg-[#d4a843]/10 text-[#1e3a5f] font-bold">Standard</th>
                    <th className="py-4 px-6 text-center text-gray-600 font-bold">Premium</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: 'Responsive Design', basic: true, standard: true, premium: true },
                    { feature: 'Service Pages', basic: true, standard: true, premium: true },
                    { feature: 'Inquiry Form', basic: true, standard: true, premium: true },
                    { feature: 'Online Booking', basic: false, standard: true, premium: true },
                    { feature: 'Customer Portal', basic: false, standard: true, premium: true },
                    { feature: 'Payment Gateway', basic: false, standard: false, premium: true },
                    { feature: 'Invoice Generation', basic: false, standard: false, premium: true },
                    { feature: 'Admin Dashboard', basic: false, standard: true, premium: true },
                    { feature: 'Analytics & Tracking', basic: false, standard: false, premium: true },
                    { feature: 'Multi-Branch Ready', basic: false, standard: false, premium: true },
                    { feature: 'Priority Support', basic: false, standard: false, premium: true },
                  ].map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="py-4 px-6 text-gray-700 border-b border-gray-100">{row.feature}</td>
                      <td className="py-4 px-6 text-center border-b border-gray-100">
                        {row.basic ? <span className="text-green-500 text-xl">✓</span> : <span className="text-gray-300 text-xl">—</span>}
                      </td>
                      <td className="py-4 px-6 text-center bg-[#d4a843]/5 border-b border-gray-100">
                        {row.standard ? <span className="text-green-500 text-xl">✓</span> : <span className="text-gray-300 text-xl">—</span>}
                      </td>
                      <td className="py-4 px-6 text-center border-b border-gray-100">
                        {row.premium ? <span className="text-green-500 text-xl">✓</span> : <span className="text-gray-300 text-xl">—</span>}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Payment Schedule */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-[#1e3a5f] text-center mb-8">Payment Schedule</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { milestone: '40% on project confirmation', step: 1 },
                { milestone: '30% on design approval', step: 2 },
                { milestone: '20% on staging complete', step: 3 },
                { milestone: '10% before launch', step: 4 },
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-100">
                  <div className="w-12 h-12 bg-[#1e3a5f] rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                    {item.step}
                  </div>
                  <p className="font-medium text-[#1e3a5f]">{item.milestone}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why APT Section */}
      <section id="why-apt" className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-[#1e3a5f]/10 text-[#1e3a5f] rounded-full text-sm font-medium mb-4">Section 06</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1e3a5f] mb-4">Why APT Digital Express</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#d4a843] to-[#d4a843]/50 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              APT Digital Express combines website engineering, user-experience design, SEO, analytics and performance marketing. This allows StorageWala to launch a platform that is not only visually modern, but also measurable, searchable and built to convert.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-[#1e3a5f]">Our Approach</h3>
              {[
                'Conversion-led design',
                'Business-rule clarity',
                'SEO-aware migration',
                'Measurable funnel',
                'Practical handover'
              ].map((item, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-3 h-3 bg-[#d4a843] rounded-full mr-4"></div>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-[#1e3a5f]">Value to StorageWala</h3>
              {[
                'Every major page guides visitors toward a quote, booking or payment',
                'Pricing, discounts, tax, insurance and extras are configured transparently',
                'Existing location visibility is protected while content quality improves',
                'Track plan views, checkout starts, payment success and lead sources',
                'Admin training, documentation and a clear post-launch support path'
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Recommended Next Steps */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-[#1e3a5f] mb-8 text-center">Recommended Next Steps</h3>
            <div className="space-y-6">
              {[
                { step: 1, title: 'Scope confirmation', desc: 'Approve the proposed modules and identify any existing portal functionality to retain.' },
                { step: 2, title: 'Technical access review', desc: 'Review hosting, codebase, database, customer accounts and current admin panel.' },
                { step: 3, title: 'Booking-rule workshop', desc: 'Confirm pricing, discounts, GST, insurance, add-ons, advance payment and refund rules.' },
                { step: 4, title: 'Commercial approval', desc: 'Sign off the final statement of work and initiate the first milestone payment.' },
                { step: 5, title: 'Project kickoff', desc: 'Begin sitemap, wireframes and content migration plan.' },
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#d4a843] to-[#d4a843]/70 rounded-xl flex items-center justify-center text-[#0f1924] font-bold text-xl mr-6 flex-shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1e3a5f] text-lg">{item.title}</h4>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reference Sites Section */}
      <section id="reference-sites" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-[#1e3a5f]/10 text-[#1e3a5f] rounded-full text-sm font-medium mb-4">Reference</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1e3a5f] mb-4">Reference Website Links</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#d4a843] to-[#d4a843]/50 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Below are the reference website links provided for website development inspiration and navigation.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {referenceLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:border-[#d4a843] hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#1e3a5f] to-[#2d5a8a] rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-[#d4a843] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
                <h3 className="font-bold text-[#1e3a5f] mb-2 group-hover:text-[#d4a843] transition-colors">
                  {link.name}
                </h3>
                <div className="flex items-center text-xs text-gray-500">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                  <span className="truncate">{link.url}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Important Notes Section */}
      <section className="py-12 px-4 bg-[#1e3a5f]">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Important Notes</h3>
          <div className="space-y-4">
            <div className="flex items-start bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="w-8 h-8 bg-[#d4a843] rounded-full flex items-center justify-center text-[#0f1924] font-bold text-sm mr-4 flex-shrink-0">
                1
              </div>
              <p className="text-white text-lg">
                This Proposal is <span className="font-bold text-[#d4a843]">For a Single Branch</span>
              </p>
            </div>
            <div className="flex items-start bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="w-8 h-8 bg-[#d4a843] rounded-full flex items-center justify-center text-[#0f1924] font-bold text-sm mr-4 flex-shrink-0">
                2
              </div>
              <p className="text-white text-lg">
                Domain and hosting cost will be taken care by the <span className="font-bold text-[#d4a843]">Client</span>
              </p>
            </div>
            <div className="flex items-start bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="w-8 h-8 bg-[#d4a843] rounded-full flex items-center justify-center text-[#0f1924] font-bold text-sm mr-4 flex-shrink-0">
                3
              </div>
              <p className="text-white text-lg">
                The Above Proposal is valid for <span className="font-bold text-[#d4a843]">3 working days</span> from date of generation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0f1924] text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <img src="/APT_Logo.png" alt="APT Digital Express Logo" className="h-12 w-auto bg-white p-1 rounded" />
            </div>
            <h3 className="text-2xl font-bold mb-4">APT DIGITAL EXPRESS</h3>
            <p className="text-gray-400 mb-6">Data meets creativity — the APT Digital Express way.</p>
            <div className="border-t border-gray-700 pt-6">
              <p className="text-sm text-gray-500">
                StorageWala Website Redesign & Online Booking Proposal • 14 August 2026
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
