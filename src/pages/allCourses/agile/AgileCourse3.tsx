import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const AgileCourse3 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-primary">
              Agile Course 3: Product Owner Mastery
            </CardTitle>
            <CardDescription className="text-lg">
              Learn to maximize product value with agile
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Course Overview</h3>
              <p className="text-gray-700">
                Comprehensive training for Product Owners covering backlog management, 
                stakeholder engagement, and value-driven delivery.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">What You'll Learn</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Product vision and roadmap creation</li>
                <li>Effective backlog refinement techniques</li>
                <li>User story writing and acceptance criteria</li>
                <li>Stakeholder management and communication</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600">
                <strong>Duration:</strong> 20 hours | <strong>Level:</strong> Intermediate
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AgileCourse3;
