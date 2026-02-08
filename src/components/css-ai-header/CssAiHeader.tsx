export const CssAiHeader = () => {
  return (
    <header className="fixed-header">
      <nav className="nav-header">
        <div className="cluster">
          <div className="header-logo">CSS AI</div>
          <div className="header-nav">
            <a href="#features">機能</a>
            <a href="#demo">デモ</a>
            <a href="#pricing">料金</a>
            <a href="#contact">お問い合わせ</a>
          </div>
        </div>
        <input
          type="checkbox"
          id="mobile-menu-toggle"
          className="mobile-menu-checkbox"
        />
        <label htmlFor="mobile-menu-toggle" className="mobile-menu-toggle">
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </label>
        <div className="mobile-menu">
          <div className="mobile-menu-items">
            <a href="#features">機能</a>
            <a href="#demo">デモ</a>
            <a href="#pricing">料金</a>
            <a href="#contact">お問い合わせ</a>
          </div>
        </div>
      </nav>
      <div className="news-banner">
        新機能リリース！スマートCSS提案機能を追加しました
      </div>
    </header>
  )
};
