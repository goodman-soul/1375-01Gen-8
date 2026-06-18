import { reserveZones } from '@/data/mockData';
import { AlertTriangle, MapPin, CheckCircle, XCircle } from 'lucide-react';

const zoneColors = {
  open: {
    bg: 'bg-wetland-500',
    bgLight: 'bg-wetland-50',
    border: 'border-wetland-300',
    text: 'text-wetland-700',
    label: '开放区',
  },
  restricted: {
    bg: 'bg-reed-500',
    bgLight: 'bg-reed-50',
    border: 'border-reed-300',
    text: 'text-reed-700',
    label: '限制区',
  },
  prohibited: {
    bg: 'bg-sunset-600',
    bgLight: 'bg-sunset-50',
    border: 'border-sunset-300',
    text: 'text-sunset-700',
    label: '核心保护区',
  },
};

export default function ReserveMap() {
  return (
    <section id="reserve" className="relative py-20 md:py-28 bg-cream-100">
      <div className="absolute inset-0 reed-pattern opacity-20" />
      
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-16 reveal">
          <span className="inline-block px-4 py-1 bg-reed-100 text-reed-700 rounded-full text-sm font-medium mb-4">
            保护区地图
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-lake-800 mb-4">
            保护区
            <span className="text-sunset-500">区域划分</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            为了保护湿地生态和候鸟栖息地，保护区实行分区管理。
            请您在游览时严格遵守各区域的管理规定。
          </p>
        </div>

        <div className="mb-16 reveal">
          <div className="bg-white rounded-3xl p-6 md:p-10 shadow-xl">
            <h3 className="font-serif text-2xl font-bold text-lake-700 mb-8 text-center">
              保护区示意图
            </h3>
            
            <div className="relative aspect-[16/10] bg-cream-50 rounded-2xl overflow-hidden">
              <svg viewBox="0 0 800 500" className="w-full h-full">
                <defs>
                  <pattern id="waterPattern" patternUnits="userSpaceOnUse" width="20" height="20">
                    <path d="M0 10 Q5 5, 10 10 T20 10" fill="none" stroke="#9dc1de" strokeWidth="1" opacity="0.5" />
                  </pattern>
                  <pattern id="reedPattern" patternUnits="userSpaceOnUse" width="15" height="30">
                    <path d="M7 30 L7 5" stroke="#86bc6e" strokeWidth="2" />
                    <ellipse cx="7" cy="5" rx="3" ry="5" fill="#5ea048" />
                  </pattern>
                </defs>
                
                <rect width="800" height="500" fill="#f5f2eb" />
                
                <ellipse cx="400" cy="250" rx="200" ry="150" fill="#f8c394" fillOpacity="0.3" stroke="#E87722" strokeWidth="2" strokeDasharray="8 4" />
                <text x="400" y="255" textAnchor="middle" fill="#b54816" fontSize="16" fontWeight="bold">核心保护区</text>
                <text x="400" y="275" textAnchor="middle" fill="#b54816" fontSize="12">严禁进入</text>
                
                <path d="M100 100 Q200 50 400 80 Q600 50 700 100 Q750 200 720 350 Q600 450 400 420 Q200 450 80 350 Q50 200 100 100" 
                      fill="#ebd89f" fillOpacity="0.4" stroke="#D4A84B" strokeWidth="2" strokeDasharray="6 3" />
                <text x="180" y="130" fill="#875325" fontSize="14" fontWeight="bold">缓冲区</text>
                <text x="180" y="150" fill="#875325" fontSize="11">限制进入</text>
                
                <rect x="20" y="20" width="760" height="460" rx="20" fill="#d9ead1" fillOpacity="0.3" stroke="#2D5A27" strokeWidth="3" />
                <text x="60" y="55" fill="#264a21" fontSize="14" fontWeight="bold">实验区（开放）</text>
                
                <rect x="550" y="100" width="100" height="60" rx="8" fill="url(#waterPattern)" stroke="#3d7cb5" strokeWidth="1.5" />
                <circle cx="570" cy="120" r="6" fill="#1E3A5F" />
                <text x="580" y="124" fill="#1E3A5F" fontSize="11">观鸟台A</text>
                
                <rect x="80" y="350" width="120" height="70" rx="8" fill="url(#reedPattern)" stroke="#42852f" strokeWidth="1.5" />
                <circle cx="110" cy="375" r="6" fill="#2D5A27" />
                <text x="125" y="379" fill="#2D5A27" fontSize="11">芦苇荡观测站</text>
                
                <rect x="600" y="300" width="100" height="80" rx="8" fill="url(#waterPattern)" stroke="#3d7cb5" strokeWidth="1.5" />
                <circle cx="620" cy="325" r="6" fill="#1E3A5F" />
                <text x="635" y="329" fill="#1E3A5F" fontSize="11">潮间带观测区</text>
                
                <rect x="380" y="380" width="140" height="60" rx="8" fill="#cee1ef" stroke="#3d7cb5" strokeWidth="1.5" />
                <circle cx="400" cy="400" r="6" fill="#1E3A5F" />
                <text x="415" y="404" fill="#1E3A5F" fontSize="11">鹤类观测点</text>
                
                <rect x="50" y="200" width="100" height="50" rx="8" fill="#fce3c9" stroke="#E87722" strokeWidth="1.5" />
                <circle cx="75" cy="220" r="6" fill="#E87722" />
                <text x="90" y="224" fill="#b54816" fontSize="11">祭水广场</text>
                
                <rect x="650" y="180" width="100" height="50" rx="8" fill="#d9ead1" stroke="#42852f" strokeWidth="1.5" />
                <circle cx="675" cy="200" r="6" fill="#2D5A27" />
                <text x="690" y="204" fill="#264a21" fontSize="11">科普馆</text>
                
                <path d="M100 450 L700 450" stroke="#D4A84B" strokeWidth="4" strokeLinecap="round" />
                <path d="M100 450 L200 400 L400 420 L550 380 L700 450" fill="none" stroke="#2D5A27" strokeWidth="2" strokeDasharray="8 4" />
                <text x="400" y="475" textAnchor="middle" fill="#264a21" fontSize="12">湿地探索步道</text>
              </svg>
            </div>
            
            <div className="mt-8 flex flex-wrap justify-center gap-6">
              {Object.entries(zoneColors).map(([key, value]) => (
                <div key={key} className="flex items-center gap-2">
                  <div className={`w-5 h-5 rounded ${value.bg}`} />
                  <span className="text-gray-700 font-medium">{value.label}</span>
                </div>
              ))}
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-lake-600" />
                <span className="text-gray-700 font-medium">观鸟点</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-sunset-500" />
                <span className="text-gray-700 font-medium">活动场地</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reserveZones.map((zone, index) => {
            const colorScheme = zoneColors[zone.type];
            return (
              <div
                key={zone.id}
                className={`reveal ${colorScheme.bgLight} rounded-3xl p-6 md:p-8 border-2 ${colorScheme.border}`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className={`w-14 h-14 ${colorScheme.bg} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                    {zone.type === 'prohibited' ? (
                      <XCircle className="w-7 h-7 text-white" />
                    ) : zone.type === 'restricted' ? (
                      <AlertTriangle className="w-7 h-7 text-white" />
                    ) : (
                      <CheckCircle className="w-7 h-7 text-white" />
                    )}
                  </div>
                  <div>
                    <h3 className={`font-serif text-xl font-bold ${colorScheme.text} mb-1`}>
                      {zone.name}
                    </h3>
                    <span className={`inline-block px-3 py-1 ${colorScheme.bg} text-white rounded-full text-xs font-semibold`}>
                      {colorScheme.label}
                    </span>
                  </div>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {zone.description}
                </p>

                {zone.birdingPoints && zone.birdingPoints.length > 0 && (
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-lake-600" />
                      主要观鸟点
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {zone.birdingPoints.map((point, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-white rounded-full text-sm text-gray-600 border border-gray-200"
                        >
                          {point}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {zone.restrictions && zone.restrictions.length > 0 && (
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 mb-3">
                      管理规定
                    </h4>
                    <ul className="space-y-2">
                      {zone.restrictions.map((restriction, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                          <span className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 ${colorScheme.bg}`} />
                          <span>{restriction}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center reveal">
          <div className="inline-flex items-center gap-3 bg-sunset-50 border-2 border-sunset-300 rounded-2xl px-6 py-4">
            <AlertTriangle className="w-6 h-6 text-sunset-500 flex-shrink-0" />
            <p className="text-sunset-700 text-left">
              <span className="font-semibold">重要提示：</span>
              违反保护区管理规定，将依法追究责任。让我们共同守护这片湿地家园。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
