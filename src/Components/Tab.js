import React from 'react'
import '../Components/Styles/Footer.css'

const Tab = () => (
    <React.Fragment>
        <div className="container col-12">
            <div className="row">
                <div className="Footer footer d-md-none col-sm-12">
                    <nav className="d-flex justify-content-center m-2">
                        <div className="mx-auto">
                            <i class="fas fa-home text-center m-0 p-0"></i>
                            <p className="tab-text m-0 p-0">Inicio</p>
                        </div>
                        <div className="mx-auto text-center">
                            <i class="fas fa-search m-0 p-0"></i>
                            <p className="tab-text m-0 p-0">Buscar</p>
                        </div>
                        <div className="mx-auto text-center">
                            <i class="fas fa-list-ul m-0 p-0"></i>
                            <p className="tab-text m-0 p-0">Categorías</p>
                        </div>
                        <div className="mx-auto text-center">
                            <i class="fas fa-user-circle m-0 p-0"></i>
                            <p className="tab-text m-0 p-0">Tú</p>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </React.Fragment>
)

export default Tab