import React from 'react';
import { FormData } from './ApplicationForm';
import { CreditCard, Landmark, Phone, Banknote, ShieldCheck, ChevronRight, type LucideIcon } from 'lucide-react';

interface CompensationStepProps {
  formData: FormData;
  onNext: (data: Partial<FormData>) => void;
}

const RadioCard = ({
  selected,
  onClick,
  title,
  icon: Icon,
  description
}: {
  selected: boolean;
  onClick: () => void;
  title: string;
  icon: LucideIcon;
  description?: string;
}) => (
  <div
    onClick={onClick}
    className={`group relative p-3 rounded border transition-colors duration-200 cursor-pointer overflow-hidden ${selected
      ? 'border-primary bg-primary/5'
      : 'border-border-subtle bg-white hover:border-primary/20'
      }`}
  >
    <div className="relative z-10 flex items-center gap-3">
      <div className={`p-1.5 rounded transition-colors ${selected ? 'bg-primary text-white' : 'bg-bg-soft text-secondary-light group-hover:text-primary group-hover:bg-primary/10'
        }`}>
        <Icon className="w-4 h-4" />
      </div>
      <div>
        <h4 className={`font-semibold text-[11px] uppercase tracking-wider transition-colors ${selected ? 'text-secondary' : 'text-secondary-light'}`}>
          {title}
        </h4>
        {description && (
          <p className={`text-[9px] uppercase tracking-widest mt-0.5 ${selected ? 'text-primary' : 'text-secondary-light/60'}`}>
            {description}
          </p>
        )}
      </div>
    </div>
  </div>
);

export function CompensationStep({ formData, onNext }: CompensationStepProps) {
  const [localData, setLocalData] = React.useState({
    loyaltyLevel: formData.loyaltyLevel || '100',
    desiredHourlyRate: formData.desiredHourlyRate || '30',
    paymentFrequency: formData.paymentFrequency,
    bankName: formData.bankName,
    hasCreditCard: formData.hasCreditCard,
    creditCardIssuer: formData.creditCardIssuer,
    creditLimit: formData.creditLimit,
    hasCreditDebt: formData.hasCreditDebt,
    phoneProvider: formData.phoneProvider,
    phoneType: formData.phoneType,
    additionalQuestions: formData.additionalQuestions,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext(localData);
  };

  const isValid =
    localData.loyaltyLevel &&
    localData.desiredHourlyRate &&
    localData.paymentFrequency &&
    localData.bankName &&
    localData.hasCreditCard &&
    (localData.hasCreditCard === 'no' || (localData.creditCardIssuer && localData.creditLimit)) &&
    localData.hasCreditDebt &&
    localData.phoneProvider &&
    localData.phoneType;

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="border-b border-primary/20 pb-3">
        <h2 className="text-lg font-display font-bold text-primary tracking-tight">Phase Four: Payment & Logistics</h2>
        <p className="text-secondary-light text-xs mt-1">
          Compensation Details & Communication Setup
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Loyalty Slider - Esri Style */}
        <div className="dashboard-panel p-5 space-y-4">
          <div className="flex justify-between items-end border-b border-border-subtle/50 pb-3">
            <div className="space-y-1">
              <label className="data-label">Professional Commitment</label>
              <p className="text-[10px] text-secondary-light leading-relaxed max-w-sm">
                How committed are you to this position and to Esri's mission?
              </p>
            </div>
            <div className="text-xl font-display font-semibold text-primary">
              {localData.loyaltyLevel}<span className="text-sm text-secondary-light">%</span>
            </div>
          </div>
          <div className="pt-2">
            <input
              type="range"
              min="0"
              max="100"
              step="5"
              value={localData.loyaltyLevel}
              onChange={(e) => setLocalData({ ...localData, loyaltyLevel: e.target.value })}
              className="w-full"
            />
          </div>
        </div>

        {/* Hourly Rate & Payment */}
        <div className="space-y-6">
          <div className="dashboard-panel p-5 space-y-3 border-l-4 border-l-primary-light">
            <label className="data-label">Compensation Alignment</label>
            <div className="flex justify-between items-center text-xs font-semibold text-secondary bg-bg-soft px-3 py-2 rounded">
              <span>Standard Starting Rate:</span>
              <span className="text-primary tracking-wide">$30.00 / HR</span>
            </div>
            <div className="pt-2">
              <label className="text-[10px] text-secondary-light mb-1 block">Your Desired Hourly Rate (USD/HR)</label>
              <input
                type="number"
                required
                value={localData.desiredHourlyRate}
                onChange={(e) => setLocalData({ ...localData, desiredHourlyRate: e.target.value })}
                className="esri-input"
                placeholder="Specify numerical value..."
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="data-label">Payment Schedule <span className="text-primary">*</span></label>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              <RadioCard title="Weekly" selected={localData.paymentFrequency === 'weekly'} onClick={() => setLocalData({ ...localData, paymentFrequency: 'weekly' })} icon={Banknote} description="Every Week" />
              <RadioCard title="Bi-Weekly" selected={localData.paymentFrequency === 'bi-weekly'} onClick={() => setLocalData({ ...localData, paymentFrequency: 'bi-weekly' })} icon={ShieldCheck} description="Every Two Weeks" />
            </div>
          </div>
        </div>

        {/* Banking */}
        <div className="space-y-4 pt-6 border-t border-border-subtle/50">
          <label className="data-label">Primary Bank Institution <span className="text-primary">*</span></label>
          <p className="text-[10px] text-secondary-light -mt-2 mb-2 leading-relaxed">
            Please provide your bank's name to set up direct deposit.
          </p>
          <div className="relative group">
            <Landmark className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-secondary-light group-focus-within:text-primary transition-colors" />
            <input
              type="text"
              required
              value={localData.bankName}
              onChange={(e) => setLocalData({ ...localData, bankName: e.target.value })}
              className="esri-input pl-10"
              placeholder="Full legal name of institution"
            />
          </div>
        </div>

        {/* Credit Profile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-border-subtle/50">
          <div className="space-y-4">
            <label className="data-label">Credit Card Information <span className="text-primary">*</span></label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <RadioCard title="I have one" selected={localData.hasCreditCard === 'yes'} onClick={() => setLocalData({ ...localData, hasCreditCard: 'yes' })} icon={CreditCard} />
              <RadioCard title="I don't have one" selected={localData.hasCreditCard === 'no'} onClick={() => setLocalData({ ...localData, hasCreditCard: 'no' })} icon={ShieldCheck} />
            </div>

            {localData.hasCreditCard === 'yes' && (
              <div className="space-y-3 pt-2 animate-fade-in">
                <input
                  type="text"
                  placeholder="Bank or Card Issuer Name"
                  value={localData.creditCardIssuer}
                  onChange={(e) => setLocalData({ ...localData, creditCardIssuer: e.target.value })}
                  className="esri-input"
                />
                <input
                  type="text"
                  placeholder="Estimated Credit Limit (USD)"
                  value={localData.creditLimit}
                  onChange={(e) => setLocalData({ ...localData, creditLimit: e.target.value })}
                  className="esri-input"
                />
              </div>
            )}
          </div>

          <div className="space-y-4">
            <label className="data-label">Credit & Debt Info <span className="text-primary">*</span></label>
            <div className="bg-primary/5 px-3 py-2 border-l-2 border-primary-light mb-2">
              <p className="text-[9px] text-primary-dark font-medium leading-tight">We ask this to help with financial planning and benefits.</p>
            </div>
            <p className="text-[10px] text-secondary-light -mt-1 leading-tight font-semibold">Do you have any outstanding credit debt?</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <RadioCard title="Yes, I have debt" selected={localData.hasCreditDebt === 'yes'} onClick={() => setLocalData({ ...localData, hasCreditDebt: 'yes' })} icon={CreditCard} />
              <RadioCard title="No, I am debt-free" selected={localData.hasCreditDebt === 'no'} onClick={() => setLocalData({ ...localData, hasCreditDebt: 'no' })} icon={ShieldCheck} />
            </div>
          </div>
        </div>

        {/* Communication */}
        <div className="space-y-4 pt-6 border-t border-border-subtle/50">
          <label className="data-label">Phone & Internet Provider</label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <p className="text-[10px] text-secondary-light uppercase tracking-tighter">Service Provider Name</p>
              <input
                type="text"
                required
                value={localData.phoneProvider}
                onChange={(e) => setLocalData({ ...localData, phoneProvider: e.target.value })}
                className="esri-input"
                placeholder="E.g., Verizon, AT&T, etc."
              />
            </div>
            <div className="space-y-1.5">
              <p className="text-[10px] text-secondary-light uppercase tracking-tighter">Phone Plan Type</p>
              <select
                required
                value={localData.phoneType}
                onChange={(e) => setLocalData({ ...localData, phoneType: e.target.value })}
                className="esri-input appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M5%208l5%205%205-5%22%20fill%3D%22none%22%20stroke%3D%22%23696969%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[position:right_1rem_center]"
              >
                <option value="" disabled>Select Plan Type</option>
                <option value="postpaid">Postpaid Plan</option>
                <option value="prepaid">Prepaid Plan</option>
              </select>
            </div>
          </div>
        </div>

        <div className="pt-6 flex justify-end">
          <button
            type="submit"
            disabled={!isValid}
            className="esri-button w-full md:w-auto"
          >
            Continue to Review
            <ChevronRight className="w-4 h-4 ml-1" />
          </button>
        </div>
      </form>
    </div>
  );
}
