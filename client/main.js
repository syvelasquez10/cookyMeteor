import React from 'react';
import {meteor} from 'meteor/meteor';
import {render} from 'react-dom';
import './main.html';
import App from '../imports/ui/App.jsx';

import ReactDOM from 'react-dom';
import { HashRouter, Route, Link } from 'react-router-dom';


import HomePage from '../imports/ui/HomePage.jsx';

import Votos from '../imports/ui/recipes/Featured.jsx';
import Search from '../imports/ui/recipes/Search.jsx';
import Recipes from '../imports/ui/recipes/recipes.jsx';
import Add from '../imports/ui/recipes/addRecipe.jsx';

import Me from '../imports/ui/Me.jsx';

Meteor.startup(()=>{
	ReactDOM.render((
			 <HashRouter>
	     <div>
		     <Route exact path='/' component={App}/>
		     <Route path='/general/featured' component={Featured}/>
		     <Route path='/general/search' component={Search}/>
		     <Route path='/misRecetas/adicionar' component={Add}/>
		     <Route path='/misRecetas/ver' component={Recipes}/>
		     <Route path='/miPerfil' component={Me}/>
	 		 </div>
	  	 </HashRouter>
		),document.getElementById('render-target')
	);
});
