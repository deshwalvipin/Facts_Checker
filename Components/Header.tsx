import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { Search, CheckCircle, Menu, X, Bell, BarChart3 } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement search functionality
    console.log('Searching for:', searchQuery);
  };

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Brand */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <CheckCircle className="w-8 h-8 text-blue-600" />
              <Search className="w-4 h-4 text-green-600 absolute -top-1 -right-1 bg-white rounded-full p-0.5" />
            </div>
            <div>
              <h1 className="text-xl font-semibold text-gray-900">Facts Checker</h1>
              <p className="text-xs text-gray-500">
                AI-Powered Fact Verification
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <a href="#verify" className="text-gray-700 hover:text-blue-600 transition-colors flex items-center gap-1">
              <Search className="w-4 h-4" />
              Verify Claims
            </a>
            <a href="#alerts" className="text-gray-700 hover:text-blue-600 transition-colors flex items-center gap-1">
              <Bell className="w-4 h-4" />
              Alerts
            </a>
            <a href="#analytics" className="text-gray-700 hover:text-blue-600 transition-colors flex items-center gap-1">
              <BarChart3 className="w-4 h-4" />
              Analytics
            </a>
          </nav>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="hidden lg:flex items-center gap-2">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                type="text"
                placeholder="Search verified claims..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 w-64"
              />
            </div>
          </form>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm" className="hidden sm:flex">
              <Bell className="w-4 h-4 mr-2" />
              Alerts
              <Badge className="ml-2 bg-red-100 text-red-800">3</Badge>
            </Button>
            
            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <nav className="flex flex-col gap-4">
              <form onSubmit={handleSearch} className="flex items-center gap-2 mb-4">
                <div className="relative flex-1">
                  <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <Input
                    type="text"
                    placeholder="Search verified claims..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </form>
              
              <a href="#verify" className="text-gray-700 hover:text-blue-600 transition-colors">
                Verify Claims
              </a>
              <a href="#alerts" className="text-gray-700 hover:text-blue-600 transition-colors">
                Alerts
              </a>
              <a href="#analytics" className="text-gray-700 hover:text-blue-600 transition-colors">
                Analytics
              </a>
              
              <Button variant="outline" size="sm" className="self-start">
                <Bell className="w-4 h-4 mr-2" />
                Emergency Alerts
                <Badge className="ml-2 bg-red-100 text-red-800">3</Badge>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}