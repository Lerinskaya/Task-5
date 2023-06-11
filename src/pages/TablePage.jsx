import React, { useState, useEffect } from 'react';
import SelectRegion from '../components/Select';
import ErrorCount from '../components/ErrorCount';
import Seed from '../components/Seed';
import Table from '../components/Table';
import generateData from '../utils/data';

const TablePage = () => {
  const [region, setRegion] = useState('');
  const [errorCount, setErrorCount] = useState(0);
  const [seed, setSeed] = useState('');
  const [showTable, setShowTable] = useState(false);
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (!seed && !region) {
      setRegion('Russia');
      setSeed(+'2');
    } else {
      loadData();
      setShowTable(true);
    }
  }, [region, seed, errorCount]);

  const loadData = () => {
    const newData = generateData(seed, region, errorCount);
    if (newData.length > 0) {
      setData((prevData) => [...prevData, ...newData]);
      setPage((prevPage) => prevPage + 1);
    }
  };

  const handleRegionChange = (e) => {
    setRegion(e.target.value);
    setData([]);
  };

  const handleSeedChange = (e) => {
    setSeed(+e.target.value);
    setData([]);
  };

  const handleSliderChange = (e) => {
    setErrorCount(e.target.value);
    setData([]);
  };

  const handleRandomSeed = () => {
    setSeed(+seed + +page);
    setData([]);
  };

  return (
    <div className='w-80'>
      <div className='mb-3'>
        <SelectRegion region={region} handleRegionChange={handleRegionChange} />
      </div>
      <div className='d-flex align-items-center mb-3'>
        <ErrorCount errorCount={errorCount} handleSliderChange={handleSliderChange} />
      </div>
      <div className='d-flex align-items-center mb-3'>
        <Seed seed={seed} handleRandomSeed={handleRandomSeed} handleSeedChange={handleSeedChange} />
      </div>
      {showTable && (
        <div className='w-100 mt-5 fs-4'>
          <Table data={data} loadData={loadData} />
        </div>
      )}
    </div>
  );
};

export default TablePage;
