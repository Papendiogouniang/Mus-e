import { Search, QrCode, Sparkles } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

interface QRScannerProps {
  onScan: (qrCode: string) => void;
}

export function QRScanner({ onScan }: QRScannerProps) {
  const [qrInput, setQrInput] = useState('');
  const { t } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (qrInput.trim()) {
      onScan(qrInput.trim().toUpperCase());
      setQrInput('');
    }
  };

  return (
    <div className="relative bg-gradient-to-br from-amber-900 via-orange-800 to-amber-900 rounded-3xl p-8 shadow-2xl border-4 border-amber-600 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFF' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      <div className="relative">
        <div className="flex items-center justify-center mb-6">
          <div className="relative">
            <div className="absolute -inset-2 bg-amber-500 rounded-full blur-lg opacity-60 animate-pulse" />
            <div className="relative bg-white rounded-2xl p-6 shadow-xl">
              <QrCode className="w-16 h-16 text-amber-900" strokeWidth={2.5} />
            </div>
          </div>
        </div>

        <div className="text-center mb-6">
          <div className="flex items-center justify-center space-x-2 mb-3">
            <Sparkles className="w-5 h-5 text-amber-300" />
            <h2 className="text-3xl font-bold text-white">
              {t({
                fr: 'Scanner un Code QR',
                en: 'Scan a QR Code',
                wo: 'Scanner QR Code'
              })}
            </h2>
            <Sparkles className="w-5 h-5 text-amber-300" />
          </div>

          <p className="text-amber-100 text-lg">
            {t({
              fr: 'Entrez le code affiché près de l\'œuvre',
              en: 'Enter the code displayed near the artwork',
              wo: 'Duggal code bi nekk ci artwork bi'
            })}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-1 border border-amber-400/30">
            <input
              type="text"
              value={qrInput}
              onChange={(e) => setQrInput(e.target.value)}
              placeholder={t({
                fr: 'Ex: ART001',
                en: 'Ex: ART001',
                wo: 'Ex: ART001'
              })}
              className="w-full px-6 py-4 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 text-xl font-semibold text-gray-900 placeholder-gray-400 text-center uppercase"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center justify-center space-x-3 transform hover:scale-105"
          >
            <Search className="w-6 h-6" />
            <span>
              {t({
                fr: 'Rechercher l\'Œuvre',
                en: 'Search Artwork',
                wo: 'Seet Artwork'
              })}
            </span>
          </button>
        </form>

        <div className="mt-6 grid grid-cols-3 gap-3">
          {['ART001', 'ART002', 'ART003'].map((code) => (
            <button
              key={code}
              onClick={() => {
                setQrInput(code);
                onScan(code);
              }}
              className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-4 py-3 rounded-lg font-semibold text-sm transition-all duration-200 border border-amber-400/30 hover:border-amber-400"
            >
              {code}
            </button>
          ))}
        </div>

        <div className="mt-6 text-center">
          <p className="text-amber-200 text-sm">
            {t({
              fr: '💡 Astuce : Les codes QR se trouvent sur les panneaux près des œuvres',
              en: '💡 Tip: QR codes are located on panels near artworks',
              wo: '💡 Astuce: Codes QR dañu nekk ci panneaux yu artwork yi'
            })}
          </p>
        </div>
      </div>
    </div>
  );
}
