import { useState, useEffect } from 'react';
import API from '../../../axios.jsx';

function useAgentPackages() {
    const [AgentPackagesData, setAgentPackagesData] = useState([]);

    const fetchAgentPackages = async () => {
        try {
            const data = await API.get('/api/getAgentPackages');
            setAgentPackagesData(data.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchAgentPackages();
    }, []);

    return AgentPackagesData;
}

export default useAgentPackages;
