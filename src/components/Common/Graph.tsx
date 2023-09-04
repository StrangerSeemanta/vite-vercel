import React, { Fragment } from 'react';
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
        <li data-percentage={`${percent}%`} style={{ height: `${[percent]}%` }}>
            {children}
        </li>
    );
}

function Graph({ GraphData }: GraphsObject) {
    return (
        <Fragment>
            <div data-aos="slide-right" className="graph-container">
                <center><h1 className='graphLabel'>{GraphData.graphName}</h1></center>

                <div className='graph-holder'>

                    <div className="percent">
                        <ul>
                            {Array.from({ length: 11 }).map((item, index) => (
                                <li key={index}>
                                    {`${100 - index * 10}%`}
                                </li>
                            ))}
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
