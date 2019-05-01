import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styles from "./App.module.css";
import Navigation from "./components/Nav/Navigation";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Blog from "./components/Blog/Blog";
import ThemeControl from "./components/CommonComponents/ThemeControl";
import Footer from './components/Footer/Footer';

const ThemeContext = React.createContext("light");

interface AppState {
  current_theme_name: string;
}

class App extends React.Component<{}, AppState> {
  state = {
    current_theme_name: "light"
  };
  handleThemeChange = (e: React.SyntheticEvent) => {
    this.setState({ current_theme_name: e.currentTarget.id });
  };

  render() {
    return (
      <Router>
        <div className={styles.container}>
          <Navigation />
          <Route path="/projects" component={Projects} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/blog" component={Blog} />
          <Route exact path="/" component={About} />
          {/* <ThemeControl
            current_theme_name={"light"}
            handleThemeChange={this.handleThemeChange}
          /> */}
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
