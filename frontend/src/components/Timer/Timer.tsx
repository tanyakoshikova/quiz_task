import React from "react";
import {Col, Row} from "antd";
import {useMemo} from "react";
import {TimerProps} from "components/Timer/types";
import {Countdown} from "components/Timer/utils";

export const Timer = ({countMinutes, onFinish}: TimerProps) => {

    const TotalMinutes = 1000 * 60 * countMinutes;

    const deadline = useMemo(
        () => Date.now() + TotalMinutes,
        [countMinutes]
    );

    return (
        <Row>
            <Col span={23} style={{marginLeft: '27px'}}>
                <Countdown
                    value={deadline}
                    valueStyle={{color: '#545454', fontSize: '20px'}}
                    onFinish={onFinish}
                    format="mm:ss"
                />
            </Col>
        </Row>
    );
};
