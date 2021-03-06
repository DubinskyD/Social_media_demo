import React from 'react';
import classes from './MainContent.module.css';

import Messages from './messages/messages.jsx';
import Gallery from './gallery/gallery.jsx';
import Feed from './feed/feed.jsx';
import UsersContainer from './users/usersContainer';
import { Route, Redirect } from 'react-router-dom';
import ProfileContainer from './profile/profileContainer';
import LoginPage from './login/login';

const MainContent = (props) => {
   return (

      <div className={classes.main_content}>

         <Route path="/" render={() => <Redirect to={"/profile"} />} />
         <Route path="/login" render={() => <LoginPage />} />
         <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
         <Route path="/messages" render={() => <Messages />} />
         <Route path="/gallery" component={Gallery} />
         <Route path="/feed" component={Feed} />
         <Route path="/users" render={() => <UsersContainer />} />

      </div>

   );
}



export default MainContent;
