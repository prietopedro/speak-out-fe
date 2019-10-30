import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavBar from './header/NavBar';
import Panel from './main/Panel';


function Home(props) {

  useEffect(() => {
    console.log('HOME props: ', props)
  }, [])
  
  return (
    <div>
      {/* <Panel /> */}
      <Link to='/panel'>Panel </Link> <br/>
      <Link to='/students'>Student Table</Link>
    </div>
  ) 
}

export default Home;
