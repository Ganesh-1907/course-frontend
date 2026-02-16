import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const AgileCourse5 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-primary">
              Agile Course 5: SAFe for Teams
            </CardTitle>
            <CardDescription className="text-lg">
              Scale agile practices across your enterprise
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Course Overview</h3>
              <p className="text-gray-700">
                Learn the Scaled Agile Framework (SAFe) to implement agile at scale, 
                coordinate multiple teams, and deliver value across large organizations.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">What You'll Learn</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>SAFe principles and core values</li>
                <li>Program Increment (PI) Planning</li>
                <li>Agile Release Train (ART) operations</li>
                <li>Coordinating dependencies across teams</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600">
                <strong>Duration:</strong> 32 hours | <strong>Level:</strong> Advanced
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AgileCourse5;
