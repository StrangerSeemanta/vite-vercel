import { Fragment } from 'react';
import "./../scss/ProgressStyle.css";

export interface GraphsObject {
    GraphData: {
        graphName: string;
        data: object;
    };
}
interface BarLabelProps {
    className?: string;
    children: string;
}
function BarLabel({ className, children }: BarLabelProps) {
    return (
        <span className={className ? `${className} ${children}` : children}>{children}</span>
    )
}
function Bar({ percent, children }: any) {
    return (
        <li data-percentage={percent > 30 ? (percent > 70 ? (percent > 80 ? "Highly Expert" : "Expert") : "Comfortable") : "Familier"} style={{ height: `${[percent]}%` }}>
            {children}
        </li>
    );
}

function Graph({ GraphData }: GraphsObject) {
    // const percentage = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    return (
        <Fragment>
            <div data-aos="slide-right" className="graph-container">
                <center><h1 className='graphLabel'>{GraphData.graphName}</h1></center>

                <div className='graph-holder'>

                    <div className="percent">
                        <ul>
                            <li>Expert</li>
                            <li>Comfortable</li>
                            <li>Familier</li>
                        </ul>
                    </div>
                    <div className="skill">
                        <ul>
                            {Object.entries(GraphData.data).map(([item, value]) => (
                                <Bar key={item} percent={value}>
                                    {item.split('').map((char, charIndex) => (
                                        <BarLabel className='charSpan' key={charIndex}>
                                            {char}
                                        </BarLabel>
                                    ))}
                                </Bar>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default Graph;
