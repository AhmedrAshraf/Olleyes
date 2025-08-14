import React, { useState } from 'react';
import { 
  Headphones, 
  Cloud, 
  Monitor, 
  Users, 
  CheckCircle, 
  ArrowRight, 
  Shield,
  Menu,
  X
} from 'lucide-react';
import logo from './olleyes__logo__RGB_150dpi.png';
import vrHeadset from './ChatGPT_Image_May_12__2025__11_45_44_AM-removebg-preview.png';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img src={logo} alt="HearALL Logo" className="h-12 w-auto" />
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <button 
                onClick={() => scrollToSection('about')}
                className="text-gray-700 hover:text-green-600 transition-colors duration-200"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('how-it-works')}
                className="text-gray-700 hover:text-green-600 transition-colors duration-200"
              >
                How It Works
              </button>
              <button 
                onClick={() => scrollToSection('pricing')}
                className="text-gray-700 hover:text-green-600 transition-colors duration-200"
              >
                Pricing
              </button>

            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-white border-t">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <button 
                  onClick={() => scrollToSection('about')}
                  className="block px-3 py-2 text-gray-700 hover:text-green-600 transition-colors duration-200"
                >
                  About
                </button>
                <button 
                  onClick={() => scrollToSection('how-it-works')}
                  className="block px-3 py-2 text-gray-700 hover:text-green-600 transition-colors duration-200"
                >
                  How It Works
                </button>
                <button 
                  onClick={() => scrollToSection('pricing')}
                  className="block px-3 py-2 text-gray-700 hover:text-green-600 transition-colors duration-200"
                >
                  Pricing
                </button>

              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-100 via-green-50 to-blue-50 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-green-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-20 left-1/4 w-64 h-64 bg-green-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* <div className="flex justify-center mb-8">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 via-blue-400/20 to-green-400/20 rounded-full blur-3xl group-hover:blur-2xl transition-all duration-700 animate-pulse"></div>

                <div className="relative bg-gradient-to-br from-white/95 via-white/90 to-white/95 backdrop-blur-xl rounded-3xl p-6 shadow-2xl border border-white/50 transform group-hover:scale-110 group-hover:rotate-1 transition-all duration-500 hover:shadow-green-500/25">
                  <div className="absolute -top-2 -left-2 w-4 h-4 bg-green-400 rounded-full opacity-60 animate-bounce" style={{animationDelay: '0s'}}></div>
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-400 rounded-full opacity-60 animate-bounce" style={{animationDelay: '0.5s'}}></div>
                  <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-green-500 rounded-full opacity-60 animate-bounce" style={{animationDelay: '1s'}}></div>

                  <img 
                    src={vrHeadset} 
                    alt="HearALL VR Headset" 
                    className="h-32 w-auto object-contain drop-shadow-2xl filter brightness-110 contrast-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                </div>

                <div className="absolute inset-0 rounded-3xl border-2 border-green-400/30 group-hover:border-green-400/50 transition-all duration-500 animate-ping"></div>
              </div>
            </div> */}
            
            <div className="flex justify-center mb-8">
            <img 
                    src={vrHeadset} 
                    alt="HearALL VR Headset" 
                    className="h-96 w-auto object-contain drop-shadow-2xl filter brightness-110 contrast-110"
                  />
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              HearALL – The Future of{' '}
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Hearing Care
              </span>{' '}
              in Your Practice
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
              A Virtual Reality Platform to screen, diagnose, and provide hearing care in one simple flow.
            </p>
            <button 
              onClick={() => scrollToSection('pricing')}
              className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 inline-flex items-center"
            >
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>

          {/* Hero Illustration */}
          <div className="mt-16 flex justify-center items-center space-x-8 md:space-x-12">
            <div className="text-center group">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg transform group-hover:scale-105 transition-all duration-300">
                <Headphones className="h-16 w-16 text-green-500 mx-auto mb-3" />
                <p className="text-sm font-medium text-gray-700">VR Headset</p>
              </div>
            </div>
            <div className="text-center group">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg transform group-hover:scale-105 transition-all duration-300">
                <Cloud className="h-16 w-16 text-blue-500 mx-auto mb-3" />
                <p className="text-sm font-medium text-gray-700">Cloud Computing</p>
              </div>
            </div>
            <div className="text-center group">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg transform group-hover:scale-105 transition-all duration-300">
                <Monitor className="h-16 w-16 text-green-500 mx-auto mb-3" />
                <p className="text-sm font-medium text-gray-700">Web Application</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hearing Care Impact */}
      <section className="py-16 bg-gradient-to-r from-green-100 to-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl max-w-5xl mx-auto">
              <Users className="h-16 w-16 text-green-500 mx-auto mb-6" />
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 animate-pulse">
                48 million Americans have hearing impairments
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Hearing loss is more prevalent than most doctors think. By offering hearing care in your office, 
                you can help more patients while generating additional revenue for your practice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About HearALL */}
      <section id="about" className="py-16 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              About <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">HearALL</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto mb-12">
              HearALL is a complete Hearing-Care Virtual Reality Platform, designed for fast, accurate, 
              and profitable hearing testing in your practice.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
              <Cloud className="h-12 w-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Cloud Computing</h3>
              <p className="text-gray-600">Secure storage & processing for patient data with enterprise-grade security.</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
              <Headphones className="h-12 w-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">VR Headset</h3>
              <p className="text-gray-600">Immersive patient testing experience with precise audio calibration.</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
              <Monitor className="h-12 w-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">WebApp</h3>
              <p className="text-gray-600">Easy results access & workflow integration with your existing systems.</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-100 to-blue-100 rounded-3xl p-8 md:p-12">
            <div className="flex items-center mb-6">
              <Shield className="h-8 w-8 text-green-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">FDA Fact</h3>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              Since 2022, the FDA allows the sale of Over-the-Counter (OTC) hearing aids for mild to moderate 
              hearing impairment — no prescription required. The HearALL platform also offers multiple FDA registered hearing aid models, 
              some connected via mobile apps for patient convenience.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-16 bg-gradient-to-r from-blue-100 to-green-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              How It Works
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Simple, fast, and effective hearing care in just three steps
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transform group-hover:scale-105 transition-all duration-300">
                <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  1
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Screen Patients</h3>
                <p className="text-gray-600 text-lg">
                  Screen your patients with HearALL's VR headset for accurate hearing assessment.
                </p>
              </div>
            </div>

            <div className="text-center group">
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transform group-hover:scale-105 transition-all duration-300">
                <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  2
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Offer Hearing Aids</h3>
                <p className="text-gray-600 text-lg">
                  Offer hearing aids to those affected with our range of FDA-registered hearing aids.
                </p>
              </div>
            </div>

            <div className="text-center group">
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transform group-hover:scale-105 transition-all duration-300">
                <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  3
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">That's It!</h3>
                <p className="text-gray-600 text-lg">
                  No third step. Simple, profitable hearing care integrated into your practice.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Subscription Plans */}
      <section id="pricing" className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Subscription Plans
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the perfect plan for your practice
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Standard Plan */}
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-green-200">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Standard Plan</h3>
                <div className="text-4xl font-bold text-blue-600 mb-2">$99</div>
                <p className="text-gray-600 mb-6">/month (billed annually)</p>
                
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-blue-500 mr-3" />
                    <span className="text-gray-700">Screening Hearing Test</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-blue-500 mr-3" />
                    <span className="text-gray-700">Full VRP access</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-blue-500 mr-3" />
                    <span className="text-gray-700">Patient data storage</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-blue-500 mr-3" />
                    <span className="text-gray-700">Free Updates</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-blue-500 mr-3" />
                    <span className="text-gray-700">Phone & email support</span>
                  </li>
                </ul>

                <button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                  Choose Plan
                </button>
              </div>
            </div>

            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-blue-300 relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>

              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Smart Plan</h3>
                <div className="text-4xl font-bold text-green-600 mb-2">$49</div>
                <p className="text-gray-600 mb-6">/month</p>
                <p className="text-sm text-gray-500 mb-8">Hearing Aid Commitments</p>
                
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Screening Hearing Test</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Full VRP access</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Patient data storage</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Free Updates</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Phone & email support</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-gray-700">3 hearing aids/ month commitment</span>
                  </li>
                </ul>

                <button className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                  Choose Plan
                </button>
              </div>
            </div>

            {/* Premium Plan */}
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-green-200">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Standard Plan</h3>
                <div className="text-4xl font-bold text-green-600 mb-2">$125</div>
                <p className="text-gray-600 mb-6">/month</p>
                
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Screening Hearing Test</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Full VRP access</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Patient data storage</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Free Updates</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Phone & email support</span>
                  </li>
                </ul>

                <button className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                  Choose Plan
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action & Contact */}
      <section id="contact" className="py-16 bg-gradient-to-r from-green-100 to-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Bring Hearing Care to Your Practice Today
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Join hundreds of practices already using HearALL to provide comprehensive hearing care
            </p>
            <button className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-8 py-4 rounded-full text-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 inline-flex items-center mb-16">
              Sign Up Now
              <ArrowRight className="ml-2 h-6 w-6" />
            </button>
          </div>


        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-6 md:mb-0">
              <img src={logo} alt="HearALL Logo" className="h-12 w-auto bg-white rounded-full" />
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400">© 2025 Olleyes. All rights reserved.</p>
              <p className="text-gray-400 mt-1">Revolutionizing hearing care through technology</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;