import { useState } from 'react';
import { scheduleData } from '@/data/mockData';
import { Clock, MapPin, Waves, Star, ChevronDown, ChevronUp } from 'lucide-react';
import type { Activity } from '@/types';

const tideColors = {
  high: { bg: 'bg-lake-100', text: 'text-lake-700', label: '高潮' },
  medium: { bg: 'bg-reed-100', text: 'text-reed-700', label: '中潮' },
  low: { bg: 'bg-sunset-100', text: 'text-sunset-700', label: '低潮' },
};

export default function Schedule() {
  const [activeDay, setActiveDay] = useState(0);
  const [expandedActivity, setExpandedActivity] = useState<string | null>(null);

  const toggleActivity = (id: string) => {
    setExpandedActivity(expandedActivity === id ? null : id);
  };

  const currentSchedule = scheduleData[activeDay];

  return (
    <section id="schedule" className="relative py-20 md:py-28 bg-lake-700 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>
      
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-12 reveal">
          <span className="inline-block px-4 py-1 bg-white/20 text-white rounded-full text-sm font-medium mb-4">
            活动时间表
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-white mb-4">
            精彩活动
            <span className="text-reed-300">日程安排</span>
          </h2>
          <p className="text-lake-100/80 max-w-2xl mx-auto">
            三天精彩活动不停，标注潮汐时刻和最佳观鸟时段，
            助您规划完美的湿地之旅。
          </p>
        </div>

        <div className="flex justify-center gap-3 mb-12 flex-wrap reveal">
          {scheduleData.map((day, index) => (
            <button
              key={day.date}
              onClick={() => setActiveDay(index)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeDay === index
                  ? 'bg-sunset-500 text-white shadow-lg shadow-sunset-500/30'
                  : 'bg-white/10 text-white/80 hover:bg-white/20'
              }`}
            >
              <p className="text-sm opacity-80">{day.dayOfWeek}</p>
              <p className="text-base">{day.date}</p>
            </button>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-6 mb-10 reveal">
          <div className="flex items-center gap-2 text-sm text-white/80">
            <Star className="w-4 h-4 text-sunset-400 fill-sunset-400" />
            <span>最佳观测时段</span>
          </div>
          {Object.entries(tideColors).map(([key, value]) => (
            <div key={key} className="flex items-center gap-2 text-sm text-white/80">
              <div className={`w-4 h-4 rounded-full ${value.bg}`} />
              <span>{value.label}</span>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto reveal">
          <div className="relative">
            <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-white/20" />
            
            <div className="space-y-4">
              {currentSchedule.activities.map((activity: Activity, index: number) => (
                <div
                  key={activity.id}
                  className={`relative pl-12 md:pl-20 ${
                    activity.isBestViewing ? 'reveal' : ''
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`absolute left-0 md:left-4 top-6 w-8 h-8 rounded-full flex items-center justify-center ${
                    activity.isBestViewing
                      ? 'bg-sunset-500 shadow-lg shadow-sunset-500/50'
                      : 'bg-white/20'
                  }`}>
                    {activity.isBestViewing ? (
                      <Star className="w-4 h-4 text-white fill-white" />
                    ) : (
                      <div className="w-2 h-2 bg-white rounded-full" />
                    )}
                  </div>

                  <div
                    className={`bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border transition-all duration-300 ${
                      activity.isBestViewing
                        ? 'border-sunset-400/50 bg-sunset-500/10'
                        : 'border-white/10 hover:bg-white/15'
                    }`}
                  >
                    <div
                      className="p-5 cursor-pointer"
                      onClick={() => toggleActivity(activity.id)}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex flex-wrap items-center gap-2 mb-2">
                            <span className="flex items-center gap-1 text-white/80 text-sm">
                              <Clock className="w-4 h-4" />
                              {activity.time}
                            </span>
                            
                            {activity.tideLevel && (
                              <span className={`flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium ${tideColors[activity.tideLevel].bg} ${tideColors[activity.tideLevel].text}`}>
                                <Waves className="w-3 h-3" />
                                {tideColors[activity.tideLevel].label}
                                {activity.tideTime && ` ${activity.tideTime}`}
                                {activity.tideHeight && ` (${activity.tideHeight})`}
                              </span>
                            )}
                            
                            {activity.isBestViewing && (
                              <span className="flex items-center gap-1 px-2 py-0.5 bg-sunset-500 text-white rounded-full text-xs font-medium">
                                <Star className="w-3 h-3 fill-white" />
                                最佳观测
                              </span>
                            )}
                          </div>
                          
                          <h4 className="font-serif text-xl font-bold text-white mb-1">
                            {activity.title}
                          </h4>
                          
                          <div className="flex items-center gap-1 text-white/70 text-sm">
                            <MapPin className="w-4 h-4" />
                            {activity.location}
                          </div>
                        </div>
                        
                        <button className="text-white/60 hover:text-white transition-colors">
                          {expandedActivity === activity.id ? (
                            <ChevronUp className="w-5 h-5" />
                          ) : (
                            <ChevronDown className="w-5 h-5" />
                          )}
                        </button>
                      </div>
                      
                      {expandedActivity === activity.id && (
                        <div className="mt-4 pt-4 border-t border-white/10">
                          <p className="text-white/80 leading-relaxed">
                            {activity.description}
                          </p>
                        </div>
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
