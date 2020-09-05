import React from "react";
import {Button, Col, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import StatusBox from "./StatusBox";

const DistrictModal = (props) => {

    return (

        <Modal isOpen={props.modal}>
            <ModalHeader>District Details</ModalHeader>
            <ModalBody>
                <div className='container'>
                    {props.data.length !== 0 &&
                    props.data.map(item => {

                        return (
                            <div style={{float: "left"}} className="p-2 m-2 box-container">
                                <StatusBox
                                    name="District Name"
                                    activeCases={item.active}
                                    confirmedCases={item.confirmed}
                                    deceasesCases={item.deceased}
                                    recoveredCases = {item.recovered}

                                />
                            </div>
                        )

                    })}
                </div>
            </ModalBody>
            <ModalFooter>
                <Button color="secondary" onClick={props.toggle}>Cancel</Button>
            </ModalFooter>
        </Modal>
    )
};

export default DistrictModal;