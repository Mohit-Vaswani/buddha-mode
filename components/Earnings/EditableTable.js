"use client"
import { useState, useEffect } from 'react';

const EditableTable = () => {
  const [data, setData] = useState([['1', '18 Sep', '$10', 'Crypto']]);
  const [editedData, setEditedData] = useState([]);
  const columns = ['S.No', 'Date', 'Earnings', 'Source'];

  // Load data from localStorage on component mount
  useEffect(() => {
    const savedData = localStorage.getItem('editableTableData');
    if (savedData) {
      setData(JSON.parse(savedData));
    }
  }, []);

  // Update localStorage whenever data changes
  useEffect(() => {
    localStorage.setItem('editableTableData', JSON.stringify(data));
  }, [data]);

  // Handle editing of a cell
  const handleEdit = (rowIndex, colIndex, newValue) => {
    const updatedData = [...data];
    updatedData[rowIndex][colIndex] = newValue;
    setData(updatedData);
  };

  // Add a new row
  const handleAddRow = () => {
    setData([...data, ['', '', '', '']]);
  };

  // Remove a row
  const handleRemoveRow = (rowIndex) => {
    const updatedData = [...data];
    updatedData.splice(rowIndex, 1);
    setData(updatedData);
  };

  const calculateTotalEarnings = () => {
    let total = 0;
    for (const row of data) {
      const earnings = parseFloat(row[2].replace('$', '')); // Parse the earnings as a float
      if (!isNaN(earnings)) {
        total += earnings;
      }
    }
    return total;
  };
  

  return (
    <div className='mt-10 overflow-x-scroll sm:overflow-x-hidden'>
      <table className="table-auto border-collapse w-full text-center">
        <thead>
          <tr>
            {columns.map((column, colIndex) => (
              <th key={colIndex} className="border sm:w-72 px-4 py-2">{column}</th>
            ))}
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, colIndex) => (
                <td key={colIndex} className="border px-4 py-2">
                  <input
                    type="text"
                    value={cell}
                    className='bg-transparent w-full outline-none'
                    onChange={(e) =>
                      handleEdit(rowIndex, colIndex, e.target.value)
                    }
                  />
                </td>
              ))}
              <td className="border px-4 py-2">
                <button
                  onClick={() => handleRemoveRow(rowIndex)}
                  className="text-red-600 outline-none"
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className='flex justify-between mt-10'>
      <button onClick={handleAddRow}>Add Row</button>
      <h3 className='text-2xl'>Total: ${calculateTotalEarnings()}</h3>
      </div>
      
    </div>
  );
};

export default EditableTable;
