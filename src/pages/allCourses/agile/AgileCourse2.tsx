import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const AgileCourse2 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-primary">
              Agile Course 2: Advanced Scrum Master
            </CardTitle>
            <CardDescription className="text-lg">
              Elevate your Scrum Master skills to the next level
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Course Overview</h3>
              <p className="text-gray-700">
                Advanced techniques for experienced Scrum Masters focusing on 
                team dynamics, conflict resolution, and organizational change.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">What You'll Learn</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Advanced facilitation techniques</li>
                <li>Coaching teams to high performance</li>
                <li>Removing organizational impediments</li>
                <li>Scaling Scrum across multiple teams</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600">
                <strong>Duration:</strong> 24 hours | <strong>Level:</strong> Advanced
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AgileCourse2;
