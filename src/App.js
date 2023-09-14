import "./App.css";
import Accordion from "./components/Accordion";

function App() {
  const questions = [
    {
      title: "Is this a good product?",
      body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio vitae ipsum consequuntur facere modi optio ipsam soluta? Cumque ut totam facere hic odio fuga doloribus perferendis molestiae voluptatem vero. Velit!",
    },

    {
      title: "How much does it cost?",
      body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio vitae ipsum consequuntur facere modi optio ipsam soluta? Cumque ut totam facere hic odio fuga doloribus perferendis molestiae voluptatem vero. Velit!",
    },
    {
      title: "When can I get it?",
      body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio vitae ipsum consequuntur facere modi optio ipsam soluta? Cumque ut totam facere hic odio fuga doloribus perferendis molestiae voluptatem vero. Velit!",
    },
  ];
  return (
    <div>
      <h1>FAQ/Accordion</h1>
      <Accordion questions={questions} />
    </div>
  );
}

export default App;
