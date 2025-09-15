import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Search, AlertTriangle, CheckCircle, XCircle, Clock, Brain, Loader2, Sparkles } from 'lucide-react';

interface FactCheckResult {
  id: string;
  claim: string;
  verdict: 'verified' | 'false' | 'misleading' | 'pending';
  confidence: number;
  sources: string[];
  summary: string;
  timestamp: string;
}

export function FactCheckForm() {
  const [claim, setClaim] = useState('');
  const [isChecking, setIsChecking] = useState(false);
  const [result, setResult] = useState<FactCheckResult | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!claim.trim()) return;

    setIsChecking(true);
    
    // Simulate AI fact-checking process
    setTimeout(() => {
      const mockResult: FactCheckResult = {
        id: Date.now().toString(),
        claim: claim,
        verdict: Math.random() > 0.7 ? 'verified' : Math.random() > 0.5 ? 'false' : 'misleading',
        confidence: Math.floor(Math.random() * 30) + 70,
        sources: [
          'Reuters.com',
          'Associated Press',
          'WHO Official Reports',
          'Government Emergency Services'
        ],
        summary: `Our AI analysis has cross-referenced this claim against verified news sources, official government reports, and real-time emergency data. The claim has been ${Math.random() > 0.5 ? 'verified' : 'identified as misleading'} based on multiple credible sources.`,
        timestamp: new Date().toISOString()
      };
      
      setResult(mockResult);
      setIsChecking(false);
    }, 2000);
  };

  const getVerdictIcon = (verdict: string) => {
    switch (verdict) {
      case 'verified': return <CheckCircle className="w-5 h-5 text-green-600" />;
      case 'false': return <XCircle className="w-5 h-5 text-red-600" />;
      case 'misleading': return <AlertTriangle className="w-5 h-5 text-yellow-600" />;
      default: return <Clock className="w-5 h-5 text-gray-600" />;
    }
  };

  const getVerdictColor = (verdict: string) => {
    switch (verdict) {
      case 'verified': return 'bg-green-100 text-green-800 border-green-200';
      case 'false': return 'bg-red-100 text-red-800 border-red-200';
      case 'misleading': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="relative">
              <Search className="w-6 h-6 text-blue-600" />
              <Brain className="w-3 h-3 text-purple-600 absolute -top-1 -right-1" />
            </div>
            Submit Claim for AI Fact-Checking
          </CardTitle>
          <p className="text-sm text-gray-600 flex items-center gap-1 mt-2">
            <Sparkles className="w-4 h-4 text-yellow-500" />
            AI-powered verification with multi-source validation
          </p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="claim" className="block mb-2">
                Enter the claim you want to verify:
              </label>
              <Textarea
                id="claim"
                value={claim}
                onChange={(e) => setClaim(e.target.value)}
                placeholder="e.g., 'Emergency shelters are available at Central High School for flood victims'"
                className="min-h-[100px]"
                required
              />
            </div>
            <Button 
              type="submit" 
              disabled={isChecking || !claim.trim()}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >
              {isChecking ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Analyzing with AI...
                </>
              ) : (
                <>
                  <Brain className="w-4 h-4 mr-2" />
                  Verify with AI
                </>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>

      {result && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span className="flex items-center gap-2">
                {getVerdictIcon(result.verdict)}
                Fact-Check Result
              </span>
              <Badge className={getVerdictColor(result.verdict)}>
                {result.verdict.toUpperCase()}
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4>Claim:</h4>
              <p className="bg-gray-50 p-3 rounded-lg border">"{result.claim}"</p>
            </div>
            
            <div className="flex items-center gap-4">
              <div>
                <span className="text-sm text-gray-600">Confidence Score:</span>
                <div className="flex items-center gap-2">
                  <div className="w-24 h-2 bg-gray-200 rounded-full">
                    <div 
                      className="h-full bg-blue-600 rounded-full" 
                      style={{ width: `${result.confidence}%` }}
                    />
                  </div>
                  <span>{result.confidence}%</span>
                </div>
              </div>
            </div>

            <div>
              <h4>Analysis Summary:</h4>
              <p className="text-gray-700">{result.summary}</p>
            </div>

            <div>
              <h4>Verified Sources:</h4>
              <div className="flex flex-wrap gap-2">
                {result.sources.map((source, index) => (
                  <Badge key={index} variant="outline">
                    {source}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="text-sm text-gray-500">
              Verified on {new Date(result.timestamp).toLocaleString()}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}