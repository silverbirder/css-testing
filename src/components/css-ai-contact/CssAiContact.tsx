export const CssAiContact = () => {
  return (
    <section id="contact" className="section">
      <h3 className="section-title sticky-section-title">お問い合わせ</h3>
      <div className="contact-form">
        <div className="form-group">
          <label htmlFor="name">お名前</label>
          <input id="name" type="text" placeholder="山田太郎" />
        </div>
        <div className="form-group">
          <label htmlFor="email">メールアドレス</label>
          <input id="email" type="email" placeholder="example@email.com" />
        </div>
        <div className="form-group">
          <label htmlFor="message">お問い合わせ内容</label>
          <textarea
            id="message"
            placeholder="ご質問やご要望をお聞かせください"
          ></textarea>
        </div>
        <button className="btn btn-primary contact-btn">送信する</button>
        <p className="contact-description">お気軽にお問い合わせください</p>
      </div>
    </section>
  )
};
