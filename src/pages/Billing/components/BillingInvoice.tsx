import { Row, Col, Typography, Divider } from 'antd';

import React from 'react';

type Props = {
  data: any;
};

const BillingInvoice: React.FC<Props> = ({ data }) => {
  const rupiahFormat = (value: number) => {
    return value?.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' });
  };

  return (
    <Row gutter={[16, 16]} style={{ maxWidth: 700, float: 'right' }}>
      <Col span={18}>
        <Typography.Title level={4}>Sub Total</Typography.Title>
      </Col>
      <Col span={6}>
        <Typography.Title level={4} style={{ textAlign: 'right' }}>
          {rupiahFormat(data?.sub_total)}
        </Typography.Title>
      </Col>
      <Col span={8}>
        <Typography>PPN</Typography>
      </Col>
      <Col span={10}>
        <Typography>{data?.ppn}%</Typography>
      </Col>
      <Col span={6} style={{ textAlign: 'right' }}>
        <Typography>{rupiahFormat(data?.ppn_value)} </Typography>
      </Col>

      <Col span={8}>
        <Typography>Materai</Typography>
      </Col>
      <Col span={10}>
        <Typography>{rupiahFormat(data?.materai)}</Typography>
      </Col>
      <Col span={6}>
        <Typography style={{ textAlign: 'right' }}>{rupiahFormat(data?.materai)}</Typography>
      </Col>

      <Col span={18}>
        <Typography>Biaya Transaksi</Typography>
      </Col>
      <Col span={6}>
        <Typography style={{ textAlign: 'right' }}>
          {rupiahFormat(data?.biaya_transaksi)}
        </Typography>
      </Col>
      <Divider style={{ height: 1, backgroundColor: 'black', marginTop: 0 }} />
      <Col span={18}>
        <Typography.Title level={4}>Grand Total</Typography.Title>
      </Col>
      <Col span={6}>
        <Typography.Title level={4} style={{ textAlign: 'right' }}>
          {rupiahFormat(data?.grand_total)}
        </Typography.Title>
      </Col>
    </Row>
  );
};

export default BillingInvoice;
