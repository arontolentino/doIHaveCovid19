import React, { Component } from 'react';
import Butter from 'buttercms';

import Header from '../../../Header';
import Nav from '../../../Nav';
import InfoBox from '../../../InfoBox';
import BtnQuiz from '../../../BtnQuiz';

class AsymptomaticPositive extends Component {
	state = {
		question: ''
	};

	componentDidMount() {
		const butter = Butter('bb8e6b3f415a02f3aa781af85d482ceee6a14719');

		butter.page
			.retrieve('*', 'asymptomatic-positive')
			.then(resp => {
				console.log(resp.data.data.fields.question);
				this.setState({ question: resp.data.data.fields.question });
			})
			.catch(function(resp) {
				console.log(resp);
			});
	}
	render() {
		return (
			<div className="assess-q">
				<Header backBtn="true">Self-Assessment</Header>

				<main className="main">
					<div className="secondary-wrapper">
						<InfoBox question={this.state.question} />
					</div>
				</main>

				<Nav />
			</div>
		);
	}
}

export default AsymptomaticPositive;
