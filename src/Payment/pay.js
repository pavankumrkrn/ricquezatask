
import React from 'react';
import { Footer } from '../Ui Components/Footer';
import { Pay2 } from './pay2';
export const Pay = () => {
    const [title, SetTitle] = React.useState('')

    return (
        <>
            <div className="row pr-5 p-5">
                <div className="col-lg-4 col-md-6 col-sm-12 mt-auto mb-auto">
                    <div className="row mt-3 mb-3 remove" onClick={() => SetTitle('PayTM')}>
                        <div className="col-sm-12">
                            Paytm
                    </div>
                    </div>
                    <hr />
                    <div className="row mt-3 mb-3 remove" onClick={() => SetTitle('UPI')}><div className="col-sm-12">
                        UPI
                    </div></div>
                    <hr />
                    <div className="row mt-3 mb-3 remove" onClick={() => SetTitle('Card')}><div className="col-sm-12">
                        Debit / Credit Card
                    </div></div>
                    <hr />
                    <div className="row mt-3 mb-3 remove" onClick={() => SetTitle('Cash')}><div className="col-sm-12">
                        Cash on Delivery
                    </div></div>
                    <hr />
                </div>
                <div className="col-lg-8 col-md-6 col-sm-12">
                    <Pay2 title={title} />
                </div>
            </div>

        </>
    )
}