import './Chart.css';
import ChartBar from './ChartBar';

export default function Chart ( props )
{
    const valueArray = props.dataPoints.map( dataPoint => dataPoint.value );
    const maxVal = Math.max( ...valueArray );
    return (
        <div className='chart'>
            { props.dataPoints.map( ( dataPoint ) => (
                <ChartBar
                    key={ dataPoint.label }
                    value={ dataPoint.value }
                    label={ dataPoint.label }
                    maxValue={ maxVal }
                />
            ) ) }
        </div>
    );
}