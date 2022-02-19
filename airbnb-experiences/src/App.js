import Card from './Components/Card';
import Hero from './Components/Hero';
import NavBar from './Components/NavBar';

import data from './data';


function App() {
  let cards = data.map(item => {
    return <Card  key={item.id}
                  {...item}
                  />
  });
  return (
    <div>
      <NavBar />
      <Hero />
      <section className="cards-list">
                {cards}
            </section>
    </div>
  );
}

export default App;
