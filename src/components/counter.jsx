import React,{Component} from 'react'


export default class Counter extends Component {

    // Hola! soy el constructor, el primero al que llaman al montar el componente!
    constructor(props) {
        super();
        this.state = {value: props.value};
        window.addEventListener('click', this.onIncrementClick);
        console.log('CONSTRUYENDOME, EN LA BARRIGA DE MI MAMÁ');
    }

    onIncrementClick = (e) => {
        console.log('Me han hecho click en (X,Y)', e.screenX, e.screenY);
    }

    static getDerivedStateFromProps(props, state) {
        console.log('Ey! me estan pasando nuevos props!', props, state);
        return (props.value);
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('Ey! me estan cambiando los props! Renderizo?', nextProps, nextState);
        if(this.props.value === nextProps.value)
            return false;
        return true;
    }

    componentDidMount(){
        console.log('OK! HOLA MUNDO, HE NACIDO!');
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('RECIEN PINTADITO');
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        console.log('OK! Ya he terminado de RENDERIZARME y me han cambiado los props');
    }

    componentWillUnmount() {
        console.log('ME HAN ELIMINADO! CHAO!!');
        window.removeEventListener('click', this.onIncrementClick);
    }

    // Soy la funcion render despues del contructor me ejecuto para pintar el componente
    render(){
        console.log('Ey! RENDERIZANDOME!. Mis props:', this.props, this.state);
        return(
            <span>{this.props.value}</span>
        )
    }
}