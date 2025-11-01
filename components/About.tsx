'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  return (
    <section id="about" className="py-20 sm:py-32 bg-white" ref={ref}>
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
                About Us
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              私たちは、AI技術を活用して
              <br className="hidden sm:block" />
              企業の業務改善を実現します
            </p>
          </motion.div>

          {/* メインコンテンツ */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            {/* 左側: 説明文 */}
            <motion.div variants={itemVariants}>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                AIで実現する、
                <br />
                新しい働き方
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                株式会社順風新社は、最新のAI技術を活用し、企業の業務プロセスを革新的に改善します。単なるツールの提供ではなく、お客様のビジネス課題に寄り添い、最適なソリューションを設計・実装します。
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                私たちのミッションは、AIの力で人々の創造的な時間を生み出し、ビジネスの成長を加速させることです。
              </p>
            </motion.div>

            {/* 右側: 特徴カード */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl border border-blue-100">
                <div className="text-4xl mb-4">🎯</div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  課題解決型アプローチ
                </h4>
                <p className="text-gray-600">
                  お客様の課題を深く理解し、最適なAIソリューションを提案します
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl border border-purple-100">
                <div className="text-4xl mb-4">⚡</div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  迅速な実装
                </h4>
                <p className="text-gray-600">
                  プロトタイプから本格導入まで、スピーディーに対応します
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-2xl border border-green-100">
                <div className="text-4xl mb-4">🤝</div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  継続的なサポート
                </h4>
                <p className="text-gray-600">
                  導入後も運用・改善をサポートし、成果を最大化します
                </p>
              </div>
            </motion.div>
          </div>

          {/* 数字で見る実績 */}
          <motion.div variants={itemVariants}>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
              <div className="p-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl text-white">
                <div className="text-5xl font-bold mb-2">100+</div>
                <div className="text-lg opacity-90">導入実績</div>
              </div>
              <div className="p-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl text-white">
                <div className="text-5xl font-bold mb-2">50%</div>
                <div className="text-lg opacity-90">平均業務削減率</div>
              </div>
              <div className="p-8 bg-gradient-to-br from-pink-500 to-red-500 rounded-2xl text-white">
                <div className="text-5xl font-bold mb-2">98%</div>
                <div className="text-lg opacity-90">顧客満足度</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
