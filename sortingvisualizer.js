import React, {useState, useEffect} from 'react';
import ReactApexChart from 'react-apexcharts';

function InsertionSortVisualizer() {

  const [originalArray, setOriginalArray] = useState([]);
  const [array, setArray] = useState([]);

  useEffect(() => {
    generateRandomArray();
  }, []);

  function generateRandomArray() {
    const arr = [];
    for(let i = 0; i < 20; i++){
      arr.push(randomIntFromInterval(5, 100));
    }
    setOriginalArray(arr);
    setArray(arr);
  }

  function randomIntFromInterval(min, max) {  
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  async function insertionSort() {
    const arr = [...array];
    for(let i = 1; i < arr.length; i++) {
      let key = arr[i];
      let j = i - 1; 
      
      while(j >= 0 && arr[j] > key) {
        arr[j+1] = arr[j];
        j--;
        await sleep(50);
        setArray([...arr]);  
      }
      arr[j+1] = key;
    }
  }

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  return (
    <div>
      <h1>Insertion Sort Visualizer</h1>
      
      <button onClick={generateRandomArray}>Generate New Array</button>

      <button onClick={insertionSort}>Sort</button>

      <ReactApexChart 
        options={{ chart: { type: 'bar' }}}
        series={[{
          data: array
        }]}
        type="bar"
        height={350}
      />

    </div>
  );
}

export default InsertionSortVisualizer;