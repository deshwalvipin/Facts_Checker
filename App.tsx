import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { FactCheckForm } from './components/FactCheckForm';
import { EmergencyAlerts } from './components/EmergencyAlerts';
import { RecentFactChecks } from './components/RecentFactChecks';
import { StatsOverview } from './components/StatsOverview';
import { VisualizationDashboard } from './components/VisualizationDashboard';
import { HowItWorks } from './components/HowItWorks';
import { Separator } from './components/ui/separator';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main>
        {/* Hero Section */}
        <HeroSection />
        
        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Stats Overview */}
          <section className="mb-12">
            <h2 className="text-2xl mb-6">Platform Overview</h2>
            <StatsOverview />
          </section>

          <Separator className="my-12" />

          {/* Emergency Alerts Section */}
          <section className="mb-12">
            <h2 className="text-2xl mb-6">Current Emergency Alerts</h2>
            <EmergencyAlerts />
          </section>

          <Separator className="my-12" />

          {/* Fact Checking Section */}
          <section id="verify" className="mb-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl mb-4">Verify Claims with AI</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Submit any claim for instant fact-checking using our AI-powered verification system. 
                Get confidence scores and source validation in seconds.
              </p>
            </div>
            <FactCheckForm />
          </section>

          <Separator className="my-12" />

          {/* How It Works Section */}
          <section id="how-it-works" className="mb-12">
            <HowItWorks />
          </section>

          <Separator className="my-12" />

          {/* Analytics Dashboard */}
          <section id="analytics" className="mb-12">
            <h2 className="text-2xl mb-6">Real-time Analytics & Insights</h2>
            <VisualizationDashboard />
          </section>

          <Separator className="my-12" />

          {/* Recent Fact Checks Section */}
          <section className="mb-12">
            <h2 className="text-2xl mb-6">Recent Fact-Checks</h2>
            <RecentFactChecks />
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg mb-4">Facts Checker</h3>
              <p className="text-gray-400 text-sm">
                AI-powered fact verification platform for reliable information during emergencies.
              </p>
            </div>
            
            <div>
              <h4 className="text-sm font-medium mb-4">Platform</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">How it Works</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Data Sources</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-sm font-medium mb-4">Emergency</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Current Alerts</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Report Misinformation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Emergency Resources</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-sm font-medium mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 Facts Checker. All rights reserved. Built to combat misinformation in emergency situations.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}