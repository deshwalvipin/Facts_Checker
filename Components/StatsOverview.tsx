import { Card, CardHeader, CardTitle, CardContent } from './ui/card';
import { CheckCircle, XCircle, AlertTriangle, Clock, TrendingUp, Users, Database } from 'lucide-react';

interface Stat {
  label: string;
  value: string;
  change: string;
  trend: 'up' | 'down' | 'stable';
  icon: React.ReactNode;
}

const stats: Stat[] = [
  {
    label: 'Claims Verified Today',
    value: '247',
    change: '+12%',
    trend: 'up',
    icon: <CheckCircle className="w-6 h-6 text-green-600" />
  },
  {
    label: 'False Claims Detected',
    value: '89',
    change: '-8%',
    trend: 'down',
    icon: <XCircle className="w-6 h-6 text-red-600" />
  },
  {
    label: 'Pending Reviews',
    value: '23',
    change: '+3%',
    trend: 'up',
    icon: <Clock className="w-6 h-6 text-yellow-600" />
  },
  {
    label: 'Active Users',
    value: '1,432',
    change: '+24%',
    trend: 'up',
    icon: <Users className="w-6 h-6 text-blue-600" />
  },
  {
    label: 'Emergency Alerts',
    value: '7',
    change: 'stable',
    trend: 'stable',
    icon: <AlertTriangle className="w-6 h-6 text-orange-600" />
  },
  {
    label: 'Data Sources',
    value: '156',
    change: '+5%',
    trend: 'up',
    icon: <Database className="w-6 h-6 text-purple-600" />
  }
];

export function StatsOverview() {
  const getTrendColor = (trend: string) => {
    switch (trend) {
      case 'up': return 'text-green-600';
      case 'down': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  const getTrendIcon = (trend: string) => {
    if (trend === 'up') return <TrendingUp className="w-4 h-4" />;
    if (trend === 'down') return <TrendingUp className="w-4 h-4 rotate-180" />;
    return <div className="w-4 h-4 bg-gray-400 rounded-full" />;
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {stats.map((stat, index) => (
        <Card key={index}>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                <p className="text-2xl font-semibold">{stat.value}</p>
                <div className={`flex items-center gap-1 text-sm ${getTrendColor(stat.trend)}`}>
                  {getTrendIcon(stat.trend)}
                  <span>{stat.change}</span>
                </div>
              </div>
              <div className="flex-shrink-0">
                {stat.icon}
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}