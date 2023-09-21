import { PageContainer } from '@ant-design/pro-components';
import {
  Breadcrumb,
  Button,
  Space,
  Typography,
  Divider,
  Row,
  Col,
  Avatar,
  Tag,
  Table,
  Spin,
  message,
} from 'antd';
import moment from 'moment';
import 'moment/locale/id';
import React from 'react';
import jsPDF from 'jspdf';
import { Helmet, history, useParams } from '@umijs/max';
import { ArrowLeftOutlined, ExportOutlined } from '@ant-design/icons';
import { getBillingById } from '@/services/nebula/billing';
import BillingInvoice from './components/BillingInvoice';
import BillingModal from './components/BillingModal';
import { toCanvas } from 'html-to-image';
import { converNumberSmNotFixed } from '@/components/config.usage';
import api from '../../../config/axiosConfig';
moment.locale('en');

type Props = {};

const { Column } = Table;

const getBase64FromUrl = async (url: string) => {
  const data = await fetch(url);
  const blob = await data.blob();

  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onloadend = function () {
      const base64data = reader.result;
      resolve(base64data);
    };
  });
};
const rupiahFormat = (value: number) => {
  return value?.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' });
};

const BillingInfo: React.FC<Props> = ({}) => {
  const { id } = useParams();

  const [dataBilling, setDataBilling] = React.useState<any>({});
  const [loading, setLoading] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);
  const [iconImg, setIconImg] = React.useState<any>('');
  const [areaImg, setAreaImg] = React.useState<any>('');

  React.useEffect(() => {
    if (dataBilling.id) {
      const getData = async () => {
        const photo = await getBase64FromUrl(dataBilling?.Nebula_Area?.photo);
        const icon = await getBase64FromUrl(dataBilling?.Nebula_Node_Type?.icon);

        setAreaImg(photo);
        setIconImg(icon);
      };

      getData();
    }
  }, [dataBilling]);

  const getData = async () => {
    setLoading(true);

    const data = await getBillingById(id);

    setLoading(false);

    if (!data.error) {
      setDataBilling(data.data);
    }
  };

  React.useEffect(() => {
    getData();
  }, [id]);

  const handleExport = () => {
    const content = document.getElementById('invoice') ?? document.createElement('div');

    toCanvas(content, {
      pixelRatio: 1,
    })
      .then((canvas) => {
        // console.log(canvas);
        const pdf = new jsPDF('p', 'px', 'a4');

        const imgProps = pdf.getImageProperties(canvas);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

        pdf.addImage(canvas, 'PNG', 0, 0, pdfWidth, pdfHeight);

        pdf.save(`${dataBilling?.invoice}.pdf`);

        // container.remove();
      })
      .catch((err) => {
        console.log(err, 'ERR');
      });
  };

  const handleChangeStatus = async (val: string) => {
    try {
      setLoading(true);
      const w = await api.post('/billing/change/status/' + id, {
        // status: new , unpaid, cancel, close
        status: val,
      });

      setLoading(false);

      if (w.status) {
        getData();
        message.success(w.data.message);
      }
    } catch (error) {}
  };

  return (
    <PageContainer
      childrenContentStyle={{
        minHeight: '70vh',
      }}
      title={
        <Button type="link" onClick={() => history.push('/transaction?tab=billing')} size="large">
          <Space style={{ cursor: 'pointer' }} align="start" size={'large'}>
            <ArrowLeftOutlined
              onClick={() => history.push('/transaction?tab=billing')}
              style={{ marginTop: '12px', fontSize: '24px', color: '#000' }}
            />
            <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
              <Breadcrumb>
                <Breadcrumb.Item>Billing and Invoice</Breadcrumb.Item>
                <Breadcrumb.Item href="#">Invoice</Breadcrumb.Item>
              </Breadcrumb>
              <Typography.Title level={5}>Invoice</Typography.Title>
            </div>
          </Space>
        </Button>
      }
    >
      <Spin spinning={loading}>
        <Helmet>
          <title>AAT IoT Platform | Detail Billing </title>
          <link
            rel="icon"
            href="https://aetratangerang.co.id/wp-content/uploads/2020/07/cropped-favicon-192x192.png"
            type="image/x-icon"
          />
        </Helmet>
        <BillingModal
          title={dataBilling?.Nebula_Area?.area_name}
          open={isOpen}
          onOk={() => {}}
          onCancel={() => {
            setIsOpen(false);
          }}
        />
        <Divider style={{ marginTop: 0 }} />
        <Row justify={'space-between'}>
          <Col>
            <Space>
              <Button onClick={handleExport} icon={<ExportOutlined />}>
                Export Pdf
              </Button>
              {/* <Button icon={<CarryOutOutlined />}>Correction</Button>
            <Button icon={<EditOutlined />}>Edit History</Button> */}
            </Space>
          </Col>
          <Col
            style={{
              display: 'flex',
              gap: '8px',
            }}
          >
            {/* <Button danger icon={<DeleteOutlined />}>
              Cancel Billing
            </Button> */}

            {dataBilling.status == 'new' ? (
              <Button onClick={() => handleChangeStatus('unpaid')}>Unpaid</Button>
            ) : null}
            {dataBilling.status == 'unpaid' ? (
              <Button onClick={() => handleChangeStatus('paid')}>Paid</Button>
            ) : null}
            {dataBilling.status == 'new' || dataBilling.status == 'unpaid' ? (
              <Button danger onClick={() => handleChangeStatus('cancel')}>
                Cancel
              </Button>
            ) : null}
          </Col>
        </Row>
        <Divider style={{ backgroundColor: '#1890FF', height: 2 }} />
        <div id="invoice" style={{ padding: 20 }}>
          <Row
            wrap
            justify={'space-between'}
            style={{
              width: '100%',
            }}
          >
            <Col span={24}>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  gap: '12px',
                }}
              >
                <img width={114} alt={dataBilling?.Nebula_Area?.area_name} src={areaImg} />
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                  }}
                >
                  <Typography.Title
                    level={3}
                    style={{
                      width: 200,
                    }}
                  >
                    {dataBilling?.Nebula_Area?.area_name}
                  </Typography.Title>
                  {/* <Typography
                    style={{
                      color: 'rgba(0, 0, 0, 0.45)',
                      fontSize: '16px',
                    }}
                  >
                    {dataBilling?.Nebula_Area?.email_pic_admin}
                  </Typography> */}
                </div>
              </div>
            </Col>
            {/* <Col>
              <Typography style={{ textAlign: 'right' }}>
                {dataBilling?.Nebula_Area?.billing_address}
              </Typography>
            </Col> */}
          </Row>
          <Row
            justify={'space-between'}
            style={{
              background: 'linear-gradient(285.34deg, #4776E6 0%, #8E54E9 98.2%)',
              borderRadius: '16px',
              margin: '20px 0px',
              padding: 24,
            }}
          >
            <Col>
              <Tag
                color="#E6F7FF"
                style={{
                  color: '#1890FF',
                  borderRadius: 100,
                }}
              >
                Draft Invoice
              </Tag>
              <Typography style={{ fontSize: 16, color: '#ffffff', marginTop: '14px' }}>
                Invoice Number
              </Typography>
              <Typography
                style={{
                  color: '#ffffff',
                  fontWeight: 500,
                }}
              >
                {dataBilling?.invoice}
              </Typography>
              <Space>
                <Typography
                  style={{
                    color: '#ffffff',
                  }}
                >
                  Invoice Date :
                </Typography>
                <Typography
                  style={{
                    color: '#ffffff',
                    fontWeight: 500,
                  }}
                >
                  {moment(dataBilling?.cut_date).format('MMM DD YYYY')}
                </Typography>
              </Space>

              {/* <div>
              <Space>
                <Typography
                  style={{
                    color: '#ffffff',
                  }}
                >
                  Stamp Number :
                </Typography>
                <Typography.Text
                  strong
                  style={{
                    color: '#ffffff',
                    fontWeight: 500,
                  }}
                >
                  {dataBilling?.stamp_number}
                </Typography.Text>
              </Space>
            </div> */}
            </Col>
            <Col style={{ textAlign: 'right' }}>
              <Tag
                color={
                  dataBilling?.status === 'new'
                    ? 'cyan'
                    : dataBilling?.status === 'paid'
                    ? 'green'
                    : dataBilling?.status === 'unpaid'
                    ? 'orange'
                    : dataBilling?.status === 'cancel'
                    ? 'red'
                    : 'cyan'
                }
                style={{
                  // color: '#ffffff',
                  borderRadius: 100,
                  border: '1px solid #ffffff',
                  textTransform: 'capitalize',
                }}
              >
                {dataBilling?.status}
              </Tag>
              <Typography
                style={{
                  fontSize: 16,
                  color: '#FFFFFF',
                }}
              >
                Billed to
              </Typography>
              <Typography
                style={{
                  fontSize: 28,
                  color: '#FFFFFF',
                }}
              >
                {dataBilling?.Nebula_Tenant?.name}
              </Typography>
              <Typography style={{ maxWidth: 312, color: '#ffffff' }}>
                {dataBilling?.Nebula_Tenant?.address}
              </Typography>
            </Col>
          </Row>
          <Typography.Title level={4}>Bill for this month</Typography.Title>
          <Table
            dataSource={[dataBilling, {}, dataBilling, dataBilling, dataBilling]}
            pagination={false}
            size="middle"
            scroll={
              {
                // x: 1200,
              }
            }
          >
            <Column
              title="Month"
              dataIndex="periode"
              key="month"
              render={(text, _, idx: number) => {
                if (idx == 0) {
                  return moment(text).format('MMMM YYYY');
                } else {
                  return '';
                }
              }}
            />
            <Column
              title="Type"
              dataIndex="Nebula_Node_Type"
              key="Nebula_Node_Type"
              render={(text, _, idx: number) => {
                if (idx == 0) {
                  return (
                    <Space>
                      <Avatar src={iconImg} alt="icon-type" />
                      <Typography>{text?.name}</Typography>
                    </Space>
                  );
                } else {
                  return '';
                }
              }}
            />
            <Column
              title="Usage (m3)"
              dataIndex="usage"
              key="usage"
              render={(text, _, idx: number) => {
                if (idx == 0) {
                  return converNumberSmNotFixed(text);
                } else {
                  return '';
                }
              }}
            />

            <Column
              title="Minimum Usage"
              dataIndex="min_usage_threshold"
              key="min_usage_value"
              render={(text, _, idx: number) => {
                if (idx == 0) {
                  return converNumberSmNotFixed(text);
                } else {
                  return '';
                }
              }}
            />
            <Column
              align="right"
              title="Total Usage (m3)"
              dataIndex="billing_usage"
              key="total_usage"
              width={250}
              render={(_, record: any, idx: number) => {
                if (idx == 0) {
                  return converNumberSmNotFixed(_);
                } else if (idx == 1) {
                  return (
                    <Typography
                      style={{
                        textAlign: 'left',
                      }}
                    >
                      Tiered pricing
                    </Typography>
                  );
                } else {
                  const tier = idx - 1;
                  let operator = ' < ';
                  if (tier == 1) {
                    operator = ' < ';
                  } else if (tier == 2) {
                    operator = ' >= ';
                  } else if (tier == 3) {
                    operator = ' >= ';
                  }
                  return (
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      }}
                    >
                      <Typography
                        style={{
                          textAlign: 'right',
                          // width: '30px',
                        }}
                      >
                        {operator}
                        {record?.[`parameter_${tier}`]}
                      </Typography>
                      <Typography>
                        {converNumberSmNotFixed(record?.[`usage_parameter_${tier}`])}
                      </Typography>
                    </div>
                  );
                }
              }}
            />
            <Column
              title="Price"
              dataIndex="price"
              key="price"
              align="right"
              render={(_, record: any, idx: number) => {
                if (idx == 0) {
                  return '';
                } else {
                  const tier = idx - 1;

                  return rupiahFormat(record?.[`price_parameter_${tier}`]);
                }
              }}
            />
            <Column
              title="Total"
              dataIndex="total"
              key="total"
              align="right"
              render={(_, record: any, idx: number) => {
                if (idx == 0) {
                  return '';
                } else {
                  const tier = idx - 1;

                  return rupiahFormat(record?.[`amount_parameter_${tier}`]);
                }
              }}
            />
          </Table>
          <Row gutter={[16, 16]} justify={'space-between'} style={{ marginTop: 40 }}>
            <Col span={24}>
              <BillingInvoice data={dataBilling} />
            </Col>
          </Row>
        </div>
      </Spin>
    </PageContainer>
  );
};

export default BillingInfo;
