import Header from "components/Header";

const App = () => {
  return (
    <div
      className="min-h-screen bg-neutral-300 text-black dark:bg-black dark:text-white 
    flex-col flex p-1 space-y-2 space-y-reverse"
    >
      <Header/>
    </div>
  );
};

export default App;
