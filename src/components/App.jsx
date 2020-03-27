import React from 'react';
import Basics from './Basics';
import Education from './Education'
import Experiences from './Experiences'
import PersonalProjects from './PersonalProjects'

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {faPhone,faEnvelope,faUniversity} from '@fortawesome/free-solid-svg-icons'

library.add(fab,faPhone,faEnvelope,faUniversity);

const App = () => {
	return (
		<div className="resume">
			<Basics />
			<Education />
			<Experiences />
			<PersonalProjects />
		</div>
		
	)
};

export default App;
