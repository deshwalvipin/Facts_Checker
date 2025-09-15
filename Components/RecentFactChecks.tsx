import { Card, CardHeader, CardTitle, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { CheckCircle, XCircle, AlertTriangle, Clock } from 'lucide-react';

interface FactCheck {
  id: string;
  claim: string;
  verdict: 'verified' | 'false' | 'misleading' | 'pending';
  confidence: number;
  timestamp: string;
  category: string;
}

const mockFactChecks: FactCheck[] = [
  {
    id: '1',
    claim: 'Emergency shelters are available at Central High School for flood victims',
    verdict: 'verified',
    confidence: 95,
    timestamp: '2024-01-15T10:30:00Z',
    category: 'Emergency Services'
  },
  {
    id: '2',
    claim: 'Highway 101 is completely closed due to landslides',
    verdict: 'misleading',
    confidence: 78,
    timestamp: '2024-01-15T09:15:00Z',
    category: 'Transportation'
  },
  {
    id: '3',
    claim: 'Red Cross is not accepting donations for disaster relief',
    verdict: 'false',
    confidence: 92,
    timestamp: '2024-01-15T08:45:00Z',
    category: 'Relief Organizations'
  },
  {
    id: '4',
    claim: 'Water treatment plant restored to full capacity',
    verdict: 'verified',
    confidence: 88,
    timestamp: '2024-01-15T07:20:00Z',
    category: 'Infrastructure'
  },
  {
    id: '5',
    claim: 'All hospitals in the affected area are operational',
    verdict: 'pending',
    confidence: 0,
    timestamp: '2024-01-15T06:00:00Z',
    category: 'Healthcare'
  }
];

export function RecentFactChecks() {
  const getVerdictIcon = (verdict: string) => {
    switch (verdict) {
      case 'verified': return <CheckCircle className="w-4 h-4 text-green-600" />;
      case 'false': return <XCircle className="w-4 h-4 text-red-600" />;
      case 'misleading': return <AlertTriangle className="w-4 h-4 text-yellow-600" />;
      default: return <Clock className="w-4 h-4 text-gray-600" />;
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
    <Card>
      <CardHeader>
        <CardTitle>Recent Fact-Checks</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {mockFactChecks.map((factCheck) => (
            <div key={factCheck.id} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    {getVerdictIcon(factCheck.verdict)}
                    <Badge className={getVerdictColor(factCheck.verdict)}>
                      {factCheck.verdict.toUpperCase()}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      {factCheck.category}
                    </Badge>
                  </div>
                  <p className="text-sm mb-2">{factCheck.claim}</p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>
                      {factCheck.confidence > 0 && `${factCheck.confidence}% confidence`}
                    </span>
                    <span>
                      {new Date(factCheck.timestamp).toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}