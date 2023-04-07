import React from "react";
import {Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const options = {
    responsive: true,
    maintaimAspectRatio: false, 
};

const data = {
    labels: ['Comunicacion aseriva', 'Trabajo en equipo', 'Flexiblilidad', 'Adaptabilidad', 'gestion del tiempo'],
    datasets:[
        {
            label:'Habilidades blandas',
            data: [65, 70, 35, 80, 65],
            backgroundColor: [
                'rgba(35, 189, 224, 0.2)', 
                'rgba(54, 1, 84, 0.2)',
                'rgba(195, 168, 203, 0.2)',
                'rgba(118, 48, 73, 0.2)',
                'rgba(73, 76, 197, 0.2)',
            ],
            borderColor: [
                '#23bde0',
                '#360154',
                '#c3a8cb',
                '#763049',
                '#494cc5',
            ],
            borderWhidth: 1,
        },
    ],
};

export default function Pies() {
    return <Pie data={data} options={options} />
}