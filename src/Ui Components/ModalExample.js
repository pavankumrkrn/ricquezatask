import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export const ModalExample = (props) => {
    return (
        <div>
            <Modal isOpen={props.modal} toggle={props.toggle}>
                <ModalHeader toggle={props.toggle}>Pizza Name</ModalHeader>
                <ModalBody>
                    <div className="overflow">

                        <div className="row">
                            <div className="col-sm-12">
                                <p className="text-center h5 mb-2">Veggies</p>
                            </div>
                        </div>
                        <div className="row">
                            {props.obj.veggies.map((i, index) => {
                                let str = i.icon.split("'")
                                if (index !== 3) {
                                    return (
                                        <div className="col-sm-4 item" key={index}>
                                            <p className="text-center">{i.name}</p>
                                            <p className="text-center"><i className={str[1]}></i></p>
                                        </div>
                                    )
                                }
                            })}
                        </div>
                        <hr />
                        <p className="text-center h5 mb-2">Add extra veggie</p>
                        <div className="row">
                            {props.obj.veggies.map((i, index) => {
                                let str = i.icon.split("'")
                                return (
                                    <div className="col-sm-3 item" key={index}>
                                        <input type="checkbox" onChange={(e) => {
                                            props.addItem(e.target.checked, i)
                                        }} />
                                        <p className="text-center">{i.name}</p>
                                        <p className="text-center"><i className={str[1]}></i></p>
                                        <p className="text-center">Price :{' ' + i.price}</p>
                                    </div>
                                )
                            })}
                        </div>
                        <hr />
                        <p className="text-center h5 mb-2">Meat Type</p>
                        <div className="row">
                            {props.obj.meat.map((i, index) => {
                                let str = i.icon.split("'")
                                return (
                                    <div className="col-sm-4 item" key={index}>
                                        <input type="checkbox" onChange={(e) => {
                                            props.addItem(e.target.checked, i)
                                        }} />
                                        <p className="text-center">{i.name}</p>
                                        <p className="text-center"><i className={str[1]}></i></p>
                                        <p className="text-center">Price :{' ' + i.price}</p>
                                    </div>
                                )
                            })}
                        </div>
                        <hr />
                        <p className="text-center h5 mb-2">Base</p>
                        <div className="row">
                            {props.obj.base.map((i, index) => {
                                return (
                                    <div className="col-sm-4 item" key={index}>
                                        <input type="checkbox" onChange={(e) => {
                                            props.addItem(e.target.checked, i)
                                        }} />
                                        <p className="text-center">{i.name}</p>
                                        <p className="text-center">Price :{' ' + i.price}</p>
                                    </div>
                                )
                            })}
                        </div>
                        <hr />
                        <p className="text-center h5 mb-2">Cheese</p>
                        <div className="row">
                            {props.obj.cheese.map((i, index) => {
                                return (
                                    <div className="col-sm-6 item" key={index}>
                                        <input type="checkbox" onChange={(e) => {
                                            props.addItem(e.target.checked, i)
                                        }} />
                                        <p className="text-center">{i.cheese}</p>
                                        <p className="text-center">Price :{' ' + i.price}</p>
                                    </div>
                                )
                            })}
                        </div>
                        <hr />
                        <p className="text-center h5 mb-2">Sauce</p>
                        <div className="row">
                            {props.obj.sauce.map((i, index) => {
                                return (
                                    <div className="col-sm-4 item" key={index}>
                                        <input type="checkbox" onChange={(e) => {
                                            props.addItem(e.target.checked, i)
                                        }} />
                                        <p className="text-center">{i.name}</p>
                                        <p className="text-center">Price :{' ' + i.price}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={props.toggle}>Do Something</Button>{' '}
                    <Button color="secondary" onClick={props.toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}
