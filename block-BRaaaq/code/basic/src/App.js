import data from './data';
import propTypes from 'prop-types';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Header />
      <Hero />
      <ArticleSection />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className='header'>
      <div className='container flex jsb'>
        <strong>Onkar</strong>
        <div className='header-nav'>
          <a className='btn' href='#'>
            Home
          </a>
          <a className='btn' href='#'>
            About
          </a>
          <a className='btn' href='#'>
            Contact
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className='sec-padding hero-sec'>
      <div className='container'>
        <h1>Hello everyone this is hero section</h1>
      </div>
    </section>
  );
}

function ArticleSection() {
  return (
    <section className='sec-padding article-sec'>
      <div className='container'>
        <h2>Article Section</h2>

        <div className='articles-div'>
          {data.map((elem) => {
            return <Article user={elem} />;
          })}
        </div>
      </div>
    </section>
  );
}

function Article(props) {
  console.log('article', props);
  return (
    <article className='article'>
      <div className='flexi-img'>
        <img src={props.user.urlToImage} alt='imagename' />
      </div>
      <h4>{props.user.title.toUpperCase()}</h4>
    </article>
  );
}

Article.prototype = {
  urlToImage: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
};

function Footer() {
  return (
    <header className='footer'>
      <div className='container flex jsb'>
        <small>&copy; 2020 All rights received</small>
        <div className='header-nav'>
          <a className='btn' href='#'>
            Home
          </a>
          <a className='btn' href='#'>
            About
          </a>
          <a className='btn' href='#'>
            Contact
          </a>
        </div>
      </div>
    </header>
  );
}
export default App;
