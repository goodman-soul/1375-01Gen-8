import { MapPin, Phone, Mail, Clock, Bird } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-lake-900 text-white py-16">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='40' viewBox='0 0 60 40'%3E%3Cpath d='M0 20 Q15 5 30 20 Q45 5 60 20' stroke='white' stroke-width='1' fill='none'/%3E%3C/svg%3E")`,
          backgroundSize: '60px 40px',
        }} />
      </div>
      
      <div className="relative z-10 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-sunset-500 rounded-xl flex items-center justify-center">
                <Bird className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="font-serif text-2xl font-bold">湿地鸟类民俗节</h3>
                <p className="text-lake-300 text-sm">Wetland Bird Folk Festival</p>
              </div>
            </div>
            <p className="text-lake-200/80 leading-relaxed mb-6">
              探索湿地生态之美，传承千年民俗文化，
              与百万候鸟共赴自然之约。
            </p>
            <div className="flex gap-3">
              {['微信', '微博', '抖音'].map((social, index) => (
                <button
                  key={index}
                  className="w-10 h-10 bg-white/10 hover:bg-sunset-500 rounded-full flex items-center justify-center transition-colors text-sm"
                >
                  {social.charAt(0)}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-serif text-lg font-bold mb-6 text-reed-300">
              活动信息
            </h4>
            <ul className="space-y-4 text-lake-200/80">
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-sunset-400 flex-shrink-0" />
                <div>
                  <p className="font-medium">活动时间</p>
                  <p className="text-sm">2026年6月20日-22日</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-sunset-400 flex-shrink-0" />
                <div>
                  <p className="font-medium">活动地点</p>
                  <p className="text-sm">湿地国家级自然保护区</p>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg font-bold mb-6 text-reed-300">
              联系我们
            </h4>
            <ul className="space-y-4 text-lake-200/80">
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-sunset-400 flex-shrink-0" />
                <div>
                  <p className="font-medium">咨询电话</p>
                  <p className="text-sm">400-123-4567</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-sunset-400 flex-shrink-0" />
                <div>
                  <p className="font-medium">电子邮箱</p>
                  <p className="text-sm">info@wetlandbirdfest.cn</p>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg font-bold mb-6 text-reed-300">
              快速导航
            </h4>
            <ul className="grid grid-cols-2 gap-3 text-lake-200/80">
              {[
                { label: '候鸟迁徙', href: '#migration' },
                { label: '观鸟礼仪', href: '#etiquette' },
                { label: '祭水仪式', href: '#ritual' },
                { label: '亲子活动', href: '#activities' },
                { label: '活动时间表', href: '#schedule' },
                { label: '保护区地图', href: '#reserve' },
              ].map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="hover:text-sunset-400 transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-lake-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-lake-300/60 text-sm text-center md:text-left">
              © 2026 湿地鸟类民俗节组委会 版权所有 
              <span className="mx-2">|</span>
              湿地国家级自然保护区管理局
            </p>
            <div className="flex gap-6 text-lake-300/60 text-sm">
              <a href="#" className="hover:text-sunset-400 transition-colors">隐私政策</a>
              <a href="#" className="hover:text-sunset-400 transition-colors">使用条款</a>
              <a href="#" className="hover:text-sunset-400 transition-colors">网站地图</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
