export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* 会社情報 */}
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              株式会社順風新社
            </h3>
            <p className="text-gray-300 leading-relaxed">
              AI技術を活用した業務改善で、
              <br />
              ビジネスの成長をサポートします
            </p>
          </div>

          {/* リンク */}
          <div>
            <h4 className="text-lg font-semibold mb-4">サイトマップ</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  会社概要
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  サービス
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  お問い合わせ
                </a>
              </li>
            </ul>
          </div>

          {/* コンタクト情報 */}
          <div>
            <h4 className="text-lg font-semibold mb-4">お問い合わせ</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Email: yuta.sakamoto@jyunpushinsha.com</li>
              <li>Web: jyunpushinsha.com</li>
            </ul>
          </div>
        </div>

        {/* コピーライト */}
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} 株式会社順風新社. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
