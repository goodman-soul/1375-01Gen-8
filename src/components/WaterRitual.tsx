import { ritualSteps } from '@/data/mockData';
import { Droplets, Clock, History } from 'lucide-react';

export default function WaterRitual() {
  return (
    <section id="ritual" className="relative py-20 md:py-28 bg-cream-100">
      <div className="absolute inset-0 water-wave" />
      
      <div className="relative z-10 container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="reveal order-2 lg:order-1">
            <span className="inline-block px-4 py-1 bg-lake-100 text-lake-700 rounded-full text-sm font-medium mb-4">
              祭水仪式
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-lake-800 mb-6">
              传承千年的
              <span className="text-sunset-500">水神祭祀</span>
            </h2>
            
            <div className="prose prose-lg max-w-none text-gray-600 mb-8">
              <p className="text-lg leading-relaxed mb-4">
                祭水仪式是当地先民传承千年的传统民俗，表达了人们对水的敬畏与感恩之情。
                湿地是生命的摇篮，是候鸟的家园，而水则是湿地的灵魂。
              </p>
              <p className="leading-relaxed mb-4">
                相传早在唐宋时期，当地渔民和农户就有祭祀水神的习俗，
                祈求风调雨顺、渔获丰收。如今，祭水仪式被赋予了新的时代意义，
                成为保护湿地、珍爱候鸟的文化载体。
              </p>
              <p className="leading-relaxed">
                每年候鸟季，当地村民都会身着传统服饰，在湿地边举行庄重的祭水仪式，
                祈求湿地丰饶、候鸟平安，也表达人与自然和谐共处的美好愿景。
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 shadow-md">
                <History className="w-6 h-6 text-lake-600" />
                <div>
                  <p className="text-xs text-gray-500">历史渊源</p>
                  <p className="font-semibold text-lake-700">千年传承</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 shadow-md">
                <Clock className="w-6 h-6 text-sunset-500" />
                <div>
                  <p className="text-xs text-gray-500">仪式时长</p>
                  <p className="font-semibold text-lake-700">约2.5小时</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 shadow-md">
                <Droplets className="w-6 h-6 text-wetland-500" />
                <div>
                  <p className="text-xs text-gray-500">举办地点</p>
                  <p className="font-semibold text-lake-700">祭水广场</p>
                </div>
              </div>
            </div>
          </div>

          <div className="reveal order-1 lg:order-2">
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=traditional%20water%20worship%20ceremony%20at%20wetland%2C%20people%20in%20traditional%20Chinese%20costumes%2C%20altar%20with%20offerings%2C%20reeds%20and%20water%20in%20background%2C%20ethereal%20atmosphere&image_size=portrait_4_3"
                  alt="祭水仪式"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-sunset-500 rounded-2xl flex items-center justify-center text-white shadow-xl">
                <div className="text-center">
                  <p className="text-3xl font-bold">6/20</p>
                  <p className="text-sm">仪式日</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 reveal">
          <h3 className="font-serif text-2xl md:text-3xl font-bold text-lake-800 text-center mb-12">
            仪式流程
          </h3>
          
          <div className="relative">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-sunset-400 via-lake-400 to-wetland-400 rounded-full" style={{ transform: 'translateX(-50%)' }} />
            
            <div className="space-y-8">
              {ritualSteps.map((step, index) => (
                <div
                  key={step.id}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                      <span className="inline-block px-3 py-1 bg-lake-100 text-lake-700 rounded-full text-sm font-medium mb-3">
                        {step.time}
                      </span>
                      <h4 className="font-serif text-xl font-bold text-lake-800 mb-2">
                        {step.title}
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="hidden md:flex absolute left-1/2 w-12 h-12 bg-sunset-500 rounded-full items-center justify-center text-white font-bold shadow-lg" style={{ transform: 'translateX(-50%)' }}>
                    {index + 1}
                  </div>
                  
                  <div className="md:hidden flex items-center gap-4 mr-4">
                    <div className="w-10 h-10 bg-sunset-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg flex-shrink-0">
                      {index + 1}
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
