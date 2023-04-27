import { toDOMNode, ChildrenNode } from "@ikasoba000/okome.js";
import { Signal } from "@ikasoba000/okome.js/signal";

function CounterComponent() {
  const count = new Signal(0);

  count.onUpdate(() => {
    console.log("count:", count.value);
  });

  return <button on:click={() => count.value++}>count: {count}</button>;
}

function SpoilerComponent({ children }: { children: ChildrenNode }) {
  const visible = new Signal(false);

  return (
    <>
      <button on:click={() => (visible.value = !visible.value)}>
        {visible.pipe((value) => (value ? "hide" : "show"))}
      </button>
      {visible.pipe((value) => (value ? children : null))}
    </>
  );
}

function App() {
  return (
    <>
      <header>
        <h1>okome.js example</h1>
      </header>
      <main>
        <CounterComponent />
        <br />
        <SpoilerComponent>_(:3」∠)_</SpoilerComponent>
      </main>
      <footer>
        <a target="_blank" href="https://github.com/ikasoba/okome.js-example/">
          github
        </a>
        <a target="_blank" href="https://github.com/ikasoba/okome.js/">
          okome.js github
        </a>
        <a
          target="_blank"
          href="https://www.npmjs.com/package/@ikasoba000/okome.js/"
        >
          okome.js npm
        </a>
      </footer>
    </>
  );
}

document.body.append(toDOMNode(<App />));
