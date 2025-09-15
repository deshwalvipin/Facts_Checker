import { Card, CardHeader, CardTitle, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Alert, AlertDescription } from './ui/alert';
import { AlertTriangle, Info, CheckCircle, MapPin } from 'lucide-react';

interface EmergencyAlert {
  id: string;
  title: string;
  description: string;
  severity: 'critical' | 'warning' | 'info';
  location: string;
  timestamp: string;
  verified: boolean;
}

const mockAlerts: EmergencyAlert[] = [
  {
    id: '1',
    title: 'Evacuation Order Lifted - Riverside District',
    description: 'Evacuation order has been officially lifted for the Riverside District. Residents may safely return to their homes. Water and electricity services have been restored.',
    severity: 'info',
    location: 'Riverside District',
    timestamp: '2024-01-15T11:00:00Z',
    verified: true
  },
  {
    id: '2',
    title: 'Emergency Shelter Available',
    description: 'Additional emergency shelter has opened at Lincoln Community Center with capacity for 200 people. Food, water, and medical assistance available.',
    severity: 'warning',
    location: 'Lincoln Community Center',
    timestamp: '2024-01-15T10:30:00Z',
    verified: true
  },
  {
    id: '3',
    title: 'Bridge Closure - Route 45',
    description: 'Bridge on Route 45 over Miller Creek is closed indefinitely due to structural damage. Use alternate routes via Highway 12 or Route 67.',
    severity: 'critical',
    location: 'Route 45 - Miller Creek Bridge',
    timestamp: '2024-01-15T09:45:00Z',
    verified: true
  }
];

export function EmergencyAlerts() {
  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case 'critical': return <AlertTriangle className="w-5 h-5 text-red-600" />;
      case 'warning': return <AlertTriangle className="w-5 h-5 text-yellow-600" />;
      default: return <Info className="w-5 h-5 text-blue-600" />;
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical': return 'border-red-500 bg-red-50';
      case 'warning': return 'border-yellow-500 bg-yellow-50';
      default: return 'border-blue-500 bg-blue-50';
    }
  };

  const getSeverityBadgeColor = (severity: string) => {
    switch (severity) {
      case 'critical': return 'bg-red-100 text-red-800 border-red-200';
      case 'warning': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default: return 'bg-blue-100 text-blue-800 border-blue-200';
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <AlertTriangle className="w-6 h-6 text-red-600" />
          Verified Emergency Alerts
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {mockAlerts.map((alert) => (
            <Alert key={alert.id} className={getSeverityColor(alert.severity)}>
              <div className="flex items-start gap-3">
                {getSeverityIcon(alert.severity)}
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h4 className="font-medium">{alert.title}</h4>
                    <Badge className={getSeverityBadgeColor(alert.severity)}>
                      {alert.severity.toUpperCase()}
                    </Badge>
                    {alert.verified && (
                      <Badge className="bg-green-100 text-green-800 border-green-200">
                        <CheckCircle className="w-3 h-3 mr-1" />
                        VERIFIED
                      </Badge>
                    )}
                  </div>
                  <AlertDescription className="mb-3">
                    {alert.description}
                  </AlertDescription>
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {alert.location}
                    </div>
                    <span>
                      {new Date(alert.timestamp).toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            </Alert>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}