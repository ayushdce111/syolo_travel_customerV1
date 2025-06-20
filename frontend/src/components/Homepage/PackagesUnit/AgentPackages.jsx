import { useState, useEffect } from 'react';
import axios from "axios";

function useAgentPackages() {
    const [AgentPackagesData, setAgentPackagesData] = useState([]);

    const fetchAgentPackages = async () => {
        try {
            const data = await axios.get('http://localhost:5000/api/getAgentPackages');
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
