import React from 'react';
import StatusBox from "../components/StatusBox";
import {Button, Col, Modal, ModalBody, ModalFooter, ModalHeader, Row} from "reactstrap";
import DistrictModal from "../components/DistrictModal";
import '../style/styles.css'

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            isModal: false,
            districtList: []
        };
    }

    componentDidMount() {
        //fetching json from URL
        //convert json into an array
        fetch('https://api.covid19india.org/state_district_wise.json')
            .then(response => {
                response.json().then(item => {
                    let mArray = Object.keys(item).map(function (k) {
                        return item[k]

                    });
                    this.setState({data: mArray});
                })

            })
    }

    //handle click event
    clickHandler = (data) => {
        this.setState({
            isModal: true,
            districtList: data
        })
    };

    cancelModal = () => {
        this.setState({isModal: false})
    };

    render() {
        return (
            <div>

                <div className="container">
                    <h3>COVID Cases</h3>
                    {/*listing all states*/}
                    {this.state.data.length !== 0 &&
                    this.state.data.map(item => {
                        console.log(item.districtData);
                        let districtLists = [];
                        let active = 0;
                        let confirmed = 0;
                        let deceased = 0;
                        let recovered = 0;
                        let mArray = Object.keys(item.districtData).map(function (k) {
                            return item.districtData[k]

                        });
                        districtLists = mArray;

                        //calculating total count in state wise by adding count from district wise
                        districtLists.map(item => {
                            confirmed = confirmed + item.confirmed;
                            active = active + item.active;
                            deceased = deceased + item.deceased;
                            recovered = recovered + item.recovered;
                        });
                        return (
                            <div style={{float: "left"}} className="p-2 m-2 box-container"
                                 onClick={() => {
                                     this.clickHandler(districtLists)
                                 }}
                            >
                                <StatusBox
                                    name={item.statecode}
                                    activeCases={active}
                                    confirmedCases={confirmed}
                                    deceasesCases={deceased}
                                    recoveredCases={recovered}

                                />
                            </div>
                        )

                    })}

                </div>

                <DistrictModal
                    modal={this.state.isModal}
                    data={this.state.districtList}
                    toggle={() => this.cancelModal()}
                />

            </div>
        )
    }
}

export default Home;
/**
 * Created
 * ------------
 * Date: 05/09/2020
 * Author: Arun Jose
 */