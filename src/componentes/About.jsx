import React, {useEffect} from 'react';

const About = () =>{

    const [equipo, setequipo] = React.useState([])

    useEffect(() => {
        //console.log('useEffect')
        obtenerDatos()
    }, [])

    const obtenerDatos = async () => {
        const data = await fetch('https://jsonplaceholder.typicode.com/users')
        const users = await data.json()
        console.log(users)
        setequipo(users)
    }

    return(
        <div>
            <h1>About...</h1>
            <ol>
                {
                    equipo.map(item => (
                        <li key={item.id}>
                            {item.name} - {item.username} - {item.email}
                        </li>
                    ))
                }
            </ol>
        </div>
    );
}

export default About;
