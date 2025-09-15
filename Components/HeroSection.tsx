import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Shield, Zap, Globe, ArrowRight, Brain, CheckCircle, Users } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 border-blue-200">
                <CheckCircle className="w-3 h-3 mr-1" />
                AI-Powered Fact Verification
              </Badge>
              
              <h1 className="text-4xl lg:text-5xl leading-tight text-gray-900">
                Verify Facts Instantly with
                <span className="text-blue-600 block">AI-Powered Analysis</span>
              </h1>
              
              <p className="text-lg text-gray-600 max-w-xl">
                Facts Checker uses advanced AI to instantly verify claims and detect misinformation. 
                Get reliable, fact-checked information when accuracy matters most.
              </p>
            </div>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span className="text-sm text-gray-700">Real-time fact verification</span>
              </div>
              <div className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span className="text-sm text-gray-700">Multiple source validation</span>
              </div>
              <div className="flex items-center gap-3">
                <Zap className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span className="text-sm text-gray-700">Instant AI analysis</span>
              </div>
              <div className="flex items-center gap-3">
                <Users className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span className="text-sm text-gray-700">Emergency-focused content</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                <CheckCircle className="w-4 h-4 mr-2" />
                Start Fact Check
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button variant="outline" size="lg" className="border-blue-200 hover:bg-blue-50">
                <Shield className="w-4 h-4 mr-2" />
                View Recent Checks
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-gray-200">
              <div>
                <div className="text-2xl text-blue-600">247</div>
                <div className="text-sm text-gray-600">Claims Verified Today</div>
              </div>
              <div>
                <div className="text-2xl text-blue-600">99.2%</div>
                <div className="text-sm text-gray-600">Accuracy Rate</div>
              </div>
              <div>
                <div className="text-2xl text-blue-600">&lt; 30s</div>
                <div className="text-sm text-gray-600">Average Response Time</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1709285671944-a27fcbd207eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXdzJTIwdmVyaWZpY2F0aW9uJTIwZmFjdCUyMGNoZWNraW5nfGVufDF8fHx8MTc1NzkxMzI5OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Fact checking and news verification"
                className="w-full h-auto"
              />
              
              {/* Overlay Cards */}
              <div className="absolute top-4 right-4">
                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm font-medium">Verified by Google AI</span>
                  </div>
                </div>
              </div>
              
              <div className="absolute bottom-4 left-4">
                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                  <div className="text-sm text-gray-700">
                    <div className="flex items-center gap-2 mb-1">
                      <Brain className="w-4 h-4 text-purple-600" />
                      <span className="font-medium">Gemini Analysis: 96% Confidence</span>
                    </div>
                    <div className="text-xs text-gray-500">Cross-referenced with 5 sources</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}