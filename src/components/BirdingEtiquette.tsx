import { etiquetteItems, equipmentItems } from '@/data/mockData';
import { VolumeX, Eye, Ban, Trash2, CameraOff, Footprints, Check, AlertCircle } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  'volume-x': VolumeX,
  'eye': Eye,
  'ban': Ban,
  'trash-2': Trash2,
  'camera-off': CameraOff,
  'footprints': Footprints,
};

export default function BirdingEtiquette() {
  return (
    <section id="etiquette" className="relative py-20 md:py-28 bg-wetland-600 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-wetland-700 via-wetland-600 to-lake-800" />
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-wetland-800/50 to-transparent" />
      </div>
      
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
            <circle cx="5" cy="5" r="1" fill="white" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-16 reveal">
          <span className="inline-block px-4 py-1 bg-wetland-500/50 text-white rounded-full text-sm font-medium mb-4">
            观鸟礼仪
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-white mb-4">
            做一名
            <span className="text-reed-300">负责任</span>
            的观鸟者
          </h2>
          <p className="text-wetland-100/80 max-w-2xl mx-auto">
            观鸟是一种亲近自然的活动，更需要我们对自然怀有敬畏之心。
            遵循以下准则，让我们的爱好不会对鸟类造成干扰。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {etiquetteItems.map((item, index) => {
            const IconComponent = iconMap[item.icon];
            return (
              <div
                key={item.id}
                className="reveal bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 bg-sunset-500 rounded-xl flex items-center justify-center mb-4">
                  {IconComponent && <IconComponent className="w-7 h-7 text-white" />}
                </div>
                <h3 className="font-serif text-xl font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-wetland-100/80 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="reveal">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 md:p-10 border border-white/20">
            <h3 className="font-serif text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <AlertCircle className="w-7 h-7 text-reed-300" />
              装备建议清单
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {equipmentItems.map((item, index) => (
                <div
                  key={item.id}
                  className={`p-4 rounded-xl ${
                    item.recommended
                      ? 'bg-sunset-500/20 border border-sunset-400/30'
                      : 'bg-white/5 border border-white/10'
                  }`}
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="flex items-start gap-3">
                    {item.recommended ? (
                      <Check className="w-5 h-5 text-sunset-400 flex-shrink-0 mt-0.5" />
                    ) : (
                      <div className="w-5 h-5 rounded-full border-2 border-white/30 flex-shrink-0 mt-0.5" />
                    )}
                    <div>
                      <h4 className="font-semibold text-white text-sm mb-1">
                        {item.name}
                      </h4>
                      <p className="text-wetland-100/60 text-xs">
                        {item.description}
                      </p>
                      {item.recommended && (
                        <span className="inline-block mt-2 px-2 py-0.5 bg-sunset-500/30 text-sunset-200 text-xs rounded-full">
                          推荐
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
