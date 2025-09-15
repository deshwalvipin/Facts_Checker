import { Card, CardHeader, CardTitle, CardContent } from './ui/card';
import { Progress } from './ui/progress';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { TrendingUp, Activity, CheckCircle, AlertTriangle, XCircle, BarChart3 } from 'lucide-react';

const weeklyData = [
  { day: 'Mon', verified: 85, false: 12, misleading: 8 },
  { day: 'Tue', verified: 92, false: 6, misleading: 4 },
  { day: 'Wed', verified: 78, false: 18, misleading: 9 },
  { day: 'Thu', verified: 94, false: 4, misleading: 7 },
  { day: 'Fri', verified: 88, false: 9, misleading: 6 },
  { day: 'Sat', verified: 91, false: 7, misleading: 5 },
  { day: 'Sun', verified: 89, false: 8, misleading: 6 }
];

export function VisualizationDashboard() {
  return (
    <div className="space-y-8">
      {/* Real-time Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-700 text-sm mb-1">Claims Verified</p>
                <p className="text-2xl text-green-900">1,247</p>
                <div className="flex items-center gap-1 text-sm text-green-600 mt-2">
                  <TrendingUp className="w-4 h-4" />
                  <span>+12% this week</span>
                </div>
              </div>
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-700 text-sm mb-1">AI Accuracy</p>
                <p className="text-2xl text-blue-900">94.2%</p>
                <Progress value={94.2} className="mt-2" />
              </div>
              <Activity className="w-8 h-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-yellow-50 to-yellow-100 border-yellow-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-yellow-700 text-sm mb-1">Under Review</p>
                <p className="text-2xl text-yellow-900">23</p>
                <div className="flex items-center gap-1 text-sm text-yellow-600 mt-2">
                  <Activity className="w-4 h-4" />
                  <span>Active now</span>
                </div>
              </div>
              <AlertTriangle className="w-8 h-8 text-yellow-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-red-50 to-red-100 border-red-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-red-700 text-sm mb-1">False Claims</p>
                <p className="text-2xl text-red-900">156</p>
                <div className="flex items-center gap-1 text-sm text-red-600 mt-2">
                  <XCircle className="w-4 h-4" />
                  <span>Flagged this month</span>
                </div>
              </div>
              <XCircle className="w-8 h-8 text-red-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Weekly Trends Chart */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-blue-600" />
            Weekly Verification Trends
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={weeklyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="verified" fill="#10B981" name="Verified" />
              <Bar dataKey="false" fill="#EF4444" name="False" />
              <Bar dataKey="misleading" fill="#F59E0B" name="Misleading" />
            </BarChart>
          </ResponsiveContainer>
          <div className="flex justify-center gap-6 mt-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded"></div>
              <span className="text-sm">Verified</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-red-500 rounded"></div>
              <span className="text-sm">False</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-yellow-500 rounded"></div>
              <span className="text-sm">Misleading</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* System Status */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Activity className="w-5 h-5 text-emerald-600" />
            System Performance
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <div className="flex justify-between text-sm mb-2">
              <span>Processing Speed</span>
              <span>96%</span>
            </div>
            <Progress value={96} className="h-2" />
          </div>
          
          <div>
            <div className="flex justify-between text-sm mb-2">
              <span>Source Validation</span>
              <span>94%</span>
            </div>
            <Progress value={94} className="h-2" />
          </div>
          
          <div>
            <div className="flex justify-between text-sm mb-2">
              <span>Context Understanding</span>
              <span>92%</span>
            </div>
            <Progress value={92} className="h-2" />
          </div>

          <div className="bg-emerald-50 p-3 rounded-lg mt-4">
            <p className="text-sm text-emerald-700">
              <strong>System Status:</strong> All systems operational - Average response time: 1.2 seconds
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}