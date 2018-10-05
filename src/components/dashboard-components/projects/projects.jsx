import React from "react";

import img1 from 'assets/images/users/1.jpg';
import img2 from 'assets/images/users/2.jpg';
import img3 from 'assets/images/users/3.jpg';
import img4 from 'assets/images/users/4.jpg';

import {
	Card,
	CardBody,
	CardTitle,
	CardSubtitle,
	Input,
	Table,
	Tooltip
} from 'reactstrap';

class Projects extends React.Component {
	constructor(props) {
		super(props);

		this.toggle10 = this.toggle10.bind(this);
		this.toggle20 = this.toggle20.bind(this);
		this.toggle30 = this.toggle30.bind(this);
		this.toggle40 = this.toggle40.bind(this);
		this.state = {
			tooltipOpen10: false,
			tooltipOpen20: false,
			tooltipOpen30: false,
			tooltipOpen40: false
		};
	}

	toggle10() {
		this.setState({
			tooltipOpen10: !this.state.tooltipOpen10
		});
	}

	toggle20() {
		this.setState({
			tooltipOpen20: !this.state.tooltipOpen20
		});
	}

	toggle30() {
		this.setState({
			tooltipOpen30: !this.state.tooltipOpen30
		});
	}

	toggle40() {
		this.setState({
			tooltipOpen40: !this.state.tooltipOpen40
		});
	}

	render() {
		return (
			/*--------------------------------------------------------------------------------*/
			/* Used In Dashboard-4 [General]                                                  */
			/*--------------------------------------------------------------------------------*/

			<Card>
				<CardBody>
					<div className="d-flex align-items-center">
						<div>
							<CardTitle>Projects of the Month</CardTitle>
							<CardSubtitle>Overview of Latest Month</CardSubtitle>
						</div>
						<div className="ml-auto d-flex no-block align-items-center">
							<div className="dl">
								<Input type="select" className="custom-select">
									<option value="0">Monthly</option>
									<option value="1">Daily</option>
									<option value="2">Weekly</option>
									<option value="3">Yearly</option>
								</Input>
							</div>
						</div>
					</div>
					<Table className="no-wrap v-middle" responsive>
						<thead>
							<tr className="border-0">
								<th className="border-0">Team Lead</th>
								<th className="border-0">Project</th>

								<th className="border-0">Status</th>
								<th className="border-0">Weeks</th>
								<th className="border-0">Budget</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>
									<div className="d-flex no-block align-items-center">
										<div className="mr-2"><img src={img1} alt="user" className="rounded-circle" width="45" /></div>
										<div className="">
											<h5 className="mb-0 font-16 font-medium">Hanna Gover</h5><span>hgover@gmail.com</span></div>
									</div>
								</td>
								<td>Elite Admin</td>

								<td>
									<i className="fa fa-circle text-orange" id="tlp1"></i>
									<Tooltip placement="top" isOpen={this.state.tooltipOpen10} target="tlp1" toggle={this.toggle10}>
										In Progress
                      </Tooltip>
								</td>
								<td>35</td>
								<td className="blue-grey-text  text-darken-4 font-medium">$96K</td>
							</tr>
							<tr>
								<td>
									<div className="d-flex no-block align-items-center">
										<div className="mr-2"><img src={img2} alt="user" className="rounded-circle" width="45" /></div>
										<div className="">
											<h5 className="mb-0 font-16 font-medium">Daniel Kristeen</h5><span>Kristeen@gmail.com</span></div>
									</div>
								</td>
								<td>Elite Admin</td>

								<td>
									<i className="fa fa-circle text-success" id="tlp2"></i>
									<Tooltip placement="top" isOpen={this.state.tooltipOpen20} target="tlp2" toggle={this.toggle20}>
										Success
                      </Tooltip>
								</td>
								<td>35</td>
								<td className="blue-grey-text  text-darken-4 font-medium">$96K</td>
							</tr>
							<tr>
								<td>
									<div className="d-flex no-block align-items-center">
										<div className="mr-2"><img src={img3} alt="user" className="rounded-circle" width="45" /></div>
										<div className="">
											<h5 className="mb-0 font-16 font-medium">Julian Josephs</h5><span>Josephs@gmail.com</span></div>
									</div>
								</td>
								<td>Elite Admin</td>

								<td>
									<i className="fa fa-circle text-success" id="tlp3"></i>
									<Tooltip placement="top" isOpen={this.state.tooltipOpen30} target="tlp3" toggle={this.toggle30}>
										Success
                      </Tooltip>
								</td>
								<td>35</td>
								<td className="blue-grey-text  text-darken-4 font-medium">$96K</td>
							</tr>
							<tr>
								<td>
									<div className="d-flex no-block align-items-center">
										<div className="mr-2"><img src={img4} alt="user" className="rounded-circle" width="45" /></div>
										<div className="">
											<h5 className="mb-0 font-16 font-medium">Jan Petrovic</h5><span>hgover@gmail.com</span></div>
									</div>
								</td>
								<td>Elite Admin</td>

								<td>
									<i className="fa fa-circle text-orange" id="tlp4"></i>
									<Tooltip placement="top" isOpen={this.state.tooltipOpen40} target="tlp4" toggle={this.toggle40}>
										In Progress
                      </Tooltip>
								</td>
								<td>35</td>
								<td className="blue-grey-text  text-darken-4 font-medium">$96K</td>
							</tr>
						</tbody>
					</Table>
				</CardBody>
			</Card>
		);
	}
}

export default Projects;
