import { 
  Briefcase, 
  CheckCircle2, 
  Sparkles 
} from "lucide-react";

interface Stats {
  averageIncome: string;
  incomeLabel: string;
  employmentGrowth: string;
  growthLabel: string;
}

interface AttendeeGroup {
  group: string[];
}

interface Company {
  name: string;
  url: string;
}

interface CourseCareerUpliftmentProps {
  courseName: string;
  title?: string;
  subtitle?: string;
  averageIncomeLabel?: string;
  employmentGrowthTitle?: string;
  whoCanAttendTitle?: string;
  companiesTitle?: string;
  stats: Stats;
  attendees: AttendeeGroup[];
  companies: Company[];
  outcomes: string[];
  outcomesTitle: string;
  outcomesFooter: string;
  professionalImage?: string;
}

const CourseCareerUpliftment: React.FC<CourseCareerUpliftmentProps> = ({
  courseName,
  title,
  subtitle,
  averageIncomeLabel = "Average Income",
  employmentGrowthTitle = "Employment growth",
  whoCanAttendTitle = "Who can attend",
  companiesTitle = "Companies",
  stats,
  attendees,
  companies,
  outcomes,
  outcomesTitle,
  outcomesFooter,
  professionalImage = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400"
}) => {
  return (
    <div className="space-y-12 py-10">
      {/* Career Upliftment Header & Stats */}
      <div className="space-y-8">
        <div>
          <h4 className="text-[13px] text-slate-500 font-bold mb-2 uppercase tracking-wide">
            {title || "Career upliftment"}
          </h4>
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#001c3d] flex items-center gap-2">
            {subtitle || `Boost your career with the ${courseName} Certification Training.`} <Sparkles className="w-7 h-7 text-blue-400 fill-blue-400" />
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 border-b border-slate-200 pb-12">
          {/* Stats Grid */}
          <div className="flex flex-wrap gap-8 md:gap-16">
            <div className="space-y-4">
              <p className="text-sm font-bold text-slate-500 text-center">{averageIncomeLabel}</p>
              <div className="text-center">
                <span className="text-2xl font-black text-[#001c3d]">{stats.averageIncome}</span>
                <p className="text-xs font-bold text-slate-500">{stats.incomeLabel}</p>
              </div>
              <div className="flex items-end justify-center gap-1 h-12">
                {[40, 70, 100, 60, 40].map((h, i) => (
                  <div key={i} className="w-3 bg-red-400" style={{ height: `${h}%` }} />
                ))}
              </div>
            </div>

            <div className="w-px h-24 bg-slate-200 hidden md:block" />

            <div className="space-y-4">
              <p className="text-sm font-bold text-slate-500 text-center">{employmentGrowthTitle}</p>
              <div className="text-center">
                <span className="text-2xl font-black text-[#001c3d]">{stats.employmentGrowth}</span>
                <p className="text-xs font-bold text-slate-500">{stats.growthLabel}</p>
              </div>
              <div className="flex justify-center">
                <div className="w-16 h-12 bg-red-100 relative rounded-none flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-red-500" />
                  <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-6 h-2 border-2 border-red-500 border-b-0" />
                </div>
              </div>
            </div>

            <div className="w-px h-24 bg-slate-200 hidden md:block" />

            <div className="space-y-4">
              <p className="text-sm font-bold text-[#1a1a1a] mb-2">{whoCanAttendTitle}</p>
              <div className="flex gap-8">
                {attendees.map((col, i) => (
                  <ul key={i} className="space-y-1">
                    {col.group.map((item, j) => (
                      <li key={j} className="text-sm font-bold text-slate-700 flex items-center gap-2">
                        <span className="w-1 h-1 bg-slate-900 rounded-full" />
                        {item}
                      </li>
                    ))}
                  </ul>
                ))}
              </div>
            </div>
          </div>

          {/* Right Image Placeholder */}
          <div className="flex-1 hidden lg:flex justify-end">
            <div className="relative w-64 h-32 bg-slate-50 rounded-none flex items-center justify-center overflow-hidden">
                <img 
                  src={professionalImage} 
                  alt="Professionals" 
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-50 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>

      {/* Companies Grid */}
      <div className="space-y-6">
        <p className="text-sm font-black text-slate-900 uppercase tracking-tight">{companiesTitle}</p>
        <div className="flex flex-wrap items-center justify-between gap-8 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all">
          {companies.map((company, i) => (
            <img key={i} src={company.url} alt={company.name} className="h-6 md:h-8 object-contain" />
          ))}
        </div>
      </div>

      {/* Outcomes Box */}
      <div className="bg-[#f8fafc] border border-slate-200 rounded-none p-8 md:p-10 relative overflow-hidden">
        {/* Decorative Wave */}
        <div className="absolute bottom-0 right-0 opacity-10 pointer-events-none">
          <svg width="200" height="100" viewBox="0 0 200 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 100C50 50 150 150 200 100V100H0V100Z" fill="#2563eb" />
          </svg>
        </div>

        <div className="relative z-10 space-y-8">
          <h2 className="text-xl md:text-2xl font-black text-[#001c3d]">
            {outcomesTitle}
          </h2>

          <div className="space-y-4">
            {outcomes.map((outcome, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="mt-1 bg-blue-500 rounded-full p-0.5">
                  <CheckCircle2 className="w-3 h-3 text-white" />
                </div>
                <p className="text-[15px] font-medium text-slate-700 leading-snug">
                  {outcome}
                </p>
              </div>
            ))}
          </div>

          <p className="text-[15px] font-medium text-slate-600 leading-relaxed pt-2 border-t border-slate-200">
            {outcomesFooter}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CourseCareerUpliftment;
