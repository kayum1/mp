import React from 'react';
import Header from './Header';
import Nav from './Nav';
import Loading from './loadError';
import Stories from './stories';

const navItems = [
  'dua',
  'arts',
  'books',
  // 'fashion',
  // 'dining',
  // 'movies',
  'travel',
];
const nytapi = 'jXsc2QdkjNLM9LiDrBYoalPGGy21A382';
// const URL = 'http://localhost:8085/data';
// const URL = `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${nytapi}`;
const sleep = (ms) => {
  setTimeout(function () {
    console.log('.... waiting ', ms);
  }, ms);
};

function App() {
  const [stories, setStories] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [section, setSection] = React.useState('arts');
  React.useEffect(() => {
    const url = new URL(window.location.href);
    const hash = url.hash.slice(1);
    if (hash !== 'undefined') {
      setSection(hash);
    } else {
      setSection('arts');
    }
  }, []);

  React.useEffect(() => {
    setLoading(true);

    <Loading />;

    // fetch(
    //   `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${nytapi}`
    // )
    // https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=jXsc2QdkjNLM9LiDrBYoalPGGy21A382

    //  fetch(URL)
    // fetch('http://localhost:3000/data.json')
    fetch('/assets/data.json')
      .then(sleep(3000))
      .then((response) => response.json())
      .then((data) => {
        console.log(`LOADING Section: ${section}`);
        setStories(
          data.filter((element) => {
            if (element.section === `${section}`) {
              return element;
            }
          })
        );
      })
      .then(setLoading(false))
      .catch((error) => {
        console.log(error);
      });
  }, [section]);

  if (loading) {
    <Loading />;
  }

  return (
    <>
      <Header siteTitle='Summarized Notes' />
      <Nav navItems={navItems} setSection={setSection} section={section} />
      {loading || stories.length === 0 ? (
        <Loading />
      ) : (
        <Stories stories={stories} section={section} />
      )}
    </>
  );
}

export default App;
