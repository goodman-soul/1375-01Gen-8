import type { Bird } from '@/types';
import { Clock, MapPin, Ruler, Scale } from 'lucide-react';

interface BirdCardProps {
  bird: Bird;
  index: number;
}

export default function BirdCard({ bird, index }: BirdCardProps) {
  return (
    <div
      className="reveal group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={bird.image}
          alt={bird.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <p className="text-white/90 text-sm font-medium">{bird.scientificName}</p>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="font-serif text-2xl font-bold text-lake-700">{bird.name}</h3>
          <span className="text-sm text-cream-400 italic">{bird.scientificName}</span>
        </div>

        <h4 className="text-sm font-semibold text-wetland-600 mb-2 flex items-center gap-1">
          <span className="w-2 h-2 bg-wetland-500 rounded-full" />
          识别特征
        </h4>
        <ul className="space-y-1 mb-4">
          {bird.features.slice(0, 3).map((feature, idx) => (
            <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
              <span className="text-wetland-500 mt-1">•</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <div className="grid grid-cols-2 gap-3 pt-4 border-t border-cream-200">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <MapPin className="w-4 h-4 text-wetland-500 flex-shrink-0" />
            <span className="truncate">{bird.habitat}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Clock className="w-4 h-4 text-sunset-500 flex-shrink-0" />
            <span>最佳时段</span>
          </div>
          {bird.wingspan && (
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Ruler className="w-4 h-4 text-lake-500 flex-shrink-0" />
              <span>翼展 {bird.wingspan}</span>
            </div>
          )}
          {bird.weight && (
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Scale className="w-4 h-4 text-reed-500 flex-shrink-0" />
              <span>体重 {bird.weight}</span>
            </div>
          )}
        </div>

        <div className="mt-4 p-3 bg-wetland-50 rounded-xl">
          <p className="text-sm text-wetland-700">
            <span className="font-medium">最佳观测：</span>
            {bird.bestTime}
          </p>
        </div>
      </div>
    </div>
  );
}
