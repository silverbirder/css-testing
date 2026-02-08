export const CssAiPricing = () => {
  return (
    <section id="pricing" className="section">
      <h2 className="section-title sticky-section-title">料金プラン</h2>
      <div className="price-items">
        <div className="price-item">
          <h4 className="plan-name">スターター</h4>
          <div className="plan-price">
            ¥980<span>/月</span>
          </div>
          <div className="plan-features">
            <div className="plan-feature">✓ 基本AI CSS生成</div>
            <div className="plan-feature">✓ 月100回まで生成</div>
            <div className="plan-feature">✓ メールサポート</div>
            <div className="plan-feature">✓ 3プロジェクトまで</div>
          </div>
          <button className="btn btn-outline">選択する</button>
        </div>
        <div className="price-item popular">
          <div className="popular-badge">人気</div>
          <h4 className="plan-name">プロ</h4>
          <div className="plan-price">
            ¥2,980<span>/月</span>
          </div>
          <div className="plan-features">
            <div className="plan-feature">✓ 高度なAI機能</div>
            <div className="plan-feature">✓ 無制限生成</div>
            <div className="plan-feature">✓ 24/7サポート</div>
            <div className="plan-feature">✓ 無制限プロジェクト</div>
            <div className="plan-feature">✓ IDE拡張機能</div>
          </div>
          <button className="btn btn-primary">選択する</button>
        </div>
        <div className="price-item">
          <h4 className="plan-name">エンタープライズ</h4>
          <div className="plan-price">お問い合わせ</div>
          <div className="plan-features">
            <div className="plan-feature">✓ カスタムAIモデル</div>
            <div className="plan-feature">✓ 専用API</div>
            <div className="plan-feature">✓ 専任コンサルタント</div>
            <div className="plan-feature">✓ SLA保証</div>
            <div className="plan-feature">✓ オンプレミス対応</div>
          </div>
          <button className="btn btn-outline">相談する</button>
        </div>
      </div>
    </section>
  )
};
