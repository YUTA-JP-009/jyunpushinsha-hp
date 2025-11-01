'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const services = [
    {
      icon: '🤖',
      title: 'AI導入コンサルティング',
      description: 'ビジネス課題を分析し、最適なAIソリューションを提案。導入から運用まで一貫してサポートします。',
      features: ['課題ヒアリング', 'AI戦略策定', '導入支援', '効果測定'],
    },
    {
      icon: '⚙️',
      title: '業務自動化システム',
      description: '反復作業や定型業務をAIで自動化。人的リソースをより創造的な業務に振り向けることができます。',
      features: ['RPA導入', 'ワークフロー最適化', 'データ処理自動化', 'レポート自動生成'],
    },
    {
      icon: '💬',
      title: 'AI チャットボット開発',
      description: 'カスタマーサポートや社内問い合わせを24時間365日対応。顧客満足度向上と業務効率化を実現します。',
      features: ['カスタマーサポート', '社内ヘルプデスク', 'FAQ自動応答', '多言語対応'],
    },
    {
      icon: '📊',
      title: 'データ分析・予測',
      description: 'ビッグデータをAIで分析し、ビジネスインサイトを抽出。意思決定を強力にサポートします。',
      features: ['売上予測', '需要予測', '顧客行動分析', 'リスク分析'],
    },
    {
      icon: '🔍',
      title: 'AI活用教育・研修',
      description: '社員のAIリテラシーを向上させる教育プログラム。組織全体のDX推進を支援します。',
      features: ['ハンズオン研修', 'AI基礎講座', '業務別研修', '継続的学習支援'],
    },
    {
      icon: '🛠️',
      title: 'カスタム AI開発',
      description: 'お客様のニーズに合わせた独自AIシステムを開発。競争優位性の高いソリューションを提供します。',
      features: ['要件定義', 'プロトタイプ開発', '本格実装', '運用・保守'],
    },
  ];

  return (
    <section className="py-20 sm:py-32 bg-gradient-to-br from-gray-50 to-blue-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* セクションタイトル */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Services
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              あらゆる業界・業種に対応した
              <br className="hidden sm:block" />
              AI活用ソリューション
            </p>
          </motion.div>

          {/* サービスカード */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200 hover:-translate-y-2"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-500">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2" />
                      {feature}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div variants={itemVariants} className="text-center mt-16">
            <p className="text-lg text-gray-600 mb-6">
              どのサービスが最適か分からない方も、お気軽にご相談ください
            </p>
            <a
              href="#contact"
              className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-lg font-semibold rounded-full hover:scale-105 hover:shadow-xl transition-all duration-300"
            >
              無料相談を申し込む
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
