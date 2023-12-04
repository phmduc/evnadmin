import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { customTooltips, chartLinearGradient } from '../../../../components/utilities/utilities';
import { Cards } from '../../../../components/cards/frame/cards-frame';
import DashboardChart from '../../../../components/charts/DashboardChart';
import { SalesRevenueWrapper, ChartContainer } from '../../Style';
import { BorderLessHeading } from '../../../styled';
import { commandGetData } from '../../../../redux/command/actionCreator';
import { useDispatch, useSelector } from 'react-redux';

import chartContent from '../../../../demoData/dashboardChartContent.json';


const MonthlyEarning = React.memo(({ title }) => {
  const dispatch = useDispatch()
  const [earningsTab, setEarningsTab] = useState('today');

  const handleTabActivation = (value, e) => {
    e.preventDefault();
    setEarningsTab(value);
  };
  let commands = useSelector((state) => state.commands.commands)
  let earnings

  if (commands) {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();
    const currentWeek = getWeekNumber(currentDate);
  
    // Tạo mảng các labels (khoảng giờ)
    const labels = ['2(h)', '4(h)', '6(h)', '8(h)', '10(h)', '12(h)', '14(h)', '16(h)', '18(h)', '20(h)', '22(h)', '24(h)'];
  
    // Khởi tạo mảng users với giá trị ban đầu là 0
    const users = new Array(labels.length).fill(0);
  
    // Tạo mảng các labels (khoảng ngày)
    const labelsmonth = ['1-5', '6-10', '11-15', '16-20', '21-25', '26-31'];
  
    // Khởi tạo mảng users với giá trị ban đầu là 0
    const usersmonth = new Array(labelsmonth.length).fill(0);
  
    // Tạo mảng các labels (ngày trong tuần)
    const labelsweek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  
    // Khởi tạo mảng users với giá trị ban đầu là 0
    const usersweek = new Array(labelsweek.length).fill(0);
  
    // Lặp qua dữ liệu từ API để tính tổng số tiền đầu tư cho từng khoảng giờ, khoảng ngày, và khoảng tuần
    commands.forEach(item => {
      const createdDate = new Date(item.created);
  
      if (
        createdDate.getDate() === currentDate.getDate() && // So sánh ngày
        createdDate.getMonth() === currentMonth && // So sánh tháng
        createdDate.getFullYear() === currentYear // So sánh năm
      ) {
        const createdHour = createdDate.getHours();
        const labelIndex = Math.floor(createdHour / 2); // Tính chỉ số của khoảng giờ
  
        if (labelIndex < labels.length) {
          users[labelIndex] += parseInt(item.total_invested, 10);
        }
      }
  
      if (
        createdDate.getMonth() === currentMonth && // So sánh tháng
        createdDate.getFullYear() === currentYear // So sánh năm
      ) {
        const createdDay = createdDate.getDate();
        const labelIndexMonth = Math.floor((createdDay - 1) / 5); // Tính chỉ số của khoảng ngày
  
        if (labelIndexMonth < labelsmonth.length) {
          usersmonth[labelIndexMonth] += parseInt(item.total_invested, 10);
        }
      }
  
      if (
        createdDate.getFullYear() === currentYear &&
        getWeekNumber(createdDate) === currentWeek
      ) {
        const createdDayOfWeek = createdDate.getDay(); // Lấy ngày trong tuần (0 - 6, 0 là Chủ Nhật)
        usersweek[createdDayOfWeek] += parseInt(item.total_invested, 10);
      }
    });
  
    // Tạo object earnings
    earnings = {
      month: { labels: labelsmonth, users: usersmonth },
      today: { labels, users },
      week: { labels: labelsweek, users: usersweek }
    };
    function getWeekNumber(date) {
      const target = new Date(date.valueOf());
      const dayNr = (date.getDay() + 6) % 7;
      target.setDate(target.getDate() - dayNr + 3);
      const firstThursday = target.valueOf();
      target.setMonth(0, 1);
      if (target.getDay() !== 4) {
        target.setMonth(0, 1 + ((4 - target.getDay()) + 7) % 7);
      }
      return 0 + Math.ceil((firstThursday - target) / 604800000); // 604800000 = 7 * 24 * 60 * 60 * 1000
    }
  }
  
  const earningsData = earnings !== null && [
    {
      data: earnings[earningsTab].users,
      borderColor: '#8231D3',
      borderWidth: 3,
      fill: true,
      backgroundColor: () =>
        chartLinearGradient(document.getElementById('ninjadash-earning-revenue'), 300, {
          start: '#8231D340',
          end: '#ffffff05',
        }),
      label: '',
      pointStyle: 'circle',
      pointRadius: '0',
      hoverRadius: '9',
      pointBorderColor: '#fff',
      pointBackgroundColor: '#8231D3',
      hoverBorderWidth: 5,
      amount: '$7,596',
      amountClass: 'current-amount',
    },
  ];


  useEffect(()=>{
    dispatch(commandGetData())
  },[dispatch])

  return (
    <SalesRevenueWrapper>
      {earningsData !== null && (
        <BorderLessHeading>
          <ChartContainer>
            <Cards
              isbutton={
                <div className="ninjadash-card-nav">
                  <ul>
                    <li className={earningsTab === 'today' ? 'ninjadash-active' : 'ninjadash-today'}>
                      <Link onClick={(event) => handleTabActivation('today', event)} to="#">
                        Today
                      </Link>
                    </li>
                    <li className={earningsTab === 'week' ? 'ninjadash-active' : 'ninjadash-week'}>
                      <Link onClick={(event) => handleTabActivation('week', event)} to="#">
                        Week
                      </Link>
                    </li>
                    <li className={earningsTab === 'month' ? 'ninjadash-active' : 'ninjadash-month'}>
                      <Link onClick={(event) => handleTabActivation('month', event)} to="#">
                        Month
                      </Link>
                    </li>
                  </ul>
                </div>
              }
              title={title}
              size="large"
            >
              <div className="ninjadash-chart-container ninjadash-sales-revenue-lineChart">
                <DashboardChart
                  id="ninjadash-earning-revenue"
                  labels={earnings[earningsTab].labels}
                  datasets={earningsData}
                  tooltip={{
                    custom: customTooltips,
                    callbacks: {
                      title() {
                        return `Tổng đầu tư`;
                      },
                      label(t) {
                        const { formattedValue, dataset } = t;
                        return `${formattedValue} ${dataset.label}`;
                      },
                    },
                  }}
                  height={window.innerWidth <= 767 ? 200 : 90}
                />
              </div>
            </Cards>
          </ChartContainer>
        </BorderLessHeading>
      )}
    </SalesRevenueWrapper>
  );
});

MonthlyEarning.defaultProps = {
  title: 'Khối lượng đầu tư',
};

MonthlyEarning.propTypes = {
  title: PropTypes.string,
};

export default MonthlyEarning;
