import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { company, name, message } = body;

    // バリデーション
    if (!company || !name || !message) {
      return NextResponse.json(
        { error: '必須項目が入力されていません' },
        { status: 400 }
      );
    }

    // メール送信
    const { data, error } = await resend.emails.send({
      from: process.env.EMAIL_FROM as string,
      to: process.env.EMAIL_TO as string,
      subject: `【お問い合わせ】${company} - ${name}様より`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', sans-serif;
                line-height: 1.6;
                color: #333;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
              }
              .header {
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                color: white;
                padding: 30px;
                border-radius: 10px 10px 0 0;
                text-align: center;
              }
              .content {
                background: #f9fafb;
                padding: 30px;
                border: 1px solid #e5e7eb;
                border-top: none;
                border-radius: 0 0 10px 10px;
              }
              .field {
                margin-bottom: 20px;
              }
              .label {
                font-weight: bold;
                color: #4b5563;
                display: block;
                margin-bottom: 5px;
              }
              .value {
                background: white;
                padding: 12px;
                border-radius: 6px;
                border: 1px solid #e5e7eb;
              }
              .message-box {
                background: white;
                padding: 15px;
                border-radius: 6px;
                border: 1px solid #e5e7eb;
                white-space: pre-wrap;
                word-wrap: break-word;
              }
              .footer {
                margin-top: 30px;
                padding-top: 20px;
                border-top: 1px solid #e5e7eb;
                text-align: center;
                color: #6b7280;
                font-size: 14px;
              }
            </style>
          </head>
          <body>
            <div class="header">
              <h1 style="margin: 0; font-size: 24px;">新しいお問い合わせ</h1>
              <p style="margin: 10px 0 0 0; opacity: 0.9;">株式会社順風新社 Webサイトより</p>
            </div>
            <div class="content">
              <div class="field">
                <span class="label">会社名</span>
                <div class="value">${company}</div>
              </div>

              <div class="field">
                <span class="label">お名前</span>
                <div class="value">${name}</div>
              </div>

              <div class="field">
                <span class="label">お問い合わせ内容</span>
                <div class="message-box">${message}</div>
              </div>

              <div class="footer">
                <p>このメールは自動送信されています。<br>お客様への返信をお願いいたします。</p>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'メール送信に失敗しました' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: '送信が完了しました', data },
      { status: 200 }
    );
  } catch (error) {
    console.error('Server error:', error);
    return NextResponse.json(
      { error: 'サーバーエラーが発生しました' },
      { status: 500 }
    );
  }
}
