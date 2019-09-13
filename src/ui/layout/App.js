import React , {Component} from "react"
import Header from "./Header"
import Footer from "./Footer"
import Main from "./Main"
import Formulario from "../widgets/Formulario"
import { tsImportEqualsDeclaration } from "@babel/types";

class App extends Component {

    constructor(){
        super()
        this.state = {
            links : ["perfil","portfolio","contacto"],
            texto : "Lorem Ipsum",
            visible : true,
            nombre : "",
            apellido : "",
            usuarios : []
        }
        this.cambiarTexto = this.cambiarTexto.bind(this)
        this.toggleVisibility = this.toggleVisibility.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    cambiarTexto(){
        this.setState({ texto : "Ipsum Lorem" })
    }
    
    handleSubmit(e){
        e.preventDefault()
        
        //1) Selectores
        // letnombre = document.querySelector("input").value

        //2) Prop "ref"
        
        //3) 
        // let nombre = e.target[0].value
        // console.dir(nombre)

        //4) Controlar el cambio del input y a cada cambio de valor, 
        //guardarlo en el state de un padre. Usar este valor para retroalimentar el mismo input.
        
        let usuario = { [this.state.nombre] : this.state.apellido }
        
        this.state.usuarios.push(usuario)
        
        this.setState({nombre : ""})
        this.setState({apellido : ""})
    }

    handleChange(e){
        // let id = e.target.id
        // let value = e.target.value
        // let campo = {}
        // campo[id] = value //Se pone el id entre corchetes para que la prop del obejto 'campo' se llame como el valor de 'id'.
        // this.setState(campo)

        this.setState({[e.target.id] : e.target.value})
    }


    toggleVisibility(){
        this.setState({ visible : !this.state.visible })
    }

    render(){
        let {links,texto,visible,nombre,apellido} = this.state
        return (
            <>
            <Header links={links}/>
            <Main/>
            
            <Formulario visible={visible} toggleVisibility={this.toggleVisibility} handleSubmit={this.handleSubmit} handleChange={this.handleChange} nombre={nombre} apellido={apellido} />
            
            <Footer/>
            </>     
        ) 
    }
}

export default App

