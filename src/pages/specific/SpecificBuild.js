import {useParams} from 'react-router-dom';

function SpecificBuild() {
    const {id} = useParams();
    return (
        <h1>{id}</h1>
    );
}

export default SpecificBuild;