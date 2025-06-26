import { useState, useEffect } from 'react';
import API from '../../../axios.jsx';

function useAdminPackages() {
    const [AdminPackagesData, setAdminPackagesData] = useState([]);

    const fetchAdminPackages = async () => {
        try {
            const data = await API.get('/api/getAdminPackages');
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
