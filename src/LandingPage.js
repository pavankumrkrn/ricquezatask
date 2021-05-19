import React from 'react';
import { Carousel } from './Carousel/Carousel';
import { MainNavbar } from './Ui Components/MainNavbar';
import { Sidebar } from './Ui Components/Sidebar';
import { SideContent } from './Ui Components/SideContent';
import { ModalExample } from './Ui Components/ModalExample';
import { Footer } from './Ui Components/Footer';
import { CurrentOrders } from './Ui Components/CurrentOrders'

export const LandingPage = () => {

    let [obj, setObj] = React.useState([{}, false]);
    let [pizzas, setPizzas] = React.useState([]);
    let [cart, setCart] = React.useState([]);
    const [modal, setModal] = React.useState(false);
    const toggle = () => setModal(!modal);
    React.useEffect(() => {
        fetch('https://damp-caverns-01669.herokuapp.com/pizzas').then((data) => data.json())
            .then((data) => {
                console.log(data)
                setObj([data, true])
            })
    }, []);
    const addPizza = (p) => {
        setCart(cart.concat(p))
    }

    const removeItem = () => {

    }

    const filterP = (s) => {
        if (s === 'veg') {
            setPizzas(pizzas.filter(i => {
                if (i.type === undefined) {
                    return true
                }
            }))
        }
    }

    if (obj[1]) {

        return (
            <div className="container-fluid">
                <Carousel />
                <div className="mt-3">
                    <MainNavbar />
                </div>
                <CurrentOrders />
                <div className="row">
                    <div className="col-lg-3 col-md-3">
                        <Sidebar filterP={filterP} />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 mt-5 content">
                        <div className="row">
                            {obj[0].pizzas.map((i, index) => {
                                return (
                                    <div className="col-lg-6 col-md-6 col-sm-12" key={index}>
                                        <div className="card shd mt-2">
                                            <img src={i.image} alt="" className="card-img-top" />
                                            <div className="card-body">
                                                <div className="card-title">
                                                    <p className="h4 text-center">{i.name}</p>
                                                </div>
                                                <hr />
                                                <div className="card-text txt">
                                                    <p className="text-center">{i.Description}</p>
                                                </div>
                                                <hr />
                                                <div className="card-text mt-5">
                                                    <div className="row">
                                                        <div className="col-lg-6 col-md-6 col-sm-12">
                                                            <p className="text-left mt-2">Price :
                                                            <b>{' Rs.' + i.price}</b></p>
                                                        </div>
                                                        <div className="col-lg-6 col-md-6 col-sm-12">
                                                            <p className="text-right">
                                                                <button className="btn btn-light btn-outline-danger" key={index}
                                                                    onClick={() => {
                                                                        addPizza(i)
                                                                        toggle()
                                                                    }}>Add +</button>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}

                            <ModalExample toggle={toggle} modal={modal} obj={obj[0]} />
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3">
                        <SideContent cart={cart} removeItem={removeItem} />
                    </div>
                </div>
                <Footer />
            </div>

        )
    } else {
        return (
            <div className=""></div>
        )
    }

}