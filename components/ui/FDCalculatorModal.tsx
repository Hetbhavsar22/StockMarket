import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { X } from "lucide-react";

interface FDCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function FDCalculatorModal({ isOpen, onClose }: FDCalculatorModalProps) {
  const [principal, setPrincipal] = useState('');
  const [rate, setRate] = useState('');
  const [time, setTime] = useState('');
  const [interestType, setInterestType] = useState<'compound' | 'simple'>('compound');
  const [result, setResult] = useState<string | null>(null);

  const calculateFD = () => {
    const p = parseFloat(principal);
    const r = parseFloat(rate) / 100;
    const t = parseFloat(time);

    if (isNaN(p) || isNaN(r) || isNaN(t)) return;

    let maturity = 0;

    if (interestType === 'compound') {
      // Quarterly compounding assumed: n = 4
      maturity = p * Math.pow((1 + r / 4), 4 * t);
    } else {
      // Simple Interest: SI = P * R * T
      maturity = p + (p * r * t);
    }

    setResult(maturity.toFixed(2));
  };

  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300" leave="ease-in duration-200"
          enterFrom="opacity-0" enterTo="opacity-100"
          leaveFrom="opacity-100" leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300" leave="ease-in duration-200"
            enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100"
            leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel className="relative bg-white rounded-xl shadow-xl max-w-md w-full p-6">
              <button
                onClick={onClose}
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
              >
                <X className="w-5 h-5" />
              </button>
              <Dialog.Title className="text-xl font-semibold mb-4 text-indigo-700">
                FD Calculator
              </Dialog.Title>
              <div className="space-y-4">
                <select
                  value={interestType}
                  onChange={(e) => setInterestType(e.target.value as 'compound' | 'simple')}
                  className="w-full border px-4 py-2 rounded"
                >
                  <option value="compound">Compound Interest</option>
                  <option value="simple">Simple Interest</option>
                </select>

                <input
                  type="number"
                  placeholder="Principal Amount (₹)"
                  className="w-full border px-4 py-2 rounded"
                  value={principal}
                  onChange={(e) => setPrincipal(e.target.value)}
                />
                <input
                  type="number"
                  placeholder="Annual Interest Rate (%)"
                  className="w-full border px-4 py-2 rounded"
                  value={rate}
                  onChange={(e) => setRate(e.target.value)}
                />
                <input
                  type="number"
                  placeholder="Time Period (in years)"
                  className="w-full border px-4 py-2 rounded"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                />

                <button
                  onClick={calculateFD}
                  className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
                >
                  Calculate
                </button>

                {result && (
                  <div className="mt-4 text-green-600 font-medium">
                    Maturity Amount: ₹{result}
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
