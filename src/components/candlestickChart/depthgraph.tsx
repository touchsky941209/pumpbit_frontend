import React, { useEffect, useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { TPairInfo, TTick } from "@/lib/types";
interface props {
    tickData: TTick[]
}

const MarketDepthChart = ({ tickData }: props) => {
    const [options, setOptions] = useState<any>()

    useEffect(() => {
        const interval = setInterval(() => {

            const seriesData1 = tickData.map((tick: any) => [
                tick.open,
                tick.time / 1000, // Convert to milliseconds
            ]);
            const seriesData2 = tickData.map((tick: any) => [
                tick.close,
                tick.time / 1000, // Convert to milliseconds
            ]);

            const _options = {
                chart: {
                    type: 'area',
                    zooming: {
                        type: 'xy'
                    },
                    backgroundColor: 'transparent'
                },
                title: {
                    text: ''
                },
                xAxis: {
                    minPadding: 0,
                    maxPadding: 0,
                    plotLines: [{
                        color: '#888',
                        value: 0.1523,
                        width: 1,
                        label: {
                            text: 'Actual price',
                            rotation: 90
                        }
                    }],
                    title: {
                        text: 'Price'
                    }
                },
                yAxis: [{
                    lineWidth: 1,
                    gridLineWidth: 1,
                    title: null,
                    tickWidth: 1,
                    tickLength: 5,
                    tickPosition: 'inside',
                    labels: {
                        align: 'left',
                        x: 8
                    }
                }, {
                    opposite: true,
                    linkedTo: 0,
                    lineWidth: 1,
                    gridLineWidth: 0,
                    title: null,
                    tickWidth: 1,
                    tickLength: 5,
                    tickPosition: 'inside',
                    labels: {
                        align: 'right',
                        x: -8
                    }
                }],
                legend: {
                    enabled: false
                },
                plotOptions: {
                    area: {
                        fillOpacity: 0.2,
                        lineWidth: 1,
                        step: 'center'
                    }
                },
                tooltip: {
                    headerFormat: '<span style="font-size=10px;">Price: {point.key}</span><br/>',
                    valueDecimals: 2
                },
                series: [{
                    name: 'Bids',
                    data: seriesData1,
                    color: '#03a7a8'
                },
                {
                    name: 'Asks',
                    data: seriesData2,
                    color: '#fc5857'
                }]
            };

            setOptions(_options)
        }, 1000)
        return () => clearInterval(interval)
    }, [])



    return (
        <HighchartsReact
            highcharts={Highcharts}
            options={options}
        />
    );
};

export default MarketDepthChart;


// Prepare the series data from tickData
// useEffect(() => {
//     const interval = setInterval(() => {
//         const _seriesData = tickData.map((tick: any) => [
//             new Date(tick.t).getTime(), // Convert timestamp to milliseconds
//             parseFloat(tick.c) // Use closing price
//         ]);
//         setSeriesData(_seriesData)
//     }, 1000)
//     return () => clearInterval(interval)
// }, [])



