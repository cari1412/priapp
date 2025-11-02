import Link from 'next/link';
import { ArrowRight, Sparkles, Zap, Shield } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Grid pattern background */}
      <div className="fixed inset-0 bg-grid-pattern opacity-20 pointer-events-none" />

      {/* Navigation */}
      <nav className="relative z-10 container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold">SaaS App</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="hover:text-purple-400 transition-colors">
              Главная
            </Link>
            <Link href="/pricing" className="hover:text-purple-400 transition-colors">
              Цены
            </Link>
            <Link href="#features" className="hover:text-purple-400 transition-colors">
              Возможности
            </Link>
            <Link href="#about" className="hover:text-purple-400 transition-colors">
              О нас
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <button className="hidden md:block px-4 py-2 text-white hover:text-purple-400 transition-colors">
              Войти
            </button>
            <Link href="/pricing">
              <button className="btn-gradient px-6 py-2 rounded-lg font-semibold text-white">
                Начать бесплатно
              </button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 container mx-auto px-4 pt-20 pb-32">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full px-4 py-2 mb-8">
            <Sparkles className="w-4 h-4 text-yellow-400" />
            <span className="text-sm font-semibold">Новая версия 2.0 уже доступна!</span>
          </div>

          {/* Heading */}
          <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
            Создавайте{' '}
            <span className="gradient-text-purple">потрясающие</span>
            <br />
            продукты быстрее
          </h1>

          {/* Description */}
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Мощная платформа для команд, которые хотят строить будущее.
            Все инструменты в одном месте.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link href="/pricing">
              <button className="btn-gradient px-8 py-4 rounded-xl font-semibold text-white text-lg flex items-center space-x-2 group">
                <span>Попробовать бесплатно</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
            <button className="btn-outline-gradient px-8 py-4 rounded-xl font-semibold text-white text-lg">
              Смотреть демо
            </button>
          </div>

          {/* Social Proof */}
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-gray-400">
            <div className="flex items-center space-x-2">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 border-2 border-slate-900"
                  />
                ))}
              </div>
              <span>10,000+ пользователей</span>
            </div>
            <div>⭐⭐⭐⭐⭐ 5.0 (200+ отзывов)</div>
            <div>🚀 Запущено 1000+ проектов</div>
          </div>
        </div>

        {/* Hero Image / Dashboard Preview */}
        <div className="max-w-6xl mx-auto mt-20">
          <div className="glass-card rounded-2xl p-2 glow-pulse">
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-8 aspect-video flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                  <Sparkles className="w-12 h-12 text-white" />
                </div>
                <p className="text-gray-400">Dashboard Preview</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative z-10 container mx-auto px-4 py-32">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Почему выбирают{' '}
              <span className="gradient-text-blue">нас</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Все необходимое для роста вашего бизнеса в одной платформе
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="glass-card glass-card-hover shine-effect rounded-2xl p-8">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-6">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Молниеносно быстро</h3>
              <p className="text-gray-400">
                Оптимизированная производительность для мгновенной загрузки
                и отклика на действия пользователей.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="glass-card glass-card-hover shine-effect rounded-2xl p-8">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center mb-6">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Безопасность прежде всего</h3>
              <p className="text-gray-400">
                Шифрование данных уровня enterprise и соответствие всем
                стандартам безопасности.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="glass-card glass-card-hover shine-effect rounded-2xl p-8">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500 to-pink-500 flex items-center justify-center mb-6">
                <Sparkles className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Легкая интеграция</h3>
              <p className="text-gray-400">
                Подключайте любые инструменты через API и готовые интеграции
                с популярными сервисами.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 container mx-auto px-4 py-32">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card shine-effect rounded-3xl p-12 md:p-16 text-center border-gradient-animated glow-pulse">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Готовы начать?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Присоединяйтесь к тысячам команд, которые уже используют нашу
              платформу для достижения своих целей.
            </p>
            <Link href="/pricing">
              <button className="btn-gradient px-10 py-5 rounded-xl font-semibold text-white text-lg inline-flex items-center space-x-2 group">
                <span>Посмотреть тарифы</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 container mx-auto px-4 py-12 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">SaaS App</span>
              </div>
              <p className="text-gray-400 text-sm">
                Создавайте потрясающие продукты быстрее
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Продукт</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="#" className="hover:text-white transition-colors">Возможности</Link></li>
                <li><Link href="/pricing" className="hover:text-white transition-colors">Цены</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">FAQ</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="#" className="hover:text-white transition-colors">О нас</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Блог</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Карьера</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="#" className="hover:text-white transition-colors">Документация</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Помощь</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Контакты</Link></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 text-center text-sm text-gray-400">
            <p>© 2024 SaaS App. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}