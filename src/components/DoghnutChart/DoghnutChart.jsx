import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const DoghnutChart = () => {
    const data = {
        labels: [
            'Amazon',
            'Flipkart',
            'Snapdeal'
        ],
        datasets: [{
            data: [300, 50, 100],
            backgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56'
            ],
            hoverBackgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56'
            ]
        }]
    };

    return (
        <div>
            <h3 style={{ padding: '15px' }}>Sales Statastics</h3>
            <Doughnut data={data} />
        </div>
    )
}
export default DoghnutChart;