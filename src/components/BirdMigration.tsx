import { birds, migrationRoute } from '@/data/mockData';
import BirdCard from './BirdCard';
import { ArrowRight, Globe } from 'lucide-react';

export default function BirdMigration() {
  return (
    <section id="migration" className="relative py-20 md:py-28 bg-cream-100">
      <div className="absolute inset-0 reed-pattern opacity-30" />
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-16 reveal">
          <span className="inline-block px-4 py-1 bg-wetland-100 text-wetland-700 rounded-full text-sm font-medium mb-4">
            候鸟迁徙
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-lake-800 mb-4">
            百万候鸟的
            <span className="text-wetland-600">生命之旅</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            每年春秋两季，数百万只候鸟沿着古老的迁徙路线，
            飞越数千公里，来到这片湿地越冬栖息。
            这里是它们重要的停歇补给站，也是我们观察它们的最佳地点。
          </p>
        </div>

        <div className="mb-16 reveal">
          <div className="bg-white rounded-3xl p-6 md:p-10 shadow-xl">
            <div className="flex items-center gap-3 mb-8">
              <Globe className="w-8 h-8 text-lake-600" />
              <h3 className="font-serif text-2xl font-bold text-lake-700">
                候鸟迁徙路线
              </h3>
            </div>
            
            <div className="relative">
              <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-wetland-300 via-sunset-300 to-lake-300 rounded-full" style={{ transform: 'translateY(-50%)' }} />
              
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {migrationRoute.map((stop, index) => (
                  <div key={index} className="relative">
                    <div className="bg-cream-50 rounded-2xl p-4 text-center relative z-10 h-full">
                      <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-wetland-400 to-lake-500 rounded-full flex items-center justify-center text-white font-bold">
                        {index + 1}
                      </div>
                      <h4 className="font-semibold text-lake-700 mb-1">{stop.name}</h4>
                      <p className="text-sm text-sunset-600 font-medium mb-1">{stop.month}</p>
                      <p className="text-xs text-gray-500">{stop.description}</p>
                    </div>
                    {index < migrationRoute.length - 1 && (
                      <div className="hidden md:flex absolute top-1/2 -right-2 z-20" style={{ transform: 'translateY(-50%)' }}>
                        <ArrowRight className="w-4 h-4 text-sunset-500" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
          </div>

        <h3 className="font-serif text-2xl md:text-3xl font-bold text-lake-700 text-center mb-12 reveal">
          常见候鸟图鉴
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {birds.map((bird, index) => (
            <BirdCard key={bird.id} bird={bird} index={index} />
          ))}
        </div>

        <div className="mt-12 text-center reveal">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-lake-50 border border-lake-200 rounded-xl">
            <p className="text-lake-700">
              <span className="font-semibold">温馨提示：</span>
              观鸟时请保持距离，使用望远镜观察，切勿惊扰鸟类
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
