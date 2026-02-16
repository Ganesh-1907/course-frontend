import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const AgileCourse1 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-primary">
              Agile Course 1: Introduction to Scrum
            </CardTitle>
            <CardDescription className="text-lg">
              Master the fundamentals of Scrum methodology
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Course Overview</h3>
              <p className="text-gray-700">
                This comprehensive course introduces you to the Scrum framework, 
                covering roles, events, and artifacts essential for successful 
                agile project management.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">What You'll Learn</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Scrum roles: Product Owner, Scrum Master, Development Team</li>
                <li>Scrum events: Sprint Planning, Daily Scrum, Sprint Review, Retrospective</li>
                <li>Scrum artifacts: Product Backlog, Sprint Backlog, Increment</li>
                <li>Implementing Scrum in real-world projects</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600">
                <strong>Duration:</strong> 16 hours | <strong>Level:</strong> Beginner
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AgileCourse1;
