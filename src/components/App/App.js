import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from '../Home/Home'
import About from '../About/About'
import SinglePost from '../SinglePost/SinglePost'
import Posts from '../Posts/Posts'
import Projects from '../Projects/Projects'
import NavBar from '../NavBar/NavBar'
import SocialBar from '../SocialBar/SocialBar'

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route component={Home} path="/" exact />
        <Route component={About} path="/about" />
        <Route component={SinglePost} path="/posts/:slug" />
        <Route component={Posts} path="/posts" />
        <Route component={Projects} path="/projects" />
      </Switch>
      <SocialBar />
    </BrowserRouter>
  )
}

export default App
