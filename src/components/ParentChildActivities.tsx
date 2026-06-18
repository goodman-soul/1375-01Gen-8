import { parentActivities } from '@/data/mockData';
import { Binoculars, Sprout, Home, MapPin, Clock, Users, Sparkles } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  'binoculars': Binoculars,
  'sprout': Sprout,
  'home': Home,
  'map-pin': MapPin,
};

export default function ParentChildActivities() {
  return (
    <section id="activities" className="relative py-20 md:py-28 bg-gradient-to-b from-cream-100 to-wetland-50 overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-sunset-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-wetland-200/30 rounded-full blur-3xl" />
      
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-16 reveal">
          <span className="inline-block px-4 py-1 bg-sunset-100 text-sunset-700 rounded-full text-sm font-medium mb-4">
            亲子活动
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-lake-800 mb-4">
            与孩子一起
            <span className="text-wetland-600">探索自然</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            丰富多彩的亲子活动，让孩子们在玩乐中学习鸟类知识，
            从小培养对自然的热爱和环保意识。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {parentActivities.map((activity, index) => {
            const IconComponent = iconMap[activity.icon];
            return (
              <div
                key={activity.id}
                className="reveal group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={`https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=${encodeURIComponent(activity.title + '%2C%20children%20learning%20about%20birds%20in%20wetland%2C%20happy%20family%20activity%2C%20nature%20education%2C%20bright%20colors')}&image_size=landscape_4_3`}
                    alt={activity.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-lake-700 flex items-center gap-1">
                      <Users className="w-3 h-3" />
                      {activity.ageRange}
                    </span>
                    <span className="px-3 py-1 bg-sunset-500/90 backdrop-blur-sm rounded-full text-xs font-semibold text-white flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {activity.duration}
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg">
                        {IconComponent && <IconComponent className="w-6 h-6 text-wetland-600" />}
                      </div>
                      <h3 className="font-serif text-2xl font-bold text-white">
                        {activity.title}
                      </h3>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {activity.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-lake-700 mb-3 flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-sunset-500" />
                      活动亮点
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {activity.highlights.map((highlight, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1.5 bg-wetland-50 text-wetland-700 rounded-lg text-sm border border-wetland-200"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button className="w-full py-3 bg-gradient-to-r from-wetland-500 to-lake-500 text-white font-semibold rounded-xl hover:from-wetland-600 hover:to-lake-600 transition-all duration-300 hover:shadow-lg">
                    立即报名参加
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center reveal">
          <div className="inline-flex items-center gap-3 bg-white rounded-2xl px-6 py-4 shadow-lg">
            <div className="w-12 h-12 bg-sunset-100 rounded-full flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-sunset-500" />
            </div>
            <div className="text-left">
              <p className="font-semibold text-lake-700">温馨提示</p>
              <p className="text-sm text-gray-500">
                所有亲子活动需提前预约，建议家长陪同孩子共同参与
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
