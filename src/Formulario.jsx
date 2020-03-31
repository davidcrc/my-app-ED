import React, {Component} from "react";

// Se debe extender la clase primero
class Formulario extends Component{

    // Solamente si recibo props debo declara este constructor
    constructor( props ){
        super(props)

        // Aqui se inicializa todas las variables, logica y datos 
        // necesaria para poder rederizarlos despues
        this.state = {
            nombre: "",
            correo: "",
            fecha: new Date
        }

        // bind es necesario para que haga un enlace a las funciones declaradas abajo
        this.onChangeNombre = this.onChangeNombre.bind(this)
        this.onChangeCorreo = this.onChangeCorreo.bind(this)
        this.updateFecha = this.updateFecha.bind(this)
    }

    onChangeNombre(e){
        // ESTO estaba en vez de la funcion
        // (e) => this.setState({
        //     nombre: e.target.value
        // })
        this.setState({
            nombre: e.target.value
        })
    }

    onChangeCorreo(e){
        // ESTO estaba en vez de la funcion
        // (e) => this.setState({
        //     correo: e.target.value
        // })
        // console.log('cambieee a: '+ e.target.value)
        this.setState({
            correo: e.target.value
        })
    }

    updateFecha(){
        this.setState({
            fecha: new Date
        })
    }

    // Unico metodo obligatorio en la clase
    render(){

        return(
            <div className="ed-grid">
                <h1>Formulario</h1>
                <h4> Fecha actual : { Math.ceil (this.state.fecha/1000)} </h4>
                {/* <form className="ed-container"> */}
                <form>
                    <div className="ed-grid m-grid-2">
                        <div className="form__item">
                            <label> Nombre completo</label>
                            <input type="text" onChange={ this.onChangeNombre } placeholder="nombre"></input>
                        </div>

                        <div className="form__item">
                            <label> Correo Electrónico</label>
                            <input onChange={ this.onChangeCorreo } type="email"></input>
                        </div>

                        {/* <div className="form__item">
                            <input className="button full" type="submit" value="Enviar"></input>
                        </div> */}

                    </div>
                </form>

                <div>
                    <h2> { `Hi ${this.state.nombre}` } </h2>
                    <span>{ `Correo ${this.state.correo } ` } </span>
                </div>
            </div>
        )
    }


    // Cuando los componentes ya fueron montados, hará:
    componentDidMount(){
        console.log("Ya cargue toda la web")

        this.intervaloFecha = setInterval(  () => {
            this.updateFecha()
            console.log("Fehca")
        }, 1000)
    }

    // Cuando un componente se actualiza, hara:
    // Tambien se puede acceder a un estado anterior a la actualizacion ( prev, prev)
    // referidas a las variables q existen en toda la clase
    componentDidUpdate(prevProps, prevState){
        console.log("State: ", prevState)
        console.log("Props: ", prevProps)

    }

    // Para detener, modificar ciertas variables , como por ejemplo el setInterval
    componentWillUnmount(){
        clearInterval(this.intervaloFecha)
    }

}


export default Formulario