import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getStudent } from '../actions';
import { Card } from 'antd';
import 'antd/dist/antd.css';


const StudentCard = props => {
    const tabList = [
        {
            key: 'tab1',
            tab: 'tab1',
        },
        {
            key: 'tab2',
            tab: 'tab2',
        },
    ];

    const contentList = {
        tab1: <p>content1</p>,
        tab2: <p>content2</p>,
    };

    const tabListNoTitle = [
        {
            key: 'article',
            tab: 'article',
        },
        {
            key: 'app',
            tab: 'app',
        },
        {
            key: 'project',
            tab: 'project',
        },
    ];
    const contentListNoTitle = {
        article: <p>article content</p>,
        app: <p>app content</p>,
        project: <p>project content</p>,
    };

    const [keyState, setKeyState] = useState({
        key: 'tab1',
        noTitleKey: 'app',
    })

    const onTabChange = (key, type) => {
        console.log(key, type);
        setKeyState({ [type]: key });
    };
    return (
        <>
            <div>
                <Card
                    style={{ width: '100%' }}
                    title="Card title"
                    extra={<a href="#">More</a>}
                    tabList={tabList}
                    activeTabKey={keyState.key}
                    onTabChange={key => {
                        onTabChange(key, 'key');
                    }}
                >
                    {contentList[keyState.key]}
                </Card>
                <br />
                <br />
                <Card
                    style={{ width: '100%' }}
                    tabList={tabListNoTitle}
                    activeTabKey={keyState.noTitleKey}
                    tabBarExtraContent={<a href="#">More</a>}
                    onTabChange={key => {
                        onTabChange(key, 'noTitleKey');
                    }}
                >
                    {contentListNoTitle[keyState.noTitleKey]}
                </Card>
            </div>
        </>
    );
};

const mapStateToProps = state => {
    return {
        isLoading: state.isLoading,
        student: state.student
    };
};

export default withRouter(
    connect(
        mapStateToProps,
        { getStudent }
    )(StudentCard)
)


