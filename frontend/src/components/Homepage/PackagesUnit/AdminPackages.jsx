import { useState, useEffect } from 'react';
import axios from "axios";

function useAdminPackages() {
    const [AdminPackagesData, setAdminPackagesData] = useState([]);

    const fetchAdminPackages = async () => {
        try {
            const data = await axios.get('http://localhost:5000/api/getAdminPackages');
            setAdminPackagesData(data.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchAdminPackages();
    }, []);

    return AdminPackagesData;
}

export default useAdminPackages;
