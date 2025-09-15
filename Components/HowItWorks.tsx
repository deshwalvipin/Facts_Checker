import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Upload, Brain, Database, CheckCircle, Search } from 'lucide-react';

const steps = [
  {
    step: 1,
    title: "Submit Your Claim",
    description: "Enter any text, link, or claim you want to verify. Our system accepts various formats for quick fact-checking.",
    icon: <Upload className="w-6 h-6 text-blue-600" />,
    features: ["Quick text input", "URL verification", "Paste or type claims"]
  },
  {
    step: 2,
    title: "AI Analysis",
    description: "Our AI instantly analyzes your claim against multiple databases and verified sources using advanced language processing.",
    icon: <Brain className="w-6 h-6 text-purple-600" />,
    features: ["AI processing", "Multi-source validation", "Context analysis"]
  },
  {
    step: 3,
    title: "Source Verification",
    description: "The system cross-references information with government databases, verified news sources, and official announcements.",
    icon: <Database className="w-6 h-6 text-green-600" />,
    features: ["Government sources", "News verification", "Official data"]
  },
  {
    step: 4,
    title: "Get Results",
    description: "Receive a confidence score, verdict, and source list with detailed explanations for the verification decision.",
    icon: <CheckCircle className="w-6 h-6 text-emerald-600" />,
    features: ["Confidence scoring", "Source attribution", "Detailed explanations"]
  }
];

export function HowItWorks() {
  return (
    <div className="space-y-12">
      {/* How It Works Steps */}
      <section>
        <div className="text-center mb-12">
          <h2 className="text-3xl mb-4">How Facts Checker Works</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our AI-powered fact-checking process is designed to be simple, fast, and reliable. 
            Get verified information in seconds.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <Card key={index} className="relative hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold">
                    {step.step}
                  </div>
                  {step.icon}
                </div>

                <h3 className="text-lg mb-3">{step.title}</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {step.description}
                </p>

                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-gray-900">Features:</h4>
                  <ul className="space-y-1">
                    {step.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-xs text-gray-600">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {index === 0 && (
                  <Button size="sm" className="mt-4 w-full bg-blue-600 hover:bg-blue-700">
                    <Search className="w-4 h-4 mr-2" />
                    Try Now
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="bg-gray-50 rounded-2xl p-8">
        <div className="text-center mb-8">
          <h3 className="text-2xl mb-4">Why Trust Our Verification?</h3>
          <p className="text-gray-600">Advanced AI technology with multiple verification layers</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h4 className="mb-2">High Accuracy</h4>
            <p className="text-sm text-gray-600">Verified against multiple authoritative sources</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Brain className="w-8 h-8 text-blue-600" />
            </div>
            <h4 className="mb-2">AI-Powered</h4>
            <p className="text-sm text-gray-600">Advanced machine learning for context understanding</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Database className="w-8 h-8 text-purple-600" />
            </div>
            <h4 className="mb-2">Multi-Source</h4>
            <p className="text-sm text-gray-600">Cross-referenced with official and verified sources</p>
          </div>
        </div>
      </section>
    </div>
  );
}