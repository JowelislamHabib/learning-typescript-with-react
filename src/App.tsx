import "./App.css";
import PostList from "./components/PostList";
function App() {
  return (
    <div className="container mx-auto py-24">
      <h1 className="text2xl font-bold text-center text-gray-800">
        Learning TypeScript with React
      </h1>
      <PostList />
    </div>
  );
}

export default App;
