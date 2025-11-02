# 株式会社順風新社 公式HP 実装記録

## プロジェクト概要
- **会社名**: 株式会社順風新社
- **ミッション**: テクノロジーで働く人を幸せにする
- **サービス**: AIを活用した業務改善ソリューション
- **URL**: https://jyunpushinsha.com

## 技術スタック
- **フレームワーク**: Next.js 16.0.1 (App Router)
- **言語**: TypeScript
- **スタイリング**: Tailwind CSS v4
- **アニメーション**: Framer Motion
- **フォーム管理**: React Hook Form
- **メール送信**: Resend
- **デプロイ**: Vercel
- **ドメイン**: jyunpushinsha.com

## 実装機能

### 1. コンポーネント構成
```
components/
├── Hero.tsx              # メインビジュアル（フルスクリーン、アニメーション）
├── About.tsx             # 会社概要（実績数値、特徴カード）
├── Services.tsx          # サービス紹介（6種類のAIサービス）
├── ContactForm.tsx       # お問い合わせフォーム（会社名・名前・要件）
└── Footer.tsx            # フッター
```

### 2. API
- **POST /api/contact**: お問い合わせメール送信
  - Resendを使用
  - 送信先: yuta.sakamoto@jyunpushinsha.com
  - HTMLメールテンプレート付き

### 3. SEO対策
- ✅ メタデータ最適化（タイトル、ディスクリプション）
- ✅ 構造化データ（JSON-LD）による組織情報
- ✅ sitemap.xml 自動生成
- ✅ robots.txt 自動生成
- ✅ Open Graph対応
- ✅ Google検索最適化設定

### 4. レスポンシブデザイン
- PC、タブレット、スマートフォン対応
- Tailwind CSSでブレークポイント管理

### 5. アニメーション
- Framer Motionによる滑らかなアニメーション
- スクロール連動エフェクト
- ホバーエフェクト

## 環境変数（.env.local）

```env
RESEND_API_KEY=re_3zAD22en_57gn5NQguyfqNtajEkiMMpvq
EMAIL_FROM=yuta.sakamoto@jyunpushinsha.com
EMAIL_TO=yuta.sakamoto@jyunpushinsha.com
```

**注意**: .env.localはGitに含まれません（.gitignore設定済み）

## Vercel環境変数設定

Vercelダッシュボード → Settings → Environment Variables に以下を設定：
- `RESEND_API_KEY`
- `EMAIL_FROM`
- `EMAIL_TO`

すべての環境（Production, Preview, Development）にチェック

## デプロイ手順

### 初回デプロイ
```bash
# 1. GitHubにプッシュ
git add .
git commit -m "commit message"
git push

# 2. Vercelでインポート
# https://vercel.com でGitHubリポジトリをインポート

# 3. 環境変数を設定

# 4. カスタムドメイン設定
# jyunpushinsha.com を追加
# DNSレコードを設定
```

### 更新デプロイ
```bash
git add .
git commit -m "update message"
git push
# → Vercelが自動デプロイ
```

## ローカル開発

```bash
# 開発サーバー起動
npm run dev
# → http://localhost:3000

# ビルドテスト
npm run build

# 本番環境プレビュー
npm run start
```

## SEO設定（Google Search Console）

1. **プロパティ登録**: https://jyunpushinsha.com
2. **サイトマップ送信**: https://jyunpushinsha.com/sitemap.xml
3. **インデックス登録リクエスト**: トップページをリクエスト済み
4. **検索キーワード**: 「順風新社」で上位表示を目指す

## Resend設定

- **ドメイン認証**: jyunpushinsha.com （完了）
- **送信元**: yuta.sakamoto@jyunpushinsha.com
- **APIキー**: Vercel環境変数に設定済み

## ファイル構成

```
jyunpushinsha-hp/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts          # メール送信API
│   ├── layout.tsx                # ルートレイアウト、メタデータ
│   ├── page.tsx                  # トップページ
│   ├── globals.css               # グローバルスタイル
│   ├── sitemap.ts                # サイトマップ生成
│   └── robots.ts                 # robots.txt生成
├── components/
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Services.tsx
│   ├── ContactForm.tsx
│   └── Footer.tsx
├── .env.local                    # 環境変数（Git除外）
├── package.json
└── Claude.md                     # このファイル
```

## 主要な実装ポイント

### 1. Resendのインスタンス化
```typescript
// ビルドエラー回避のため、関数内でインスタンス化
const resend = new Resend(process.env.RESEND_API_KEY);
```

### 2. 構造化データ
```typescript
// layout.tsxで組織情報を定義
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: '株式会社順風新社',
  // ...
};
```

### 3. スムーズスクロール
```css
/* globals.css */
html {
  scroll-behavior: smooth;
}
```

## トラブルシューティング

### ビルドエラー: Resend API Key
**原因**: 環境変数がビルド時に読み込まれない
**解決**: Resendインスタンス化を関数内に移動（完了済み）

### サイトマップが表示されない
**原因**: Vercelのデプロイが必要
**解決**: 最新コードをpushして再デプロイ（完了済み）

## Git履歴

```bash
# 初回実装
git log --oneline
74ac1cb SEO対策強化: メタデータ更新と構造化データ追加
8cea385 Fix: Resendインスタンス化をビルド時エラー回避のため修正
77ace59 株式会社順風新社 公式HP 初回実装
```

## 今後のメンテナンス

### 定期確認項目
- [ ] Google Search Consoleでインデックス状況確認
- [ ] お問い合わせフォームのテスト送信
- [ ] Resend送信履歴の確認
- [ ] サイトのパフォーマンス測定（Lighthouse）

### 更新が必要な場合
1. ローカルで変更
2. `npm run build` でビルドテスト
3. GitHubにpush
4. Vercelで自動デプロイ確認

## 参考リンク

- **本番サイト**: https://jyunpushinsha.com
- **GitHub**: https://github.com/YUTA-JP-009/jyunpushinsha-hp
- **Vercel**: https://vercel.com/dashboard
- **Resend**: https://resend.com/emails
- **Google Search Console**: https://search.google.com/search-console

---

**作成日**: 2025-11-02
**最終更新**: 2025-11-02
**開発環境**: VS Code + Claude Code
