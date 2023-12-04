import React from 'react';
import { Row, Col } from 'antd';
import OverviewCardMesh from '../../../../components/cards/OverviewCardMesh';
import { OverviewDataStyleWrap } from '../../Style';

import OverviewData from '../../../../demoData/overviewMeshData.json';
import { getUsersData } from '../../../../redux/users/actionCreator';
import { withdrawGetData } from '../../../../redux/command/actionCreator';
import { commandGetData } from '../../../../redux/command/actionCreator';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

const OverviewDataList = React.memo(() => {

  const dispatch = useDispatch();
  let commands = useSelector((state) => state.commands.commands)
  let {  users } = useSelector((state) => {
    return {
      users: state.users.data,
    };
  });
  let withs = useSelector((state) => state.withs.withs)

  let commandstotal ={
    dataPeriod: "Tổng hợp",
    icon:  "money-wave.svg",
    id: 1,
    label:'Tổng tiền đầu tư',
    type: 'primary',
    total: commands.reduce((total,elem)=>{return total + Number(elem.total_invested)},0)
  }
  let userstotal ={
    dataPeriod: "Tổng hợp",
    icon:  "arrow-growth.svg",
    label:'Tổng số user',
    id: 2,
    type: 'info',
    total: users.length,
  }
  let orderstotal ={
    dataPeriod: "Tổng hợp",
    icon:  "shopping-cart.svg",
    label:'Tổng số lệnh đầu tư',
    id: 3,
    type: 'success',
    total: commands.length,
  }
  let withstotal ={
    dataPeriod: "Tổng hợp",
    icon:  "dollar-circle.svg",
    label:'Tổng số lệnh rút',
    id: 4,
    type: 'warning',
    total: withs.length,
  }

  OverviewData = [commandstotal, userstotal, orderstotal, withstotal]

  useEffect(()=>{
    dispatch(getUsersData());
    dispatch(withdrawGetData());
    dispatch(commandGetData());

  },[dispatch])

  console.log(OverviewData)
  return (
    <Row>
      <Col xs={24}>
        <OverviewDataStyleWrap className="card-mesh-wrap align-center-v">
          {OverviewData.map((item, i) => {
            return <OverviewCardMesh data={item} key={i} circleIcon />;
          })}
        </OverviewDataStyleWrap>
      </Col>
    </Row>
  );
});

export default OverviewDataList;
