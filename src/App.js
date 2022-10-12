import Expense from "./components/Expense";
import ExpenseDetails from "./components/ExpenseDetails";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div className="container">
      <Header />
      <main>
        <Expense />
        <ExpenseDetails />
      </main>
      <Footer />
    </div>
  );
}

export default App;
