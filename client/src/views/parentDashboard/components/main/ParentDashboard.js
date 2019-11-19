import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './parentDashboard.scss';
import { getFamily } from "../../../../actions/parentDashboardActions/parentDashboard/ParentDashboardActions";
import { Spin } from 'antd';
import ChildrenCard from './ChildrenCard';
import { Modal } from 'antd';
import AddStudent from './AddStudent';
import SuccessPage from './SuccessPage';

function ParentDashboard(props) {
  const [modalState, setModalState]= useState(false);
  const [success, setSuccess] = useState(false);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    props.getFamily(props.user_id);
  }, [reload]);

  const addNewStudent = () => {

  }

  const updateFamilyInfo = () => {

  }

  const openModal = () => {
    setModalState(true)
  }

  const cancelModal = () => {
    setModalState(false);
    if (success) {
      setReload(true);
    }
  }
  
  if (props.isLoading) {
    return <Spin style={{marginTop: '20px'}}size="large" />
  } else {
      return (
          <div className="parent-dashboard">
            <div style={{marginTop: '20px', fontSize: '32px', color: 'black'}}>My Children</div>
            <div style={{display: 'flex', justifyContent: 'flex-end'}}>
              <button onClick={openModal} className="button">Add New Student</button>
            </div>
            {props.children.map((item, index) => {
              return <ChildrenCard item={item} key={index} />
            })}
            <div className="family-card">
              <div style={{fontSize: '34px', color: 'black'}}>Family Info</div>
              <div style={{display: 'flex', flexDirection: 'column', textAlign: 'left', marginLeft: '20px'}}>
                <div style={{display: 'flex'}}>
                  <div style={{fontSize: '24px', fontWeight: '700', color: 'black'}}>Father's Name:&nbsp;</div><div style={{fontSize: '24px', color: 'black'}}>{props.father_name}</div>
                </div>
                <div style={{display: 'flex'}}>
                  <div style={{fontSize: '24px', fontWeight: '700', color: 'black'}}>Mother's Name:&nbsp;</div><div style={{fontSize: '24px', color: 'black'}}>{props.mother_name}</div>
                </div>
                {/* <div style={{display: 'flex'}}>
                  <div style={{fontSize: '24px', fontWeight: '700', color: 'black'}}>Address:&nbsp;</div><div style={{fontSize: '24px', color: 'black'}}>{props.building}&nbsp;{props.road}&nbsp;{props.flat}</div>
                </div> */}
                <div style={{display: 'flex'}}>
                  <div style={{fontSize: '24px', fontWeight: '700', color: 'black'}}>Phone:&nbsp;</div><div style={{fontSize: '24px', color: 'black'}}>{props.primary_telephone ? props.primary_telephone : props.secondary_telephone}</div>
                </div>
              </div>
              <button onClick={updateFamilyInfo} className="button-update">Update</button>
            </div>
            <Modal
              title="Add Child"
              width="60%"
              visible={modalState}
              onCancel={cancelModal}
              footer={null}
              >
              {success ? (
                <SuccessPage />
              ) : (
                <AddStudent setSuccess={setSuccess}/>
              )}
              
            </Modal>
          </div>
      )
    }
}

const mapStateToProps = state => {
  return {
    user_id: state.authenticationReducer.user.user_id,
    isLoading: state.parentDashboardReducer.isLoading,
    family_id: state.parentDashboardReducer.family_id,
    block_code: state.parentDashboardReducer.block_code,
    building: state.parentDashboardReducer.building,
    road: state.parentDashboardReducer.road,
    flat: state.parentDashboardReducer.flat,
    father_name: state.parentDashboardReducer.father_name,
    mother_name: state.parentDashboardReducer.mother_name,
    primary_telephone: state.parentDashboardReducer.primary_telephone,
    secondary_telephone: state.parentDashboardReducer.secondary_telephone,
    children: state.parentDashboardReducer.children,
  };
};

export default withRouter(
  connect(
      mapStateToProps,
      { getFamily }
  )(ParentDashboard)
)