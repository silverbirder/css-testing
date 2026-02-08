export const CssAiFeatures = () => {
  return (
    <section id="features" className="section">
      <h2 className="section-title sticky-section-title">主要機能</h2>
      <div className="feature-grid">
        <div className="feature-card">
          <div className="card-icon">🤖</div>
          <h3 className="card-title">AI CSS生成</h3>
          <p className="card-description">
            自然言語でデザインを記述するだけで、最適化されたCSSコードを自動生成。
          </p>
        </div>
        <div className="feature-card">
          <div className="card-icon">🎨</div>
          <h3 className="card-title">スマートスタイル提案</h3>
          <p className="card-description">
            AIがデザインパターンを分析し、美しいスタイルを自動提案。クリエイティブな発想をサポート。
          </p>
        </div>
        <div className="feature-card">
          <div className="card-icon">⚡</div>
          <h3 className="card-title">リアルタイム最適化</h3>
          <p className="card-description">
            コードを入力するとAIが即座に最適化。パフォーマンスと保守性を自動向上。
          </p>
        </div>
        <div className="feature-card">
          <div className="card-icon">🔍</div>
          <h3 className="card-title">インテリジェント検証</h3>
          <p className="card-description">
            AIがCSSの問題を自動検出し、改善提案を提供。バグの早期発見と修正。
          </p>
        </div>
        <div className="feature-card">
          <div className="card-icon">📱</div>
          <h3 className="card-title">レスポンシブAI</h3>
          <p className="card-description">
            デバイスに応じた最適なレスポンシブデザインをAIが自動生成。
          </p>
        </div>
        <div className="feature-card">
          <div className="card-icon">🔧</div>
          <h3 className="card-title">開発効率化</h3>
          <p className="card-description">
            IDE拡張機能でコーディング中にAIアシスタントが常時サポート。
          </p>
        </div>
      </div>
    </section>
  )
};
