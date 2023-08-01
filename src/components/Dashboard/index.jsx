import React from 'react'
import './style.css';
import Header from '../Header';
import { FiTrendingUp } from 'react-icons/fi'
import TrendData from '../../data'

const Dashboard = () => {

    const upStyle = {
        backgroundColor: 'rgba(1, 142, 66, 0.10)',
        color: '#018E42'
    }

    const downStyle = {
        backgroundColor: 'rgba(237, 28, 36, 0.10)',
        color: '#ED1C24'
    }


    return (
        <div className='dashboard'>
            <div className="dashboard_wrapper">

                {
                    TrendData.map((t, ind) => {
                        return (
                            <div key={ind} className="box_1 grid_box">
                                <div className="box_title">
                                    <span>{t.title}</span>
                                </div>
                                <div className="box_data">
                                    <div className="data">
                                        <div className="top_data">
                                            <h3>{t.data}</h3>
                                        </div>
                                        <div className="bottom_data">
                                            <div className="percentage" style={t.trend == 'up' ? upStyle : downStyle}> <FiTrendingUp className='trend_icon' /> {t.trend_per}</div>
                                            <span>{t.trend_quantity}</span>
                                        </div>

                                    </div>
                                    <div className="chart">
                                        <img src={t.trend_chart} alt="" />
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }

                <div className="box_5 grid_box">
                    <div className="box_title">
                        <span>chapter wise status</span>
                        <div className="statusChart">
                            <img src="./images/status.png" alt="" />
                        </div>
                    </div>

                </div>
                <div className="box_6 grid_box">box-6</div>
                <div className="box_7 grid_box">box-7</div>
                <div className="box_8 grid_box">box-8</div>
                <div className="box_9 grid_box">box-9</div>
            </div>
        </div >
    )
}

export default Dashboard