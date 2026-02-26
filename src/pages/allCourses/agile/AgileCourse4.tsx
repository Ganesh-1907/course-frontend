import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const AgileCourse4 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-primary">
              Agile Course 4: Kanban Fundamentals
            </CardTitle>
            <CardDescription className="text-lg">
              Master the Kanban method for workflow optimization
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Course Overview</h3>
              <p className="text-gray-700">
                Dive into Kanban methodology and learn how to visualize work, 
                limit work in progress, and optimize flow for continuous delivery.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">What You'll Learn</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Kanban principles and practices</li>
                <li>Designing effective Kanban boards</li>
                <li>Managing WIP limits</li>
                <li>Metrics: Lead time, cycle time, throughput</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600">
                <strong>Duration:</strong> 12 hours | <strong>Level:</strong> Beginner
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AgileCourse4;
