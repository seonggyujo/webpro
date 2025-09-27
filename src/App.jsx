import './App.css'

function App() {
  return (
    <div className="App">
      <header className="header">
        <nav className="nav">
          <h1>웹사이트 프로젝트</h1>
          <ul>
            <li><a href="#home">홈</a></li>
            <li><a href="#about">소개</a></li>
            <li><a href="#contact">연락처</a></li>
          </ul>
        </nav>
      </header>

      <main className="main">
        <section id="home" className="section">
          <h2>환영합니다</h2>
          <p>이것은 React로 만든 새로운 웹사이트 프로젝트입니다.</p>
        </section>

        <section id="about" className="section">
          <h2>소개</h2>
          <p>이 섹션에서는 프로젝트에 대한 정보를 제공합니다.</p>
        </section>

        <section id="contact" className="section">
          <h2>연락처</h2>
          <p>문의사항이 있으시면 연락해 주세요.</p>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2025 웹사이트 프로젝트. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App