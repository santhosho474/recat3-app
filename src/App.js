import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

export default function App() {
  return (
    <div className="App App-header">
      <MyComponent></MyComponent>
      <br />
      <MySecondComponent />
      <br />
      <MyThirdComponent />
      <br />
      <MyDyanamicInputCompoent />
    </div>
  );
}

const MyComponent = () => {
  return (
    <div>
      <h1>React Heading</h1>
      <div>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
        dolore culpa delectus iusto nemo nobis, suscipit, cupiditate quam
        tempore quisquam nesciunt veritatis? Nostrum consequatur aperiam magnam
        at optio mollitia enim.
      </div>
      <h4>Heading 4</h4>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
        voluptatum ad quisquam reprehenderit doloremque. At id doloribus
        exercitationem consectetur quod temporibus? Dolorem illum voluptas
        eligendi non necessitatibus pariatur nobis quae.
      </div>
    </div>
  );
};

const MySecondComponent = () => {
  return (
    <div>
      <h1>My Second Component</h1>
    </div>
  );
};

const MyThirdComponent = () => {
  let localCounter = 100;
  let [counter, setCounter] = useState(100);
  const updateCounter = () => {
    localCounter = localCounter + 1;
    setCounter(counter + 1);
  };
  return (
    <div>
      <h1>Third Component</h1>
      <input type="button" value="Update Counter" onClick={updateCounter} />
      <input
        type="button"
        value="Upadate counter1"
        onClick={() => updateCounter()}
      />
      <div>React Not Aware -{localCounter}</div>
      <div>React Aware -{counter}</div>
    </div>
  );
};

const MyDyanamicInputCompoent = () => {
  const [list, setList] = useState([]);
  const [tweet, setTweet] = useState("");

  const readAndUpdateTweet = (e) => {
    setTweet(e.target.value);
  };
  const addNewItem = () => {
    setList([tweet, ...list]);
    setTweet("");
  };
  return (
    <div className="p-3">
      <h1>Tweets</h1>
      <div>
        <input
          type="text"
          value={tweet}
          onChange={(e) => readAndUpdateTweet(e)}
          style={{
            cursor: "pointer",
            paddingLeft: "8px",
            borderRadius: "8px",
            color: "royalblue",
          }}
          placeholder="Message..."
        />
        <input type="button" onClick={addNewItem} value="Tweet here" />
      </div>
      {list.map((item, index) => (
        <div key={index} className="bg-primary m-3 rounded-3">
          {item}
        </div>
      ))}
    </div>
  );
};
