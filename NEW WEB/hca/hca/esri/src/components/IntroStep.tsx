import React from 'react';
import { FormData } from './ApplicationForm';
import { Briefcase, Users, Heart, Shield, Award } from 'lucide-react';

interface IntroStepProps {
  formData: FormData;
  onNext: (data: Partial<FormData>) => void;
}

export function IntroStep({ formData, onNext }: IntroStepProps) {
  const [localData, setLocalData] = React.useState({
    firstName: formData.firstName,
    lastName: formData.lastName,
    email: formData.email,
    phoneNumber: formData.phoneNumber,
    location: formData.location,
    interviewCode: formData.interviewCode,
    canHandleDuties: formData.canHandleDuties,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext(localData);
  };

  const isValid =
    localData.firstName &&
    localData.lastName &&
    localData.email &&
    localData.phoneNumber &&
    localData.location &&
    localData.interviewCode &&
    localData.canHandleDuties;

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Welcome Message - Clean Esri Style */}
      <div className="dashboard-panel p-6 border-l-4 border-l-primary-light">
        <div className="max-w-3xl space-y-4">
          <div className="inline-block bg-bg-soft rounded px-3 py-1 mb-2">
            <p className="text-secondary-light text-[10px] font-bold tracking-widest uppercase">Candidate Onboarding</p>
          </div>
          <h2 className="text-primary text-2xl font-display font-bold tracking-tight">
            Welcome & Introduction
          </h2>
          <div className="text-sm leading-relaxed text-secondary-light space-y-4">
            <p>
              "Welcome to <span className="text-secondary font-semibold">Esri</span>. I am <span className="text-secondary font-semibold">Ferguson Leslie Renee</span>, and I will be guiding you through our application and assessment process today."
            </p>
            <p className="italic opacity-90 border-l-2 border-border-subtle pl-4">
              "We use geography to solve the world's most complex problems. Our work is guided by a commitment to excellence and five core values:"
            </p>
          </div>
        </div>
      </div>

      {/* Five Principles - Esri Dashboard Style */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
        {[
          { icon: Users, title: "Client Focus", desc: "Partnership" },
          { icon: Heart, title: "Individuals", desc: "Respect & Empathy" },
          { icon: Users, title: "Teamwork", desc: "Collaboration" },
          { icon: Shield, title: "Integrity", desc: "Honesty & Ethics" },
          { icon: Award, title: "Excellence", desc: "Quality & Precision" },
        ].map((item, idx) => (
          <div key={idx} className="p-4 dashboard-panel hover:border-primary/30 transition-colors group flex flex-col items-start">
            <div className="p-2 rounded bg-bg-soft text-primary group-hover:bg-primary group-hover:text-white transition-colors mb-3">
              <item.icon className="w-4 h-4" />
            </div>
            <h4 className="text-[10px] font-bold text-primary uppercase tracking-wider leading-tight">{item.title}</h4>
            <p className="text-[9px] text-secondary-light mt-1 uppercase tracking-tighter opacity-80">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Job Duties Context */}
      <div className="bg-bg-soft border border-border-subtle p-5 rounded-lg space-y-2">
        <div className="flex items-center gap-2 mb-2">
          <Briefcase className="w-4 h-4 text-primary-light" />
          <p className="text-[11px] text-secondary font-semibold uppercase tracking-widest">
            Key Responsibilities
          </p>
        </div>
        <p className="text-xs text-secondary-light leading-relaxed">
          Financial reporting, account reconciliation, and data analysis. You will be responsible for accurately recording financial data into our accounting systems and using professional software tools for daily tasks.
        </p>
      </div>

      {/* Form Section */}
      <form onSubmit={handleSubmit} className="space-y-6 pt-4 border-t border-border-subtle">
        <h3 className="section-header text-primary border-primary/20">Candidate Identification</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">
          <div className="space-y-1.5">
            <label className="data-label">First Name <span className="text-primary">*</span></label>
            <input
              type="text"
              required
              value={localData.firstName}
              onChange={(e) => setLocalData({ ...localData, firstName: e.target.value })}
              className="esri-input"
              placeholder="First name"
            />
          </div>
          <div className="space-y-1.5">
            <label className="data-label">Last Name <span className="text-primary">*</span></label>
            <input
              type="text"
              required
              value={localData.lastName}
              onChange={(e) => setLocalData({ ...localData, lastName: e.target.value })}
              className="esri-input"
              placeholder="Last name"
            />
          </div>
          <div className="space-y-1.5">
            <label className="data-label">Email Address <span className="text-primary">*</span></label>
            <input
              type="email"
              required
              value={localData.email}
              onChange={(e) => setLocalData({ ...localData, email: e.target.value })}
              className="esri-input"
              placeholder="name@domain.com"
            />
          </div>
          <div className="space-y-1.5">
            <label className="data-label">Phone Number <span className="text-primary">*</span></label>
            <input
              type="tel"
              required
              value={localData.phoneNumber}
              onChange={(e) => setLocalData({ ...localData, phoneNumber: e.target.value })}
              className="esri-input"
              placeholder="(555) 000-0000"
            />
          </div>
          <div className="space-y-1.5">
            <label className="data-label">Location <span className="text-primary">*</span></label>
            <input
              type="text"
              required
              value={localData.location}
              onChange={(e) => setLocalData({ ...localData, location: e.target.value })}
              className="esri-input"
              placeholder="City, State"
            />
          </div>
          <div className="space-y-1.5">
            <label className="data-label">Interview Code <span className="text-primary">*</span></label>
            <input
              type="text"
              required
              value={localData.interviewCode}
              onChange={(e) => setLocalData({ ...localData, interviewCode: e.target.value })}
              className="esri-input font-mono string"
              placeholder="AUTH-XXXX"
            />
          </div>
          <div className="space-y-1.5">
            <label className="data-label">Duties Capability <span className="text-primary">*</span></label>
            <select
              required
              value={localData.canHandleDuties}
              onChange={(e) => setLocalData({ ...localData, canHandleDuties: e.target.value })}
              className="esri-input appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M5%208l5%205%205-5%22%20fill%3D%22none%22%20stroke%3D%22%23696969%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[position:right_1rem_center]"
            >
              <option value="" disabled>Select capability...</option>
              <option value="yes">Yes, capable if trained</option>
              <option value="no">No, not capable</option>
            </select>
          </div>
        </div>

        <div className="pt-6 flex justify-end">
          <button
            type="submit"
            disabled={!isValid}
            className="esri-button w-full md:w-auto"
          >
            Commence Interview
            <Briefcase className="w-4 h-4 ml-1" />
          </button>
        </div>
      </form>
    </div>

  );
}