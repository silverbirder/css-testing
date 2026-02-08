export const CssAiDemo = () => {
  return (
    <section id="demo" className="section">
      <h2 className="section-title sticky-section-title">デモ</h2>
      <div className="sidebar">
        <div className="sidebar-video">
          <div className="demo-video">
            <h3 className="demo-title">ライブデモ</h3>
            <img className="demo-image" src="https://placehold.co/150x150" alt="ライブデモの動画" />
            <button className="btn">デモを開始</button>
          </div>
        </div>
        <div className="sidebar-steps">
          <div className="step-items">
            <div className="step-item">
              <strong className="step-item-title">
                1. 要望を自然言語で入力
              </strong>
              <p className="step-item-description">
                「モダンなカードデザインを作って」など、自然な言葉でデザインを指示
              </p>
            </div>
            <div className="step-item">
              <strong className="step-item-title">2. AIがCSSを自動生成</strong>
              <p className="step-item-description">
                高度なAIが最適化されたCSSコードを瞬時に生成
              </p>
            </div>
            <div className="step-item">
              <strong className="step-item-title">
                3. プレビュー・調整・適用
              </strong>
              <p className="step-item-description">
                リアルタイムプレビューで確認し、微調整してプロジェクトに適用
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
