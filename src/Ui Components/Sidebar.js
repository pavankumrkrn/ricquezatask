import React from 'react'
export const Sidebar = (props) => {
    return (
        <div className="sidebar">
            <div className="card shd pt-5 sidebarCard mb-2 mt-2">
                <div className="card-body">
                    <div className="row mb-5 litem" onClick={() => {
                        props.filterP('veg')
                    }}>
                        <div className="col-sm-12">
                            <p className="text-center h5">Veg-Pizzas</p>
                        </div>
                    </div>
                    <div className="row mb-5 litem" onClick={() => {
                        props.filterP('veg')
                    }}>
                        <div className="col-sm-12">
                            <p className="text-center h5">Chicken-Pizzas</p>
                        </div>
                    </div>
                    <div className="row mb-5 litem" onClick={() => {
                        props.filterP('veg')
                    }}>
                        <div className="col-sm-12">
                            <p className="text-center h5">Mutton-Pizzas</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}