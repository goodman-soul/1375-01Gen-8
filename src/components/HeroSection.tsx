import { useEffect, useState } from 'react';
import { Calendar, MapPin, ArrowDown } from 'lucide-react';

export default function HeroSection() {
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const eventDate = new Date('2026-06-20T08:00:00').getTime();
    
    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = eventDate - now;
      
      if (distance > 0) {
        setCountdown({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=vast%20wetland%20at%20sunrise%2C%20flock%20of%20birds%20flying%20above%20reed%20marsh%2C%20golden%20hour%20light%2C%20serene%20atmosphere%2C%20mist%20over%20water&image_size=landscape_16_9"
          alt="湿地日出"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-lake-900/60 via-lake-800/40 to-lake-900/80" />
        <div className="absolute inset-0 bg-noise" />
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg className="bird-silhouette animate-float" style={{ top: '15%', left: '10%', width: '60px' }} viewBox="0 0 100 40" fill="currentColor">
          <path d="M0 20 Q25 5 50 20 Q75 5 100 20 Q75 15 50 20 Q25 15 0 20" opacity="0.3" />
        </svg>
        <svg className="bird-silhouette animate-float" style={{ top: '25%', right: '20%', width: '80px', animationDelay: '2s' }} viewBox="0 0 100 40" fill="currentColor">
          <path d="M0 20 Q25 5 50 20 Q75 5 100 20 Q75 15 50 20 Q25 15 0 20" opacity="0.2" />
        </svg>
        <svg className="bird-silhouette animate-float" style={{ top: '35%', left: '70%', width: '50px', animationDelay: '4s' }} viewBox="0 0 100 40" fill="currentColor">
          <path d="M0 20 Q25 5 50 20 Q75 5 100 20 Q75 15 50 20 Q25 15 0 20" opacity="0.25" />
        </svg>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <span className="inline-block px-4 py-1 bg-sunset-500/80 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
            2026年6月20日-22日
          </span>
        </div>
        
        <h1
          className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-shadow-lg animate-fade-in-up"
          style={{ animationDelay: '0.4s' }}
        >
          湿地鸟类民俗节
        </h1>
        
        <p
          className="text-xl md:text-2xl mb-4 text-shadow-md animate-fade-in-up"
          style={{ animationDelay: '0.6s' }}
        >
          候鸟迁徙 · 祭水仪式 · 亲子观鸟
        </p>
        
        <p
          className="text-lg md:text-xl mb-8 text-cream-100/90 max-w-2xl mx-auto text-shadow-md animate-fade-in-up"
          style={{ animationDelay: '0.8s' }}
        >
          探索湿地生态之美，传承千年民俗文化，与百万候鸟共赴自然之约
        </p>

        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-12 animate-fade-in-up" style={{ animationDelay: '1s' }}>
          <div className="flex items-center gap-2 text-cream-100/90">
            <Calendar className="w-5 h-5" />
            <span>2026年6月20日-22日</span>
          </div>
          <div className="flex items-center gap-2 text-cream-100/90">
            <MapPin className="w-5 h-5" />
            <span>湿地国家级自然保护区</span>
          </div>
        </div>

        <div className="flex justify-center gap-4 mb-12 animate-fade-in-up" style={{ animationDelay: '1.2s' }}>
          <div className="bg-lake-800/50 backdrop-blur-sm rounded-lg p-4 md:p-6">
            <p className="text-sm text-cream-200 mb-2">距离活动开始还有</p>
            <div className="flex gap-3 md:gap-4">
              {[
                { value: countdown.days, label: '天' },
                { value: countdown.hours, label: '时' },
                { value: countdown.minutes, label: '分' },
                { value: countdown.seconds, label: '秒' },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-wetland-600/80 rounded-lg flex items-center justify-center text-2xl md:text-3xl font-bold">
                    {String(item.value).padStart(2, '0')}
                  </div>
                  <span className="text-xs mt-1 block text-cream-200">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="animate-fade-in-up" style={{ animationDelay: '1.4s' }}>
          <a
            href="#migration"
            className="inline-flex items-center gap-2 px-8 py-4 bg-sunset-500 hover:bg-sunset-600 text-white font-semibold rounded-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
          >
            开始探索
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#migration" className="text-white/70 hover:text-white">
          <ArrowDown className="w-8 h-8" />
        </a>
      </div>
    </section>
  );
}
