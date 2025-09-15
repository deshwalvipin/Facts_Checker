import { Card, CardHeader, CardTitle, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Brain, Map, Database, Users, Zap, Globe, Smartphone, Activity, ArrowRight } from 'lucide-react';

const googleServices = [
  {
    name: "Gemini AI",
    description: "Advanced language processing for intelligent claim analysis and context understanding",
    icon: <Brain className="w-8 h-8 text-purple-600" />,
    features: ["Natural language processing", "Context-aware analysis", "Multi-language support"],
    image: "https://images.unsplash.com/photo-1655891709782-15c1303a2a25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwbWFjaGluZSUyMGxlYXJuaW5nfGVufDF8fHx8MTc1Nzg4MzAxM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    badge: "AI Powered",
    color: "from-purple-500 to-purple-700"
  },
  {
    name: "Maps Platform",
    description: "Real-time routing with live road closures, traffic updates, and emergency zone mapping",
    icon: <Map className="w-8 h-8 text-blue-600" />,
    features: ["Live traffic data", "Road closure alerts", "Emergency zone mapping"],
    image: "https://images.unsplash.com/photo-1725393205567-54fc148b8a21?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBwaG9uZSUyMGVtZXJnZW5jeSUyMGFsZXJ0fGVufDF8fHx8MTc1NzkyMTE1NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    badge: "Live Data",
    color: "from-blue-500 to-blue-700"
  },
  {
    name: "Vertex AI",
    description: "Advanced optimization for vehicle routing and resource allocation in disaster zones",
    icon: <Database className="w-8 h-8 text-green-600" />,
    features: ["Resource optimization", "Route planning", "Predictive analytics"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc1Nzg2MjI4Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    badge: "Optimized",
    color: "from-green-500 to-green-700"
  },
  {
    name: "Firebase",
    description: "Real-time coordination platform for volunteers, government agencies, and emergency responders",
    icon: <Users className="w-8 h-8 text-orange-600" />,
    features: ["Real-time sync", "Multi-platform support", "Secure communication"],
    image: "https://images.unsplash.com/photo-1531535807748-218331acbcb4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzU3ODgyODEzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    badge: "Real-time",
    color: "from-orange-500 to-orange-700"
  }
];

export function GoogleServicesShowcase() {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-16 rounded-3xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="bg-blue-100 text-blue-800 border-blue-200 mb-4">
            <Brain className="w-4 h-4 mr-2" />
            Google Cloud & AI Integration
          </Badge>
          <h2 className="text-4xl mb-6">Powered by Google's Advanced Platform</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            TruthGuard leverages Google's most advanced AI and cloud services to deliver 
            reliable fact-checking and emergency coordination at scale.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {googleServices.map((service, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48">
                <ImageWithFallback
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} bg-opacity-80`}>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="flex items-center gap-2 mb-2">
                      {service.icon}
                      <h3 className="text-xl">{service.name}</h3>
                    </div>
                    <Badge className="bg-white/20 text-white border-white/30">
                      {service.badge}
                    </Badge>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <p className="text-gray-600 mb-4">{service.description}</p>
                
                <div className="space-y-2">
                  <h4 className="font-medium text-gray-900">Key Capabilities:</h4>
                  <ul className="space-y-1">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-600">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Integration Benefits */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl text-center mb-8">Why Google Integration Matters</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="mb-2">Lightning Fast</h4>
              <p className="text-sm text-gray-600">
                Google's global infrastructure ensures &lt; 30s response times worldwide
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="mb-2">Always Available</h4>
              <p className="text-sm text-gray-600">
                99.9% uptime backed by Google's enterprise-grade reliability
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Activity className="w-8 h-8 text-purple-600" />
              </div>
              <h4 className="mb-2">Constantly Learning</h4>
              <p className="text-sm text-gray-600">
                AI models continuously improve from global data and user feedback
              </p>
            </div>
          </div>

          <div className="text-center mt-8">
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              Experience the Platform
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}