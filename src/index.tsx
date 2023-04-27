import { toDOMNode, ChildrenNode } from "@ikasoba000/okome.js";
import { Signal } from "@ikasoba000/okome.js/signal";

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

function CounterComponent() {
  const count = new Signal(0);

  count.onUpdate(() => {
    console.log("count:", count.value);
  });

  return <button on:click={() => count.value++}>count: {count}</button>;
}

function App() {
  return (
    <>
      <header>
        <h1>okome.js example</h1>
      </header>
      <section>
        <CounterComponent />
        <br />
        <SpoilerComponent initial={true}>_(:3」∠)_</SpoilerComponent>
      </section>
    </>
  );
}

document.body.append(toDOMNode(<App />));
