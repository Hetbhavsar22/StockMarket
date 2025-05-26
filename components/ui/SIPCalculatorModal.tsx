import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { X } from "lucide-react";

interface SIPCalculatorProps {
  open: boolean;
  onClose: () => void;
}

export default function SIPCalculator({ open, onClose }: SIPCalculatorProps) {
  const [monthlyInvestment, setMonthlyInvestment] = useState(5000);
  const [years, setYears] = useState(10);
  const [annualReturn, setAnnualReturn] = useState(12);
  const [calculated, setCalculated] = useState(false);
  const [maturityValue, setMaturityValue] = useState(0);
  const [totalInvested, setTotalInvested] = useState(0);
  const [estimatedReturns, setEstimatedReturns] = useState(0);

  const handleCalculate = () => {
    const r = annualReturn / 12 / 100;
    const n = years * 12;
    const P = monthlyInvestment;

    const fv = P * (((Math.pow(1 + r, n) - 1) * (1 + r)) / r);
    const invested = P * n;
    const returns = fv - invested;

    setMaturityValue(fv);
    setTotalInvested(invested);
    setEstimatedReturns(returns);
    setCalculated(true);
  };

  return (
    <Transition show={open} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          leave="ease-in duration-200"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            leave="ease-in duration-200"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel className="relative bg-white rounded-xl shadow-xl max-w-2xl w-full p-6">
              <button
                onClick={onClose}
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
              >
                <X className="w-5 h-5" />
              </button>
              <Dialog.Title className="text-xl font-semibold mb-4 text-indigo-700">
                SIP Calculator
              </Dialog.Title>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <label className="block font-medium text-gray-700 mb-1">
                      Monthly SIP Amount (₹)
                    </label>
                    <input
                      type="number"
                      value={monthlyInvestment}
                      onChange={(e) => setMonthlyInvestment(Number(e.target.value))}
                      className="w-full border px-4 py-2 rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block font-medium text-gray-700 mb-1">
                      Investment Period (Years)
                    </label>
                    <input
                      type="number"
                      value={years}
                      onChange={(e) => setYears(Number(e.target.value))}
                      className="w-full border px-4 py-2 rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block font-medium text-gray-700 mb-1">
                      Expected Annual Return (%)
                    </label>
                    <input
                      type="number"
                      value={annualReturn}
                      onChange={(e) => setAnnualReturn(Number(e.target.value))}
                      className="w-full border px-4 py-2 rounded-lg"
                    />
                  </div>
                  <button
                    className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition w-full"
                    onClick={handleCalculate}
                  >
                    Calculate
                  </button>
                </div>

                {calculated && (
                  <div className="bg-blue-50 rounded-lg p-4 text-center">
                    <h3 className="text-xl font-bold text-blue-800 mb-2">Estimated Value</h3>
                    <p className="text-3xl font-bold text-blue-900">₹ {maturityValue.toFixed(0)}</p>
                    <p className="text-gray-600 mt-2">Based on your SIP details</p>
                    <div className="mt-4 grid grid-cols-2 gap-4 text-sm text-gray-700">
                      <div>
                        <div className="font-medium">Invested</div>
                        <div className="text-blue-700">₹ {totalInvested.toFixed(0)}</div>
                      </div>
                      <div>
                        <div className="font-medium">Returns</div>
                        <div className="text-green-600">₹ {estimatedReturns.toFixed(0)}</div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}
