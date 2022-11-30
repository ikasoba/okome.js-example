import { toDOMNode } from "@ikasoba000/okome.js";
import { Signal } from "@ikasoba000/okome.js/signal";

function App() {
  const count = new Signal(0);

  count.onUpdate(() => {
    console.log("count:", count.value);
  });

  return (
    <div>
      <button on:click={() => count.value++}>count: {count}</button>
    </div>
  );
}

document.body.append(toDOMNode(<App />));
