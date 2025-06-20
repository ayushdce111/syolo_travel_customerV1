import React, { useEffect, useState } from 'react';
import useAdminPackages from "./AdminPackages";
import useAgentPackages from "./AgentPackages";

const usePackagesHome = () => {
  const AdminPackagesData = useAdminPackages();
  const AgentPackagesData = useAgentPackages();
  const [CompletePackagesData, setCompletePackagesData] = useState([]);

  useEffect(() => {
    const CombinedPackages = [...AdminPackagesData, ...AgentPackagesData];
    setCompletePackagesData(CombinedPackages);
  }, [AdminPackagesData, AgentPackagesData]);

  return CompletePackagesData;
};

export default usePackagesHome;
